import { GizpayLanding } from "@/components/gizpay/landing";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Giz Pay — Gestão financeira escolar sem intermediários",
  description:
    "Cobrança automática, inadimplência visível e liquidação direto na conta da escola. Redesign didático do gizpay.com.br.",
};

export default function GizpayPage() {
  return (
    <>
      <Link
        href="/"
        className="fixed top-20 left-4 z-50 hidden rounded-full bg-board px-3 py-1.5 text-[11px] font-medium text-chalk shadow-lg lg:inline-flex"
      >
        ← Aula
      </Link>
      <GizpayLanding />
    </>
  );
}
