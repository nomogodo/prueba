"use client";

import { TrendingUp, TrendingDown, Minus, Star, Download, ArrowRight } from "lucide-react";
import { trending } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

const catColors: Record<string, string> = {
  LUTs: "tag-templates",
  Audio: "tag-audio",
  Templates: "tag-templates",
  "AI Tools": "tag-ai",
};

export default function Trending() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trending list */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  <span className="gradient-text-pp">Trending</span> esta semana
                </h2>
                <p className="text-[#8b949e]">Los recursos más descargados ahora mismo</p>
              </div>
              <a
                href="#"
                className="hidden md:flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors font-medium"
              >
                Ver ranking <ArrowRight size={14} />
              </a>
            </div>

            <div className="space-y-3">
              {trending.map((item) => (
                <div
                  key={item.pos}
                  className="card-glow flex items-center gap-4 p-4 bg-[#161b22] border border-[#30363d] rounded-xl cursor-pointer group"
                >
                  {/* Position */}
                  <div className="flex-none w-12 text-center">
                    <span className="text-2xl font-black text-[#30363d] group-hover:text-[#6e7681] transition-colors">
                      {String(item.pos).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Change indicator */}
                  <div className="flex-none">
                    {item.change === "up" && <TrendingUp size={16} className="text-green-400" />}
                    {item.change === "down" && <TrendingDown size={16} className="text-red-400" />}
                    {item.change === "same" && <Minus size={16} className="text-[#6e7681]" />}
                  </div>

                  {/* Icon placeholder */}
                  <div className="flex-none w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600/30 to-pink-600/30 border border-violet-500/20 flex items-center justify-center text-lg">
                    📦
                  </div>

                  {/* Title & category */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors truncate">
                      {item.title}
                    </h4>
                    <span className={`tag ${catColors[item.category] || "tag-design"} mt-1`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="hidden sm:flex items-center gap-4 text-xs text-[#8b949e]">
                    <span className="flex items-center gap-1">
                      <Star size={11} className="text-yellow-400 fill-yellow-400" />
                      {item.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download size={11} />
                      {formatNumber(item.downloads)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Quick stats + newsletter */}
          <div className="space-y-6">
            {/* Platform stats */}
            <div className="glass rounded-2xl p-6 border border-[#30363d]">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                📊 Estadísticas
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Recursos subidos hoy", value: "+148", color: "text-green-400" },
                  { label: "Descargas esta semana", value: "892K", color: "text-violet-400" },
                  { label: "Nuevos creadores", value: "+2,140", color: "text-cyan-400" },
                  { label: "Colecciones activas", value: "1,892", color: "text-pink-400" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-[#8b949e]">{stat.label}</span>
                    <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="gradient-border">
              <div className="bg-[#161b22] rounded-2xl p-6">
                <div className="text-2xl mb-3">💌</div>
                <h3 className="text-white font-bold mb-2 text-lg">Newsletter semanal</h3>
                <p className="text-[#8b949e] text-sm mb-4 leading-relaxed">
                  Recibe los mejores recursos de la semana directamente en tu inbox.
                </p>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6e7681] mb-3 focus:outline-none focus:border-violet-500/50 transition-colors"
                />
                <button className="w-full btn-gradient py-2.5 rounded-xl text-sm font-semibold text-white">
                  Suscribirme gratis
                </button>
                <p className="text-[10px] text-[#6e7681] mt-3 text-center">
                  Sin spam. Baja cuando quieras.
                </p>
              </div>
            </div>

            {/* Top contributors */}
            <div className="glass rounded-2xl p-6 border border-[#30363d]">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                🏆 Top Contribuidores
              </h3>
              <div className="space-y-3">
                {[
                  { name: "VisualCraft", uploads: 142, avatar: "VC" },
                  { name: "AudioVault", uploads: 98, avatar: "AV" },
                  { name: "AIStudio", uploads: 87, avatar: "AI" },
                  { name: "ThumbnailPro", uploads: 76, avatar: "TP" },
                ].map((user, i) => (
                  <div key={user.name} className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#6e7681] w-5">{i + 1}</span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-xs font-bold text-white">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white font-medium">{user.name}</div>
                      <div className="text-xs text-[#6e7681]">{user.uploads} uploads</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
