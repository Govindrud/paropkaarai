import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguagePicker } from "./LanguagePicker";
import logo from "@/assets/logo.jpg";

const NAV = [
  { to: "/", label: "Home", exact: true },
  { to: "/voice", label: "Voice" },
  { to: "/chat", label: "Chat" },
  { to: "/whatsapp", label: "WhatsApp" },
  { to: "/awareness", label: "Awareness" },
  { to: "/centers", label: "Centers" },
  { to: "/collaborate", label: "Collaborate" },
  { to: "/about", label: "About" },
] as const;


export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="ParopkaarAI logo" className="h-10 w-10 rounded-lg object-cover" />
          <div className="leading-tight">
            <div className="font-bold text-foreground">ParopkaarAI</div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Autism Support</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-1.5 hover:bg-muted"
              activeProps={{ className: "bg-muted font-medium text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguagePicker />
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background hover:bg-muted lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-4 py-3 text-sm sm:grid-cols-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-muted"
                activeProps={{ className: "bg-muted font-medium text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="col-span-2 pt-2 sm:hidden">
              <LanguagePicker />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
