import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Mic, RotateCcw, Square, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { useCurrentLang } from "@/components/LanguagePicker";
import { tr } from "@/lib/i18n";
import { loadMsgs, saveMsgs, clearMsgs, streamChat, type Msg } from "@/lib/conversation";
import { useSpeechRecognition, useSpeechSynthesis } from "@/hooks/useSpeech";

export const Route = createFileRoute("/voice")({
  head: () => ({
    meta: [
      { title: "Voice Mode — ParopkaarAI" },
      { name: "description", content: "Voice-first autism support for low-literacy parents." },
    ],
  }),
  component: VoicePage,
});

function VoicePage() {
  const lang = useCurrentLang();
  const KEY = "paropkaar.voice";
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [busy, setBusy] = useState(false);
  const lastReply = useRef("");

  useEffect(() => { setMsgs(loadMsgs(KEY)); }, []);
  useEffect(() => { saveMsgs(KEY, msgs); }, [msgs]);

  const { speak, stop: stopSpeak, speaking } = useSpeechSynthesis();
  const { listening, start, stop, supported } = useSpeechRecognition(lang, async (text) => {
    await send(text);
  });

  async function send(text: string) {
    if (!text.trim() || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: text, ts: Date.now() }];
    setMsgs(next);
    setBusy(true);
    let acc = "";
    try {
      await streamChat({
        messages: next.map(({ role, content }) => ({ role, content })),
        lang,
        onDelta: (c) => {
          acc += c;
          setMsgs((cur) => {
            const last = cur[cur.length - 1];
            if (last?.role === "assistant" && (last as any)._streaming) {
              return cur.map((m, i) => i === cur.length - 1 ? { ...m, content: acc } : m);
            }
            return [...cur, { role: "assistant", content: acc, ts: Date.now(), _streaming: true } as any];
          });
        },
      });
      setMsgs((cur) => cur.map((m, i) => i === cur.length - 1 ? { ...m, _streaming: undefined } as any : m));
      lastReply.current = acc;
      if (acc) speak(acc, lang);
    } catch (e: any) {
      if (e.message === "RATE_LIMIT") toast.error("Too many requests. Wait a moment.");
      else if (e.message === "PAYMENT_REQUIRED") toast.error("AI credits exhausted.");
      else toast.error("Something went wrong.");
      setMsgs(next);
    } finally {
      setBusy(false);
    }
  }

  const lastAi = [...msgs].reverse().find((m) => m.role === "assistant");

  return (
    <div className="mx-auto flex min-h-[calc(100vh-65px)] max-w-2xl flex-col items-center justify-between px-4 py-8">
      <div className="w-full text-center">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{tr(lang, "voiceMode")}</div>
        <div className="mt-2 text-sm text-muted-foreground">{tr(lang, "tagline")}</div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        {/* Animated orb */}
        <div className="relative flex h-56 w-56 items-center justify-center">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-glow opacity-20 ${speaking || listening ? "animate-ping" : ""}`} />
          <div className={`absolute inset-4 rounded-full bg-gradient-to-br from-primary to-primary-glow opacity-40 ${busy ? "animate-pulse" : ""}`} />
          <button
            onClick={() => {
              if (!supported) { toast.error("Speech recognition not supported on this browser."); return; }
              if (listening) stop(); else { stopSpeak(); start(); }
            }}
            disabled={busy}
            className="relative flex h-32 w-32 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition active:scale-95 disabled:opacity-60"
          >
            {listening ? <Square className="h-12 w-12" /> : <Mic className="h-14 w-14" />}
          </button>
        </div>

        <div className="text-center text-lg font-medium">
          {busy ? tr(lang, "thinking") : listening ? tr(lang, "listening") : tr(lang, "holdToSpeak")}
        </div>

        {lastAi && (
          <div className="max-w-lg rounded-2xl border border-border bg-card p-4 text-center text-base shadow-sm">
            {lastAi.content}
            <div className="mt-2">
              <button
                onClick={() => (speaking ? stopSpeak() : speak(lastAi.content, lang))}
                className="inline-flex items-center gap-1 text-xs text-primary"
              >
                <Volume2 className="h-4 w-4" /> {speaking ? tr(lang, "stop") : tr(lang, "speak")}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => { clearMsgs(KEY); setMsgs([]); stopSpeak(); }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm hover:bg-muted"
        >
          <RotateCcw className="h-4 w-4" /> {tr(lang, "newConv")}
        </button>
      </div>
    </div>
  );
}
