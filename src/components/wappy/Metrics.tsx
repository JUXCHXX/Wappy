import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const items = [
  { value: 24, suffix: "/7", label: "Disponible siempre" },
  { value: 1, prefix: "<", suffix: "s", label: "Tiempo de respuesta" },
  { value: 10, suffix: "%", label: "Descuento por referido" },
  { value: 0, prefix: "$", label: "Costo de instalación" },
];

export function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-night text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 lg:p-8 hover:border-sky/40 hover:shadow-glow-sky transition-all"
          >
            <div className="font-display font-bold text-4xl lg:text-6xl tracking-tight">
              {it.prefix}
              {inView ? (
                <CountUp end={it.value} duration={1.6} />
              ) : (
                0
              )}
              {it.suffix}
            </div>
            <div className="mt-2 text-sm text-mist">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
