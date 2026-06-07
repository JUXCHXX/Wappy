import { motion } from "framer-motion";
import { Share2, UserPlus, Gift, ArrowRight } from "lucide-react";

const REF_LINK = "https://wa.me/573226429963?text=Hola,%20quiero%20mi%20link%20de%20referido%20de%20Wappy";

const steps = [
  { icon: Share2, title: "Comparte tu link", desc: "Te damos un link único para enviar a quien quieras." },
  { icon: UserPlus, title: "Tu amigo se suscribe", desc: "Activa Wappy con tu link y empieza su prueba gratis." },
  { icon: Gift, title: "Tú ganas 10%", desc: "Te descontamos 10% de tu mensualidad por cada referido activo." },
];

export function Referrals() {
  return (
    <section id="referidos" className="relative bg-snow py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue">Referidos</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-ink">Recomienda y gana</h2>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-2">
          {steps.map((s, i) => (
            <div key={s.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-2xl p-7 border border-blue/10 text-center w-full md:w-auto"
              >
                <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-blue to-sky grid place-items-center text-white shadow-glow-sm">
                  <s.icon size={22} />
                </div>
                <div className="mt-5 font-mono text-xs text-blue">0{i + 1}</div>
                <h3 className="mt-1 font-display font-bold text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <>
                  <div className="hidden md:flex justify-center py-2 md:px-2">
                    <ArrowRight size={28} className="text-blue" />
                  </div>
                  <div className="md:hidden flex justify-center py-3">
                    <ArrowRight size={20} className="text-blue transform rotate-90" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={REF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-blue text-white font-medium shadow-glow hover:shadow-[0_0_60px_rgba(0,87,255,0.55)] transition-shadow"
          >
            Quiero mi link de referido
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
