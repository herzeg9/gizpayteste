"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useHydrated, usePrefersReducedMotion } from "@/lib/client-hooks";

/**
 * Entrada por rolagem: opacidade + 14px de deslocamento, 0,62s, ease out.
 * Conteúdo visível no SSR e antes da hidratação; animação só após JS ativo.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const ready = useHydrated();
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  const isVisible = visible || reduced;

  return (
    <div
      ref={ref}
      className={cn(ready && "reveal", className)}
      data-visible={isVisible || undefined}
      data-reveal-ready={ready || undefined}
      style={{ animationDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
