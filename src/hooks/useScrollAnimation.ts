'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { frameConfig, getFrameSrc } from '@/lib/frameConfig';

interface UseScrollAnimationReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  loadProgress: number;
  isReady: boolean;
  scrollProgress: number;
}

export function useScrollAnimation(): UseScrollAnimationReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const tickingRef = useRef(false);

  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = framesRef.current[index];
    if (!img?.complete || img.naturalWidth === 0) return;

    // Cover scaling
    const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const scaledW = img.naturalWidth * scale;
    const scaledH = img.naturalHeight * scale;
    const offsetX = (canvas.width - scaledW) / 2;
    const offsetY = (canvas.height - scaledH) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, scaledW, scaledH);
  }, []);

  // Preload frames in phases
  useEffect(() => {
    if (!frameConfig.FRAMES_AVAILABLE) return;

    const total = frameConfig.TOTAL_FRAMES;
    const images: HTMLImageElement[] = new Array(total);
    framesRef.current = images;
    let loaded = 0;

    const onLoad = (index: number) => {
      loaded++;
      setLoadProgress(loaded / total);
      if (loaded === 1) {
        // First frame ready — show it immediately
        drawFrame(0);
      }
      if (loaded >= Math.ceil(total * 0.15)) {
        setIsReady(true);
      }
    };

    // Phase 1: Load first 15% immediately
    const phase1End = Math.ceil(total * 0.15);
    for (let i = 0; i < phase1End; i++) {
      const img = new Image();
      img.onload = () => onLoad(i);
      img.src = getFrameSrc(i);
      images[i] = img;
    }

    // Phase 2: Load the rest
    let phase2Index = phase1End;
    const loadNext = () => {
      if (phase2Index >= total) return;
      const img = new Image();
      const idx = phase2Index++;
      img.onload = () => {
        onLoad(idx);
        loadNext();
      };
      img.src = getFrameSrc(idx);
      images[idx] = img;
    };

    // Start 8 parallel loaders for phase 2
    const parallelLoaders = Math.min(8, total - phase1End);
    for (let p = 0; p < parallelLoaders; p++) {
      loadNext();
    }
  }, [drawFrame]);

  // Scroll handler
  useEffect(() => {
    if (!frameConfig.FRAMES_AVAILABLE) return;

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        tickingRef.current = false;
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollRange = container.offsetHeight - window.innerHeight;
        const progress = Math.max(0, Math.min(1, -rect.top / scrollRange));
        setScrollProgress(progress);

        const frameIndex = Math.round(progress * (frameConfig.TOTAL_FRAMES - 1));
        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [drawFrame]);

  // Canvas resize handler
  useEffect(() => {
    if (!frameConfig.FRAMES_AVAILABLE) return;

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);
      drawFrame(currentFrameRef.current);
    };

    const ro = new ResizeObserver(handleResize);
    if (canvasRef.current) ro.observe(canvasRef.current);
    handleResize();

    return () => ro.disconnect();
  }, [drawFrame]);

  return { containerRef, canvasRef, loadProgress, isReady, scrollProgress };
}
