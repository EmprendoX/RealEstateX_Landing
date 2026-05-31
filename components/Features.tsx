import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const iconClass = "w-6 h-6";

const FEATURES: Feature[] = [
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Tu marca, tu dominio",
    description: "Deja de ser un anuncio más entre 5,000 en Inmuebles24. Tu logo, tus colores, tu dominio. El cliente te recuerda a ti — no al portal.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: "SEO real, no genérico",
    description: "Cada propiedad con Schema.org RealEstateListing. Google muestra precio, m² y ubicación en los resultados — antes que el portal.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Leads a tu Gmail",
    description: "El lead te llega a Gmail como un email normal. Respondes desde donde ya trabajas — sin paneles nuevos, sin extensiones, sin curva de aprendizaje.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Galería + mapa + tour 360°",
    description: "Lightbox fullscreen, mapa interactivo y soporte para Matterport y YouTube. Lo que el comprador espera ver — y lo que el portal no te deja personalizar.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "PDF brandeado de cada propiedad",
    description: "Cada propiedad genera una ficha PDF con tu logo arriba. La mandas por WhatsApp o la imprimes para reuniones — siempre con tu marca, nunca con la del portal.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-6 4h6M5 5a2 2 0 012-2h10a2 2 0 012 2v14l-3-2-3 2-3-2-3 2V5z" />
      </svg>
    ),
    title: "Calculadora de hipoteca con tasas MX",
    description: "Tasas de BBVA, Banorte, Santander y Scotiabank precargadas. El que se queda 4 minutos moviendo sliders es el que está listo para comprar — y tú te enteras.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Favoritos + comparador",
    description: "El visitante guarda propiedades, las compara lado a lado y comparte el link con su pareja. Más tiempo en sitio, más intención, más leads.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Panel admin simple",
    description: "Subes propiedades, fotos y precios desde un panel limpio. Sin tocar código, sin esperarnos. Cambias un precio a las 11pm y aparece online en 30 segundos.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Lo que incluye
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Todo lo que tiene Inmuebles24 —
            <br />
            <span className="text-slate-500">con tu marca y tus leads</span>
          </h2>
          <p className="text-lg text-slate-600">
            Web + carga de propiedades + SEO + PDF + calculadora + admin.{" "}
            <span className="text-slate-900 font-semibold">Valor real: $98,000 MXN.</span>{" "}
            Tu precio hoy: <span className="text-slate-900 font-semibold">$7,990 MXN</span> pago único o <span className="text-slate-900 font-semibold">$890 MXN/mes</span>.
            <br />
            <span className="text-sm text-slate-500">+IVA. Factura con RFC, deducible al 100%.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
