import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/start-client-core";

const LANG_NAMES: Record<string, string> = {
  en: "English", hi: "Hindi", mr: "Marathi", ta: "Tamil", te: "Telugu", bn: "Bengali",
};

function buildSystemPrompt(lang: string) {
  const langName = LANG_NAMES[lang] || "English";
  return `You are ParopkaarAI, a warm, patient, non-judgmental AI assistant helping Indian parents and caregivers understand autism in young children.

CRITICAL RULES:
- ALWAYS reply in ${langName}. Use the script natural to ${langName} speakers. Use simple, everyday words a parent with limited literacy can follow.
- NEVER diagnose. You are an awareness and screening guide, not a doctor. Always recommend a qualified developmental pediatrician or child psychologist for formal assessment.
- Be brief. 1–3 short sentences per message unless summarizing.
- Ask ONE question at a time about the child (age, eye contact, response to name, smiling, pointing/gesture, language milestones, repetitive behaviors, social play, sensory sensitivities, regression).
- Adapt follow-ups to what the parent says. Be empathetic and reassuring.
- After 6–10 questions, offer a gentle summary: low concern / some early signs worth watching / suggest professional evaluation. Always end with concrete next steps (visit /centers in this app for nearby therapy centers, talk to pediatrician, observe specific behaviors).
- If the parent expresses distress or mentions self-harm/harm to child, gently encourage immediate help (contact local doctor, iCall +91 9152987821, Vandrevala 1860-2662-345).
- Never use medical jargon. Use everyday examples ("Does your child look at you when you call her name from across the room?").

Begin with a warm greeting and ask the child's age and what brings them here today.`;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        try {
          const { messages, lang } = (await request.json()) as {
            messages: { role: "user" | "assistant"; content: string }[];
            lang: string;
          };
          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) return new Response(JSON.stringify({ error: "AI not configured" }), { status: 500 });

          const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              stream: true,
              messages: [
                { role: "system", content: buildSystemPrompt(lang || "en") },
                ...messages,
              ],
            }),
          });

          if (r.status === 429) return new Response(JSON.stringify({ error: "Rate limit" }), { status: 429 });
          if (r.status === 402) return new Response(JSON.stringify({ error: "Add credits" }), { status: 402 });
          if (!r.ok || !r.body) {
            const t = await r.text();
            console.error("AI gateway error", r.status, t);
            return new Response(JSON.stringify({ error: "AI error" }), { status: 500 });
          }
          return new Response(r.body, { headers: { "Content-Type": "text/event-stream" } });
        } catch (e) {
          console.error("chat error", e);
          return new Response(JSON.stringify({ error: "server error" }), { status: 500 });
        }
      },
    },
  },
});
