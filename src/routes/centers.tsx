import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CENTERS, haversine, type Center } from "@/data/centers";
import { MapPin, Phone, Navigation } from "lucide-react";

function telHref(phone: string) {
  return `tel:${phone.split("/")[0].replace(/[^+\d]/g, "")}`;
}

export const Route = createFileRoute("/centers")({
  head: () => ({
    meta: [
      { title: "Therapy Centers — ParopkaarAI" },
      { name: "description", content: "Find autism therapy and developmental centers across India." },
    ],
  }),
  component: CentersPage,
});

function CentersPage() {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [denied, setDenied] = useState(false);
  const [city, setCity] = useState<string>("All");

  useEffect(() => {
    if (!("geolocation" in navigator)) { setDenied(true); return; }
    navigator.geolocation.getCurrentPosition(
      (p) => setCoords({ lat: p.coords.latitude, lng: p.coords.longitude }),
      () => setDenied(true),
      { timeout: 8000 }
    );
  }, []);

  const cities = useMemo(() => ["All", ...Array.from(new Set(CENTERS.map((c) => c.city))).sort()], []);

  const list: (Center & { dist?: number })[] = useMemo(() => {
    let arr: (Center & { dist?: number })[] = CENTERS.map((c) => ({ ...c }));
    if (coords) arr = arr.map((c) => ({ ...c, dist: haversine(coords, c) }));
    if (city !== "All") arr = arr.filter((c) => c.city === city);
    arr.sort((a, b) => (a.dist ?? 9e9) - (b.dist ?? 9e9) || a.name.localeCompare(b.name));
    return arr;
  }, [coords, city]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 pb-28">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold">Therapy Centers</h1>
          <p className="text-sm text-muted-foreground">
            {coords ? "Sorted by distance from you." : denied ? "Location unavailable — filter by city below." : "Detecting your location…"} Public contact details were checked against official organization pages where available.
          </p>
        </div>
        <label className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm">
          City:
          <select value={city} onChange={(e) => setCity(e.target.value)} className="bg-transparent outline-none">
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {list.map((c) => (
          <div key={c.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="font-semibold">{c.name}</div>
                <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 shrink-0" /> <span>{c.address}, {c.city}</span>
                </div>
              </div>
              {c.dist != null && (
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {c.dist < 1 ? `${Math.round(c.dist * 1000)} m` : `${c.dist.toFixed(1)} km`}
                </span>
              )}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {c.specialties.map((s) => (
                <span key={s} className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-secondary-foreground">{s}</span>
              ))}
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Languages: {c.languages.join(", ")}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={telHref(c.phone)} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                <Phone className="h-3.5 w-3.5" /> {c.phone}
              </a>
              <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${c.lat},${c.lng}`} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs hover:bg-muted">
                <Navigation className="h-3.5 w-3.5" /> Directions
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Directory details can change. Please call or check the linked map before visiting.</p>
    </div>
  );
}
