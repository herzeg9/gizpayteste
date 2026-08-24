const KEY = "gizpay-aula-progress-v1";
const EVENT = "gizpay-aula-progress";

export type Progress = {
  completed: string[];
  lastSlug?: string;
};

export function readProgress(): Progress {
  if (typeof window === "undefined") return { completed: [] };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { completed: [] };
    const parsed = JSON.parse(raw) as Progress;
    return {
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      lastSlug: parsed.lastSlug,
    };
  } catch {
    return { completed: [] };
  }
}

export function writeProgress(next: Progress) {
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(EVENT));
}

export function markComplete(slug: string) {
  const current = readProgress();
  const completed = current.completed.includes(slug)
    ? current.completed
    : [...current.completed, slug];
  writeProgress({ completed, lastSlug: slug });
  return completed;
}

export function markVisited(slug: string) {
  const current = readProgress();
  writeProgress({ ...current, lastSlug: slug });
}

export function subscribeProgress(onStoreChange: () => void) {
  window.addEventListener(EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function progressSnapshot() {
  return JSON.stringify(readProgress());
}

export function progressServerSnapshot() {
  return JSON.stringify({ completed: [] });
}
