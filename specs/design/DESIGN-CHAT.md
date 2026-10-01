---
version: alpha
name: AI Knowledge Chat
description: Authenticated chat workspace using landing design tokens with a three-column shell, prompt-kit chat primitives, and flat light-mode surfaces.
colors:
  primary: "#06357a"
  secondary: "#141414"
  tertiary: "#ffffff"
  neutral: "#e5e7eb"
  surface: "#ffffff"
  on-surface: "#141414"
  muted: "#f4f6f9"
  accent-soft: "#eef3fa"
  error: "#ef4444"
typography:
  fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, SF Pro Text, SF Pro Display, Helvetica Neue, Arial, sans-serif"
  body-lg:
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  label-lg:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  label-sm:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 20px
  xl: 28px
  full: 9999px
spacing:
  xs: 10px
  sm: 20px
  md: 28px
  lg: 40px
  xl: 96px
---

# Overview

AI Knowledge Chat is the authenticated workspace for asking questions against authorized knowledge sources. Visual identity **reuses** [`DESIGN-LANDING.md`](./DESIGN-LANDING.md) tokens (brand blue `#06357a`, ink `#141414`, white surfaces, Plus Jakarta Sans, flat borders, light mode only).

Layout structure follows the chat reference mockup at [`refrencee/UI Menu - Chat.png`](./refrencee/UI%20Menu%20-%20Chat.png): left navigation, center conversation, right context panel. Theme the shell with landing tokens — do **not** copy generic mockup blues that diverge from `#06357a`.

Chat UI primitives come from [prompt-kit](https://www.prompt-kit.com/) on top of shadcn/ui. Business wrappers live under `features/chat/`.

Brand accent is **blue** `#06357a` (same as landing `primary` / `brand`). Ignore outdated “accent green” wording if it appears in older landing prose.

# Colors

| Token | Value | Chat usage |
| --- | --- | --- |
| `primary` / `--primary` | `#06357a` | User bubbles, Send, active nav, focus ring |
| `on-surface` / `--foreground` | `#141414` | Body text, nav labels |
| `surface` / `--background` | `#ffffff` | Page, sidebars, cards |
| `neutral` / `--border` | `#e5e7eb` | Panel dividers, input border, assistant bubble stroke |
| `muted` / `--muted` | `#f4f6f9` | Subtle panel fills, suggestion chips |
| `accent-soft` / `--accent` | `#eef3fa` | Active nav row, soft highlights |
| `error` / `--destructive` | `#ef4444` | Errors only |

Guidance:

- Keep backgrounds mostly white; separate columns with `1px` borders, not heavy shadows.
- Use brand blue sparingly for actions and user messages — not as a full-page wash.
- Light mode only; do not ship a dark theme for chat.

# Typography

Use Plus Jakarta Sans everywhere (same as landing via `--font-sans`).

| Role | Scale | Usage |
| --- | --- | --- |
| Page title | `label-lg` or slightly larger semibold (~20–24px) | “AI Chat” header — **not** landing `headline-display` |
| Subtitle / helper | `body-sm` | Description under title |
| Message body | `body-md` | User and assistant content |
| Meta / timestamps | `body-sm` muted | Feedback row, source captions |
| Nav labels | `body-sm` / `label-sm` | Sidebar items |

Do not use oversized landing hero display type inside the chat shell.

# Layout

Three-column shell (desktop):

```text
┌──────────┬────────────────────────────┬──────────────┐
│ Left nav │ Main chat                  │ Right panel  │
│ menus.md │ header + messages + input  │ sources /    │
│          │                            │ filters      │
└──────────┴────────────────────────────┴──────────────┘
```

- **Left nav** — product menu from [`specs/menus.md`](../menus.md). Chat section Core items: Chat, History, Saved Answers. Prompt Library is Future Plan — do not activate.
- **Main** — title, scrollable message list (`ChatContainer`), suggestions, `PromptInput`.
- **Right** — New Chat / Share actions, sources for the current answer, optional filters. Collapse or drawer on smaller viewports.
- **Top chrome** (optional) — global search and user menu; keep quiet relative to the conversation.

Route: `/chat` (landing CTA already points here). Nested history/saved routes can follow later.

Mobile: stack to single column — main chat full width; nav and right panel become drawers.

# Elevation & Depth

Same as landing:

- Prefer flat surfaces + thin borders.
- No gradients, glassmorphism, or multi-layer shadows on core chrome.
- Input may use a very soft brand-tinted shadow if needed for focus hierarchy (match hero prompt restraint).

# Shapes

- Nav active row: `rounded.sm` (8px) on soft accent fill.
- Assistant bubble / cards: `rounded.sm`–`md` with `1px` neutral border.
- User bubble: `rounded.lg` or soft pill corners; primary fill.
- Prompt input: large radius (`rounded.lg` / ~20px) and thin border — same language as landing hero prompt.
- Primary Send control: solid primary (circle or rounded square); white icon.

# Components

## Message bubbles

| Role | Treatment |
| --- | --- |
| User | Right-aligned; `bg-primary` + `text-primary-foreground` |
| Assistant | Left-aligned; white / muted surface + `border-border`; markdown via prompt-kit `Markdown` |
| System / error | Muted or destructive text; never expose raw backend errors |

Use prompt-kit `Message`, `MessageContent`, `MessageActions`. Override default `MessageContent` classes so user bubbles are primary (default kit styles use secondary).

## Prompt input

Use prompt-kit `PromptInput` + `PromptInputTextarea` + `PromptInputActions`.

- White fill, thin neutral border, generous padding.
- Send uses primary brand fill (not a loud competing hue).
- Attach / source / language controls stay secondary outline or ghost.

## Sources

Use prompt-kit `Source` when the gateway returns citations. Omit the section when empty. Never invent source metadata ([`source-cititacion.md`](../features/source-cititacion.md)).

## Suggestions

Use `PromptSuggestion` for follow-up chips under the latest assistant message. Outline / muted style; pill or soft rounded.

## Loading

Use `Loader` / thinking indicator while waiting for the gateway JSON response (or SSE when supported). Keep the input usable for stop/cancel only when the contract supports it.

# prompt-kit mapping

| Spec (`ai-chat.md`) | prompt-kit / ui |
| --- | --- |
| `ChatInput` | `PromptInput` |
| `MessageList` | `ChatContainer` |
| `MessageBubble` | `Message` + `MessageContent` |
| Markdown | `Markdown` |
| Sources | `Source` |
| `TypingIndicator` | `Loader` |
| Suggestions | `PromptSuggestion` |

Feature wrappers under `features/chat/` compose these primitives; do not put NestJS / conversation logic inside `components/ui`.

# Menu map (sidebar)

From [`menus.md`](../menus.md) — Chat section:

| Item | Status | Notes |
| --- | --- | --- |
| Chat → AI Knowledge Chat | Core | Active on `/chat` |
| History → Conversation History | Core | List/switch conversations when API exists |
| Saved Answers | Core | Placeholder until feature/API exists |
| Prompt Library | Future Plan | Hidden or disabled |

Other top-level menus (Knowledge Center, Document Intelligence, etc.) may appear as quiet nav groups; do not implement their pages in the chat foundation phase.

# Do's and Don'ts

## Do

- Reuse landing colors, Plus Jakarta Sans, and flat bordered surfaces.
- Keep chat type scales compact (`body-*` / `label-*`).
- Theme prompt-kit via CSS variables in `app/globals.css`.
- Keep landing marketing layout separate from the `/chat` app shell.

## Don't

- Don't use landing `headline-display` typography in chat.
- Don't introduce purple gradients, cream editorial themes, or dark mode.
- Don't call Dify or providers from the frontend.
- Don't activate Prompt Library until it leaves Future Plan.
- Don't persist conversations in localStorage / sessionStorage / URL params ([`security.md`](../security.md)).
