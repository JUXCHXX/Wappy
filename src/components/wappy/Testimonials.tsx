import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    name: "Laura M.",
    business: "Salón Aurora · Medellín",
    initials: "LM",
    quote: "En la primera semana agendamos 38 citas sin levantar el teléfono. Wappy responde mejor que mi recepcionista.",
  },
  {
    name: "Carlos R.",
    business: "Estudio Tatto Negro · Bogotá",
    initials: "CR",
    quote: "Lo mejor: verifica los abonos solo. Antes perdía clientes por no contestar a tiempo. Hoy es imposible perderlos.",
  },
  {
    name: "Daniela P.",
    business: "Spa Lumière · Cali",
    initials: "DP",
    quote: "Setup en un día y listo. La IA habla con el tono de mi marca. Mis clientes ni se dan cuenta de que es un bot.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);
  const item = items[i];

  return (
    <section className="bg-night text-white py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">Testimonios</p>
        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Lo que dicen quienes ya usan Wappy
        </h2>

        <div className="mt-12 relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 lg:p-12"
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-display italic text-2xl lg:text-3xl leading-snug">
                "{item.quote}"
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky to-blue grid place-items-center font-bold">
                  {item.initials}
                </div>
                <div className="text-left">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-mist">{item.business}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
            className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 grid place-items-center"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {items.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                className={`h-2 rounded-full transition-all ${
                  k === i ? "w-8 bg-sky" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((v) => (v + 1) % items.length)}
            className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 grid place-items-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
