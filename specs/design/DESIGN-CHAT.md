---
version: alpha
name: AI Knowledge Chat
description: Authenticated chat workspace using the shared light-mode tokens, a three-column shell, prompt-kit chat primitives, and an off-white canvas.
colors:
  primary: "#06357A"
  primary-hover: "#0A4AA8"
  primary-light: "#E8EEF7"
  primary-foreground: "#FFFFFF"
  bg-main: "#F8FAFC"
  bg-sidebar: "#F1F5F9"
  bg-card: "#FFFFFF"
  border: "#E2E8F0"
  text-primary: "#0F172A"
  text-secondary: "#64748B"
  text-muted: "#94A3B8"
  error: "#EF4444"
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

AI Knowledge Chat is the authenticated workspace for asking questions against authorized knowledge sources. Visual identity **reuses** the shared tokens in [`DESIGN.md`](./DESIGN.md) (brand navy `#06357A`, ink `#0F172A`, off-white canvas `#F8FAFC`, gray sidebar `#F1F5F9`, white cards, Plus Jakarta Sans, light mode only).

Layout structure follows the chat reference mockup at [`refrencee/UI Menu - Chat.png`](./refrencee/UI%20Menu%20-%20Chat.png): left navigation, center conversation, right context panel. Theme the shell with those tokens — do **not** copy generic mockup blues that diverge from `#06357A`.

Chat UI primitives come from [prompt-kit](https://www.prompt-kit.com/) on top of shadcn/ui. Business wrappers live under `features/chat/`.

Brand accent is navy `#06357A` (same as landing `primary`).

# Colors

| Token | Value | Chat usage |
| --- | --- | --- |
| `primary` | `#06357A` | User bubbles, Send, focus ring |
| `primary-hover` | `#0A4AA8` | Hover on primary actions, including Send |
| `primary-light` | `#E8EEF7` | Active sidebar item |
| `bg-main` / `--background` | `#F8FAFC` | App shell, chat column, dashboard |
| `bg-sidebar` / `--sidebar` | `#F1F5F9` | Sidebar and collapsed rail |
| `bg-card` | `#FFFFFF` | Assistant bubble, composer, suggestion chips |
| `border` | `#E2E8F0` | Panel dividers, input border, assistant bubble stroke |
| `text-primary` / `--foreground` | `#0F172A` | Headings, message body, nav labels |
| `text-secondary` | `#64748B` | Helper text under the title, source captions |
| `text-muted` | `#94A3B8` | Placeholder and disabled text |
| `error` / `--destructive` | `#EF4444` | Errors only |

Guidance:

- The canvas is off-white. Sidebar is one step darker. Cards, the composer, and chips stay white.
- Separate columns with a `1px` `#E2E8F0` border. Use `shadow-sm` on the assistant bubble only.
- Active sidebar item: `bg-primary-light text-primary font-medium`. Hover on a sidebar item: `bg-bg-card`.
- Use navy for actions and the user message. It is not a page wash.
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
│ menus.md │ header + messages + input  │ sources      │
│          │                            │ filters | opsional )    │
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
- The assistant bubble may use `shadow-sm` so the white card lifts off the off-white canvas.
- The composer uses a `1px` border and, on focus, `border-primary` with `ring-2 ring-primary/10`. It does not use a brand-tinted drop shadow.

# Shapes

- Nav active row: `rounded.sm` (8px) on `primary-light`.
- Assistant bubble / cards: `rounded.sm`–`md` with a `1px` `#E2E8F0` border and `shadow-sm`.
- User bubble: `rounded.lg` or soft pill corners; primary fill, white text.
- Prompt input: large radius (`rounded.lg` / ~20px) and thin border — same language as landing hero prompt.
- Primary Send control: solid primary (circle or rounded square); white icon.

# Components

## Message bubbles

| Role | Treatment |
| --- | --- |
| User | Right-aligned; `bg-primary text-white` |
| Assistant | Left-aligned; `bg-bg-card border border-border shadow-sm`; markdown via prompt-kit `Markdown` |
| System / error | Muted or destructive text; never expose raw backend errors |

Use prompt-kit `Message`, `MessageContent`, `MessageActions`. Override default `MessageContent` classes so user bubbles are primary (default kit styles use secondary).

## Prompt input

Use prompt-kit `PromptInput` + `PromptInputTextarea` + `PromptInputActions`.

- White fill, `border-border`, generous padding.
- Focus: `border-primary` and `ring-2 ring-primary/10`. Placeholder uses `text-muted` (`#94A3B8`).
- Send uses `bg-primary` and `hover:bg-primary-hover`.
- Attach / source / language controls stay secondary outline or ghost.

## Sources

Use prompt-kit `Source` when the gateway returns citations. Omit the section when empty. Never invent source metadata ([`source-cititacion.md`](../features/source-cititacion.md)).

## Suggestions

Use `PromptSuggestion` for follow-up chips under the latest assistant message. Pill shape, white fill, `border-border`, hover `bg-bg-sidebar`.

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

- Reuse the shared tokens in [`DESIGN.md`](./DESIGN.md), Plus Jakarta Sans, and flat bordered surfaces.
- Keep chat type scales compact (`body-*` / `label-*`).
- Theme prompt-kit via CSS variables in `app/globals.css`.
- Keep landing marketing layout separate from the `/chat` app shell.

## Don't

- Don't use landing `headline-display` typography in chat.
- Don't introduce purple gradients, cream editorial themes, or dark mode.
- Don't call Dify or providers from the frontend.
- Don't activate Prompt Library until it leaves Future Plan.
- Don't persist conversations in localStorage / sessionStorage / URL params ([`security.md`](../security.md)).
