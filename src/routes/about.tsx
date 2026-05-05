import { createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, Globe2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ParopkaarAI" },
      { name: "description", content: "Mission, vision and impact goals of ParopkaarAI." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-bold">About ParopkaarAI</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        AI-powered autism support for underserved Indian communities — accessible, reliable, in your language.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Card icon={Heart} title="Our Mission">
          To empower every caregiver with accessible, understandable, and actionable autism support in their own language, anytime, anywhere.
        </Card>
        <Card icon={Globe2} title="Our Vision">
          A world where no family is left behind due to language, location, or lack of information in their journey with autism.
        </Card>
        <Card icon={ShieldCheck} title="Impact Goal">
          Reach 1 Million+ caregivers in 3 years and enable early support for millions of children across India.
        </Card>
      </div>

      <h2 className="mt-12 text-2xl font-bold">How it works</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
        <li>Pick your language at the top.</li>
        <li>Choose Voice mode (low-literacy), Chat, or WhatsApp-style interface.</li>
        <li>The AI gently asks about your child's behavior — one question at a time.</li>
        <li>Get a summary, next steps, and find nearby therapy centers.</li>
      </ol>

      <h2 className="mt-12 text-2xl font-bold">Important disclaimer</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        ParopkaarAI is an awareness and screening guide, not a diagnostic tool. It does not replace evaluation by a qualified developmental pediatrician or child psychologist.
        If you or your child are in distress, contact iCall <b>+91 9152987821</b> or Vandrevala Foundation <b>1860-2662-345</b>.
      </p>
    </div>
  );
}

function Card({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <Icon className="h-6 w-6 text-primary" />
      <div className="mt-3 font-semibold">{title}</div>
      <div className="mt-1 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
