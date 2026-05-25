"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Star, Users, Package, Sparkles, Play } from "lucide-react";
import { formatNumber } from "@/lib/utils";

const words = ["Vídeo", "Diseño", "Audio", "Motion", "Fotografía", "Contenido"];

const stats = [
  { label: "Recursos", value: 12000, icon: Package },
  { label: "Creadores", value: 58000, icon: Users },
  { label: "Rating Medio", value: 4.9, icon: Star, suffix: "★" },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = target >= 1000 ? formatNumber(count) : target === 4.9 ? "4.9" : count.toLocaleString();

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="orb w-[600px] h-[600px] bg-violet-600 top-[-200px] left-[50%] translate-x-[-50%]" />
      <div className="orb w-[400px] h-[400px] bg-pink-600 top-[20%] right-[-100px]" />
      <div className="orb w-[300px] h-[300px] bg-cyan-600 bottom-[10%] left-[-80px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-violet-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Badge top */}
      <div className="relative mb-8 animate-fade-in">
        <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-violet-500/30 text-sm">
          <Sparkles size={14} className="text-violet-400" />
          <span className="text-[#8b949e]">La plataforma #1 para creadores de contenido</span>
          <span className="px-2 py-0.5 text-xs font-semibold bg-violet-500/20 text-violet-400 rounded-full">NUEVO</span>
        </div>
      </div>

      {/* Main headline */}
      <div className="relative text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4 leading-[1.05]">
          El repositorio definitivo
          <br />
          para{" "}
          <span
            className={`gradient-text inline-block transition-all duration-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {words[wordIndex]}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[#8b949e] max-w-2xl mx-auto mb-10 leading-relaxed">
          Miles de recursos premium, templates, herramientas y assets
          <br className="hidden md:block" />
          organizados para llevar tu contenido al siguiente nivel.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#explore"
            className="btn-gradient flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl shadow-[0_0_30px_rgba(124,58,237,0.4)]"
          >
            <Sparkles size={18} />
            Explorar recursos
            <ArrowRight size={18} />
          </a>
          <button className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#161b22] border border-[#30363d] rounded-xl hover:border-violet-500/50 hover:bg-[#1c2128] transition-all duration-300">
            <Play size={16} className="text-violet-400" />
            Ver demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {stats.map(({ label, value, icon: Icon, suffix }) => (
            <div key={label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                <AnimatedCounter target={value} suffix={suffix} />
              </div>
              <div className="text-sm text-[#6e7681] flex items-center justify-center gap-1">
                <Icon size={12} />
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview mockup */}
      <div className="relative mt-20 max-w-5xl mx-auto px-4 w-full animate-float">
        <div className="gradient-border">
          <div className="relative rounded-xl overflow-hidden bg-[#161b22] shadow-2xl">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1c2128] border-b border-[#30363d]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4 px-3 py-1 bg-[#0d1117] rounded text-xs text-[#6e7681] font-mono text-center max-w-xs mx-auto">
                contenthub.dev/explore
              </div>
            </div>
            {/* Mock content */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {[
                { color: "from-red-500/20 to-orange-500/20", label: "Cinematic LUTs", sub: "1,240 recursos" },
                { color: "from-violet-500/20 to-pink-500/20", label: "Motion Graphics", sub: "654 recursos" },
                { color: "from-cyan-500/20 to-blue-500/20", label: "Sound Design", sub: "432 recursos" },
                { color: "from-green-500/20 to-teal-500/20", label: "AI Tools", sub: "876 recursos" },
                { color: "from-amber-500/20 to-yellow-500/20", label: "Templates", sub: "2,100 recursos" },
                { color: "from-indigo-500/20 to-violet-500/20", label: "Plugins", sub: "478 recursos" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`h-24 rounded-lg bg-gradient-to-br ${item.color} border border-white/5 flex flex-col items-center justify-center gap-1`}
                >
                  <span className="text-xs font-semibold text-white/80">{item.label}</span>
                  <span className="text-[10px] text-white/40">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Glow under mockup */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-violet-600/20 blur-3xl rounded-full" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6e7681]">
        <span className="text-xs">Scroll para explorar</span>
        <div className="w-5 h-8 border border-[#30363d] rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-violet-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
