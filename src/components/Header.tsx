import { Link } from "@tanstack/react-router";
import { LanguagePicker } from "./LanguagePicker";
import logo from "@/assets/logo.jpg";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ParopkaarAI logo" className="h-10 w-10 rounded-lg object-cover" />
          <div className="leading-tight">
            <div className="font-bold text-foreground">ParopkaarAI</div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Autism Support</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 text-sm md:flex">
          <Link to="/voice" className="rounded-md px-3 py-1.5 hover:bg-muted" activeProps={{ className: "bg-muted font-medium" }}>Voice</Link>
          <Link to="/chat" className="rounded-md px-3 py-1.5 hover:bg-muted" activeProps={{ className: "bg-muted font-medium" }}>Chat</Link>
          <Link to="/whatsapp" className="rounded-md px-3 py-1.5 hover:bg-muted" activeProps={{ className: "bg-muted font-medium" }}>WhatsApp</Link>
          <Link to="/centers" className="rounded-md px-3 py-1.5 hover:bg-muted" activeProps={{ className: "bg-muted font-medium" }}>Centers</Link>
          <Link to="/about" className="rounded-md px-3 py-1.5 hover:bg-muted" activeProps={{ className: "bg-muted font-medium" }}>About</Link>
        </nav>
        <LanguagePicker />
      </div>
    </header>
  );
}
