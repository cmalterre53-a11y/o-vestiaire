"use client";

import { motion } from "framer-motion";

const avis = [
  {
    nom: "Laurent M.",
    date: "Il y a 2 semaines",
    texte:
      "Un vrai coup de cœur ! L'entrecôte était parfaite, les frites maison incroyables. L'ambiance rugby est top, on s'y sent comme à la maison. On reviendra pour la prochaine troisième mi-temps !",
    note: 5,
  },
  {
    nom: "Sophie D.",
    date: "Il y a 1 mois",
    texte:
      "Super soirée entre amis pour regarder le match du XV de France. Les tapas sont généreux et les cocktails excellents. Le personnel est aux petits soins. Je recommande vivement !",
    note: 5,
  },
  {
    nom: "Marc P.",
    date: "Il y a 3 semaines",
    texte:
      "Meilleur burger de la région, sans hésiter. La terrasse est très agréable quand il fait beau. Le rapport qualité-prix est excellent pour la qualité des produits servis. Bravo à toute l'équipe.",
    note: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Reviews() {
  return (
    <section id="avis" className="py-24 px-4 bg-wood-texture">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-serif italic text-or text-lg">Ce qu&apos;ils en disent</span>
          <h2 className="font-heading font-black text-5xl sm:text-6xl uppercase tracking-tight text-creme mt-2">
            Avis Clients
          </h2>
          <div className="w-16 h-[2px] bg-or mx-auto mt-6" />

          {/* Note globale */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-or" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-heading font-bold text-2xl text-or">4.7</span>
            <span className="text-creme/50 font-heading text-sm">/5 — 333+ avis</span>
          </div>
        </motion.div>

        {/* Cartes d'avis */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {avis.map((review) => (
            <motion.div
              key={review.nom}
              variants={cardVariants}
              className="bg-bois-light border border-cuir/15 p-8 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-or/10 text-6xl font-serif leading-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.note)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-or" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texte */}
              <p className="font-serif text-creme/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{review.texte}&rdquo;
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-cuir/30 flex items-center justify-center">
                  <span className="font-heading font-bold text-or text-sm">
                    {review.nom.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-bold text-creme text-sm">{review.nom}</p>
                  <p className="text-creme/40 text-xs">{review.date}</p>
                </div>
                {/* Google icon */}
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-creme/20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
