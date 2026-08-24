# Wireframes — Giz Pay Redesign (Figma)

Guia para montar os wireframes no Figma, alinhado ao site local em `/site` deste repositório.

**Arquivo Figma:** `Giz Pay — Redesign`  
**Ordem:** mobile 390px primeiro → desktop 1440px  
**Versão interativa:** http://localhost:43117/wireframes

---

## Regras do wireframe (fase cinza)

- Fundo dos frames: `#F3F4F6`
- Blocos: retângulos `#D1D5DB`, border-radius 8–16px
- Texto placeholder: `#6B7280`, Inter 14px
- **Sem cor de marca ainda** — só hierarquia e ordem
- Auto Layout (Shift+A) em navbar, cards e stacks
- Um frame = uma seção da homepage

---

## Frames

### 01 · Navbar
- **Mobile 390×64** · **Desktop 1440×64**
- Logo | links (Como funciona, Calculadora, Módulos, Segurança) | CTA
- Mobile: menu hamburger; CTA também na barra fixa inferior

### 02 · Hero
- **Mobile 390×720** · **Desktop 1440×680**
- Coluna esquerda: overline, H1, subtítulo, 2 botões, microcopy
- Coluna direita: retângulo “mock painel” (gráfico + 3 métricas + feed)

### 03 · Prova social
- Logos em linha (4 placeholders)
- 3 números grandes: faturamento / escolas / inadimplência
- Linha disclaimer 11px

### 04 · Problema
- H2 + 4 cards (métrica no topo, título, parágrafo)
- Grid 1 col mobile, 4 col desktop

### 05 · Como funciona
- H2 + row de 4 tabs numeradas
- Área de detalhe abaixo (muda conforme tab)

### 06 · Calculadora
- Coluna inputs: 3 sliders com label + valor
- Coluna resultado: número grande + parágrafo + CTA
- Fundo escuro no wireframe = cinza `#374151` para diferenciar

### 07 · Depoimento
- Blockquote grande + avatar/nome + 2 métricas

### 08 · Comparativo
- Toggle segmentado (2 opções)
- Lista 5 linhas: critério | valor
- **Interação:** espelhar `/site` — toggle muda conteúdo

### 09 · Módulos
- Grid 2×2 cards com sigla + título + texto

### 10 · Portal
- Texto + bullets à esquerda
- Mock celular à direita (375×667 interno)

### 11 · Segurança
- 4 cards com ícone placeholder

### 12 · FAQ
- Accordion 5 itens, primeiro expandido

### 13 · Conversão
- Copy + WhatsApp | Formulário 5 campos + botão

### 14 · Footer
- 3 colunas: marca | produto | contato

---

## Tokens (página 🎨 Design)

| Token | Hex | Uso |
|-------|-----|-----|
| deep | #07211B | Hero, footer |
| surface | #0E2F27 | Faixas escuras |
| light | #F6F8F5 | Seções claras |
| primary | #4ADE80 | CTAs |
| fg-light | #0B1F1A | Texto em claro |
| muted-light | #5A6B64 | Secundário |

**Fontes:** Fraunces (títulos), Inter (corpo), JetBrains Mono (números)

---

## Protótipo Figma

Conectar:
- “Agendar demonstração” → frame 13 ou scroll to #agendar
- “Calcular economia” → frame 06
- Links nav → frames correspondentes

---

## Validação no repo

Após wireframe → high-fidelity:

```bash
npm run dev
# Abrir http://localhost:43117/site
```

Compare seção por seção. Ajuste Figma ou código; commit no GitHub.

---

Ver também: [`SITE-LOCAL.md`](SITE-LOCAL.md)
