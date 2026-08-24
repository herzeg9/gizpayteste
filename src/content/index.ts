import { track1 } from "./track-1-ux";
import { track2 } from "./track-2-ui";
import { track3 } from "./track-3-web";
import { track4 } from "./track-4-framer";
import { track5 } from "./track-5-projeto";
import type { Lesson, Track } from "./types";

export const tracks: Track[] = [track1, track2, track3, track4, track5];

export type LessonWithTrack = Lesson & { track: Track };

export const allLessons: LessonWithTrack[] = tracks.flatMap((track) =>
  track.lessons.map((lesson) => ({ ...lesson, track })),
);

export function getLesson(slug: string): LessonWithTrack | undefined {
  return allLessons.find((lesson) => lesson.slug === slug);
}

export function getLessonNeighbours(slug: string) {
  const index = allLessons.findIndex((lesson) => lesson.slug === slug);
  return {
    previous: index > 0 ? allLessons[index - 1] : undefined,
    next: index >= 0 && index < allLessons.length - 1 ? allLessons[index + 1] : undefined,
    index,
  };
}

export const totalMinutes = allLessons.reduce((sum, lesson) => sum + lesson.minutes, 0);
export const totalLessons = allLessons.length;

export type { Block, DemoId, Lesson, Track } from "./types";
