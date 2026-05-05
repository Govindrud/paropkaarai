import { useEffect, useState } from "react";
import { LANGUAGES, getLang, setLang, type LangCode } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguagePicker() {
  const [lang, setL] = useState<LangCode>("en");
  useEffect(() => {
    setL(getLang());
    const h = () => setL(getLang());
    window.addEventListener("paropkaar:lang", h);
    return () => window.removeEventListener("paropkaar:lang", h);
  }, []);
  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm shadow-sm">
      <Languages className="h-4 w-4 text-primary" />
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as LangCode)}
        className="bg-transparent outline-none"
        aria-label="Language"
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>{l.native}</option>
        ))}
      </select>
    </label>
  );
}

export function useCurrentLang(): LangCode {
  const [lang, setL] = useState<LangCode>("en");
  useEffect(() => {
    setL(getLang());
    const h = () => setL(getLang());
    window.addEventListener("paropkaar:lang", h);
    return () => window.removeEventListener("paropkaar:lang", h);
  }, []);
  return lang;
}
