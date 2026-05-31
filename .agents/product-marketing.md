# Product Marketing Context — RealEstateX

*Last updated: 2026-05-31*
*Mercado primario: México 🇲🇽 — todos los precios en MXN +IVA, copy en tuteo.*

> Contexto base que todos los skills de marketing leen. Incluye posicionamiento + la **Oferta Irresistible** (Grand Slam Offer) que usamos en landing, ads, cold outreach y demos.

---

## Product Overview

**One-liner:**
La web inmobiliaria que tus competidores no tienen — lista en 48 horas, con tu marca, tu dominio y leads directo a tu Gmail.

**What it does:**
RealEstateX es una plantilla web profesional para brokers inmobiliarios independientes y agencias chicas en LatAm. Reemplaza la dependencia de portales (Idealista, Lamudi, Zillow) con una web propia con SEO real, fichas PDF, calculadora de hipoteca, favoritos/comparador, panel admin y leads que entran directo al inbox del broker. Se entrega lista en 48hs y el broker no toca código.

**Product category:**
Web inmobiliaria para brokers / "Squarespace para brokers" / Portal propio del broker.

**Product type:**
SaaS (web + admin) con modelo híbrido: producto base barato/gratis + upsells de integraciones (IA, automatizaciones, CRM, mensajería). Plataforma API-first en camino — ver visión en [[realestatex-vision]].

**Business model (precios México, MXN +IVA):**

| Tier | Para quién | Mensual | Anual (2 meses free) | One-time |
|---|---|---|---|---|
| **Tier 0 — Open Source** | Devs / sobrino programador | Gratis | — | — |
| **Tier 1 — Esencial** | Broker independiente, 5–20 props | **$890 MXN/mes** | $8,900/año | **$7,990** |
| **Tier 2 — Pro** ⭐ recomendado | Broker + IA, 20–100 props | **$1,490 MXN/mes** | $14,900/año | $14,900 |
| **Tier 3 — Agencia** | Agencia 2–8 agentes | **$2,990 MXN/mes** | $29,900/año | $29,900 |

**Anclas competitivas MX:** EasyBroker básico $890/mes, Pro $1,990/mes; Wiggot $500–1,500/mes; portales (Inmuebles24/Lamudi) $3,000–8,000/mes en anuncios destacados.

**Add-ons (upsell recurrente — donde está el LTV real):**
- Agente IA pre-calificador 24/7: $490 MXN/mes
- Sync con EasyBroker / Wiggot: $290 MXN/mes
- WhatsApp Business API + bot: $390 MXN/mes
- Email automation (Resend): $290 MXN/mes
- Google Ads + Meta tracking: $190 MXN/mes
- Carga adicional de 30 propiedades: $990 one-time
- Migración desde otra web: $2,990 one-time

LTV objetivo Tier 2 + 2 add-ons promedio ≈ $2,300–$2,700 MXN/mes.

**Pagos México (todos obligatorios):** Stripe (tarjeta + AMEX), MercadoPago, OXXO (Tier 1 crítico), SPEI/transferencia bancaria (Anual y Agencia). **Factura con RFC obligatoria** (Facturapi / Facturama / similar) — el broker la pide para deducir como gasto.

Stack técnico: Next.js 14 + Supabase + Netlify (ver [[user-stack]]).

---

## Target Audience

**Target companies:**
- **Primario:** broker inmobiliario independiente en LatAm (México, Argentina, Uruguay, Colombia, Chile, España) con 5–50 propiedades activas. Vende/renta residencial principalmente.
- **Secundario:** agencia inmobiliaria chica (2–8 agentes) que quiere salir de portales.
- **Terciario:** developers / constructoras chicas con 1 proyecto que necesitan landing dedicada.

**Decision-makers:**
- El broker mismo (es dueño y operador — no hay comité de compras).
- En agencias chicas: el dueño/socio fundador.

**Primary use case:**
Tener una web propia profesional **rápido y barato**, para no depender de portales que cobran por lead, esconden los datos del comprador y enchufan al broker en una lista de 5.000 anuncios idénticos.

**Jobs to be done:**
- Capturar leads que sean **míos** (no del portal).
- Verme profesional ante el cliente (mandar link de propiedad con MI marca, no de Lamudi).
- Aparecer en Google cuando alguien busca "casa en venta [mi ciudad]".
- Tener una ficha de propiedad bonita que pueda mandar por WhatsApp.

**Use cases:**
- Broker recibe lead desde Instagram → manda link a SU web (no a un portal).
- Cliente busca "departamento Polanco 3 cuartos" en Google → encuentra la ficha del broker (no del portal).
- Broker imprime PDF brandeado para una reunión presencial.
- Cliente usa la calculadora de hipoteca, se queda 4 minutos, deja sus datos.
- Agencia con 5 agentes da a cada uno su sub-perfil dentro de la misma web.

---

## Personas

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| **Broker independiente** (35–55, 5–10 años de experiencia, $50k–$200k anuales) | Cerrar más operaciones, no parecer "uno más", ahorrar tiempo | Depende de portales y referidos; no sabe nada técnico; web de WordPress que nunca terminó | Web lista en 48hs sin tocar código, leads que llegan a su Gmail |
| **Agente joven** (25–35, 1–4 años) | Diferenciarse, construir marca personal, vender por Instagram | No tiene presupuesto para diseñador web ni desarrollador | Plantilla profesional barata que se ve como agencia grande |
| **Dueño de agencia chica** (40–60) | Que sus agentes vendan más, retener talento | Cada agente quiere su propia marca; el sistema actual es Excel + WhatsApp | Multi-tenant para que cada agente tenga su sub-página con datos compartidos |

---

## Problems & Pain Points

**Core problem:**
El broker independiente y la agencia chica viven prisionera de los portales. Pagan por lead, no sabe quién es el comprador hasta tarde, compite contra 4.999 anuncios idénticos, y cuando consigue un cliente, el cliente no recuerda al broker — recuerda "lo vi en Lamudi".

**Why alternatives fall short:**
- **Portales (Lamudi, Inmuebles24, Idealista):** cobran $10–$50 por lead, ocultan datos del comprador, te mezclan con la competencia, no construyen tu marca.
- **WordPress con plugin inmobiliario:** $500–$2.000 a un freelancer, 2–6 semanas de delay, después rompe en cada update, el broker no puede actualizar nada solo.
- **Squarespace / Wix:** lindas pero sin ficha técnica de propiedad, sin SEO de listings, sin calculadora, sin PDF.
- **Hacer su web "yo mismo":** 0% de los brokers lo termina. La empezaron 3 veces en 2 años.
- **CRM inmobiliarios (Top Producer, Follow Up Boss):** $80–$200/mes solo para gestionar contactos, no incluyen sitio público.

**What it costs them:**
- $300–$800/mes en leads de portales que no convierten.
- 30–50% de leads se pierden porque llegan tarde o sin contexto.
- Comisiones perdidas: 1 operación promedio = $3.000–$10.000 USD de comisión. Perder 2/año = $6k–$20k.
- Tiempo: 2–5hs/semana subiendo manualmente la misma propiedad a 4 portales distintos.

**Emotional tension:**
- "Me siento como un anuncio clasificado más."
- "No sé si los leads que me llegan son buenos o basura del portal."
- "Empecé mi web hace 8 meses y sigue diciendo 'Coming Soon'."
- Miedo a quedarse atrás de los brokers jóvenes con Instagram + web propia.

---

## Competitive Landscape

**Direct competitors** (misma solución, mismo problema):
- **Real Estate Webmasters / Placester / iHouseWeb:** $99–$300/mes, plantillas viejas, mercado US/CA, no soportan voseo ni MXN/UYU, contratos de 12 meses → caro y rígido para el broker LatAm chico.
- **Wix Real Estate templates:** $20/mes pero sin features inmobiliarias reales (no PDF, no calc, no schema.org), el broker termina pidiendo a un freelancer que lo arregle.

**Secondary competitors** (distinta solución, mismo problema):
- **Portales (Idealista, Lamudi, Inmuebles24, ZonaProp, Mercado Libre Inmuebles):** consumen el lead, ocultan al comprador, no construyen marca. Cobran $10–$50 por lead.
- **WordPress + plugin (Houzez, Realtyna):** flexible pero requiere desarrollador, $1.000+ setup + mantenimiento.

**Indirect competitors** (enfoque opuesto):
- **Instagram + WhatsApp only:** muchos brokers operan 100% por redes. Funciona para volumen bajo pero no escala, no aparecen en Google y dependen del algoritmo.
- **No tener web:** "ya me conocen, no necesito web". Falla porque el referido del referido busca en Google.

---

## Differentiation

**Key differentiators:**
1. **Listo en 48hs, no en 6 semanas.** Done-for-you, sin freelancer intermedio.
2. **Hecho para LatAm:** voseo, MXN/ARS/UYU/COP/CLP/USD, calculadora con tasas locales, WhatsApp first.
3. **Sin contratos largos.** Mes a mes o pago único. El broker se queda con la web.
4. **API-first / open-source friendly:** el broker (o su sobrino programador) puede extender, integrar IA propia, conectar su CRM. No estás encerrado.
5. **Upsells modulares.** No te obligan a pagar un "enterprise" para tener IA — agregás lo que necesitás cuando lo necesitás.
6. **Leads a Gmail, no a otro panel.** El broker odia aprender herramientas nuevas. RealEstateX se acopla al flujo que ya tiene.

**How we do it differently:**
- Producto base **gratis o muy barato** para bajar la fricción de entrada.
- Monetizamos con **integraciones de IA y automatización** que valen claramente la pena (agente que pre-califica, sync con CRM, WhatsApp bot).
- Done-for-you launch en 48hs en lugar de "registráte y armá vos tu sitio en 4 semanas".

**Why that's better:**
- Broker no necesita aprender nada nuevo.
- Empieza a recibir leads en 2 días, no en 2 meses.
- Paga solo por lo que usa.
- Su web no muere si deja de pagar el SaaS — el código es suyo.

**Why customers choose us:**
"Es la única opción que me deja tener web profesional sin freelancer, sin learning curve, sin contrato anual, y con leads que llegan donde ya trabajo (mi inbox)."

---

## Objections

| Objection | Response |
|-----------|----------|
| "Ya tengo perfil en Inmuebles24/Lamudi, ¿para qué necesito web?" | El portal capta el lead, no vos. Tu web es donde el cliente te recuerda a vos cuando refiere a su primo. Y el SEO de tu web tarda 3 meses en activarse — empezá ahora. |
| "No tengo tiempo para armar una web." | Por eso la armamos nosotros. 20min de llamada, 48hs después está lista. Vos solo nos pasás logo + datos. |
| "$890/mes es caro, ¿no?" | Inmuebles24 te cobra $3,000–$8,000/mes en anuncios destacados. Tu web te cuesta menos de un tercio y los leads son tuyos, no del portal. Factura con RFC, deducible al 100%. El pago único de $7,990 = breakeven en 9 meses vs SaaS. |
| "Ya intenté con Wix/WordPress y nunca la terminé." | Por eso te la entregamos terminada. No es un editor en blanco — es una web funcionando en 48hs con propiedades cargadas. |
| "¿Y si me arrepiento? ¿Quedo atado?" | Sin contratos. Mes a mes. Si cancelás, el código de la web es tuyo (open-source) — la podés llevar a cualquier hosting. |
| "Soy una agencia con varios agentes, ¿sirve?" | Sí, tier multi-broker: cada agente tiene su sub-perfil, comparten propiedades y stats centralizadas. |
| "¿Y si no llegan leads?" | Por eso ofrecemos la garantía de 60 días: si no recibís al menos 5 leads cualificados en 60 días, te devolvemos el dinero. |

**Anti-persona:**
- Broker enterprise con CRM custom y equipo de marketing → necesita algo a medida, no plantilla.
- Broker que NO quiere su marca propia (operadores 100% portales, comisión rápida) → no le interesa el branding.
- Mercado US/Canadá con MLS integrations obligatorias → tenemos roadmap pero hoy no.
- Constructoras grandes con 20+ proyectos → necesitan CRM inmobiliario completo, no web.

---

## Switching Dynamics (JTBD Four Forces)

**Push** (lo que los empuja a buscar algo nuevo):
- "Pago $400/mes a portales y los leads son malísimos."
- "Mi competidor joven tiene una web hermosa y a mí me da vergüenza mandar mi Wix viejo."
- "Quiero un dominio mío para poner en mi tarjeta."
- Update de Google de junio 2025 que castigó portales sin Schema.org → brokers se enteran de SEO técnico.

**Pull** (lo que los atrae a nosotros):
- "Lista en 48hs" — velocidad.
- "Tu marca, tu dominio, tu inbox" — propiedad y control.
- Demo visual: ver una web ejemplo que se ve como Idealista pero con la marca del broker.
- Testimonios de brokers que dejaron de pagar portales.

**Habit** (lo que los mantiene en su situación actual):
- Costumbre de subir propiedades a portales (hábito de 5–10 años).
- "Mi cliente siempre me llega por WhatsApp, no necesito más."
- Miedo a la tecnología.

**Anxiety** (lo que los preocupa de cambiar):
- "¿Y si pago y no llegan leads?"
- "¿Y si tengo que aprender un panel complicado?"
- "¿Y si el sitio se rompe y nadie me atiende?"
- "¿Y si quedo atado por 12 meses?"

---

## Customer Language

**How they describe the problem (verbatim):**
- "Los portales me cobran un huevo y los leads son malísimos."
- "Quiero tener algo MÍO, no estar perdido entre 5.000 anuncios."
- "Empecé mi web hace meses y sigue sin terminar."
- "No tengo tiempo de pelearme con WordPress."
- "Mi sobrino me dijo que necesito SEO pero no sé qué es eso."
- "El cliente me pregunta '¿tenés web?' y me da vergüenza."

**How they describe us (verbatim — aspirational, las queremos escuchar):**
- "Es como tener Idealista pero mío."
- "Me lo armaron y a los 2 días ya estaba recibiendo leads."
- "Por fin tengo una web que me da vergüenza no mostrar."
- "Me llegan los leads a mi Gmail como un email normal."

**Words to use (México — tuteo):**
- "Tu marca, tu dominio, tu inbox."
- "Lista en 48 horas."
- "Sin permanencia, sin contratos." *(en MX se dice "permanencia", no "compromisos largos")*
- "Te la armamos llave en mano."
- "Tus leads, no del portal."
- "Tuteo natural" (agenda, quieres, pruebas, tienes) — **clave para México**. NO usar voseo (agendá/querés/tenés) — choca con el mercado MX.
- "Factura con RFC, deducible al 100%."
- "Pagas solo lo que usas."
- "Profesional." "Real." "Rápido."

**Variante voseo** (Argentina/Uruguay): mantener archivo separado o servir desde rutas `/ar` `/uy`. No mezclar en la landing principal MX.

**Words to avoid:**
- "SaaS", "platform", "stack", "deploy" — jerga técnica.
- "Enterprise", "scalable" — sienten que no es para ellos.
- "Disruptivo", "revolucionario" — clichés.
- "Onboarding" → decir "te ayudamos a empezar".
- "Plan Pro/Business/Premium" genérico → mejor "Launch", "Growth", "Agencia".

**Glossary:**
| Término | Significado |
|---------|-------------|
| Lead | Persona que dejó sus datos preguntando por una propiedad |
| Ficha de propiedad | Página individual de una propiedad con fotos, precio, descripción |
| Portal | Inmuebles24, Lamudi, Idealista, ZonaProp — sitios donde el broker paga por anuncio |
| MLS | Multiple Listing Service — base de datos compartida entre brokers (común en US/CA) |
| Schema.org RealEstateListing | Marcado SEO que hace que Google muestre precio/m²/ubicación en resultados |
| Pre-calificar | Filtrar si un lead tiene capacidad real de comprar antes de invertir tiempo |

---

## Brand Voice

**Tone:**
Cercano, directo, "compinche que sabe de tecnología y te lo explica fácil". No corporativo, no hype-y. Honesto sobre lo que sí y lo que no hace el producto.

**Style:**
- Voseo rioplatense ("agendá", "probás", "querés") — funciona en Argentina, Uruguay, parcialmente neutral en México/Colombia.
- Frases cortas, una idea por línea.
- Concreto > abstracto. Decir "leads a tu Gmail" no "comunicación omnicanal centralizada".
- Mostrar antes que decir: mockups, ejemplos reales.
- Usar números: "$497", "48 horas", "5 leads en 60 días".

**Personality:**
Directo. Práctico. Honesto. Cercano. Un poco rebelde (vs. portales).

---

## Proof Points

**Metrics (a construir / declarar honestamente cuando estén):**
- "Web lista en 48 horas o no pagás" — claim operacional.
- "60 días de garantía o devolución" — risk-reversal.
- Tiempo promedio de carga: <1.5s.
- Schema.org en cada listing → Google muestra precio/ubicación.
- *(Pendiente: # de brokers activos, # de leads generados/mes, tiempo promedio en sitio.)*

**Customers (placeholder hasta tener casos reales):**
- 🟡 Pendiente: levantar 5 casos en los primeros 90 días para usar como social proof.

**Testimonials (a recolectar):**
- 🟡 Pendiente: pedir testimonio + foto a cada cliente del Tier 1 a los 30 días.

**Value themes:**
| Tema | Prueba |
|------|--------|
| Velocidad | 48hs entrega + demo en 24hs |
| Marca propia | Cada cliente: dominio + colores + logo en cada página + PDF |
| Leads de calidad | Form con teléfono obligatorio + webhook a CRM + agente IA pre-califica (upsell) |
| Sin riesgo | 60 días garantía + sin contratos + código tuyo |
| SEO real | Schema.org + sitemap + OG tags + Lighthouse 95+ |

---

## Goals

**Business goal:**
Llegar a **100 brokers de pago** en 12 meses (mix Tier 1 + Tier 2) y validar el modelo de "producto base barato + upsell de IA/integraciones". MRR objetivo a 12 meses: ~$10.000 USD.

**Conversion action:**
**Primaria:** agendar demo (form en home → 20min de llamada → cierra Tier 1 Launch).
**Secundaria:** clonar el template open-source (Tier 0) → lead de upsell futuro a integraciones.

**Current metrics:**
- 🟡 Pendiente: setup analytics (GA4 + PostHog para funnel del marketing site).
- Baseline a medir: visitas a marketing site, % que llega a form, % que completa, % que cierra demo.

---

# 🎯 LA OFERTA IRRESISTIBLE (Grand Slam Offer) — México

> Esta es la **oferta principal** para Tier 1 (Esencial Done-for-you). Es la que usamos en landing, ads, cold outreach, demos y discovery calls. Diseñada con la **Ecuación de Valor de Hormozi**: maximizar (Resultado × Probabilidad de Lograrlo) ÷ (Tiempo × Esfuerzo).
>
> *Todos los precios en MXN +IVA. Factura con RFC, deducible al 100%.*

## El Headline (México — tuteo)

> **"Tu web inmobiliaria profesional, con tu marca, tu dominio y leads directo a tu Gmail — lista en 48 horas. O no pagas nada."**

Sub: *Sin freelancers. Sin permanencia. Sin pelearte con WordPress. Solo brokers serios — armamos 10 webs por mes a mano. Factura con RFC.*

---

## Por qué es irresistible (la mecánica)

**Resultado soñado:**
Tener una web profesional propia que genera leads, sin esfuerzo, sin riesgo, antes del fin de semana.

**Probabilidad percibida:**
- Garantía de 60 días.
- Nosotros lo hacemos (no "te enseñamos a hacerlo").
- Mockup en vivo en la demo.

**Tiempo:**
- 20 min de llamada hoy.
- 48 horas hasta tu web funcionando.

**Esfuerzo:**
- Pasás logo + 5 datos + fotos de propiedades. Nada más.

---

## El Stack de Valor (lo que recibes)

### 1. Tu Web Inmobiliaria Profesional — *valor real: $35,000 MXN*
- Diseño moderno (mobile-first, Lighthouse 95+).
- Tu dominio (o subdominio gratis si no tienes).
- Tu logo, tus colores, tu slogan, tu foto.
- Páginas: Inicio, Propiedades, Detalle, Sobre mí, Contacto.
- Hosting incluido en Netlify (CDN global, SSL, sin downtime).

### 2. Carga Inicial de Hasta 30 Propiedades — *valor: $8,900 MXN*
- Nosotros cargamos las primeras 30. Tú solo nos pasas CSV o los links del portal.
- Cada propiedad con fotos, precio, m², recámaras, ubicación en mapa, descripción.

### 3. SEO Técnico Configurado — *valor: $10,000 MXN*
- Schema.org RealEstateListing en cada propiedad (Google muestra precio y m² en resultados).
- Sitemap.xml + robots.txt automáticos.
- Open Graph + Twitter Cards (las cards bonitas cuando compartes por WhatsApp).
- Meta titles y descriptions optimizadas por propiedad.
- Velocidad <1.5s (Core Web Vitals en verde).

### 4. Leads a Tu Gmail + Webhook a tu CRM — *valor: $6,900 MXN*
- Cuando alguien pregunta por una propiedad, te llega un email con sus datos.
- Webhook configurable para Zapier/Make → conecta a EasyBroker, HubSpot, Sheets.
- Respondes desde Gmail como una conversación normal.

### 5. PDF Brandeado por Cada Propiedad — *valor: $5,400 MXN*
- Ficha PDF descargable con tu marca, tus colores y tus datos.
- Para mandar por WhatsApp o imprimir para reuniones presenciales.

### 6. Calculadora de Hipoteca con Tasas MX — *valor: $4,500 MXN*
- Tasas de bancos mexicanos precargadas (BBVA, Banorte, Santander, Scotiabank, Banamex).
- El visitante mueve sliders y ve su pago mensual con UDIs o pesos.
- Captura datos de los que calculan = leads de alta intención.

### 7. Galería + Mapa + Tour 360° Embed — *valor: $3,600 MXN*
- Lightbox fullscreen para fotos.
- Mapa con la ubicación de la propiedad.
- Soporte para Matterport, YouTube tours, video.

### 8. Favoritos + Comparador de Propiedades — *valor: $3,600 MXN*
- El visitante guarda propiedades y las compara lado a lado.
- Comparte el link con su pareja → más sesiones, más tiempo en sitio.

### 9. Panel Admin Simple — *valor: $7,200 MXN*
- Subes propiedades, fotos, precios desde un panel.
- No necesitas tocar código. No necesitas esperarnos a nosotros.

### 🎁 BONUS 1 — Agente IA Pre-calificador de Leads (3 meses gratis) — *valor: $1,470 MXN*
- Bot 24/7 que conversa con el lead, le pregunta presupuesto, timing y zona.
- Te llega un email solo cuando el lead **califica**. Filtra a los curiosos.
- (Normalmente $490 MXN/mes — incluido 3 meses.)

### 🎁 BONUS 2 — Botón WhatsApp + Chat Widget — *valor: $3,600 MXN*
- Botón flotante de WhatsApp en cada propiedad con mensaje pre-armado.
- Widget de chat (Crisp/Tidio) integrado en 5 minutos.

### 🎁 BONUS 3 — Secuencia de Email de Follow-up (7 días) — *valor: $3,600 MXN*
- Templates de 5 emails para los primeros 7 días después de cada lead.
- Probados, copia editable, listos para copiar a Mailchimp/Resend.

### 🎁 BONUS 4 — Setup de Google Analytics + Search Console — *valor: $2,700 MXN*
- Lo dejamos configurado para que veas qué propiedades reciben más visitas.

### 🎁 BONUS 5 — Guía "Cómo conseguir tus primeros 10 leads desde Instagram" (PDF) — *valor: $1,750 MXN*
- 12 páginas. Lo que funciona en 2026 con brokers mexicanos reales.

---

## Valor total: **~$98,220 MXN**

## **Tu precio hoy: $7,990 MXN pago único +IVA** *(o $890 MXN/mes +IVA — cancelas cuando quieras)*

> *Factura con RFC. Deducible 100% como gasto de operación.*
> *Pagas con tarjeta, OXXO, SPEI o MercadoPago.*

---

## La Garantía (Risk Reversal — México)

> **Garantía Triple "Sin Riesgo":**
>
> 1. **Garantía de Entrega:** Si en 48 horas tu web no está online, te devolvemos el 100% y te quedas con todo el trabajo hecho hasta ese momento.
>
> 2. **Garantía de Resultados (60 días):** Si en 60 días no recibes al menos **5 leads cualificados** por la web, te devolvemos el 100% y te quedas con el código. Lo puedes llevar a cualquier hosting.
>
> 3. **Garantía de Libertad — sin permanencia:** Cancelas desde tu panel en 1 clic, sin llamadas, sin trámites. Exportamos todo (propiedades + leads + dominio) y te quedas con el código. **No estás atado.**

*Plus: factura con RFC desde el día 1 — deducible al 100% como gasto de operación.*

---

## La Escasez (real, no fake)

> *Armamos solo **10 webs por mes** porque cada una la hacemos a mano para que quede perfecta.*
>
> *Este mes quedan: **6 slots**.*

(Hay que mantener este número real y actualizado — escasez fake mata la confianza.)

---

## La Urgencia (real, no fake)

> *Cada mes que pagas a Inmuebles24 ($3,000–$8,000 MXN) son leads que se queda el portal, no tú. Si arrancas esta semana, tu web está online el viernes — y los leads llegan a tu Gmail desde el día siguiente.*

---

## El CTA

**Primario:**
> 👉 **Agenda tu demo de 20 minutos** — te mostramos en vivo cómo se vería tu web con tus colores y una propiedad tuya cargada. *Sin compromiso. Si no te gusta, no pasa nada.*

**Secundario (lower friction):**
> *¿No quieres llamar? Mira la demo grabada (6 min) y responde este email si quieres que armemos tu web.*

---

## Cómo usar esta oferta

- **Landing principal:** este es el orden — Headline → Stack de valor (con valores) → Bonuses → Precio anclado → Garantía → Escasez → CTA.
- **Cold email / outreach:** abrir con un dolor específico ("vi tu perfil en Inmuebles24, ¿sabías que…") → 1 frase de la oferta → CTA a demo.
- **Ads:** A/B testear hooks — "lista en 48hs" vs "leads a tu Gmail" vs "sin pagar más a portales".
- **Discovery call:** dejar el precio para el minuto 15+, después de mostrar el stack y entender su situación.
- **Re-pricing roadmap MX:**
  - **Mes 1–3 (validación):** Esencial $890 / Pro $1,490 / Agencia $2,990 MXN — meta 10 clientes.
  - **Mes 4–6:** si >50% van directo a Pro, subir Esencial a $990 y Pro a $1,690.
  - **Mes 6–12:** Pro a $1,990 con grandfathering para los primeros 50.
  - **Año 2:** test de $1,290 MXN para Esencial si churn 60d < 5%.

---

## Variantes de Oferta (para distintos segmentos — MX)

### Para agencias chicas (2–8 agentes):
> "Una web para tu agencia + sub-perfil para cada agente, lista en 5 días. **$29,900 MXN** one-time o **$2,990/mes**."

### Para brokers que ya tienen web pero no funciona:
> "Migración llave en mano desde tu web actual. Mantenemos tu dominio y tu SEO. **$2,990 MXN one-time** (gratis si contratas plan anual)."

### Para developers/constructoras con 1 proyecto:
> "Landing del proyecto + showroom + lista de espera + tracking de leads. **$9,990 MXN one-time**."

---

## ⚠️ Voz: tuteo MX vs voseo AR/UY

Para mercado mexicano usar **tuteo** en TODA la copy:
- ✅ "Agenda tu demo", "¿Quieres tu web?", "Te la armamos", "Tú solo apruebas"
- ❌ "Agendá", "Querés", "Vos solo aprobás" (suena raro/extranjero en MX)

La landing actual en `marketing/components/` está en voseo — **requiere reescritura a tuteo** antes de lanzar en MX. Cuando se expanda a AR/UY: servir variantes en rutas `/ar` `/uy` con voseo, mantener `/mx` o root con tuteo.

---

*Cuando otros skills (copywriting, ads, emails, pricing, launch, social) generen contenido para RealEstateX, deberían leer este archivo y mantener consistencia de oferta, voz, precios, garantía y vocabulario.*
