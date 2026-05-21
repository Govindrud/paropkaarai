import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic, MessageSquare, MessageCircle, MapPin, Heart, ShieldCheck, Sparkles, Eye, Users, Repeat, Ear, MessagesSquare, PuzzleIcon } from "lucide-react";
import { useCurrentLang } from "@/components/LanguagePicker";
import { tr } from "@/lib/i18n";
import logo from "@/assets/logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ParopkaarAI — AI Autism Support in Indian Languages" },
      { name: "description", content: "Free, anonymous AI guide for parents in Hindi, Marathi, Tamil, Telugu, Bengali and English." },
      { property: "og:title", content: "ParopkaarAI" },
      { property: "og:description", content: "Voice & text AI agents for autism support in regional languages." },
    ],
  }),
  component: Home,
});

function Home() {
  const lang = useCurrentLang();
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <img src={logo} alt="ParopkaarAI" className="h-24 w-24 rounded-2xl object-cover shadow-md md:h-32 md:w-32" />
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" /> AI for underserved communities
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
                ParopkaarAI <span className="text-primary">परोपकार</span>
              </h1>
              <p className="mt-3 text-lg text-muted-foreground md:text-xl">{tr(lang, "tagline")}</p>
              <p className="mt-2 text-sm text-muted-foreground">Accessible. Reliable. In your language.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Link to="/voice" className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                <Mic className="h-7 w-7 text-primary" />
                <div className="mt-3 font-semibold">{tr(lang, "voiceMode")}</div>
                <div className="text-xs text-muted-foreground">For low-literacy users</div>
              </Link>
              <Link to="/chat" className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                <MessageSquare className="h-7 w-7 text-primary" />
                <div className="mt-3 font-semibold">{tr(lang, "chatMode")}</div>
                <div className="text-xs text-muted-foreground">Text-first conversation</div>
              </Link>
              <Link to="/whatsapp" className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                <MessageCircle className="h-7 w-7 text-[oklch(0.5_0.13_155)]" />
                <div className="mt-3 font-semibold">{tr(lang, "whatsapp")}</div>
                <div className="text-xs text-muted-foreground">Familiar chat experience</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Heart, title: "Empathetic AI", desc: "Warm, non-judgmental conversations that adapt to your answers." },
            { icon: ShieldCheck, title: "Anonymous & Stigma-free", desc: "No account required. Conversations stay on your device." },
            { icon: MapPin, title: "Real-world next steps", desc: "Find nearby therapy centers and learn what to do next." },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <c.icon className="h-6 w-6 text-primary" />
              <div className="mt-3 font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample conversations */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-4 text-2xl font-bold">Sample conversations</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {SAMPLES.map((s, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">{s.title}</div>
              <div className="mt-3 space-y-2 text-sm">
                {s.lines.map((l, j) => (
                  <div key={j} className={l.from === "ai" ? "text-foreground" : "text-muted-foreground"}>
                    <b>{l.from === "ai" ? "AI" : "Parent"}:</b> {l.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-muted/40 py-8 text-center text-xs text-muted-foreground">
        © ParopkaarAI · Awareness tool, not a diagnosis. Always consult a qualified professional.
      </footer>
    </div>
  );
}

const SAMPLES = [
  {
    title: "Hindi · Rural mother",
    lines: [
      { from: "ai", text: "नमस्ते। आपके बच्चे की उम्र क्या है?" },
      { from: "user", text: "ढाई साल का है, बोलता नहीं है।" },
      { from: "ai", text: "समझ गई। क्या वह नाम लेने पर आपकी ओर देखता है?" },
      { from: "user", text: "कभी-कभी।" },
      { from: "ai", text: "ठीक है। मैं कुछ और सवाल पूछूँगी ताकि बेहतर मदद कर सकूँ।" },
    ],
  },
  {
    title: "Tamil · Urban father",
    lines: [
      { from: "ai", text: "வணக்கம். உங்கள் குழந்தையின் வயது எவ்வளவு?" },
      { from: "user", text: "3 வயது மகன்." },
      { from: "ai", text: "அவர் மற்ற குழந்தைகளுடன் விளையாடுகிறாரா?" },
      { from: "user", text: "தனியாக விளையாடுகிறார்." },
      { from: "ai", text: "புரிகிறது. ஆரம்ப மதிப்பீடு பரிந்துரைக்கிறேன்." },
    ],
  },
  {
    title: "Marathi · Grandmother",
    lines: [
      { from: "ai", text: "नमस्कार. नातवाचे वय किती?" },
      { from: "user", text: "२ वर्षे, डोळ्यांत बघत नाही." },
      { from: "ai", text: "तो आवाजांवर प्रतिक्रिया देतो का?" },
      { from: "user", text: "कमी." },
      { from: "ai", text: "लवकर तज्ज्ञांचा सल्ला घेणे चांगले." },
    ],
  },
];
