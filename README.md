# Aula de UI/UX + redesign da Giz Pay

Curso prático de **UI, UX, front-end e conversão**, com roteiros prontos para gravar e revisar no [Frame.io](https://frame.io), e um **repaginamento do [gizpay.com.br](https://gizpay.com.br)** focado em captar escolas.

A Giz Pay é uma plataforma financeira para escolas: Pix, boleto e cartão, liquidação no CNPJ da instituição, sem intermediário retendo o caixa. O site novo não inventa o produto — dá cara, ritmo e interação para a direção, a tesouraria e a secretaria marcarem uma demonstração.

## O que tem neste repositório

- **8 aulas** em `/` e `/aula/[slug]` — teoria + caso Giz Pay + exercício
- **Roteiro Frame.io** em cada aula: locução com timecode, cenas, lower thirds, CSV de marcadores e comentários sugeridos (`#copy`, `#ui`, `#ux`, `#cta`…)
- **Estúdio** em `/frame-io` — pastas do projeto, protocolo de V1/V2/V3, hashtags
- **Auditoria** em `/auditoria` — o que manter, cortar e inventar no site atual
- **Laboratório** em `/laboratorio` — cinco perguntas antes de gravar a V1
- **Site redesenhado** em `/gizpay` — homepage interativa (seletor de papel, painel com Pix ao vivo, calculadora, portal clicável, form com estado de sucesso). Ative **Ver decisões de design** para ver por que cada bloco existe

## Como rodar

```bash
npm install
npm run dev
```

O servidor sobe em [http://127.0.0.1:43217](http://127.0.0.1:43217).

Scripts úteis:

```bash
npm run build   # checagem de produção
npm run lint
```

## Como usar com o Frame.io

1. Crie o projeto com as pastas `00_briefing`, `01_aulas`, `02_screencasts`, `03_aprovacao` (detalhe em `/frame-io`).
2. Abra a aula, copie a locução e grave o take (screencast do site atual + do `/gizpay`).
3. Suba o arquivo no Frame.io. Importe o CSV de marcadores ou cole os cards sugeridos — **um ponto por comentário**, no quadro certo.
4. V1 = história. V2 = picture lock. V3 = aprovação. Não misture as rodadas.
5. Share link interno para o time; share link limpo para revisão externa.

## Stack

Next.js, TypeScript, Tailwind CSS e shadcn/ui. Sem banco e sem autenticação: o progresso das aulas fica no `localStorage`, o formulário da Giz Pay é um ensaio de estados (vazio, erro, sucesso).

## Aviso

Este redesign é material didático. Oferta, números e canais comerciais foram tomados do site público da Giz Pay em agosto de 2026. Nomes de colégios no ticker são exemplos.
