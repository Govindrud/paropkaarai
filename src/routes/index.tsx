import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic, MessageSquare, MessageCircle, MapPin, Heart, ShieldCheck, Sparkles, Eye, Users, Repeat, Ear, MessagesSquare, PuzzleIcon, Handshake, Landmark, HeartHandshake } from "lucide-react";
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

      {/* Early signs of autism */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-center gap-2">
            <PuzzleIcon className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Early signs to watch for (by age 2–3)</h2>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            These are awareness cues — not a diagnosis. If several feel familiar, a professional screening can help.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { icon: Eye, title: "Limited eye contact", desc: "Rarely looks at you when you talk, smile, or call." },
              { icon: Ear, title: "No response to name", desc: "Doesn't turn or respond when their name is called." },
              { icon: MessagesSquare, title: "Delayed speech", desc: "Few or no words by age 2; doesn't combine words by 3." },
              { icon: Users, title: "Plays alone", desc: "Avoids playing with other children; no pretend play." },
              { icon: Repeat, title: "Repetitive actions", desc: "Hand-flapping, rocking, lining up toys, repeating phrases." },
              { icon: Sparkles, title: "Sensory sensitivity", desc: "Strong reaction to sounds, lights, textures, or change in routine." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background/60 p-4">
                <s.icon className="h-5 w-5 text-primary" />
                <div className="mt-2 font-semibold text-sm">{s.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/chat" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-glow">Start a gentle screening</Link>
            <Link to="/centers" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted">Find nearby therapy centers</Link>
          </div>
        </div>
      </section>

      {/* Partners highlight */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-center gap-2">
            <Handshake className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Collaborate with us</h2>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            ParopkaarAI is designed for scale through partnership. We work with NGOs, government health programs, and mission-aligned organizations.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { icon: HeartHandshake, title: "NGOs", desc: "Field distribution, therapy referrals, and community trust-building." },
              { icon: Landmark, title: "Government", desc: "RBSK, Ayushman Bharat, NHM — embed AI screening in public health." },
              { icon: Handshake, title: "Corporates & Academia", desc: "CSR funding, tech partnerships, and clinical validation research." },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background/60 p-5">
                <p.icon className="h-5 w-5 text-primary" />
                <div className="mt-2 font-semibold text-sm">{p.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/collaborate" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-glow">
              Explore collaboration <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sample conversations */}
      <section className="mx-auto max-w-6xl px-4 py-12">
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
