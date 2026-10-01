---
version: alpha
name: qwenwork.ai
description: Minimal productivity landing page with an off-white page canvas, a white hero, navy pill actions, and floating document-style media cues.
colors:
  primary: "#06357A"
  primary-hover: "#0A4AA8"
  primary-foreground: "#FFFFFF"
  secondary: "#0F172A"
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
  headline-display:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, SF Pro Text, SF Pro Display, Helvetica Neue, Arial, sans-serif"
    fontSize: 108px
    fontWeight: 800
    lineHeight: 108px
    letterSpacing: -2px
  headline-lg:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, SF Pro Text, SF Pro Display, Helvetica Neue, Arial, sans-serif"
    fontSize: 71px
    fontWeight: 600
    lineHeight: 85px
    letterSpacing: -2.56px
  headline-md:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, SF Pro Text, SF Pro Display, Helvetica Neue, Arial, sans-serif"
    fontSize: 46px
    fontWeight: 600
    lineHeight: 55px
    letterSpacing: 0px
  body-lg:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, SF Pro Text, SF Pro Display, Helvetica Neue, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, SF Pro Text, SF Pro Display, Helvetica Neue, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, SF Pro Text, SF Pro Display, Helvetica Neue, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, SF Pro Text, SF Pro Display, Helvetica Neue, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0px
  label-md:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, SF Pro Text, SF Pro Display, Helvetica Neue, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0px
  label-sm:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, SF Pro Text, SF Pro Display, Helvetica Neue, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0px
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
components:
  button:
    primary:
      backgroundColor: "#06357A"
      color: "#FFFFFF"
      borderColor: "#06357A"
      hoverBackgroundColor: "#0A4AA8"
      borderRadius: "{rounded.full}"
      borderWidth: 1px
      borderStyle: solid
      padding: "14px 20px"
      fontSize: 16px
      fontWeight: 600
      minWidth: 206px
      minHeight: 44px
      textDecoration: none
      boxShadow: none
    secondary:
      backgroundColor: "#ffffff"
      color: "#0F172A"
      borderColor: "#E2E8F0"
      hoverBackgroundColor: "#F1F5F9"
      borderRadius: "{rounded.full}"
      borderWidth: 1px
      borderStyle: solid
      padding: "14px 20px"
      fontSize: 16px
      fontWeight: 600
      minWidth: 206px
      minHeight: 44px
      textDecoration: none
      boxShadow: none
    link:
      backgroundColor: transparent
      color: "#0F172A"
      borderColor: transparent
      borderRadius: "{rounded.none}"
      borderWidth: 0px
      borderStyle: none
      padding: 0px
      fontSize: 16px
      fontWeight: 400
      minWidth: 0px
      minHeight: 0px
      textDecoration: underline
      boxShadow: none
  card:
    backgroundColor: "#ffffff"
    borderColor: "#E2E8F0"
    borderRadius: "{rounded.sm}"
    borderWidth: 1px
    borderStyle: solid
    padding: 16px
    boxShadow: shadow-sm
    textColor: "#0F172A"
---

# Overview

The landing page is a clean, light-mode page for the knowledge product. The visual tone is modern, friendly, and highly legible, with strong contrast, generous whitespace, and a playful floating-document motif around a centered hero.

The page uses navy `#06357A` as the single brand accent, large editorial headlines for impact, and pill-shaped buttons for actions. Content is intentionally sparse above the fold to keep attention on the product claim and call to action. Color values come from [`DESIGN.md`](./DESIGN.md).

# Colors

Use the shared palette. The page canvas is off-white, the hero and header stay white, and navy anchors the brand.

- `primary` `#06357A` — brand accent for the wordmark, primary CTA, and selected decorative elements. Hover is `#0A4AA8`.
- `text-primary` `#0F172A` — headings and body text.
- `text-secondary` `#64748B` — labels and helper text.
- `text-muted` `#94A3B8` — placeholders and disabled text.
- `bg-main` `#F8FAFC` — page background and later Features, use case, and FAQ bands.
- `bg-card` `#FFFFFF` — header, hero, and cards.
- `bg-sidebar` `#F1F5F9` — hover fill for the secondary CTA.
- `border` `#E2E8F0` — header rule, card stroke, secondary button border.
- `error` `#EF4444` — reserved for destructive or invalid states; not prominent on the current page.

Surfaces:

| Region | Treatment |
| --- | --- |
| Page | `bg-bg-main` |
| Header | `bg-white` with `border-b border-border` |
| Hero | `bg-white`, brighter than the bands under it |
| Features, use cases, FAQ | `bg-bg-main` when those sections exist |
| Cards in those sections | `bg-white border border-border shadow-sm` |
| Primary CTA | `bg-primary hover:bg-primary-hover`, white label |
| Secondary CTA | `bg-white border border-border hover:bg-bg-sidebar` |

Guidance:
- Keep the hero and header white so they stay brighter than the off-white page.
- Use navy for the primary action and the wordmark. It is not a page wash.
- Do not introduce a second bright brand hue in primary UI.

# Typography

The page is driven by Plus Jakarta Sans with very large, tight-display headings and compact utility text.

## Scale

- `headline-display`: 108px / 800 / 108px / -2px
- `headline-lg`: 71px / 600 / 85px / -2.56px
- `headline-md`: 46px / 600 / 55px / 0px
- `body-lg`: 20px / 400 / 28px / 0px
- `body-md`: 16px / 400 / 24px / 0px
- `body-sm`: 14px / 400 / 20px / 0px
- `label-lg`: 16px / 600 / 24px / 0px
- `label-md`: 16px / 600 / 16px / 0px
- `label-sm`: 14px / 600 / 20px / 0px

## Usage

- Use `headline-display` for the primary hero statement.
- Use `headline-lg` or `headline-md` for supporting section titles.
- Use `body-lg` for short explanatory copy beneath headings.
- Use `body-md` and `body-sm` for navigation, helpers, and supporting metadata.
- Keep line lengths short in large display text; the design depends on strong line breaks and centered rhythm.

# Layout

The layout is centered, symmetrical, and spacious.

- The top navigation spans the full width with the logo at left, centered links, and account/actions at right.
- The hero is vertically stacked and center aligned.
- Floating file-like illustrations sit around the hero to create motion and context without crowding the center.
- The primary input area is a wide rounded field placed below the CTA, followed by example prompts in a compact list.
- Use large vertical spacing between major bands; `spacing.xl` is the dominant structural gap.

Implementation notes:
- Prefer a single-column hero container with centered content.
- Keep the nav lightweight and low-height.
- Maintain large margins so decorative elements do not touch the viewport edges.
- Use subtle alignment corrections rather than complex grids; the composition should feel balanced, not dense.

# Elevation & Depth

Depth is minimal and soft.

- Page chrome stays flat: header and hero use a border, not a stacked shadow.
- Section cards use `shadow-sm` so white blocks lift off the off-white canvas.
- Inputs rely on a thin `#E2E8F0` border and whitespace.

Use depth sparingly:
- Avoid heavy elevation.
- Prefer flat surfaces with a light border.
- If shadow is required, keep it subtle and broad.

# Shapes

Shapes are rounded and friendly, with a mix of pill buttons and softly rounded panels.

- `rounded.none`: 0px
- `rounded.sm`: 8px
- `rounded.md`: 12px
- `rounded.lg`: 20px
- `rounded.xl`: 28px
- `rounded.full`: 9999px

Shape rules:
- Buttons should use `rounded.full` to match the pill CTA look.
- Content cards and bordered panels should use small to medium radius.
- Inputs should feel soft and approachable, with large radii and thin borders.
- Decorative file icons may use slight rotation, but the core system should remain orderly and precise.

# Components

## Button

Both actions stay pill-shaped with medium-weight labels. The primary action is solid navy. The secondary action is a white button with a light border.

Use for:
- Primary CTA: `bg-primary`, white text, hover `bg-primary-hover`
- Secondary CTA and quiet account actions: white fill, `#0F172A` text, `1px` `#E2E8F0` border, hover `bg-bg-sidebar`

Shared size:
- `minWidth: 206px`
- `minHeight: 44px`
- `padding: 14px 20px`
- `fontSize: 16px`
- `fontWeight: 600`
- `borderRadius: 9999px`

## Link button

Use the link style for lightweight navigation or inline actions.

- Transparent background
- Underlined text
- No border
- No shadow
- Keep it visually quiet next to the pill buttons

## Card

Use cards for compact content blocks and previews.

- White background
- 1px `#E2E8F0` border
- 8px radius
- 16px padding
- `shadow-sm` so the card lifts off `bg-main`

## Hero input

The large prompt field in the hero follows the same visual language as a card:
- white fill
- thin `#E2E8F0` border
- generous padding
- large radius
- centered label/placeholder treatment

This control should feel like the main interaction surface after the CTA.

# Do's and Don'ts

## Do

- Do keep the page on `#F8FAFC`, the hero and header on white, body text on `#0F172A`, and one navy accent.
- Do center the hero and preserve the strong vertical hierarchy.
- Do use Plus Jakarta Sans for all text.
- Do use oversized headlines with tight negative tracking in the hero.
- Do keep buttons pill-shaped. Primary is solid navy. Secondary is white with a light border.
- Do make decorative file icons float outside the central content column.
- Do keep borders subtle and shadows minimal.
- Do use concise, action-oriented labels like “Try”, “Download”, or “Sign in”.

## Don't

- Don't add gradients, heavy shadows, or glassmorphism to core UI.
- Don't use more than one bright brand accent at a time.
- Don't replace the display headline with a smaller, dense marketing paragraph.
- Don't make the nav or CTA buttons visually loud relative to the hero.
- Don't use sharp corners for primary actions.
- Don't crowd the center with too many supporting elements.
- Don't infer a dark theme; this experience is intentionally light-mode.