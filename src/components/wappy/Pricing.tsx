import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const WA_LINK = "https://wa.me/573226429963?text=Hola,%20quiero%20empezar%20mi%20prueba%20gratis%20de%20Wappy";

const plans = [
  {
    name: "Básico",
    monthly: 80000,
    features: ["Hasta 500 conversaciones/mes", "Respuestas con IA", "Agendamiento básico", "Soporte por chat"],
    highlight: false,
  },
  {
    name: "Pro",
    monthly: 120000,
    features: ["Conversaciones ilimitadas", "Verificación de pagos", "Reporte nocturno", "Reagendamiento con código", "Soporte prioritario"],
    highlight: true,
  },
  {
    name: "Premium",
    monthly: 180000,
    features: ["Todo lo de Pro", "Multi-agente humano", "Integración con tu CRM", "Reportes avanzados", "Manager dedicado"],
    highlight: false,
  },
];

const fmt = (n: number) => "$" + n.toLocaleString("es-CO");

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="planes" className="bg-snow py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue">Planes</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-ink">Precio honesto, valor real</h2>
          <p className="mt-4 text-lg text-muted-foreground">Todos los planes incluyen 2 semanas gratis.</p>

          <div className="mt-8 inline-flex items-center bg-white border border-blue/10 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                !annual ? "bg-blue text-white" : "text-ink"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                annual ? "bg-blue text-white" : "text-ink"
              }`}
            >
              Anual <span className="text-xs opacity-80">−20%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => {
            const price = annual ? Math.round(p.monthly * 0.8) : p.monthly;
            const isHighlight = p.highlight;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  isHighlight
                    ? "bg-blue text-white shadow-glow lg:-my-4 lg:py-12 border border-sky/40"
                    : "bg-white border border-blue/10 hover:border-blue/30 hover:shadow-[0_20px_60px_-20px_rgba(0,87,255,0.25)] transition-all"
                }`}
              >
                {isHighlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-sky text-night text-xs font-mono font-medium">
                    Más popular
                  </span>
                )}
                <div className={`text-sm font-mono uppercase tracking-[0.2em] ${isHighlight ? "text-sky" : "text-blue"}`}>
                  {p.name}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display font-bold text-5xl">{fmt(price)}</span>
                  <span className={`text-sm ${isHighlight ? "text-mist" : "text-muted-foreground"}`}>/mes</span>
                </div>
                <ul className="mt-7 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className={`mt-0.5 w-5 h-5 rounded-full grid place-items-center flex-shrink-0 ${
                        isHighlight ? "bg-white/20" : "bg-blue/10"
                      }`}>
                        <Check size={12} className={isHighlight ? "text-white" : "text-blue"} />
                      </span>
                      <span className={isHighlight ? "text-white" : "text-ink"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex justify-center items-center px-6 py-3.5 rounded-2xl font-medium transition ${
                    isHighlight
                      ? "bg-white text-blue hover:bg-snow"
                      : "bg-ink text-white hover:bg-blue"
                  }`}
                >
                  Empezar gratis
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
