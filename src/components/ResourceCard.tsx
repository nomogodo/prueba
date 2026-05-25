"use client";

import { useState } from "react";
import { Star, Download, Heart, ExternalLink, CheckCircle, Flame, Sparkles } from "lucide-react";
import { Resource } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

const thumbnailGradients: Record<string, string> = {
  luts: "from-orange-600/40 via-red-600/30 to-pink-600/40",
  motion: "from-indigo-600/40 via-violet-600/30 to-purple-600/40",
  ai: "from-pink-600/40 via-rose-600/30 to-red-600/40",
  audio: "from-green-600/40 via-emerald-600/30 to-teal-600/40",
  templates: "from-yellow-600/40 via-amber-600/30 to-orange-600/40",
  photo: "from-cyan-600/40 via-blue-600/30 to-indigo-600/40",
};

const thumbnailEmojis: Record<string, string> = {
  luts: "🎞️",
  motion: "✨",
  ai: "🤖",
  audio: "🎵",
  templates: "🗂️",
  photo: "📷",
};

function Badge({ type }: { type: "trending" | "new" | "official" }) {
  if (type === "trending")
    return (
      <span className="badge-trending flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold">
        <Flame size={9} /> Trending
      </span>
    );
  if (type === "new")
    return (
      <span className="badge-new flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold">
        <Sparkles size={9} /> Nuevo
      </span>
    );
  return (
    <span className="badge-official flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold">
      <CheckCircle size={9} /> Oficial
    </span>
  );
}

export default function ResourceCard({ resource }: { resource: Resource }) {
  const [saved, setSaved] = useState(false);
  const [saveCount, setSaveCount] = useState(resource.saves);

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setSaved(!saved);
    setSaveCount((c) => (saved ? c - 1 : c + 1));
  };

  const grad = thumbnailGradients[resource.thumbnail] || "from-violet-600/40 via-purple-600/30 to-pink-600/40";
  const emoji = thumbnailEmojis[resource.thumbnail] || "📦";

  return (
    <div className="card-glow group relative flex flex-col bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden transition-all duration-300">
      {/* Thumbnail */}
      <div className={`relative h-44 bg-gradient-to-br ${grad} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <span className="text-6xl group-hover:scale-110 transition-transform duration-500 relative z-10">
          {emoji}
        </span>
        {/* Badge */}
        {resource.badge && (
          <div className="absolute top-3 left-3">
            <Badge type={resource.badge} />
          </div>
        )}
        {/* Type pill */}
        <div className="absolute top-3 right-3">
          <span className={resource.type === "free" ? "tag tag-free" : "tag tag-premium"}>
            {resource.type === "free" ? "Gratis" : "Premium"}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-200">
            <ExternalLink size={16} />
          </button>
          <button className="px-4 py-2 btn-gradient rounded-xl text-white text-sm font-semibold flex items-center gap-1.5">
            <Download size={14} />
            Descargar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Tags */}
        <div className="flex gap-1.5 flex-wrap">
          {resource.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={`tag tag-${tag}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Title & desc */}
        <div>
          <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-violet-300 transition-colors duration-200 line-clamp-1">
            {resource.title}
          </h3>
          <p className="text-[#6e7681] text-xs leading-relaxed line-clamp-2">{resource.description}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#30363d]">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-[9px] font-bold text-white">
              {resource.author.avatar}
            </div>
            <span className="text-xs text-[#8b949e] flex items-center gap-1">
              {resource.author.name}
              {resource.author.verified && (
                <CheckCircle size={11} className="text-violet-400" />
              )}
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#8b949e] text-xs">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span>{resource.stars}</span>
            </div>
            <button
              onClick={handleSave}
              className={`flex items-center gap-1 text-xs transition-all duration-200 ${
                saved ? "text-pink-400" : "text-[#8b949e] hover:text-pink-400"
              }`}
            >
              <Heart size={12} className={saved ? "fill-pink-400" : ""} />
              <span>{formatNumber(saveCount)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
