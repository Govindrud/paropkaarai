import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Mic, Send, RotateCcw, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { useCurrentLang } from "@/components/LanguagePicker";
import { tr } from "@/lib/i18n";
import { loadMsgs, saveMsgs, clearMsgs, streamChat, type Msg } from "@/lib/conversation";
import { useSpeechRecognition, useSpeechSynthesis } from "@/hooks/useSpeech";

type Props = { storageKey: string; autoSpeak?: boolean; theme?: "default" | "whatsapp" };

export function ChatEngine({ storageKey, autoSpeak = false, theme = "default" }: Props) {
  const lang = useCurrentLang();
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMsgs(loadMsgs(storageKey)); }, [storageKey]);
  useEffect(() => { saveMsgs(storageKey, msgs); }, [msgs, storageKey]);
  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); }, [msgs, busy]);

  const { speak, stop, speaking } = useSpeechSynthesis();
  const { listening, start: startRec, stop: stopRec, supported: recSupported } = useSpeechRecognition(lang, (txt) => {
    setInput(txt);
    setTimeout(() => send(txt), 50);
  });

  async function send(textArg?: string) {
    const text = (textArg ?? input).trim();
    if (!text || busy) return;
    setInput("");
    const next: Msg[] = [...msgs, { role: "user", content: text, ts: Date.now() }];
    setMsgs(next);
    setBusy(true);
    let acc = "";
    try {
      await streamChat({
        messages: next.map(({ role, content }) => ({ role, content })),
        lang,
        onDelta: (chunk) => {
          acc += chunk;
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
      if (autoSpeak && acc) speak(acc, lang);
    } catch (e: any) {
      if (e.message === "RATE_LIMIT") toast.error("Too many requests. Please wait a moment.");
      else if (e.message === "PAYMENT_REQUIRED") toast.error("AI credits exhausted. Please add credits in Settings.");
      else toast.error("Something went wrong. Please try again.");
      setMsgs(next);
    } finally {
      setBusy(false);
    }
  }

  const isWA = theme === "whatsapp";

  return (
    <div className={`flex h-full flex-col ${isWA ? "bg-whatsapp-bg" : ""}`}>
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
        {msgs.length === 0 && (
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-5 text-center text-sm text-muted-foreground">
            {tr(lang, "tagline")}
            <div className="mt-3 text-xs">{tr(lang, "disclaimer")}</div>
          </div>
        )}
        <div className="mx-auto flex max-w-2xl flex-col gap-3">
          {msgs.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? isWA
                      ? "rounded-tr-sm bg-whatsapp-bubble text-foreground"
                      : "rounded-tr-sm bg-primary text-primary-foreground"
                    : isWA
                    ? "rounded-tl-sm bg-card text-foreground"
                    : "rounded-tl-sm bg-card text-card-foreground"
                }`}
              >
                <div className="prose prose-sm max-w-none [&_p]:my-1">
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                </div>
                {m.role === "assistant" && (
                  <button
                    onClick={() => (speaking ? stop() : speak(m.content, lang))}
                    className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground"
                  >
                    <Volume2 className="h-3 w-3" /> {speaking ? tr(lang, "stop") : tr(lang, "speak")}
                  </button>
                )}
              </div>
            </div>
          ))}
          {busy && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-card px-4 py-2 text-xs text-muted-foreground shadow-sm">
                {tr(lang, "thinking")}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-border bg-background/80 p-3 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-end gap-2">
          <button
            onClick={() => { clearMsgs(storageKey); setMsgs([]); }}
            className="rounded-full p-2 text-muted-foreground hover:bg-muted"
            title={tr(lang, "newConv")}
          >
            <RotateCcw className="h-5 w-5" />
          </button>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
            placeholder={tr(lang, "typeMsg")}
            rows={1}
            className="flex-1 resize-none rounded-2xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          {recSupported && (
            <button
              onClick={() => (listening ? stopRec() : startRec())}
              className={`rounded-full p-2.5 text-primary-foreground transition ${listening ? "bg-destructive animate-pulse" : "bg-primary hover:bg-primary-glow"}`}
              title={tr(lang, "holdToSpeak")}
            >
              <Mic className="h-5 w-5" />
            </button>
          )}
          <button
            onClick={() => send()}
            disabled={!input.trim() || busy}
            className={`rounded-full p-2.5 text-primary-foreground disabled:opacity-50 ${isWA ? "bg-whatsapp" : "bg-primary hover:bg-primary-glow"}`}
            title={tr(lang, "send")}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
