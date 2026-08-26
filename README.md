# TEM&FAZ — Página de Vendas

Landing page de vendas do TEM&FAZ: HTML + CSS + JavaScript puro, sem dependências externas de build. Mobile-first, pronta para publicar como site estático.

## Estrutura de arquivos

```
temefaz/
├── index.html          → estrutura e conteúdo da página
├── styles.css           → todo o design (tokens de cor, tipografia, layout, responsivo)
├── script.js            → interações (FAQ, animações, demo interativa, ganchos de tracking)
├── README.md
└── assets/
    ├── images/          → coloque aqui screenshots reais do app, foto de capa (og-cover.jpg) etc.
    └── icons/
        └── favicon.svg
```

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex.: `temefaz-vendas`).
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em "Build and deployment", selecione **Deploy from a branch**, branch `main` (ou `master`), pasta `/root`.
5. Salve. Em alguns minutos o GitHub fornecerá uma URL como `https://seu-usuario.github.io/temefaz-vendas/`.
6. (Opcional) Configure um domínio próprio em **Settings → Pages → Custom domain**.

Nenhum passo de build é necessário — é só HTML/CSS/JS servido diretamente.

## O que revisar antes de publicar

- **Imagens reais**: os mockups de celular e ícones de bônus na página atual são ilustrações em CSS/SVG/emoji porque nenhum screenshot real foi fornecido. Assim que tiver os prints reais do app e as artes dos 3 bônus, troque-os em `assets/images/` e ajuste os `<div class="phone-...">` / `.bonus-mock` correspondentes em `index.html`.
- **Depoimentos**: a seção de prova social tem 10 cards claramente marcados como *"Substituir por depoimento real"*. Troque o conteúdo assim que houver depoimentos reais — nunca publique depoimento fictício como se fosse real.
- **Rodapé**: os campos de razão social/CNPJ e os links de Política de Privacidade / Termos de Uso estão como placeholder — preencha com os dados reais da empresa.
- **Tracking**: há comentários no `<head>` do `index.html` e no `script.js` indicando exatamente onde colar o Meta Pixel, Google Analytics/GA4 e Google Tag Manager, além dos eventos de clique nos CTAs e no WhatsApp.
- **Links oficiais usados na página** (não altere sem necessidade):
  - Checkout: `https://go.perfectpay.com.br/PPU38CQFLLU`
  - VSL (Wistia): `https://apptemefaz.wistia.com/s/cd5oxttsfnvibt3`
  - WhatsApp: `https://wa.me/554792657734?text=OL%C3%81%20TENHO%20D%C3%9AVIDA%20DO%20TEM%26FAZ`

## Design

- Tipografia: **Fraunces** (títulos/display), **Manrope** (texto), **IBM Plex Mono** (preços, categorias, elementos estilo "comanda").
- Paleta: verde-erva (`--herb`), mostarda (`--mustard`), tomate (`--tomato`) para urgência/preço, base em tom papel/creme.
- Elemento de assinatura: a seção de oferta é estilizada como uma **comanda de cozinha impressa** (borda perfurada, fonte mono, carimbo "HOJE"), reforçando o empilhamento de valor de forma visual e coerente com o universo do produto.
- Sem falsa urgência, sem contagem regressiva fake, sem depoimento fictício — conforme solicitado no briefing.
