"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CourseBrand, LessonRail, navItems } from "@/components/course/nav";

export function CourseHeader({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <CourseBrand compact />
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" render={<Link href={item.href} />}>
              {item.label}
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button size="sm" render={<Link href="/gizpay" />}>
            Abrir o site novo
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="md:hidden" />
              }
            >
              <Menu className="size-4" />
              <span className="sr-only">Abrir menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Aulas</SheetTitle>
              </SheetHeader>
              <div
                className="mt-4 space-y-6 px-2"
                onClick={() => setOpen(false)}
              >
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      className="justify-start"
                      render={<Link href={item.href} />}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
                <LessonRail current={current} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
