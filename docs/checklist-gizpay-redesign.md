# Checklist — Redesign Giz Pay

Use este documento **depois** da aula. Marque cada item ao concluir.

> Versão em papel. A checklist marcável, que salva o progresso, está em `/projeto` no site deste repositório.

## 1. Descoberta (antes de abrir o Figma)

- [ ] Definir persona principal (diretor financeiro / mantenedor / secretária)
- [ ] Definir objetivo #1 do site (ex.: agendar demonstração)
- [ ] Definir objetivo #2 (ex.: WhatsApp comercial)
- [ ] Listar 3 diferenciais que o site precisa comunicar em 10 segundos
- [ ] Anotar 3 sites de referência (fintech B2B, edtech, SaaS) e o que copiar de cada um

## 2. Auditoria do site atual

- [ ] Mapear todas as seções existentes
- [ ] Identificar seções redundantes ou com copy repetido
- [ ] Testar mobile (375px) — anotar problemas de leitura/toque
- [ ] Testar formulário de lead — tempo até enviar, campos obrigatórios
- [ ] Testar calculadora — resultado é claro? CTA depois do resultado?
- [ ] Verificar velocidade (PageSpeed ou Lighthouse)
- [ ] Verificar meta title, description e headings (H1 único)

## 3. Figma — Design system mínimo

- [ ] Criar arquivo `Giz Pay — Redesign`
- [ ] Definir paleta (primária, secundária, sucesso, erro, neutros)
- [ ] Definir tipografia (título, corpo, label, mono se necessário)
- [ ] Definir escala de espaçamento (4, 8, 12, 16, 24, 32, 48, 64)
- [ ] Componentes: botão primário/secundário, input, card, badge, navbar, footer
- [ ] Grid desktop (12 col) e mobile (4 col)

## 4. Figma — Páginas e fluxos

- [ ] Wireframe mobile da home (sem cores)
- [ ] Wireframe desktop da home
- [ ] Fluxo: hero → calculadora → CTA demo
- [ ] Fluxo: comparativo → FAQ → formulário
- [ ] Mockup high-fidelity da home (uma seção por frame)
- [ ] Protótipo clicável no Figma (links entre frames)

## 5. Framer — Site interativo

- [ ] Importar ou recriar design no Framer
- [ ] Navbar fixa + menu mobile
- [ ] Scroll suave entre seções
- [ ] Calculadora funcional (inputs + resultado dinâmico)
- [ ] Modal comparativo
- [ ] Formulário com validação básica
- [ ] Breakpoints 1440 / 768 / 375 testados
- [ ] Publicar preview e compartilhar link

## 6. Conversão e conteúdo

- [ ] CTA primário repetido após cada bloco de valor
- [ ] Copy do hero revisada (problema + solução + prova)
- [ ] Números com contexto (não só “-80%”)
- [ ] FAQ cobre as 5 dúvidas que travam a demo
- [ ] WhatsApp visível sem competir com CTA principal

## 7. Antes de publicar

- [ ] Contraste de texto (WCAG AA)
- [ ] Foco visível em links e botões (tab)
- [ ] Imagens com alt text
- [ ] Favicon e Open Graph
- [ ] Teste em Chrome + Safari + celular real
