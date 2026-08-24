import { CourseHeader } from "@/components/course/header";
import { LessonRail } from "@/components/course/nav";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col chalkboard-grid">
      <CourseHeader />
      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-8 px-4 py-8 sm:px-6">
        <aside className="hidden w-64 shrink-0 lg:block">
          <p className="mb-3 px-3 text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
            Trilha
          </p>
          <LessonRail />
        </aside>
        <div className="min-w-0 flex-1 pb-16">{children}</div>
      </div>
    </div>
  );
}
