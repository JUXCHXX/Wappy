import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Msg = { from: "user" | "bot"; text: string; delay: number };

const script: Msg[] = [
  { from: "user", text: "Hola, ¿tienen cita el sábado?", delay: 0 },
  { from: "bot", text: "¡Hola! 👋 Sí, tenemos disponibles el sábado a las 10am, 2pm y 4pm. ¿Cuál prefieres?", delay: 1200 },
  { from: "user", text: "A las 2pm", delay: 3000 },
  { from: "bot", text: "Perfecto ✅ Para confirmar, te pido un abono de $20.000. Aquí tienes el link: nequi.co/wappy/...", delay: 4400 },
  { from: "user", text: "Listo, ya pagué", delay: 6200 },
  { from: "bot", text: "Confirmado 🎉 Te espero el sábado a las 2pm. Tu código de reagendamiento es WP-4821.", delay: 7600 },
];

export function ChatMock({ variant = "phone" }: { variant?: "phone" | "wide" }) {
  const [visible, setVisible] = useState<number>(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const total = 9000;
    const timers = script.map((m, i) =>
      setTimeout(() => setVisible((v) => Math.max(v, i + 1)), m.delay)
    );
    const reset = setTimeout(() => {
      setVisible(0);
      setTick((t) => t + 1);
    }, total);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(reset);
    };
  }, [tick]);

  const Bubbles = (
    <div className="flex flex-col gap-2.5">
      <AnimatePresence>
        {script.slice(0, visible).map((m, i) => (
          <motion.div
            key={`${tick}-${i}`}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-snug ${
              m.from === "user"
                ? "self-end bg-blue text-white rounded-br-md"
                : "self-start bg-white/95 text-ink rounded-bl-md"
            }`}
          >
            {m.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  if (variant === "wide") {
    return (
      <div className="rounded-3xl border border-white/10 bg-night/60 backdrop-blur-xl p-6 md:p-8 shadow-glow">
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky to-blue grid place-items-center text-white font-bold">W</div>
          <div>
            <div className="text-white font-medium text-sm">Wappy Bot</div>
            <div className="text-xs text-sky">en línea · responde al instante</div>
          </div>
        </div>
        <div className="pt-5 min-h-[340px]">{Bubbles}</div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      <div className="absolute -inset-6 rounded-[3rem] bg-blue/30 blur-3xl" />
      <div className="relative rounded-[2.5rem] bg-night border border-white/10 p-3 shadow-glow">
        <div className="rounded-[2rem] overflow-hidden bg-[#0a1530]">
          <div className="bg-blue-deep px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky to-blue grid place-items-center text-white font-bold text-sm">W</div>
            <div>
              <div className="text-white text-sm font-medium">Wappy</div>
              <div className="text-[10px] text-sky">escribiendo…</div>
            </div>
          </div>
          <div className="p-3.5 min-h-[420px] flex flex-col justify-end">
            {Bubbles}
          </div>
        </div>
      </div>
    </div>
  );
}
