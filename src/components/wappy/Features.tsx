import { motion } from "framer-motion";
import { Bot, Calendar, CreditCard, Receipt, BarChart3, RotateCcw } from "lucide-react";
import { ChatMock } from "./ChatMock";

const features = [
  { icon: Bot, title: "IA que habla como tú", desc: "Aprende tu tono, tus precios y tus respuestas." },
  { icon: Calendar, title: "Agendamiento automático", desc: "Reserva citas en tu calendario sin intervención." },
  { icon: CreditCard, title: "Verificación de pagos", desc: "Confirma abonos por Nequi, Daviplata o transferencia." },
  { icon: Receipt, title: "Factura automática", desc: "Genera y envía comprobantes apenas se confirma el pago." },
  { icon: BarChart3, title: "Reporte nocturno", desc: "Cada noche recibes un resumen de citas, pagos y conversaciones." },
  { icon: RotateCcw, title: "Reagendamiento con código", desc: "Tus clientes mueven citas con un código único, sin llamarte." },
];

export function Features() {
  return (
    <section className="bg-night text-white py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-blue/20 blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">Funciones</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Todo lo que necesitas, nada que no uses
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass rounded-2xl p-7 hover:-translate-y-2 hover:shadow-glow-sky hover:border-sky/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue to-sky grid place-items-center shadow-glow-sm">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <p className="text-center text-sm font-mono uppercase tracking-[0.2em] text-sky mb-6">
            Demo en vivo
          </p>
          <ChatMock variant="wide" />
        </div>
      </div>
    </section>
  );
}
