import React, { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand/95 backdrop-blur border-b border-brand-cream-dark shadow-xl bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-brand-800 font-display font-semibold text-xl tracking-tight">
          
            <img src={logo} alt="Al-Mithaq Logo" className="w-12 h-12" />

          <span className="text-2xl">Al-Mithaq</span>
        </div>
        </a>
        

        <nav className="hidden md:flex items-center gap-8 text-md font-medium text-brand-700">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-brand-secondary-dark transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-brand-800 hover:bg-brand-900 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            Request a Trade Account
          </a>
        </div>

        <button
          className="md:hidden text-brand-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-100 bg-brand-cream-dark px-4 py-4 space-y-3">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="block text-brand-700 font-medium py-1">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center bg-brand-secondary-dark text-white font-semibold py-2.5 rounded-md mt-2"
          >
            Request a Trade Account
          </a>
        </div>
      )}
    </header>
  );
}
