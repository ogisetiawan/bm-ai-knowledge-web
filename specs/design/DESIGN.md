---
version: alpha
name: BM Knowledge design tokens
description: Shared light-mode color system for the landing page and authenticated workspace. Off-white canvas, gray sidebar, white elevated surfaces, navy brand.
colors:
  primary: "#06357A"
  primary-hover: "#0A4AA8"
  primary-light: "#E8EEF7"
  primary-foreground: "#FFFFFF"
  bg-main: "#F8FAFC"
  bg-sidebar: "#F1F5F9"
  bg-card: "#FFFFFF"
  bg-elevated: "#FFFFFF"
  border: "#E2E8F0"
  border-hover: "#CBD5E1"
  text-primary: "#0F172A"
  text-secondary: "#64748B"
  text-muted: "#94A3B8"
  text-inverse: "#FFFFFF"
  success: "#10B981"
  success-bg: "#D1FAE5"
  warning: "#F59E0B"
  warning-bg: "#FEF3C7"
  error: "#EF4444"
  error-bg: "#FEE2E2"
  info: "#3B82F6"
  info-bg: "#DBEAFE"
typography:
  fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif"
---

# Overview

This file is the color system for the whole product: landing page and authenticated workspace (chat, dashboard, knowledge).

The goal is lower eye strain and clearer hierarchy. The page canvas is off-white. Navigation sits on a slightly darker gray. Cards, bubbles, menus, and inputs stay pure white so they read as surfaces above the canvas. Brand navy stays `#06357A`.

Tokens are implemented in `app/globals.css`. Light mode only. Do not add a dark theme for core UI.

`DESIGN-LANDING.md` and `DESIGN-CHAT.md` use these color values. Layout and type stay in those files. When a color in those files disagrees with this one, follow this file.

# Principles

- Brand navy is for actions, the active state, and the user message. It is not a page wash.
- Separate regions with a 1px `#E2E8F0` border. Use `shadow-sm` only on elevated cards and the assistant bubble.
- Body text is `#0F172A`. Helper text is `#64748B`. Placeholders and disabled text are `#94A3B8`.
- Hover on a gray sidebar uses white (`bg-card`). Hover on a white control over the off-white canvas uses sidebar gray (`bg-sidebar`).

# Tokens

CSS custom properties live on `:root`. Tailwind utilities come from the matching `@theme` colors.

## Primary

Unchanged brand color. Hover and soft fill are the interaction states.

| Token | Hex | CSS variable | Utility |
| --- | --- | --- | --- |
| primary | `#06357A` | `--primary` | `bg-primary`, `text-primary` |
| primary-hover | `#0A4AA8` | `--primary-hover` | `bg-primary-hover` |
| primary-light | `#E8EEF7` | `--primary-light` | `bg-primary-light` |
| primary-foreground | `#FFFFFF` | `--primary-foreground` | `text-primary-foreground` |

Landing aliases `brand`, `brand-hover`, and `brand-soft` use the same three navy values.

## Backgrounds

| Token | Hex | CSS variable | Utility | Use |
| --- | --- | --- | --- | --- |
| bg-main | `#F8FAFC` | `--background` | `bg-bg-main`, `bg-background` | Chat, dashboard, landing page, landing sections |
| bg-sidebar | `#F1F5F9` | `--sidebar`, `--muted` | `bg-bg-sidebar`, `bg-sidebar` | Sidebar and nav panels |
| bg-card | `#FFFFFF` | `--card` | `bg-bg-card`, `bg-card` | Bubbles, cards, inputs, chips |
| bg-elevated | `#FFFFFF` | `--color-bg-elevated` | `bg-bg-elevated` | Popovers, menus, dialogs floating on `bg-main` |

## Borders

| Token | Hex | CSS variable | Utility |
| --- | --- | --- | --- |
| border / divider | `#E2E8F0` | `--border`, `--input`, `--sidebar-border` | `border-border` |
| border-hover | `#CBD5E1` | `--border-hover` | `border-border-hover` |

## Text

| Token | Hex | CSS variable | Utility | Use |
| --- | --- | --- | --- | --- |
| text-primary | `#0F172A` | `--foreground`, `--color-ink` | `text-foreground`, `text-ink` | Headings and body |
| text-secondary | `#64748B` | `--muted-foreground` | `text-muted-foreground`, `text-text-secondary` | Labels, helper text |
| text-muted | `#94A3B8` | `--text-muted` | `text-text-muted` | Placeholder, disabled |
| text-inverse | `#FFFFFF` | `--color-text-inverse` | `text-text-inverse` | Text on navy or other dark fills |

## Semantic

| Token | Hex | Background | Utility |
| --- | --- | --- | --- |
| success | `#10B981` | `#D1FAE5` | `bg-success`, `bg-success-bg` |
| warning | `#F59E0B` | `#FEF3C7` | `bg-warning`, `bg-warning-bg` |
| error | `#EF4444` | `#FEE2E2` | `bg-error`, `bg-destructive`, `bg-error-bg` |
| info | `#3B82F6` | `#DBEAFE` | `bg-info`, `bg-info-bg` |

Error maps to the shadcn destructive token (`--destructive`).

## Chat accents

| Token | Hex | CSS variable | Utility |
| --- | --- | --- | --- |
| ai-bubble | `#F8FAFC` | `--ai-bubble` | `bg-ai-bubble` |
| ai-bubble-border | `#E2E8F0` | `--ai-bubble-border` | `border-ai-bubble-border` |
| user-bubble | `#06357A` | `--user-bubble` | `bg-user-bubble` |
| user-bubble-text | `#FFFFFF` | `--user-bubble-text` | `text-user-bubble-text` |

The rendered assistant bubble uses the white card, not `bg-ai-bubble`. `bg-ai-bubble` is the same hex as the canvas, so a bubble painted with it would disappear. The assistant message is `bg-bg-card` with `border-border` and `shadow-sm`. The user message is `bg-primary text-white`.

# Surfaces

## Chat workspace

| Region | Classes |
| --- | --- |
| App shell and chat column | `bg-bg-main` |
| Sidebar, including the collapsed rail | `bg-bg-sidebar border-r border-border` |
| Active sidebar item | `bg-primary-light text-primary font-medium` |
| Sidebar item hover | `bg-bg-card` |
| Assistant bubble | `bg-bg-card border border-border shadow-sm` |
| User bubble | `bg-primary text-white` |
| Composer | `bg-white border border-border`, focus `border-primary ring-2 ring-primary/10` |
| Suggestion chip | `bg-white border border-border hover:bg-bg-sidebar` |

Primary buttons, including Send, use `bg-primary` and `hover:bg-primary-hover`.

## Landing page

| Region | Treatment |
| --- | --- |
| Page | `bg-bg-main` |
| Header | `bg-white` with `border-b border-border` |
| Hero | `bg-white`, so it stays brighter than the sections under it |
| Features, use cases, FAQ | `bg-bg-main` when those sections exist |
| Cards inside those sections | `bg-white border border-border shadow-sm` |
| Primary CTA | `bg-primary hover:bg-primary-hover` |
| Secondary CTA | `bg-white border border-border hover:bg-bg-sidebar` |

Features, use case, and FAQ sections are specified here and are not on the landing page yet. New sections should use this table.

# Related files

- Implementation: `app/globals.css`
- Landing layout and type: `DESIGN-LANDING.md`
- Chat layout and type: `DESIGN-CHAT.md`
