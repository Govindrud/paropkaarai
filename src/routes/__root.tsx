import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";
import { Header } from "@/components/Header";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ParopkaarAI — AI Autism Support in Indian Languages" },
      { name: "description", content: "Voice & text AI assistant for autism awareness, screening, and support in Hindi, Marathi, Tamil, Telugu, Bengali and English." },
      { property: "og:title", content: "ParopkaarAI — AI Autism Support in Indian Languages" },
      { name: "twitter:title", content: "ParopkaarAI — AI Autism Support in Indian Languages" },
      { property: "og:description", content: "Voice & text AI assistant for autism awareness, screening, and support in Hindi, Marathi, Tamil, Telugu, Bengali and English." },
      { name: "twitter:description", content: "Voice & text AI assistant for autism awareness, screening, and support in Hindi, Marathi, Tamil, Telugu, Bengali and English." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/2GmERRPY85fG9IM1JMcppFmLxQB3/social-images/social-1779385895508-1001237832.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/2GmERRPY85fG9IM1JMcppFmLxQB3/social-images/social-1779385895508-1001237832.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
        <script
          id="omnidimension-web-widget"
          async
          src="https://omnidim.io/web_widget.js?secret_key=4f6069097b5f9ae910a34d3f61fd8c06"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var T='Paropakar AI Voice Agent';function r(){document.querySelectorAll('body *').forEach(function(el){if(el.childNodes.length===1&&el.childNodes[0].nodeType===3){var t=el.childNodes[0].nodeValue;if(t&&t.indexOf('OmniDimension')!==-1){el.childNodes[0].nodeValue=t.replace(/OmniDimension Agent|OmniDimension/g,T);}}});}new MutationObserver(r).observe(document.body,{childList:true,subtree:true,characterData:true});setInterval(r,1000);})();`,
          }}
        />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Toaster position="top-center" richColors />
    </div>
  );
}
