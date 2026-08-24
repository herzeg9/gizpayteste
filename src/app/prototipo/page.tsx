import type { Metadata } from "next";
import { GizPaySite } from "@/components/gizpay-site/gizpay-site";

export const metadata: Metadata = {
  title: "Protótipo — Giz Pay 2.0",
  description:
    "Proposta de repaginamento da home da Giz Pay, construída com o design system e a arquitetura definidos na Trilha 05.",
};

export default function PrototipoPage() {
  return <GizPaySite showCourseBanner />;
}
