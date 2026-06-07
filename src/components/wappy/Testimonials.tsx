import { useState } from "react";
import { TestimonialCard } from "@/components/ui/testimonial-cards";

const testimonials = [
  {
    id: 1,
    testimonial: "Antes me pasaba el día pegado al móvil respondiendo los mismos mensajes. Ahora Wappy lo gestiona todo y yo me centro en hacer crecer el negocio.",
    author: "Carlos M. — Clínica dental, Madrid"
  },
  {
    id: 2,
    testimonial: "Lo activamos un viernes por la tarde y el lunes ya teníamos citas agendadas que entraron solas durante el fin de semana. Impresionante.",
    author: "Laura G. — Centro de estética, Barcelona"
  },
  {
    id: 3,
    testimonial: "Mis clientes reciben respuesta inmediata a cualquier hora. La confianza que eso genera no tiene precio.",
    author: "Sergio P. — Asesoría financiera, Valencia"
  },
  {
    id: 4,
    testimonial: "Pensé que era complicado de configurar pero en menos de 24 horas ya estaba funcionando. El equipo de soporte es excelente.",
    author: "Ana R. — Tienda online de moda, Sevilla"
  },
  {
    id: 5,
    testimonial: "Redujimos un 70% las consultas repetitivas por WhatsApp. Ahora solo atendemos lo que realmente necesita atención humana.",
    author: "Miguel T. — Inmobiliaria, Bilbao"
  },
];

export function Testimonials() {
  const [positions, setPositions] = useState(
    testimonials.map((_, i) => i === 0 ? "front" : i === 1 ? "middle" : "back")
  );

  const handleShuffle = () => {
    setPositions((prev) => {
      const next = [...prev];
      next.push(next.shift()!);
      return next;
    });
  };

  return (
    <section id="testimonios" className="relative bg-night py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-sky/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue">Testimonios</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">Lo que dicen nuestros clientes</h2>
          <p className="mt-4 text-lg text-mist">Arrastra la tarjeta para ver más opiniones.</p>
        </div>

        <div className="mt-14 flex items-center justify-center h-[500px] relative">
          <div className="relative w-full max-w-[400px] h-[450px]">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.id}
                handleShuffle={handleShuffle}
                testimonial={t.testimonial}
                author={t.author}
                id={t.id}
                position={positions[i]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
