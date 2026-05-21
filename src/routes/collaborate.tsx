import { createFileRoute } from "@tanstack/react-router";
import { Heart, Building2, Landmark, Handshake, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/collaborate")({
  head: () => ({
    meta: [
      { title: "Collaborate — ParopkaarAI" },
      { name: "description", content: "Partner with ParopkaarAI — NGOs, Government bodies, and industry partners for autism support." },
    ],
  }),
  component: CollaboratePage,
});

function CollaboratePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Let's build this together
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          ParopkaarAI is designed for impact at scale. We actively seek collaboration with NGOs, government programs, and mission-aligned partners to bring AI-powered autism support to every corner of India.
        </p>
      </div>

      {/* NGO Section */}
      <section className="mt-16">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">NGO Collaboration</h2>
              <p className="text-sm text-muted-foreground">Grassroots reach, local trust, and community expertise</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground">How NGOs can partner</h3>
              <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                {[
                  "Distribute ParopkaarAI via your field workers, Anganwadi centers, and community health networks",
                  "Co-design culturally relevant screening questions and local-language content",
                  "Refer families from the app to your therapy, parent-training, and respite-care services",
                  "Host joint awareness camps in rural and semi-urban areas where stigma is highest",
                  "Share anonymized insights to improve the AI for underserved dialects and communities",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <h3 className="font-semibold text-foreground">Target NGO Partners</h3>
              <div className="mt-4 space-y-3">
                {[
                  { name: "Action For Autism (AFA)", role: "Clinical training & parent support model" },
                  { name: "Sangath", role: "Community health integration & field research" },
                  { name: "Om Foundation / local disability NGOs", role: "Regional distribution & therapy referral" },
                  { name: "Nayi Disha / Udavum Karangal", role: "Parent community & resource hub linkage" },
                  { name: "Early intervention NGOs", role: "Therapy center directory & practitioner network" },
                ].map((ngo, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{ngo.name}</div>
                      <div className="text-xs text-muted-foreground">{ngo.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Section */}
      <section className="mt-10">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20">
              <Landmark className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Government Collaboration</h2>
              <p className="text-sm text-muted-foreground">Aligning with national health & disability missions</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground">Alignment with existing programs</h3>
              <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                {[
                  "RBSK (Rashtriya Bal Swasthya Karyakram) — embed AI screening at 0–3 year health checkups",
                  "Ayushman Bharat / PM-JAY — route flagged families to covered therapy centers",
                  "NHM (National Health Mission) — train ASHA workers to use voice mode for low-literacy settings",
                  "RPwD Act & UDID — help families understand registration, benefits, and entitlements",
                  "National Trust (Gharaunda, Niramaya) — direct eligible families to scheme enrollment",
                  "State Disability Commissions — feed anonymized demand data for resource planning",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <h3 className="font-semibold text-foreground">What government gets</h3>
              <div className="mt-4 grid gap-3">
                {[
                  { title: "Zero-cost deployment", desc: "No IT infrastructure needed — runs on any phone with a browser." },
                  { title: "Multilingual & voice-first", desc: "Reaches caregivers who cannot read or write." },
                  { title: "PII-free analytics", desc: "Aggregated insights on demand patterns without exposing individuals." },
                  { title: "Integration-ready", desc: "APIs to push referrals into existing HMIS / NIC systems." },
                ].map((gov, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-xs font-bold text-accent-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{gov.title}</div>
                      <div className="text-xs text-muted-foreground">{gov.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="mt-10">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Handshake className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Corporate & Academic Partners</h2>
              <p className="text-sm text-muted-foreground">CSR, technology, and research collaborations</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <PartnerCard
              icon={Building2}
              title="CSR & Philanthropy"
              items={[
                "Fund free access for 10,000+ families in your priority districts",
                "Co-brand district-level awareness campaigns",
                "Support field testing and ASHA training programs",
                "Sponsor Indic ASR/TTS model improvements for your regional language",
              ]}
            />
            <PartnerCard
              icon={Building2}
              title="Technology Partners"
              items={[
                "Indic LLM providers (Sarvam-1, OpenHathi, Bhashini)",
                "Speech-to-text for low-resource Indian languages",
                "WhatsApp BSP / telecom integration for scale rollout",
                "Cloud infrastructure for zero-downtime health apps",
              ]}
            />
            <PartnerCard
              icon={Building2}
              title="Research & Academia"
              items={[
                "NIMHANS, AIIMS, RCI — validate screening accuracy",
                "IITs / IISc — publish on AI for health equity",
                "Public health schools — measure caregiver behavior change",
                "Ethics boards — review safety guardrails & bias audits",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="mt-10 rounded-3xl bg-primary p-8 text-center text-primary-foreground md:p-12">
        <h2 className="text-2xl font-bold md:text-3xl">Ready to collaborate?</h2>
        <p className="mx-auto mt-3 max-w-xl">
          Whether you represent an NGO, a government health department, or a corporate CSR team — we'd love to hear how we can work together.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="mailto:collaborate@paropkaarai.org" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary hover:bg-white">
            <Mail className="h-4 w-4" /> collaborate@paropkaarai.org
          </a>
          <a href="tel:+919152987821" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold hover:bg-primary-foreground/10">
            <Phone className="h-4 w-4" /> +91 91529 87821
          </a>
        </div>
        <div className="mt-4 flex items-center justify-center gap-1.5 text-sm opacity-80">
          <MapPin className="h-3.5 w-3.5" />
          <span>Currently piloting in Maharashtra, Tamil Nadu & Karnataka</span>
        </div>
      </section>
    </div>
  );
}

function PartnerCard({ icon: Icon, title, items }: { icon: typeof Building2; title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-5">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="mt-2 font-semibold text-sm">{title}</h3>
      <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
