---
version: "superdesign-alpha"
name: "Phosphor grove"
description: "Black-dominant editorial dark mode carried by an oversized italic-serif display face, a single diagonal chromatic-green light beam in the hero, and rationed lime-green accents across labels, numerals, and pill CTAs."
colors:
  background: "#050B00"
  surface: "#171717"
  surface-card: "linear-gradient(160deg, rgba(13, 26, 18, 0.82), rgba(19, 26, 24, 0.62))"
  text-primary: "#F7FAF7"
  text-secondary: "#80899D"
  accent: "#5BC401"
  accent-hover: "#65DA00"
  secondary-deep: "#123429"
  secondary-deep-hover: "#184537"
  accent-soft: "#9DE3BC"
  glow-soft: "#5DC700"
  glow-faint: "#99E6BF"
typography:
  display-lg:
    fontFamily: "Instrument Serif"
    fontSize: "96px"
    fontWeight: 400
    lineHeight: "1.04"
    letterSpacing: "-3.8px"
  headline-md:
    fontFamily: "Instrument Serif"
    fontSize: "63px"
    fontWeight: 400
    lineHeight: "1.02"
    letterSpacing: "-2.5px"
  body-md:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.7"
  label-md:
    fontFamily: "Manrope"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: "1.08"
    letterSpacing: "-0.6px"
  body-fine:
    fontFamily: "Inter Tight"
    fontSize: "14px"
    fontWeight: 300
    color: "#F6F6F6"
  accent-serif:
    fontFamily: "Instrument Serif"
    style: "italic"
    role: "single-word emphasis break inside headlines"
spacing:
  base: "10px"
  gap: "24px"
  gap-lg: "30px"
  section-padding: "100px"
rounded:
  control: "12px"
  pill: "9999px"
  card: "24px"
  card-sm: "20px"
components:
  button-hero-primary:
    background: "#5BC401"
    text-color: "#FAFAFA"
    radius: "12px"
    height: "58px"
    padding: "0px 28px"
    border: "1px solid rgba(0, 0, 0, 0)"
    shadow: "rgba(18, 52, 41, 0.28) 0px 12px 32px 0px"
    hover-background: "#65DA00"
  button-primary-pill:
    background: "#5BC401"
    text-color: "#FAFAFA"
    radius: "9999px"
    height: "58px"
    padding: "0px 30px"
    shadow: "rgba(18, 52, 41, 0.26) 0px 12px 32px 0px"
    hover-background: "#65DA00"
  button-primary-pill-sm:
    background: "#5BC401"
    text-color: "#FAFAFA"
    radius: "9999px"
    height: "54px"
    padding: "0px 24px"
    shadow: "rgba(18, 52, 41, 0.26) 0px 12px 32px 0px"
    hover-background: "#65DA00"
  card-feature-glass:
    background: "linear-gradient(160deg, rgba(13, 26, 18, 0.82), rgba(19, 26, 24, 0.62))"
    backdrop-filter: "blur(10px)"
    radius: "24px"
    padding: "28px"
  card-faq-glass:
    background: "linear-gradient(160deg, rgba(13, 22, 16, 0.72), rgba(17, 24, 20, 0.52))"
    backdrop-filter: "blur(8px)"
    radius: "20px"
    padding: "22px 22px 24px"
  card-plain:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Phosphor grove
Source: https://base-lp19.vercel.app/

## Overview
A dark-mode-default editorial system where near-total black is interrupted by one theatrical diagonal light beam and a family of oversized italic-serif headlines set in Instrument Serif. The aesthetic reads as cinematic minimalism: content sits on flat black-green fields, structure is carried by generous negative space and thin rule lines, and the single accent hue (`#5BC401`/`#65DA00`) is spent only on labels, numerals, icon dots, and CTA fills — never on backgrounds at scale. Glassmorphic cards (dark translucent gradient fills with blur) appear only mid-page as the one elevated surface type.

## Composition
The first screen is dominated by a full-bleed diagonal beam of saturated green light sweeping from lower-left to upper-right across a black canvas, with a two-line italic-serif headline and one italic word breaking the second line, a short sans body line below, and a single solid pill CTA centered beneath — everything else held back to let the beam and type carry the frame. Below the fold the beam disappears entirely; sections alternate between a numbered three-column problem list (rule-topped, bracketed numerals `[ 01 ]`), a serif section title paired with a muted unstyled paragraph, a horizontal card rail introducing a stepped process, a two-up feature-card row with dotted icon marks, a garanty statement block, and a stacked FAQ accordion, closing on a minimal one-line footer. The deliberate choice is extreme darkness with color rationed to a single diagonal shaft and small typographic accents, rejecting a full-gradient, all-over-lit hero in favor of one theatrical beam that lets black dominate every other screen.

## Colors
`#050B00` is the true page background — the pixel field confirms near-black (~64% pure black, ~26% a near-black green) dominates every section outside the hero beam. `#5BC401` (declared primary) and its hover `#65DA00` are the only saturated hues in the system, rationed to CTA fills, eyebrow labels, numeral brackets, rule lines, and icon dots — never washed across a full section background. `#123429`/`#184537` (secondary-deep) sit unseen in tokens as a darker green reserve, likely for card fills' base tone. `#9DE3BC` and the glow tokens (`#5DC700`, `#99E6BF`) are soft accent variants for glows/highlights rather than solid fills. Text ink is consistently near-white (`#F7FAF7`, `#F6F6F6`, `#F4F7F4`) on black, with `#80899D` reserved for muted secondary copy. Large tracts of the page — card backgrounds, dividers, most body copy — are left deliberately colorless (black/near-black/white), so the eye has nowhere to land but the rationed green.

## Typography
Instrument Serif at 96px/1.04 (display-lg) and 63px/1.02 (headline-md), both with aggressive negative tracking (-3.8px, -2.5px), carries every section headline as an editorial, high-contrast serif statement — italicized selectively for a one-or-two-word emphasis break inside a headline clause. Body copy runs in Inter at 18px/1.7 for readable paragraph blocks, dropping to Inter Tight 14px/300 for finer secondary captions. Manrope 21px/1.08 with tight tracking (-0.6px) serves card headings and mid-weight labels. All-caps eyebrow labels (green, small, wide-tracked) precede every section title. This is a serif-display / sans-body pairing: the serif does all emotional heavy lifting, sans and Inter Tight handle utility text.

## Layout
Content is held to a narrow measure (max-width 620px) for paragraph blocks, producing tall, air-heavy paragraphs beside wide serif headlines — an asymmetric grid rather than a centered single column. Section padding runs at 100px, with internal gaps at 24–30px. The mid-page problem list is a 3-column row of equal-width numbered blocks. The process/step rail is a horizontal scrolling row of cards. The feature-delivery section is a 2-column asymmetric grid (rows [30/70] and [23/64] by content weight, not equal split) pairing a narrow text column against wider glass cards. A 4-column badge/metric grid (rows [47/47/47/47]) appears for a stat or icon row. The FAQ is a strict single-column stack of full-width accordion rows. Corner radii scale by surface: 12px on the hero button, 24px on primary glass cards, 20px on FAQ cards, 9999px pill on repeated CTA buttons.

## Components
- **Navbar** — edge-to-edge square bar, 0px corner radii on all four corners, 56px tall, spans full 1920px viewport width with 0px inset, transparent background, no visible nav items (fully minimal/hidden chrome, likely logo-only or scroll-revealed).
- **Hero primary button** — one solid pill/rounded-rect CTA centered below the hero subhead: observed near-white-on-green solid fill `#5BC401`, white text `#FAFAFA`, ~12px corners (slightly-rounded, not full pill in the hero capture), roughly 58px tall with generous horizontal padding; this is the single most emphasized control on the first screen.
- **Button — primary pill (mid-page)** — `#5BC401` fill, `#FAFAFA` text, 9999px full pill radius, 58px height, 0px 30px padding, shadow `rgba(18, 52, 41, 0.26) 0px 12px 32px 0px`; hover shifts fill to `#65DA00` with a 1px upward transform. Used as the repeated conversion CTA inside content sections.
- **Button — primary pill (footer-adjacent, smaller)** — same fill/hover behavior, 9999px radius, 54px height, 0px 24px padding, identical shadow recipe; used near the page end as the final conversion point.
- **Numbered problem list** — appears once, mid-page, ×3 in a row under a rule-topped divider; each item: bracketed numeral label (`[ 01 ]` style, green), a short serif-adjacent heading, a muted body paragraph beneath. No card chrome — pure typographic blocks on flat black.
- **Horizontal step-card rail** — ×3 cards in a scrolling row beneath a serif section title; dark-glass surface, rounded corners, each card carries a bracketed step numeral top-left and a circular icon badge (white-fill circle with green pen/pencil glyph) top-right; content area otherwise open/minimal.
- **Feature/delivery card (glass)** — ×2+ in an asymmetric row beside a narrow label+heading column; surface `linear-gradient(160deg, rgba(13, 26, 18, 0.82), rgba(19, 26, 24, 0.62))` with `blur(10px)` backdrop-filter, 24px radius, 28px padding; anatomy top-to-bottom: small green dot-cluster icon mark, numeral tag top-right (`1.0`, `2.0`…), bold sans heading, a green-tinted sub-label line, then a muted body paragraph.
- **FAQ accordion card (glass)** — ×4 stacked full-width rows; surface `linear-gradient(160deg, rgba(13, 22, 16, 0.72), rgba(17, 24, 20, 0.52))` with `blur(8px)` backdrop-filter, 20px radius, 22px/22px/24px padding; each row is a question line with a `+` toggle icon at the right edge, expanding to reveal body copy.
- **Footer** — flat `#050B00` background, no visible link list, a single small copyright/legal line centered, no additional chrome.

## Graphics & Effects
The hero's signature graphic is a single diagonal light-beam treatment covering roughly a third of the first screen on the left-to-center diagonal, built from vertical grain/ray striations blended with green glow — this is a bespoke lit-beam texture, not a CSS gradient string in evidence, and should be approximated as a soft radial/linear green glow with vertical scanline grain rather than painted full-frame. Two subtle radial washes recur through the mid-page sections: `radial-gradient(circle at 70% 34%, rgba(91, 196, 1, 0.08), rgba(0, 0, 0, 0) 24%)` and `radial-gradient(circle at 30% 78%, rgba(255, 255, 255, 0.02), rgba(0, 0, 0, 0) 24%)`, each a faint ambient glow anchored to a specific quadrant, not a full-bleed color field. A flat fill `linear-gradient(rgb(5, 11, 0) 0%, rgb(5, 11, 0) 100%)` stands in as the base section background color. Two small dot/glow patterns — `radial-gradient(circle at 16% 24%, rgba(101, 218, 0, 0.9) 0px, rgba(101, 218, 0, 0.9) 1px, rgba(0,0,0,0) 1.6px)` and its 24%/72% counterpart — render as scattered pinpoint green dots (a sparse star-field/particle texture) layered into card or section backgrounds. A live video surface exists somewhere in the flow (use a static dark-green gradient frame as its stand-in). Shadows are soft and colored, not neutral: `rgba(18, 52, 41, 0.26) 0px 12px 32px 0px` on every pill button, and `rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset` plus a deeper `rgba(0, 0, 0, 0.2) 0px 18px 50px 0px` for elevated glass panels. Backdrop blurs range `blur(5px)`–`blur(10px)` across cards.

## Motion
Interactive elements transition `opacity, transform, filter` together at `0.32s ease` (primary) and `0.22s ease` (secondary/faster hover), producing a soft, non-bouncy fade-and-lift. Larger content reveals use `opacity, transform 0.7s ease` for slow scroll-triggered entrances, and pure `opacity 0.5s ease` for simple fades. Named keyframe animations — `differenceWrite`, `hologramPulse`, `methodHandFloat`, `guaranteeBadgeFloat` — drive small looping idle motions (a pulsing glow, a floating icon/hand mark, a floating badge) rather than page-level transitions. Buttons lift 1px on hover via `matrix(1,0,0,1,0,-1)` alongside their fill-brightening. Overall motion character is slow, ambient, and additive — never snappy or springy — reinforcing the cinematic stillness of the black base.

## Guardrails
- Never fill a full section or the whole hero with saturated green — the beam and glows are small, positioned, rationed accents on a black field.
- Do not substitute the hero's observed ~12px-radius solid button for any measured 9999px pill button — they are different variants in different locations.
- Keep card surfaces glass (translucent green-black gradient + blur) only where measured; do not add glass to the plain, chrome-less problem-list or FAQ-adjacent typographic blocks that are flat.
- Preserve the navbar as a flat, transparent, edge-to-edge 56px bar with square corners — do not add a background fill, border, or rounded shape.
- Reserve Instrument Serif for headlines only; body and label text stay in Inter/Inter Tight/Manrope.
- Do not brighten the overall palette — pure black and near-black must remain the majority pixel value outside the hero beam.