import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative gradient-border overflow-hidden">
          <div className="relative bg-[#161b22] rounded-2xl p-12 text-center overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="orb w-64 h-64 bg-violet-600 top-[-50px] left-[50%] translate-x-[-50%]" />
            <div className="orb w-48 h-48 bg-pink-600 bottom-[-30px] right-[-30px]" />
            <div className="orb w-32 h-32 bg-cyan-600 bottom-[-20px] left-[-20px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-violet-500/30 text-sm text-violet-300 mb-6">
                <Sparkles size={14} />
                Únete a +58,000 creadores
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                ¿Listo para llevar tu
                <br />
                contenido al <span className="gradient-text">siguiente nivel</span>?
              </h2>

              <p className="text-[#8b949e] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Accede a miles de recursos premium, herramientas de IA y la
                comunidad de creadores más activa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-gradient flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                  <Sparkles size={18} />
                  Empezar gratis ahora
                  <ArrowRight size={18} />
                </button>
                <button className="px-8 py-4 text-base font-semibold text-white bg-[#0d1117] border border-[#30363d] rounded-xl hover:border-violet-500/50 hover:bg-[#1c2128] transition-all duration-300">
                  Ver todos los planes
                </button>
              </div>

              <p className="text-[#6e7681] text-xs mt-6">
                Sin tarjeta de crédito · Acceso instantáneo · Cancela cuando quieras
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
