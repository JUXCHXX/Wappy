import { motion } from "framer-motion";
import { ArrowRight, Check, Zap } from "lucide-react";
import { ChatMock } from "./ChatMock";

const WA_LINK = "https://wa.me/573226429963?text=Hola,%20quiero%20empezar%20mi%20prueba%20gratis%20de%20Wappy";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden grain bg-night text-white">
      {/* Video bg */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=70"
      >
        <source
          src="https://cdn.pixabay.com/video/2021/10/12/91744-633488398_large.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,8,26,0.92) 0%, rgba(0,51,204,0.55) 100%)",
        }}
      />
      {/* glow blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-sky/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky/40 bg-white/5 backdrop-blur-md text-xs font-mono tracking-wide text-sky animate-pulse-glow"
            >
              <Zap size={14} />
              Automatización con IA · Colombia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display font-bold leading-[1.02] tracking-tight text-[2.6rem] sm:text-5xl lg:text-7xl"
            >
              Tu WhatsApp trabaja
              <br />
              mientras tú{" "}
              <span className="text-gradient-sky">descansas</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-lg lg:text-xl text-mist max-w-xl leading-relaxed"
            >
              Automatiza respuestas, agenda citas y cobra abonos con
              Inteligencia Artificial. Listo en 24 horas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-blue text-white font-medium shadow-glow hover:shadow-[0_0_60px_rgba(0,87,255,0.6)] transition-shadow"
              >
                Empezar 2 semanas gratis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center px-7 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white/10 transition"
              >
                Ver cómo funciona
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist"
            >
              {["Sin tarjeta de crédito", "Setup en 24h", "Cancela cuando quieras"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Check size={16} className="text-sky" />
                  {t}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="animate-float"
          >
            <ChatMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
