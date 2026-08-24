# Aula / Script — UI/UX, Front-end, Figma e Framer

**Duração estimada:** 90 minutos (+ 30 min de exercícios)  
**Ferramentas:** Figma + Framer  
**Projeto de referência:** redesign de [gizpay.com.br](https://gizpay.com.br)

> **Este documento é o roteiro falado.** Ele existe para ser lido em voz alta, impresso ou virar slides — é a versão de apresentação da aula.
>
> A versão aprofundada e interativa está no site deste repositório: 25 aulas em `/aula/[slug]`, o plano do projeto em `/projeto` e o protótipo navegável da nova Giz Pay em `/prototipo`. Use este script para dar a aula; use o site para estudar cada tema com as demonstrações que se mexem.

---

## Como ler este documento

- **FALA:** texto que você pode ler ou adaptar ao vivo.
- **NOTA:** contexto extra para o instrutor ou para você, estudando sozinho.
- **EXERCÍCIO:** pause a aula e faça na prática.
- **SLIDE:** sugestão visual — crie estes frames no Figma se quiser montar a apresentação.

---

## Bloco 0 — Abertura (5 min)

### SLIDE: Título
**UI/UX + Front-end com Figma e Framer**  
Do conceito ao site que converte clientes

### FALA
> Nesta aula você não vai só “aprender ferramentas”. Vamos construir o vocabulário para **pensar como quem desenha experiências digitais** e **entregar sites que funcionam no navegador**.
>
> O caso real é o Giz Pay: uma plataforma financeira para escolas. O site precisa convencer diretores e mantenedores de que vale uma demonstração — em menos de um minuto de leitura.
>
> Ferramentas do fluxo:
> - **Figma** — pensar, estruturar, desenhar, prototipar.
> - **Framer** — levar o design ao ar com interação, animação e publicação rápida.

### NOTA
Figma = design e colaboração. Framer = site publicado com componentes e CMS opcional. Não são concorrentes; são etapas sequenciais.

---

## Bloco 1 — UI vs UX (10 min)

### SLIDE: Duas perguntas diferentes
| UX | UI |
|----|-----|
| É fácil de usar? | É bonito e consistente? |
| Resolve o problema certo? | Hierarquia visual clara? |
| A pessoa confia? | Identidade reconhecível? |

### FALA
> **UX (User Experience)** é a experiência completa: desde o anúncio que a pessoa viu até o formulário que ela preencheu e o WhatsApp que recebeu depois.
>
> **UI (User Interface)** é a camada visual e interativa: botões, cores, tipografia, espaçamento, ícones, estados de hover e erro.
>
> Um site pode ser bonito (UI forte) e frustrante (UX ruim). Exemplo: calculadora linda que não mostra o resultado, ou formulário com 15 campos antes do CTA.
>
> Para o Giz Pay, a UX central é: **“Entendi o problema da minha escola → vi que a solução existe → quero ver na prática.”**
>
> A UI deve comunicar: **seriedade financeira + modernidade + clareza** — não “startup genérica” nem “banco tradicional pesado”.

### EXERCÍCIO (3 min)
Abra gizpay.com.br e anote:
1. Uma coisa com **UX boa** (fluxo claro).
2. Uma coisa com **UX fraca** (confusão, esforço extra).
3. Uma coisa com **UI boa** (visual profissional).
4. Uma coisa com **UI fraca** (poluição, repetição, hierarquia).

---

## Bloco 2 — Quem é o usuário e o que o site precisa fazer (10 min)

### SLIDE: Persona Giz Pay
**Diretor(a) ou mantenedor(a) de escola**  
- Cuida de caixa, inadimplência e reputação com as famílias.  
- Tem pouco tempo; desconfia de “taxa escondida”.  
- Quer prova social e números, não só promessa.

### FALA
> Antes de escolher fonte ou animação, defina **objetivo de negócio** e **objetivo do usuário**.
>
> **Objetivo de negócio (Giz Pay):** gerar leads qualificados — demonstração agendada ou contato WhatsApp.
>
> **Objetivo do usuário:** entender se a plataforma resolve repasse atrasado, taxa sobre faturamento e cobrança manual — e se é seguro (LGPD).
>
> Tudo no site deve empurrar ou apoiar esse caminho. Seções “bonitas” que não ajudam a decidir são ruído.

### SLIDE: Jornada mínima
```
Chegada → Entender valor (10s) → Prova (números/comparativo) → Interação (calculadora) → CTA → Formulário/WhatsApp
```

### NOTA
Métricas úteis depois do lançamento: taxa de clique no CTA primário, scroll depth até a calculadora, taxa de envio do formulário, bounce na hero.

---

## Bloco 3 — Fundamentos de UI (15 min)

### 3.1 Hierarquia visual

### FALA
> O olho humano segue ordem: **tamanho → contraste → posição → espaço em branco**.
>
> Na hero do Giz Pay, uma hierarquia saudável é:
> 1. Headline (problema + promessa)
> 2. Subtítulo (como funciona em uma linha)
> 3. CTA primário (“Agendar demonstração”)
> 4. CTA secundário (“Calcular economia”)
> 5. Prova rápida (0% repasse retido, baixa em &lt;3s)

> Erro comum: cinco botões com o mesmo peso visual. O usuário não sabe o que clicar.

### 3.2 Tipografia

### FALA
> Use **no máximo duas famílias**: uma para títulos, uma para corpo (ou uma só com vários pesos).
>
> Escala sugerida para landing B2B:
> - H1: 40–56px desktop / 32–36px mobile
> - H2: 28–36px / 24–28px
> - Corpo: 16–18px (nunca 14px no corpo principal)
> - Labels e captions: 12–14px
>
> **Line-height:** títulos ~1.1–1.2; corpo ~1.5–1.6.  
> **Contraste:** texto principal em cinza muito escuro (#1a1a1a), não preto puro em fundo branco.

### 3.3 Cores

### FALA
> Paleta mínima:
> - **Primária** — ação (botão principal, links importantes)
> - **Neutros** — fundos, bordas, texto secundário
> - **Semânticas** — sucesso (pago), alerta (vencendo), erro (atrasado)
>
> Para fintech/educação: azul/verde transmite confiança; use accent com moderação.  
> Regra: **um CTA primário por viewport** — mesma cor, mesma forma.

### 3.4 Espaçamento e grid

### FALA
> Adote escala de **8px**: 8, 16, 24, 32, 48, 64.  
> Grid desktop: 12 colunas, gutter 24px, margem lateral 80–120px.  
> Mobile: 4 colunas, margem 16–20px.
>
> Espaço em branco não é “vazio” — é **ritmo**. Seções densas cansam; seções vazias sem conteúdo parecem amadoras.

### 3.5 Componentes e consistência

### FALA
> Botão, input, card, badge, navbar — defina uma vez no **design system** e reutilize.  
> No Figma: use **Components** e **Variants** (primário/secondary, default/hover/disabled).

### EXERCÍCIO (10 min) — no Figma
1. Crie arquivo `Giz Pay — Aula`.
2. Frame 1440×900: defina 5 cores + 3 tamanhos de texto.
3. Crie componente `Button/Primary` e `Button/Secondary` com variants.
4. Duplique para frame 390×844 e ajuste H1 e padding.

---

## Bloco 4 — Interação, estados e micro-UX (10 min)

### SLIDE: Estados que o usuário espera
| Elemento | Estados |
|----------|---------|
| Botão | default, hover, pressed, disabled, loading |
| Input | vazio, foco, erro, sucesso, disabled |
| Card | default, hover (se clicável) |
| Modal | aberto, fechando |

### FALA
> **Microinterações** guiam sem texto: botão muda no hover, formulário mostra erro inline, calculadora atualiza o número ao mover o slider.
>
> Para o Giz Pay, interações de alto valor:
> - **Calculadora de economia** — sliders ou inputs com resultado em tempo real.
> - **Comparativo** — tabela ou cards lado a lado (Giz Pay vs intermediário).
> - **Demo do painel** — mock animado do dashboard (não precisa ser o app real).
>
> Animação: **curta** (200–400ms), **com propósito** (entrada de seção, feedback de clique). Evite parallax pesado em site B2B.

### NOTA
No Framer: `While Hover`, `While Tap`, `Scroll Transform` e `Appear` cobrem 90% das necessidades de landing.

---

## Bloco 5 — Front-end: o que existe “debaixo” do design (15 min)

### FALA
> Mesmo usando Framer, você precisa entender o que o navegador renderiza. Isso evita designs impossíveis e melhora SEO e acessibilidade.

### 5.1 HTML — estrutura semântica

```html
<header>   <!-- logo, nav -->
<main>     <!-- conteúdo principal -->
  <section> <!-- hero -->
  <section> <!-- problema -->
  <section> <!-- como funciona -->
</main>
<footer>
```

> Um **H1 por página**. Títulos de seção em H2. Não pule níveis (H2 → H4) sem motivo.

### 5.2 CSS — layout moderno

> **Flexbox** — alinhar linhas (nav, botões lado a lado).  
> **Grid** — grades de cards (módulos, features).  
> **Responsivo** — `max-width`, breakpoints, `clamp()` para fontes fluidas.

### 5.3 JavaScript — comportamento

> O que JS faz na landing:
> - Abrir/fechar menu mobile e modais
> - Validar formulário
> - Calcular valores da calculadora
> - Scroll suave até seção
>
> No Framer, muito disso é visual; em código (React/Next), você implementa na mão.

### 5.4 Stack típica (quando sair do Framer)

| Camada | Opções comuns |
|--------|----------------|
| Framework | Next.js, Astro |
| Estilo | Tailwind CSS, CSS Modules |
| Hospedagem | Vercel, Netlify |
| Formulários | API Route, Formspree, HubSpot |

### NOTA
Framer publica o site por você. Para integrações pesadas (CRM, login), avalie export ou stack custom neste repositório depois do protótipo validado.

---

## Bloco 6 — Mobile-first e responsivo (8 min)

### FALA
> **Mobile-first:** desenhe o mobile primeiro; expande para desktop.  
> Mais da metade do tráfego B2B em Brasil ainda é mobile — diretor lendo no celular entre reuniões.
>
> Checklist mobile:
> - Toque mínimo **44×44px** em botões e links
> - Texto legível sem zoom
> - Menu hambúrguer simples (3–5 itens)
> - Formulário com campos grandes e teclado correto (`type="email"`, `type="tel"`)
> - CTA visível sem scroll infinito na hero

### EXERCÍCIO (5 min)
No Figma, compare seu frame mobile com desktop:
- [ ] H1 cabe em 2–3 linhas no mobile?
- [ ] CTAs estão acima da dobra?
- [ ] Cards viram coluna única?

---

## Bloco 7 — Acessibilidade e confiança (7 min)

### FALA
> **Acessibilidade (a11y)** não é opcional — é UX para todos e SEO indireto.
>
> Práticas essenciais:
> - Contraste texto/fundo ≥ 4.5:1 (corpo)
> - `alt` em imagens informativas
> - Foco visível ao navegar com Tab
> - Labels em inputs (não só placeholder)
> - Não depender só de cor (ícone + texto para “pago” vs “atrasado”)
>
> Para Giz Pay, **confiança** é UX: LGPD, segurança, CNPJ, contato humano — visíveis sem esconder no footer.

---

## Bloco 8 — Performance e SEO básico (7 min)

### FALA
> Site lento = abandono antes da hero.
>
> **Performance:**
> - Imagens WebP, tamanho adequado
> - Poucas fontes e pesos
> - Lazy load abaixo da dobra
>
> **SEO landing B2B:**
> - Title: `Giz Pay — Gestão financeira escolar sem intermediários`
> - Meta description com proposta + CTA implícito
> - URLs limpas, headings hierárquicos
> - Open Graph para compartilhar no WhatsApp (crítico no Brasil)

### NOTA
Teste com PageSpeed Insights ou Lighthouse após publicar no Framer ou no deploy final.

---

## Bloco 9 — Figma na prática (12 min)

### SLIDE: Fluxo Figma para o Giz Pay
```
Moodboard → Wireframe (cinza) → Design system → High-fidelity → Protótipo → Handoff/Framer
```

### FALA
> **Passo 1 — Moodboard**  
> Colete 5 referências (SaaS B2B, fintech, edtech). Anote: tipografia, uso de espaço, tratamento de screenshots.
>
> **Passo 2 — Wireframe**  
> Só caixas e texto placeholder. Foco em **ordem das seções** e **CTAs**. Sem cor.
>
> **Passo 3 — Design system**  
> Cores, tipos, botões, inputs, cards — página `🧩 Components`.
>
> **Passo 4 — High-fidelity**  
> Uma frame por seção: Hero, Problema, Como funciona, Módulos, Comparativo, Calculadora, FAQ, CTA final, Footer.
>
> **Passo 5 — Protótipo**  
> Conecte frames: menu → seção, “Ver comparativo” → modal, “Calcular” → scroll à calculadora.
>
> **Passo 6 — Export para Framer**  
> Plugins úteis: Figma to Framer, ou recriação manual (often melhor para controle).

### FALA — Atalhos Figma que você vai usar todo dia
| Ação | Atalho |
|------|--------|
| Duplicar | `Ctrl/Cmd + D` |
| Agrupar | `Ctrl/Cmd + G` |
| Auto layout | `Shift + A` |
| Componente | `Ctrl/Cmd + Alt + K` |
| Protótipo | `Shift + E` |

### EXERCÍCIO (15 min) — Wireframe Giz Pay
No Figma, frame mobile 390px, **somente cinza**:
1. Navbar (logo + menu)
2. Hero (headline + 2 CTAs)
3. Bloco de prova (3 métricas)
4. Seção “O problema” (4 cards)
5. CTA sticky ou repetido

---

## Bloco 10 — Framer na prática (12 min)

### SLIDE: Por que Framer depois do Figma?
Design validado → site **publicado** com interação real, sem esperar sprint de desenvolvimento.

### FALA
> **Estrutura no Framer**
> - **Pages** — Home (e depois Blog, Privacidade, etc.)
> - **Components** — Navbar, Footer, FeatureCard, PricingRow
> - **Breakpoints** — Desktop, Tablet, Phone
> - **CMS** (opcional) — cases, posts; para MVP da home, pode ficar estático

### FALA — Interações essenciais no Framer
1. **Scroll sections** — cada seção com padding generoso; IDs para anchor links.
2. **Navbar** — fixa no topo; blur ou fundo sólido ao scroll.
3. **Calculadora** — variáveis + fórmula no Framer ou componente com overrides.
4. **Modal comparativo** — overlay + close no X e clique fora.
5. **Formulário** — campos nativos; integração Formspark, Getform, ou embed Calendly/Typeform.

### FALA — Publicação
> Domínio custom `gizpay.com.br`: apontar DNS ao Framer ou usar Framer como staging e depois migrar para código neste repo.
>
> Fluxo recomendado para este projeto:
> 1. Protótipo Framer para validar com stakeholders
> 2. Versão production em Next.js (este repositório) para controle total e SEO fino

### EXERCÍCIO (10 min) — Framer
1. Crie site em Framer (template SaaS ou blank).
2. Recrie só a **hero** do wireframe Figma.
3. Adicione hover no botão primário e link “Calcular economia” que scrolla à seção `#calculadora` (mesmo vazia).
4. Publique e abra o link de preview.

---

## Bloco 11 — Conteúdo e copy para conversão (8 min)

### FALA
> **Hero formula** (adaptar para Giz Pay):
> - **Problema:** “Intermediário retém seu caixa.”
> - **Solução:** “Cobrança automática com liquidação na conta da escola.”
> - **Prova:** número ou comparativo em uma linha.
> - **Ação:** agendar demo.
>
> **CTAs** — verbos específicos:
> - ✅ “Agendar demonstração gratuita”
> - ❌ “Saiba mais” (vago)
>
> **Objeções** — FAQ e comparativo respondem antes do formulário:
> - Dinheiro cai na conta da escola?
> - Preciso trocar sistema acadêmico?
> - Quanto tempo de implantação?
> - Como é cobrado?

### SLIDE: Mapa de seções — home Giz Pay (proposta redesign)
| # | Seção | Função UX |
|---|--------|-----------|
| 1 | Hero + prova social | Gancho + credibilidade |
| 2 | Problema (4 dores) | Identificação emocional |
| 3 | Como funciona (4 passos) | Clareza do processo |
| 4 | Demo interativa (painel) | “Ver é crer” |
| 5 | Módulos | Amplitude da plataforma |
| 6 | Comparativo | Diferenciação racional |
| 7 | Calculadora | Personalização + urgência |
| 8 | Portal do responsável | Benefício secundário tangível |
| 9 | Segurança / LGPD | Confiança |
| 10 | FAQ | Remover objeções |
| 11 | CTA final + formulário | Conversão |
| 12 | Footer | Legal, contato, redes |

---

## Bloco 12 — Do protótipo ao código (5 min)

### FALA
> Framer valida **layout, interação e narrativa**. O código neste repositório valida **performance, integrações e evolução longa**.
>
> Ao migrar Figma/Framer → Next.js:
> - Exporte assets SVG quando possível
> - Tokens de cor e espaço em Tailwind `theme.extend`
> - Componentes 1:1 com Figma (Button, Section, Container)
> - Calculadora e formulário em React com estado real

### NOTA
Ordem do projeto Giz Pay: Figma wireframe → Figma visual → Framer interativo → feedback → implementação final em código.

---

## Bloco 13 — Encerramento e próximos passos (3 min)

### FALA
> Você agora tem o mapa:
> 1. **UX** — jornada e objetivos antes de pixels.
> 2. **UI** — hierarquia, sistema visual, componentes.
> 3. **Front-end** — HTML semântico, responsivo, acessível, rápido.
> 4. **Figma** — wireframe → design system → protótipo.
> 5. **Framer** — interação real e preview publicado.
>
> Próxima sessão: **auditoria detalhada do gizpay.com.br atual**, wireframes no Figma e primeira versão interativa no Framer — depois implementação do novo site aqui no repositório.

### EXERCÍCIO final (opcional, 30 min)
Complete o checklist em [`checklist-gizpay-redesign.md`](checklist-gizpay-redesign.md) até o item 4 (wireframes no Figma).

---

## Referência rápida — Glossário

| Termo | Definição curta |
|-------|----------------|
| **CTA** | Call to Action — botão ou link principal |
| **Hero** | Primeira seção visível ao abrir o site |
| **Wireframe** | Esqueleto sem design final |
| **Mockup** | Visual fiel ao produto final |
| **Prototype** | Mockup com cliques e fluxos |
| **Design system** | Conjunto de regras e componentes reutilizáveis |
| **Breakpoint** | Largura onde o layout muda |
| **Bounce rate** | % que sai sem interagir |
| **Conversão** | % que completa o objetivo (form, demo) |
| **White label** | Produto com marca do cliente (escola) |

---

## Referência rápida — Figma vs Framer

| Tarefa | Ferramenta |
|--------|------------|
| Brainstorm de layout | Figma |
| Design system | Figma |
| Protótipo clicável leve | Figma |
| Animação de scroll avançada | Framer |
| Calculadora interativa publicada | Framer |
| Site no ar com domínio | Framer |
| CRM, API, blog complexo, testes | Código (Next.js) |

---

*Material preparado para o redesign Giz Pay — Fase 1: Fundamentos.*
