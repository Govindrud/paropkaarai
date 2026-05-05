import { createFileRoute } from "@tanstack/react-router";
import { ChatEngine } from "@/components/ChatEngine";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "Chat — ParopkaarAI" },
      { name: "description", content: "Text-based conversation with the autism support AI." },
    ],
  }),
  component: () => (
    <div className="mx-auto h-[calc(100vh-65px)] max-w-3xl">
      <ChatEngine storageKey="paropkaar.chat" />
    </div>
  ),
});
