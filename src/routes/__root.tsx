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
            __html: `(function(){
var T='Paropakar AI Voice Agent';
function getPrimary(){try{var s=getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();return s||'oklch(0.38 0.09 150)';}catch(e){return '#1f6b3a';}}
function getPF(){try{var s=getComputedStyle(document.documentElement).getPropertyValue('--primary-foreground').trim();return s||'#ffffff';}catch(e){return '#ffffff';}}
function paint(){
  var P=getPrimary(),F=getPF();
  var sels=['#omni-minimized-pill','#omni-open-widget-btn','#chat-helper-button-container'];
  sels.forEach(function(sel){
    var el=document.querySelector(sel);if(!el)return;
    el.style.setProperty('background',P,'important');
    el.style.setProperty('background-color',P,'important');
    el.style.setProperty('color',F,'important');
    el.querySelectorAll('*').forEach(function(c){
      if(c.tagName!=='IMG'&&c.tagName!=='SVG'&&c.tagName!=='PATH')c.style.setProperty('color',F,'important');
    });
  });
}
function renameWalk(){
  try{var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null);var node;var changed=false;
  while(node=walker.nextNode()){if(node.nodeValue&&node.nodeValue.indexOf('OmniDimension')!==-1){node.nodeValue=node.nodeValue.replace(/OmniDimension Agent|OmniDimension/g,T);changed=true;}}
  return changed;}catch(e){return false;}
}
var tries=0;
function tick(){tries++;renameWalk();paint();if(tries<40)setTimeout(tick,500);}
setTimeout(tick,800);
new MutationObserver(function(){paint();}).observe(document.documentElement,{childList:true,subtree:true});
})();`,
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
