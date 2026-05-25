"use client";

import { useState, useEffect } from "react";
import { Search, Bell, Menu, X, Zap, ChevronDown, Command } from "lucide-react";

const navLinks = [
  { label: "Explorar", href: "#explore" },
  { label: "Colecciones", href: "#collections" },
  { label: "Herramientas", href: "#tools" },
  { label: "Comunidad", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-dark border-b border-[#30363d]/60 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-pink-600 rounded-lg group-hover:scale-110 transition-transform duration-300" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <Zap size={16} className="text-white" />
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Content<span className="gradient-text-pp">Hub</span>
              </span>
            </a>

            {/* Center Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-[#8b949e] hover:text-white rounded-lg hover:bg-[#1c2128] transition-all duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-lg text-[#6e7681] text-sm hover:border-[#7c3aed]/50 hover:text-[#8b949e] transition-all duration-200 group"
              >
                <Search size={14} />
                <span>Buscar recursos...</span>
                <div className="flex items-center gap-1 ml-2 px-1.5 py-0.5 bg-[#0d1117] rounded text-xs font-mono">
                  <Command size={10} />
                  <span>K</span>
                </div>
              </button>

              <button className="relative p-2 text-[#8b949e] hover:text-white hover:bg-[#1c2128] rounded-lg transition-all duration-200">
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full" />
              </button>

              <button className="hidden md:block px-3 py-1.5 text-sm text-[#8b949e] border border-[#30363d] rounded-lg hover:border-[#7c3aed]/50 hover:text-white transition-all duration-200 font-medium">
                Iniciar sesión
              </button>

              <button className="btn-gradient px-4 py-1.5 text-sm font-semibold text-white rounded-lg shadow-lg">
                Empezar gratis
              </button>

              <button
                className="md:hidden p-2 text-[#8b949e] hover:text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass-dark border-t border-[#30363d]/50 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2.5 text-sm text-[#8b949e] hover:text-white hover:bg-[#1c2128] rounded-lg transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#30363d]/50 flex gap-2">
              <button className="flex-1 py-2 text-sm text-[#8b949e] border border-[#30363d] rounded-lg">
                Iniciar sesión
              </button>
              <button className="flex-1 py-2 text-sm font-semibold text-white btn-gradient rounded-lg">
                Empezar
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-2xl glass rounded-2xl shadow-2xl overflow-hidden border border-[#30363d]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-4 border-b border-[#30363d]">
              <Search size={18} className="text-[#8b949e]" />
              <input
                autoFocus
                type="text"
                placeholder="Buscar recursos, herramientas, templates..."
                className="flex-1 bg-transparent text-white placeholder-[#6e7681] text-base outline-none"
              />
              <kbd className="px-2 py-1 text-xs text-[#6e7681] bg-[#0d1117] rounded border border-[#30363d] font-mono">
                ESC
              </kbd>
            </div>
            <div className="px-4 py-3 flex gap-2 flex-wrap border-b border-[#30363d]">
              {["Video", "Audio", "Templates", "AI", "Gratis", "Plugins"].map((f) => (
                <button
                  key={f}
                  className="px-3 py-1 text-xs text-[#8b949e] bg-[#1c2128] rounded-full hover:bg-[#7c3aed]/20 hover:text-violet-400 transition-all duration-200 border border-[#30363d]"
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="px-4 py-3 text-sm text-[#6e7681]">
              Búsquedas populares: Cinematic LUTs · After Effects presets · Lofi music · Thumbnail templates
            </div>
          </div>
        </div>
      )}
    </>
  );
}
