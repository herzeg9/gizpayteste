"use client";

import { useState } from "react";
import { ChatWidget } from "@/components/gizpay-site/v11/chat-widget";
import { FaqV11 } from "@/components/gizpay-site/v11/faq-v11";

export function SiteInteractive() {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <>
      <FaqV11 onOpenChat={() => setChatOpen(true)} />
      <ChatWidget open={chatOpen} onOpenChange={setChatOpen} />
    </>
  );
}
