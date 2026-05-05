
# ParopkaarAI — Plan

An AI-powered autism support assistant in 5 Indian languages with voice-first and chat modes, plus a WhatsApp-style simulation. Anonymous, browser-local sessions.

## Pages (routes)

- `/` — Landing: brand intro (from your Business Model Canvas), language picker, three entry buttons → Voice mode, Chat mode, WhatsApp simulation.
- `/voice` — Voice-first interface for low-literacy users. Big mic button, agent speaks questions aloud, transcribes parent's spoken answers, replies in selected language with voice.
- `/chat` — Urban chat interface. Text-first conversation with optional mic input; markdown-rendered responses; quick-reply chips for common answers.
- `/whatsapp` — WhatsApp-style simulated UI (green header, chat bubbles, typing indicator, voice-note bubbles) running the same backend.
- `/centers` — Nearby therapy centers. Asks for browser geolocation, sorts mock centers by distance, shows list with phone/address/specialty; filter by city fallback if location denied.
- `/about` — Mission, vision, and disclaimer that this is an awareness tool, not a diagnosis.

Shared header with language switcher (Hindi, Marathi, Tamil, Telugu, Bengali, English) persisted in localStorage.

## Conversation behavior

- **Free-form AI-led screening**: a system prompt instructs the assistant to act as a warm, non-judgmental autism-awareness guide. It asks one question at a time about the child (age, eye contact, response to name, language milestones, repetitive behaviors, social play, sensory sensitivities, etc.), adapts follow-ups to answers, and after enough signal produces a gentle summary with risk indication (low / some early signs / suggest professional evaluation) and next-step suggestions.
- Always replies in the user's selected language.
- Strong safety guardrails: never diagnose, always recommend a qualified professional, surface emergency guidance if distress is mentioned.
- Conversation history kept in `localStorage` per mode; "Start new conversation" button clears it.

## Voice & chat mechanics

- **Text chat**: streaming responses rendered with markdown.
- **Voice mode**: hold-to-talk mic → speech-to-text → send → AI reply → text-to-speech auto-plays. Visual orb animates while AI is speaking.
- **WhatsApp sim**: same chat engine, styled as WhatsApp; voice messages render as audio bubbles with waveform + duration.

## Therapy centers

- Browser geolocation prompt; on grant, compute haversine distance from a curated mock list (~20 centers across Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Hyderabad, Pune, plus tier-2 cities).
- Each center: name, city, address, phone, specialties (e.g., "Speech therapy", "ABA", "Occupational therapy"), languages spoken.
- Fallback: city dropdown if location denied.

## Sample conversations

A "See sample conversations" section on the landing page showing 3 pre-written transcripts (Hindi rural mom, Tamil urban dad, Marathi grandmother) so reviewers can see flow without typing.

## Visual design

Warm, trustworthy palette inspired by your canvas: deep indigo primary, soft teal accent, off-white background, generous spacing, large legible type (important for low-literacy users — voice mode uses extra-large icons and minimal text). Lucide icons throughout. Smooth transitions, no harsh shadows.

## Technical notes

- **AI**: Lovable AI Gateway (`google/gemini-3-flash-preview`) via an edge function with streaming SSE. System prompt is server-side and includes the selected language + screening guidance. Handles 429/402 with friendly toasts.
- **STT**: ElevenLabs realtime Scribe (`scribe_v2_realtime`) via single-use token edge function for voice input in voice mode and WhatsApp sim.
- **TTS**: ElevenLabs TTS edge function (`eleven_multilingual_v2`) returning MP3 stream for AI replies in voice mode.
- **Storage**: `localStorage` per mode for conversation history; no database, no auth (matches "anonymous & stigma-free").
- **Centers**: static JSON in `src/data/centers.ts`; geolocation via `navigator.geolocation`.
- **Routing**: TanStack Start file-based routes; each route has its own `head()` metadata.
- Requires enabling Lovable Cloud (for `LOVABLE_API_KEY`) and adding `ELEVENLABS_API_KEY` secret.

## Out of scope (this version)

- Real WhatsApp Business API integration (we simulate the UI only).
- Real therapy center directory / map view.
- User accounts and cross-device history.
