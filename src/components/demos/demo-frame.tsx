import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DemoFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[18px] border border-border bg-card p-5 sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function DemoControls({ children }: { children: ReactNode }) {
  return <div className="grid gap-5">{children}</div>;
}

export function DemoLabel({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-mono text-sm tabular-nums text-primary">{value}</span>
    </div>
  );
}

export function DemoStage({
  children,
  className,
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] border",
        tone === "dark"
          ? "border-border bg-background"
          : "border-black/10 bg-[#F6F8F5] text-[#0B1F1A]",
        className,
      )}
    >
      {children}
    </div>
  );
}
