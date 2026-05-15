import { motion } from "framer-motion";
import { MessageSquare, Settings2, Rocket, Sparkles } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Cuéntanos tu negocio", desc: "Compartes cómo atiendes, qué servicios ofreces y tus horarios." },
  { icon: Settings2, title: "Entrenamos tu IA", desc: "Adaptamos el bot al tono de tu marca y tus respuestas frecuentes." },
  { icon: Rocket, title: "Conectamos tu WhatsApp", desc: "Lo enlazamos a tu número actual sin perder ningún chat." },
  { icon: Sparkles, title: "Vives tranquilo", desc: "Tu negocio responde, agenda y cobra mientras tú haces lo tuyo." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-snow py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue">Cómo funciona</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-ink">
            De cero a bot activo en menos de un día
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Sin código, sin técnicos.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-white rounded-2xl p-7 border border-blue/10 hover:border-blue/30 hover:shadow-[0_20px_60px_-20px_rgba(0,87,255,0.3)] transition-all"
            >
              <div className="absolute top-4 right-5 font-display font-bold text-6xl text-blue/10 select-none">
                0{i + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue to-sky grid place-items-center text-white shadow-glow-sm">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
