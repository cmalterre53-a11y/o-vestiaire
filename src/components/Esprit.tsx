"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />
      </svg>
    ),
    title: "Produits Frais",
    text: "Des produits sélectionnés avec soin auprès de producteurs locaux catalans.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Matchs & Concerts",
    text: "Retransmission des grands matchs de rugby et soirées concerts en live.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Terrasse Ensoleillée",
    text: "Une grande terrasse pour profiter du soleil catalan entre amis.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Convivialité",
    text: "Un lieu où l'on se retrouve, où l'on partage, dans l'esprit du vestiaire.",
  },
];

export default function Esprit() {
  return (
    <section id="esprit" className="py-24 px-4 relative overflow-hidden">
      {/* Fond subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-bois via-bois-light to-bois" />
      <div className="absolute inset-0 bg-parchment" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/entree.webp"
                alt="Intérieur du restaurant O'Vestiaire"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bois/30 to-transparent" />
            </div>
            {/* Cadre décoratif */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-or/20 -z-10" />
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-serif italic text-or text-lg">Notre histoire</span>
            <h2 className="font-heading font-black text-5xl sm:text-6xl uppercase tracking-tight text-creme mt-2 mb-8">
              L&apos;Esprit<br />O&apos;Vestiaire
            </h2>

            <div className="space-y-4 font-serif text-creme/80 text-lg leading-relaxed">
              <p>
                Bienvenue dans un lieu unique à Saint-Estève, où la passion du rugby
                rencontre la gastronomie du Sud. Ici, chaque table est un vestiaire,
                chaque repas un troisième mi-temps.
              </p>
              <p>
                Entre les maillots accrochés aux murs et l&apos;odeur des frites maison
                qui crépitent, O&apos;Vestiaire c&apos;est avant tout un esprit :
                celui du partage, de la convivialité et du bon produit. Une cuisine
                généreuse, des tapas à partager, des bières pression qui coulent
                et des souvenirs qui se créent.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-3"
                >
                  <div className="text-or flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-or">
                      {feature.title}
                    </h4>
                    <p className="font-serif text-creme/60 text-xs mt-1 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
