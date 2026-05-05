import type { LangCode } from "./i18n";

export type Msg = { role: "user" | "assistant"; content: string; ts: number };

export function loadMsgs(key: string): Msg[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}
export function saveMsgs(key: string, msgs: Msg[]) {
  localStorage.setItem(key, JSON.stringify(msgs));
}
export function clearMsgs(key: string) {
  localStorage.removeItem(key);
}

export async function streamChat({
  messages,
  lang,
  onDelta,
}: {
  messages: { role: "user" | "assistant"; content: string }[];
  lang: LangCode;
  onDelta: (s: string) => void;
}) {
  const resp = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, lang }),
  });
  if (resp.status === 429) throw new Error("RATE_LIMIT");
  if (resp.status === 402) throw new Error("PAYMENT_REQUIRED");
  if (!resp.ok || !resp.body) throw new Error("Failed to start stream");

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let done = false;
  while (!done) {
    const { done: d, value } = await reader.read();
    if (d) break;
    buf += decoder.decode(value, { stream: true });
    let idx;
    while ((idx = buf.indexOf("\n")) !== -1) {
      let line = buf.slice(0, idx);
      buf = buf.slice(idx + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (!line.startsWith("data: ")) continue;
      const json = line.slice(6).trim();
      if (json === "[DONE]") { done = true; break; }
      try {
        const p = JSON.parse(json);
        const c = p.choices?.[0]?.delta?.content;
        if (c) onDelta(c);
      } catch {
        buf = line + "\n" + buf;
        break;
      }
    }
  }
}
