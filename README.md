# RealEstateX — Landing

Sitio comercial de RealEstateX. Separado del repo del producto ([EmprendoX/RealEstateX](https://github.com/EmprendoX/RealEstateX)) para iterar la landing rápido sin afectar la app del broker.

- **Stack:** Next.js 14 (Pages Router) + Tailwind + Resend (lead capture).
- **Mercado primario:** México 🇲🇽 — todos los precios en MXN +IVA, copy en tuteo.
- **Deploy:** Netlify.
- **Dominio sugerido:** `realestatex.mx` (raíz).

## Desarrollo

```bash
npm install
npm run dev        # corre en http://localhost:3100
```

## Variables de entorno

Copiá `.env.example` a `.env.local` y completá:

```
RESEND_API_KEY=
LEAD_INBOX_EMAIL=
```

## Contexto de producto

`.agents/product-marketing.md` contiene el posicionamiento completo + la Oferta Irresistible + el pricing MX. Los skills de marketing (`copywriting`, `pricing`, `ads`, `emails`, `launch`) leen este archivo automáticamente.

## Estructura

```
pages/
  index.tsx           Home (Hero + Features + HowItWorks + Contact)
  api/contact.ts      Endpoint para el form de lead capture
components/
  Hero.tsx
  Features.tsx
  HowItWorks.tsx
  ContactSection.tsx
  Nav.tsx
  Footer.tsx
styles/
  globals.css
.agents/
  product-marketing.md   Posicionamiento + oferta + pricing
```

## Relación con el repo del producto

- `realestatex-landing` (este repo) → sitio comercial → `realestatex.mx`
- `RealEstateX` → template del broker (la app que se clona por cliente) → `app.realestatex.mx` o `*.realestatex.mx`
- Eventualmente `realestatex-api` → API pública + webhooks.

Los dos repos comparten **solo** el archivo de contexto de marketing (`.agents/product-marketing.md`). Si actualizás precios o positioning, sincronizalo manualmente o consideralo "fuente de verdad" en uno de los dos.
