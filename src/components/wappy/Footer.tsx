import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/573226429963?text=Hola,%20quiero%20empezar%20mi%20prueba%20gratis%20de%20Wappy";

export function Footer() {
  return (
    <>
      <footer className="bg-night text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-blue grid place-items-center">
                <img src="/favicon.png" alt="" className="w-6 h-6" />
              </span>
              <span className="font-display font-bold text-xl">Wappy</span>
            </div>
            <p className="mt-4 text-sm text-mist max-w-xs">
              Tu WhatsApp con IA. Responde, agenda y cobra mientras tú haces lo que amas.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky">Producto</div>
            <ul className="mt-4 space-y-2 text-sm text-mist">
              <li><a href="#como-funciona" className="hover:text-white">Cómo funciona</a></li>
              <li><a href="#planes" className="hover:text-white">Planes</a></li>
              <li><a href="#referidos" className="hover:text-white">Referidos</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky">Contacto</div>
            <ul className="mt-4 space-y-2 text-sm text-mist">
              <li><a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a></li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-8 border-t border-white/10 text-xs text-mist">
          © 2025 Wappy · Bot WhatsApp con IA · Colombia
        </div>
      </footer>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] grid place-items-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </>
  );
}
