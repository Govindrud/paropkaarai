import { createFileRoute } from "@tanstack/react-router";
import { ChatEngine } from "@/components/ChatEngine";
import { Phone, Video, MoreVertical } from "lucide-react";

export const Route = createFileRoute("/whatsapp")({
  head: () => ({
    meta: [
      { title: "WhatsApp Demo — ParopkaarAI" },
      { name: "description", content: "Familiar WhatsApp-style chat experience for autism support." },
    ],
  }),
  component: WhatsappPage,
});

function WhatsappPage() {
  return (
    <div className="mx-auto flex h-[calc(100vh-65px)] max-w-md flex-col border-x border-border">
      <div className="flex items-center gap-3 bg-whatsapp px-4 py-3 text-primary-foreground">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-bold">P</div>
        <div className="flex-1">
          <div className="font-semibold leading-tight">ParopkaarAI</div>
          <div className="text-xs opacity-90">online</div>
        </div>
        <Video className="h-5 w-5" />
        <Phone className="h-5 w-5" />
        <MoreVertical className="h-5 w-5" />
      </div>
      <div className="flex-1 overflow-hidden">
        <ChatEngine storageKey="paropkaar.whatsapp" theme="whatsapp" />
      </div>
    </div>
  );
}
