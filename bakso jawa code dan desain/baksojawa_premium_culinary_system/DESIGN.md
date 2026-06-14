---
name: BaksoJawa Premium Culinary System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d1c5ad'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9a907a'
  outline-variant: '#4e4634'
  surface-tint: '#f0c12c'
  primary: '#ffe3a1'
  on-primary: '#3d2e00'
  primary-container: '#f4c430'
  on-primary-container: '#695200'
  inverse-primary: '#755b00'
  secondary: '#ffb4ab'
  on-secondary: '#690006'
  secondary-container: '#b20213'
  on-secondary-container: '#ffbdb6'
  tertiary: '#e8e5e5'
  on-tertiary: '#313030'
  tertiary-container: '#ccc9c9'
  on-tertiary-container: '#555454'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdf90'
  primary-fixed-dim: '#f0c12c'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000d'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-padding-desktop: 64px
  container-padding-mobile: 20px
  grid-gutter: 24px
---

## Brand & Style
This design system bridges the gap between ancient Javanese heritage and contemporary high-end dining. The aesthetic is "Royal Gastronomy"—it treats the humble Bakso with the reverence of a palace banquet. 

The visual style is a sophisticated blend of **Modern Minimalism** and **Glassmorphism**, layered over traditional textures. It evokes a sense of "Nostalgic Luxury," where the warmth of a Javanese kitchen meets the precision of a modern premium brand. Expect deep, immersive backgrounds, shimmering gold accents, and translucent surfaces that allow vibrant food photography to bleed through, creating a multi-dimensional, atmospheric experience.

## Colors
The palette is rooted in the "Keraton" (palace) aesthetic.
- **Elegant Black (#121212):** Serves as the primary canvas, providing a deep, infinite backdrop that allows food colors to pop.
- **Gold (#F4C430):** Used for primary actions, iconography, and decorative "Batik" linework, symbolizing prosperity and quality.
- **Chili Red (#D62828):** A visceral accent color used sparingly for appetite stimulation, status indicators, and price highlights.
- **Glass Surfaces:** Utilized for cards and overlays to maintain a sense of depth without cluttering the dark background.

## Typography
The typography strategy pairings high-authority tradition with modern readability.
- **EB Garamond (Serif):** Used for all headlines and display text. Its classical proportions and elegant serifs evoke the feeling of a historical menu or a royal decree.
- **Plus Jakarta Sans (Sans-Serif):** Chosen for its contemporary, friendly, yet professional feel. It ensures high legibility for menus, descriptions, and functional UI elements on mobile devices.
- **Javanese Accents:** Subtle use of Javanese script (Hanacaraka) as low-opacity decorative watermarks behind headings to reinforce authenticity.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous white space (or "black space") to create a premium, unhurried feel. 
- **Desktop:** 12-column grid with a maximum content width of 1280px.
- **Mobile:** Single column with 20px safe area margins.
- **Rhythm:** Spacing is strictly based on an 8px linear scale. Section transitions should feel airy, using large vertical gaps (80px+) to separate different culinary categories or brand stories.
- **Asymmetry:** Occasional off-grid placement of food photography creates a more organic, artisanal feel compared to a rigid corporate structure.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows.
- **Base Level:** Deep Black (#121212) textured with a very faint, dark-grey "Parang" batik pattern.
- **Mid Level (Cards):** Translucent dark surfaces with a `backdrop-filter: blur(12px)`. These surfaces have a 1px "Gold" or "White-low-opacity" inner border to define their edges against the dark background.
- **Top Level (Modals/Popups):** Higher opacity glass with a soft, warm glow (Gold-tinted shadow) to indicate interaction priority.

## Shapes
The shape language is **Soft and Architectural**. 
- **Corners:** A subtle 0.25rem (4px) to 0.5rem (8px) radius is used for cards and buttons. This creates a refined, custom-tailored look that avoids the "playfulness" of highly rounded pills while remaining more approachable than sharp 90-degree angles.
- **Decorative Elements:** Use of thin, golden geometric lines and traditional circular motifs to frame key food items.

## Components
- **Buttons:** Primary buttons use a solid Gold (#F4C430) background with Black text, using the `label-caps` typography style. Secondary buttons are "Ghost" style with a thin gold border.
- **Menu Cards:** Utilizing the Glassmorphic style with high-resolution, top-down photography. The dish name is in EB Garamond, while the price is highlighted in Chili Red.
- **Chips/Tags:** Used for dietary labels (e.g., "Pedas", "Halal"). These should be small, outlined in Gold, with high letter-spacing.
- **Inputs:** Dark, minimal fields with only a bottom border that glows Gold when focused.
- **Batik Dividers:** Instead of simple lines, use a thin, horizontal pattern of "Kawung" batik to separate sections of the menu or landing page.
- **Food Display:** Images should feature "Soft Bokeh" backgrounds to maintain the premium, atmospheric focus on the texture of the Bakso.