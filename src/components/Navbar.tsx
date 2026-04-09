"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Carte", href: "#carte" },
  { label: "L'Esprit", href: "#esprit" },
  { label: "Avis", href: "#avis" },
  { label: "Infos", href: "#infos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bois/95 backdrop-blur-md border-b border-cuir/15 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-heading font-black text-xl uppercase tracking-tight text-creme hover:text-or transition-colors">
          O&apos;Vestiaire
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm uppercase tracking-widest text-creme/70 hover:text-or transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0468514868"
            className="font-heading text-sm uppercase tracking-wider bg-or text-bois px-4 py-2 font-bold hover:bg-or-light transition-colors"
          >
            Réserver
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-creme/70 hover:text-or transition-colors"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bois/98 backdrop-blur-md border-b border-cuir/15 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading text-lg uppercase tracking-widest text-creme/70 hover:text-or transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0468514868"
                className="font-heading text-lg uppercase tracking-wider bg-or text-bois px-4 py-3 font-bold text-center hover:bg-or-light transition-colors mt-2"
              >
                Réserver — 04 68 51 48 68
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
