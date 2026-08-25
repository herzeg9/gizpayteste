# Extractable Components

Catalog of reusable `DraftComponent` candidates for Superdesign. Full source in `components.md` and `layouts.md`.

## Layout Components

### SiteHeader
- Source: `src/components/site-header.tsx`
- Category: layout
- Description: Estúdio Giz course platform sticky header with desktop nav links and mobile Sheet drawer
- Extractable props: activeHref (string, derived from pathname), scrolled (boolean, scroll > 8px)
- Hardcoded: Logo "G", "Estúdio Giz" text, nav link labels/hrefs, "Começar a aula" CTA href, Menu icon, all CSS classes

### SiteFooter
- Source: `src/components/site-footer.tsx`
- Category: layout
- Description: Course platform footer with track links, project links, and course stats
- Extractable props: none (static content from content/index.ts)
- Hardcoded: Track titles, project link labels, disclaimer text, all CSS

### Navegacao
- Source: `src/components/gizpay-site/gizpay-site.tsx` (inline function)
- Category: layout
- Description: Giz Pay marketing sticky header — logo, anchor nav, "Calcular economia" link, "Agendar demo" CTA
- Extractable props: homeHref (string, default: "/"), activeSection (string, optional anchor highlight)
- Hardcoded: "Giz Pay" branding, nav items (Como funciona, Calculadora, Módulos, Segurança), giz.* colors, sticky backdrop blur

### RodapePrototipo
- Source: `src/components/gizpay-site/gizpay-site.tsx` (inline function)
- Category: layout
- Description: Giz Pay marketing footer with product/contact columns and disclaimer
- Extractable props: local (boolean, default: false — toggles disclaimer text)
- Hardcoded: Column titles, link labels, company description, giz.* colors

### BarraMobile
- Source: `src/components/gizpay-site/gizpay-site.tsx` (inline function)
- Category: layout
- Description: Fixed bottom mobile CTA bar — "Agendar demonstração" + WhatsApp icon button
- Extractable props: showBar (boolean, default: true on mobile only via sm:hidden)
- Hardcoded: WhatsApp URL, CTA text, MessageCircle icon, giz.* colors

### BarraProtótipo
- Source: `src/components/gizpay-site/gizpay-site.tsx` (inline function)
- Category: layout
- Description: Top banner shown on /prototipo linking back to project plan
- Extractable props: showCourseBanner (boolean, parent-controlled via GizPaySite prop)
- Hardcoded: Banner text, "/projeto" link, ArrowLeft icon

### CursoLayout
- Source: `src/app/(curso)/layout.tsx`
- Category: layout
- Description: App shell wrapping course pages with SiteHeader + main + SiteFooter
- Extractable props: none
- Hardcoded: flex-1 main wrapper structure

## Basic Components

### Button
- Source: `src/components/ui/button.tsx`
- Category: basic
- Description: shadcn/ui button with variant (default, outline, secondary, ghost, destructive, link) and size variants
- Extractable props: variant (string), size (string), asChild (boolean), disabled (boolean), children
- Hardcoded: All variant CSS via cva, focus ring styles

### Badge
- Source: `src/components/ui/badge.tsx`
- Category: basic
- Description: Inline badge/tag with variant styles
- Extractable props: variant (default | secondary | destructive | outline | ghost | link)
- Hardcoded: badgeVariants cva classes

### Card
- Source: `src/components/ui/card.tsx`
- Category: basic
- Description: Card container with Header, Title, Description, Content, Footer subcomponents
- Extractable props: size ("default" | "sm")
- Hardcoded: Ring border, spacing via --card-spacing CSS var

### Input
- Source: `src/components/ui/input.tsx`
- Category: basic
- Description: Text input with focus ring and invalid states
- Extractable props: type, placeholder, disabled, aria-invalid
- Hardcoded: Height h-8, rounded-lg, border-input styles

### Accordion
- Source: `src/components/ui/accordion.tsx`
- Category: basic
- Description: Collapsible accordion (Radix) with chevron icons
- Extractable props: type ("single" | "multiple"), collapsible (boolean), defaultValue
- Hardcoded: ChevronDown/Up icons, animation classes

### Sheet
- Source: `src/components/ui/sheet.tsx`
- Category: basic
- Description: Slide-over panel (used in SiteHeader mobile menu)
- Extractable props: side ("top" | "right" | "bottom" | "left"), open (boolean), onOpenChange
- Hardcoded: Overlay blur, slide animations, X close button

### Tabs
- Source: `src/components/ui/tabs.tsx`
- Category: basic
- Description: Tab list with default and line variants
- Extractable props: defaultValue, orientation, variant on TabsList
- Hardcoded: tabsListVariants, active underline animation

### Slider
- Source: `src/components/ui/slider.tsx`
- Category: basic
- Description: Range slider (Radix) — also used directly in Calculadora via radix-ui
- Extractable props: min, max, step, value, defaultValue, disabled
- Hardcoded: Thumb size, track colors via bg-muted/bg-primary

### Reveal
- Source: `src/components/reveal.tsx`
- Category: basic
- Description: Scroll-triggered fade-in animation wrapper (IntersectionObserver)
- Extractable props: delay (number, ms), className
- Hardcoded: rise-in animation, rootMargin, reduced-motion fallback

### CabecalhoSecao
- Source: `src/components/gizpay-site/gizpay-site.tsx` (inline function)
- Category: basic
- Description: Section header with overline, title, subtitle — light/dark tone variants
- Extractable props: overline (string), titulo (string), subtitulo (string), tom ("claro" | "escuro")
- Hardcoded: Typography sizes, giz color mapping per tom

### Faq
- Source: `src/components/prototipo/faq.tsx`
- Category: basic
- Description: Custom accordion FAQ with Plus icon rotation (not shadcn Accordion)
- Extractable props: defaultOpenIndex (number, default: 0)
- Hardcoded: PERGUNTAS array (6 Q&A pairs), giz colors, Plus icon

### Formulario
- Source: `src/components/prototipo/formulario.tsx`
- Category: basic
- Description: 5-field demo request form with validation and success state
- Extractable props: onSubmit (callback), defaultAlunos (string select value)
- Hardcoded: Field labels, validation messages, WhatsApp link, giz-styled inputs

### Calculadora
- Source: `src/components/prototipo/calculadora.tsx`
- Category: basic
- Description: Interactive savings calculator with 3 sliders and animated result
- Extractable props: defaultAlunos (number), defaultMensalidade (number), defaultTaxa (number)
- Hardcoded: Slider ranges, brl formatting, CTA href="#agendar"

### ComparativoInterativo
- Source: `src/components/gizpay-site/comparativo-interativo.tsx`
- Category: basic
- Description: Toggle between Giz Pay vs intermediary comparison table
- Extractable props: defaultModo ("giz" | "intermediario"), className
- Hardcoded: LINHAS comparison data, Check icons, toggle labels

### PainelVivo
- Source: `src/components/prototipo/painel-vivo.tsx`
- Category: basic
- Description: Auto-animating dashboard mock showing live Pix payments
- Extractable props: none (self-contained animation loop)
- Hardcoded: PAGAMENTOS data, 3200ms interval, brl formatting, giz colors

### PortalResponsavel
- Source: `src/components/prototipo/portal-responsavel.tsx`
- Category: basic
- Description: Phone mock of parent portal with Pix copy button
- Extractable props: none
- Hardcoded: CODIGO_PIX string, student/responsible names, payment history months

### ComoFunciona
- Source: `src/components/prototipo/como-funciona.tsx`
- Category: basic
- Description: 4-step tabbed explainer with detail panel
- Extractable props: activeStep (number), onStepChange (callback)
- Hardcoded: PASSOS content array, tab styling, giz colors
