/**
 * Frame animation configuration.
 * To enable the scroll animation:
 *   1. Add your JPEG frames to /public/frames/ named: frame-001.jpg, frame-002.jpg, etc.
 *   2. Set FRAMES_AVAILABLE to true and update TOTAL_FRAMES to match your sequence.
 */
export const frameConfig = {
  FRAMES_AVAILABLE: false,       // Set to true when you add frames to /public/frames/
  TOTAL_FRAMES: 88,              // Update this to match your frame count
  FRAME_PATH: '/frames/frame-',  // Base path; appended with padded index + .jpg
  FRAME_EXT: '.jpg',
  /** How many viewport-heights the hero section occupies (scroll room) */
  SCROLL_HEIGHT_VH: 100,
} as const;

export function getFrameSrc(index: number): string {
  const padded = String(index + 1).padStart(3, '0');
  return `${frameConfig.FRAME_PATH}${padded}${frameConfig.FRAME_EXT}`;
}
