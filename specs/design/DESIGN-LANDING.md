---
version: alpha
name: qwenwork.ai
description: Minimal, high-contrast productivity landing page with an airy white canvas, oversized hero typography, rounded pill actions, and floating document-style media cues.
colors:
  primary: "#06357a"
  secondary: "#141414"
  tertiary: "#ffffff"
  neutral: "#e5e7eb"
  surface: "#ffffff"
  on-surface: "#141414"
  error: "#ef4444"
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
      backgroundColor: "#ffffff"
      color: "#141414"
      borderColor: "#1414141a"
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
      color: "#141414"
      borderColor: "#1414141a"
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
      color: "#141414"
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
    borderColor: "#e5e7eb"
    borderRadius: "{rounded.sm}"
    borderWidth: 1px
    borderStyle: solid
    padding: 16px
    boxShadow: none
    textColor: "#141414"
---

# Overview

qwenwork.ai is a clean, light-mode landing page for an AI productivity product. The visual tone is modern, friendly, and highly legible, with strong contrast, generous whitespace, and a playful floating-document motif around a centered hero.

The page uses a single dominant accent green for branding, large editorial headlines for impact, and pill-shaped buttons for primary actions. Content is intentionally sparse above the fold to keep attention on the product claim and call to action.

# Colors

Use a restrained palette. White is the dominant surface, blackish text provides the strongest contrast, and the bright green accent anchors the brand.

- `primary` `#2ccc6c` — brand accent used for the QwenWork wordmark and selected decorative elements.
- `secondary` `#141414` — primary text and strong UI chrome.
- `tertiary` `#ffffff` — page background and button surfaces.
- `neutral` `#e5e7eb` — subtle borders and card strokes.
- `surface` `#ffffff` — default content surface.
- `on-surface` `#141414` — body and heading text.
- `error` `#ef4444` — reserved for destructive or invalid states; not prominent in the current page.

Guidance:
- Keep backgrounds mostly white.
- Use the accent green sparingly; it should feel brand-forward, not decorative noise.
- Do not introduce saturated competing hues in primary UI.

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

- Shadows are nearly absent across the interface.
- The only notable depth cue is a very light shadow on floating/overlay-like elements, if needed.
- Cards and inputs rely more on border, whitespace, and rounded geometry than shadow stacking.

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

Primary and secondary buttons are visually identical in this source: white fill, dark text, thin translucent border, pill radius, and medium weight label text.

Use for:
- Primary CTA actions
- Secondary actions in top navigation
- Download/launch patterns

Spec:
- `minWidth: 206px`
- `minHeight: 44px`
- `padding: 14px 20px`
- `fontSize: 16px`
- `fontWeight: 600`
- `border: 1px solid #1414141a`
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
- 1px neutral border
- 8px radius
- 16px padding
- No shadow

## Hero input

The large prompt field in the hero follows the same visual language as a card:
- white fill
- thin neutral border
- generous padding
- large radius
- centered label/placeholder treatment

This control should feel like the main interaction surface after the CTA.

# Do's and Don'ts

## Do

- Do keep the page mostly white with black text and one green accent.
- Do center the hero and preserve the strong vertical hierarchy.
- Do use Plus Jakarta Sans for all text.
- Do use oversized headlines with tight negative tracking in the hero.
- Do keep buttons pill-shaped, low-contrast, and lightly bordered.
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