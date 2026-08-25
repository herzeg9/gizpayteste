export const NAV_OFFSET = 72;
export const SMOOTH_SCROLL_DURATION_MS = 1000;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function smoothScrollToHash(
  hash: string,
  options?: { offset?: number; duration?: number },
) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  const offset = options?.offset ?? NAV_OFFSET;
  const duration = options?.duration ?? SMOOTH_SCROLL_DURATION_MS;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    const top =
      target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "auto" });
    return true;
  }

  const startY = window.scrollY;
  const endY =
    target.getBoundingClientRect().top + window.scrollY - offset;
  const distance = endY - startY;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
  return true;
}
