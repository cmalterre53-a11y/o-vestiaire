"use client";

import { motion } from "framer-motion";

const horaires = [
  { jour: "Lundi", heures: "Fermé" },
  { jour: "Mardi", heures: "12h00 – 14h00 / 19h00 – 23h00" },
  { jour: "Mercredi", heures: "12h00 – 14h00 / 19h00 – 23h00" },
  { jour: "Jeudi", heures: "12h00 – 14h00 / 19h00 – 23h00" },
  { jour: "Vendredi", heures: "12h00 – 14h00 / 19h00 – 00h00" },
  { jour: "Samedi", heures: "12h00 – 14h30 / 19h00 – 00h00" },
  { jour: "Dimanche", heures: "12h00 – 15h00" },
];

const services = [
  { icon: "🚗", label: "Parking gratuit" },
  { icon: "🛵", label: "Livraison" },
  { icon: "📦", label: "Vente à emporter" },
  { icon: "🎫", label: "Tickets restaurant" },
  { icon: "📅", label: "Réservations" },
  { icon: "☀️", label: "Terrasse extérieure" },
];

export default function Info() {
  return (
    <section id="infos" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bois via-bois-light to-bois" />
      <div className="absolute inset-0 bg-parchment" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-serif italic text-or text-lg">Venez nous voir</span>
          <h2 className="font-heading font-black text-5xl sm:text-6xl uppercase tracking-tight text-creme mt-2">
            Informations Pratiques
          </h2>
          <div className="w-16 h-[2px] bg-or mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Horaires */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bois-light border border-cuir/15 p-8"
          >
            <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-or mb-6 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Horaires
            </h3>
            <ul className="space-y-3">
              {horaires.map((h) => (
                <li key={h.jour} className="flex justify-between items-center font-serif text-sm">
                  <span className={`${h.heures === "Fermé" ? "text-creme/40" : "text-creme/80"}`}>
                    {h.jour}
                  </span>
                  <span
                    className={`text-right ${
                      h.heures === "Fermé" ? "text-creme/30 italic" : "text-or/80"
                    }`}
                  >
                    {h.heures}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Adresse & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-bois-light border border-cuir/15 p-8"
          >
            <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-or mb-6 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Nous trouver
            </h3>

            <div className="space-y-6">
              <div>
                <p className="font-heading font-bold text-creme uppercase tracking-wide text-sm mb-1">
                  Adresse
                </p>
                <p className="font-serif text-creme/70">
                  10 Rue des Grillons<br />
                  66240 Saint-Estève
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-creme uppercase tracking-wide text-sm mb-1">
                  Téléphone
                </p>
                <a
                  href="tel:0468514868"
                  className="font-serif text-or hover:text-or-light transition-colors text-lg"
                >
                  04 68 51 48 68
                </a>
              </div>

              <div>
                <p className="font-heading font-bold text-creme uppercase tracking-wide text-sm mb-2">
                  Accès
                </p>
                <p className="font-serif text-creme/70 text-sm">
                  Parking gratuit à proximité.<br />
                  Accessible en voiture depuis Perpignan (10 min).
                </p>
              </div>

              {/* CTA réserver */}
              <a
                href="tel:0468514868"
                className="inline-flex items-center gap-2 bg-or text-bois font-heading font-bold uppercase tracking-wider px-6 py-3 text-sm transition-all hover:bg-or-light hover:shadow-lg hover:shadow-or/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Réserver
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-bois-light border border-cuir/15 p-8"
          >
            <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-or mb-6 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Services
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.label} className="flex items-center gap-3 p-3 bg-bois/50 border border-cuir/10">
                  <span className="text-xl">{service.icon}</span>
                  <span className="font-heading text-creme/80 text-sm tracking-wide">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Google Maps placeholder */}
            <div className="mt-6 aspect-video bg-bois border border-cuir/20 flex items-center justify-center">
              {/* TODO: remplacer par embed Google Maps */}
              <div className="text-center">
                <svg className="w-8 h-8 text-or/30 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <p className="font-heading text-creme/30 text-xs uppercase tracking-wide">
                  Google Maps
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
