import { useCallback, useEffect, useRef, useState } from "react";
import type { LangCode } from "@/lib/i18n";
import { LANGUAGES } from "@/lib/i18n";

type AnyWindow = Window & {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
};

export function useSpeechRecognition(lang: LangCode, onResult: (t: string) => void) {
  const [listening, setListening] = useState(false);
  const recRef = useRef<any>(null);
  const supported = typeof window !== "undefined" &&
    !!((window as AnyWindow).SpeechRecognition || (window as AnyWindow).webkitSpeechRecognition);

  const start = useCallback(() => {
    if (!supported) return;
    const w = window as AnyWindow;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition!;
    const rec = new SR();
    rec.lang = LANGUAGES.find((l) => l.code === lang)?.bcp47 || "en-IN";
    rec.interimResults = false;
    rec.continuous = false;
    rec.onresult = (e: any) => {
      const txt = Array.from(e.results).map((r: any) => r[0].transcript).join(" ");
      if (txt.trim()) onResult(txt.trim());
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    recRef.current = rec;
    setListening(true);
    rec.start();
  }, [lang, onResult, supported]);

  const stop = useCallback(() => {
    recRef.current?.stop();
    setListening(false);
  }, []);

  return { listening, start, stop, supported };
}

export function useSpeechSynthesis() {
  const [speaking, setSpeaking] = useState(false);
  const speak = useCallback((text: string, lang: LangCode) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LANGUAGES.find((l) => l.code === lang)?.bcp47 || "en-IN";
    u.rate = 0.95;
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
  }, []);
  const stop = useCallback(() => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, []);
  useEffect(() => () => window.speechSynthesis?.cancel(), []);
  return { speak, stop, speaking };
}
