import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Baby,
  HeartPulse,
  Apple,
  Pill,
  Cigarette,
  Sun,
  Brain,
  Ear,
  Eye,
  MessagesSquare,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Activity,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/awareness")({
  head: () => ({
    meta: [
      { title: "Autism Awareness — Early Signs & Pregnancy Care | ParopkaarAI" },
      {
        name: "description",
        content:
          "Learn early signs of autism and evidence-informed precautions during pregnancy. Compassionate, accessible awareness for every Indian family.",
      },
      { property: "og:title", content: "Autism Awareness — ParopkaarAI" },
      {
        property: "og:description",
        content:
          "Early signs of autism and pregnancy precautions, explained simply with calming visuals.",
      },
    ],
  }),
  component: AwarenessPage,
});

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function AwarenessPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/15" />
        {/* Floating soft blobs */}
        <div className="pointer-events-none absolute -left-16 top-10 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div
          className="pointer-events-none absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Awareness · Early action saves futures
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
              Understanding Autism, <span className="text-primary">Together</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Autism is not an illness — it is a different way the brain grows. With early
              awareness, gentle care during pregnancy, and timely support, every child can
              thrive.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#early-signs"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                Early signs <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#pregnancy"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                Pregnancy care
              </a>
            </div>
          </Reveal>

          {/* Animated brain illustration */}
          <Reveal delay={420}>
            <div className="relative mt-12 flex items-center justify-center">
              <div className="absolute h-56 w-56 animate-ping rounded-full bg-primary/10" style={{ animationDuration: "3s" }} />
              <div className="absolute h-40 w-40 animate-pulse rounded-full bg-accent/20" />
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-xl">
                <Brain className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[
            { n: "1 in 100", l: "children worldwide (WHO)" },
            { n: "< 3 yrs", l: "ideal age for early signs" },
            { n: "80%", l: "improve with early therapy" },
            { n: "100%", l: "deserve love & support" },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pregnancy precautions */}
      <section id="pregnancy" className="relative mx-auto max-w-5xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <HeartPulse className="h-4 w-4" /> Pregnancy Care
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Gentle precautions during the 9 months
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Healthy pregnancies cannot prevent autism entirely, but evidence shows these habits
            support healthy brain development for your baby.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              icon: Apple,
              title: "Nutrition & Folic Acid",
              text:
                "Take folic acid (400–800 mcg) from before conception through the first trimester. Eat green leafy vegetables, dals, fruits and whole grains.",
              color: "from-emerald-400 to-teal-500",
            },
            {
              icon: Stethoscope,
              title: "Regular prenatal checkups",
              text:
                "Attend all ANC visits. Manage diabetes, thyroid and high blood pressure with your doctor — these affect baby's brain growth.",
              color: "from-sky-400 to-indigo-500",
            },
            {
              icon: Pill,
              title: "Safe medication only",
              text:
                "Never self-medicate. Avoid valproate and unprescribed drugs. Always tell your doctor you are pregnant before any prescription.",
              color: "from-rose-400 to-pink-500",
            },
            {
              icon: Cigarette,
              title: "No alcohol, smoking or tobacco",
              text:
                "Avoid alcohol, cigarettes, gutka and second-hand smoke. These are linked to neurodevelopmental risks.",
              color: "from-orange-400 to-red-500",
            },
            {
              icon: Sun,
              title: "Vitamin D & sunlight",
              text:
                "Get 15–20 minutes of morning sunlight and ask your doctor about Vitamin D supplements. Deficiency is very common in India.",
              color: "from-amber-400 to-yellow-500",
            },
            {
              icon: ShieldCheck,
              title: "Avoid infections & toxins",
              text:
                "Take vaccines your doctor recommends (flu, Tdap). Avoid pesticides, lead paint, and untreated water.",
              color: "from-violet-400 to-purple-500",
            },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} opacity-10 transition group-hover:opacity-20`}
                />
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-md`}
                >
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trimester timeline */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A baby's brain journey
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              The brain forms faster than any other organ. Here is what is happening — and how
              you can help.
            </p>
          </Reveal>

          <div className="relative mt-12">
            {/* timeline line */}
            <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:block" />
            <div className="space-y-8">
              {[
                {
                  t: "Trimester 1 · Weeks 1–12",
                  h: "Neural tube forms",
                  d: "Folic acid is most critical now. Avoid alcohol, X-rays and infections.",
                },
                {
                  t: "Trimester 2 · Weeks 13–27",
                  h: "Brain cells multiply rapidly",
                  d: "Eat iron-rich foods. Stay hydrated. Gentle walks and prenatal yoga help.",
                },
                {
                  t: "Trimester 3 · Weeks 28–40",
                  h: "Connections wire up",
                  d: "Omega-3 (DHA), sleep, calm environment. Talk and sing — baby can hear you.",
                },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 120}>
                  <div className="relative md:pl-16">
                    <div className="absolute left-2 top-2 hidden h-6 w-6 rounded-full border-4 border-background bg-primary md:block" />
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                      <div className="text-xs font-medium uppercase tracking-wide text-primary">
                        {s.t}
                      </div>
                      <div className="mt-1 text-xl font-semibold text-foreground">{s.h}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Early signs */}
      <section id="early-signs" className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <Baby className="h-4 w-4" /> Early Signs
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Signs to notice before age 3
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every child grows at their own pace. But if you notice several of these, please
            speak to a pediatrician early — earlier support means better outcomes.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Eye, t: "Little or no eye contact", d: "Avoids looking at faces, even parents." },
            { icon: Ear, t: "Doesn't respond to name", d: "By 12 months, baby usually turns when called." },
            { icon: MessagesSquare, t: "Delayed speech", d: "No babbling by 12m, no words by 16m." },
            { icon: Activity, t: "Repetitive movements", d: "Hand-flapping, rocking, lining up toys." },
            { icon: AlertCircle, t: "Strong sensory reactions", d: "Very upset by sounds, lights, textures." },
            { icon: Brain, t: "Plays alone", d: "Little interest in other children or pretend play." },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{s.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Myths vs facts */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Myths vs. Facts
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { m: "Vaccines cause autism", f: "False. Decades of research confirm vaccines do NOT cause autism." },
              { m: "Bad parenting causes autism", f: "False. Autism is a neurological difference, not a result of upbringing." },
              { m: "Autistic children cannot learn", f: "False. With right support, they learn, work, love and lead." },
              { m: "Autism can be cured by diet", f: "There is no cure. Therapy, acceptance and structure help most." },
            ].map((x, i) => (
              <Reveal key={x.m} delay={i * 100}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <div className="border-b border-border bg-destructive/10 px-5 py-3 text-sm font-semibold text-destructive">
                    Myth: {x.m}
                  </div>
                  <div className="px-5 py-4 text-sm text-foreground">
                    <span className="font-semibold text-primary">Fact:</span> {x.f}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Worried about your child? You are not alone.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Talk to ParopkaarAI in your language — voice or chat — and find nearby support
            centers. Free. Private. Compassionate.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/voice"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition hover:opacity-90"
            >
              Talk to Voice Agent <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/centers"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              Find a Center
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
