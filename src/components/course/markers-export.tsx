"use client";

import { allMarkers } from "@/lib/course";
import { markersToCsv } from "@/lib/frameio";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function MarkersExport() {
  function download() {
    const csv = markersToCsv(
      allMarkers().map((m) => ({
        timecode: m.timecode,
        hashtag: m.hashtag,
        comment: `${m.lesson} — ${m.comment}`,
      })),
    );
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "frameio-marcadores-gizpay-aula.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Button className="mt-4" onClick={download}>
      <Download />
      Baixar CSV de todas as aulas
    </Button>
  );
}
