"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  propertiesCount: string;
  notes: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  propertiesCount: "",
  notes: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (!form.name.trim() || !form.email.trim()) {
      setStatus("error");
      setErrorMsg("Por favor completa nombre y email.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Error al enviar");
      }
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Algo salió mal. Prueba de nuevo o escríbenos a hola@realestatex.com");
    }
  };

  return (
    <section id="contact" className="bg-slate-950 text-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Agenda tu demo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Tu primer lead puede llegar
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              este viernes
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            20 minutos. Te mostramos en vivo cómo se vería tu web con tus colores
            y una propiedad tuya cargada. Sin compromiso.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              60 días de garantía
            </span>
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Sin contratos
            </span>
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              El código de tu web es tuyo
            </span>
          </div>
        </div>

        {status === "success" ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-2xl font-bold mb-2">¡Recibido!</h3>
            <p className="text-slate-300">
              Te escribimos en menos de 24hs al email que dejaste para coordinar
              tu demo. Si quieres acelerar, mándanos un WhatsApp.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-indigo-400 hover:underline"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-200">
                  Nombre *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-200">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="juan@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-slate-200">
                  WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="+52 55 1234 5678"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-2 text-slate-200">
                  Ciudad
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="Ciudad de México"
                />
              </div>
            </div>

            <div>
              <label htmlFor="propertiesCount" className="block text-sm font-medium mb-2 text-slate-200">
                ¿Cuántas propiedades manejas?
              </label>
              <select
                id="propertiesCount"
                name="propertiesCount"
                value={form.propertiesCount}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              >
                <option value="">Elige una opción</option>
                <option value="1-10">1 a 10</option>
                <option value="11-30">11 a 30</option>
                <option value="31-50">31 a 50</option>
                <option value="50+">Más de 50</option>
                <option value="agencia">Soy una agencia con varios brokers</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-2 text-slate-200">
                Algo más que quieras contarnos (opcional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                placeholder="¿Ya tienes dominio? ¿De dónde nos conociste?"
              />
            </div>

            {errorMsg && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-300 rounded-lg px-4 py-3 text-sm">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            >
              {status === "loading" ? "Enviando..." : (
                <>
                  Agendar mi demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>

            <p className="text-xs text-slate-500 text-center">
              Te respondemos en menos de 24hs. Sin spam, sin permanencia. Facturamos con RFC.
              <br />
              <span className="text-slate-400">
                Si en 60 días no recibes 5 leads cualificados, te devolvemos el 100% y te quedas con la web.
              </span>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
