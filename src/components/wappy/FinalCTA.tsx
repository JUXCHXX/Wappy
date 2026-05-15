import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/573226429963?text=Hola,%20quiero%20empezar%20mi%20prueba%20gratis%20de%20Wappy";

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-cta text-white">
      {/* Floating shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-sky/30 blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="absolute inset-0 grain opacity-50" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl lg:text-6xl leading-tight"
        >
          Tu negocio merece responder como uno grande
        </motion.h2>
        <p className="mt-5 text-lg lg:text-xl text-white/85">
          Las primeras 2 semanas son completamente gratis.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-blue font-semibold text-lg hover:scale-[1.02] transition-transform shadow-2xl"
        >
          Empezar ahora
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
