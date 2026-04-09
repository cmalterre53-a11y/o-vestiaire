"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const plats = [
  {
    nom: "Viandes Grillées",
    description:
      "Côte de porc fermier, entrecôte ou magret grillés sur planche, accompagnés de légumes frais et purée maison.",
    emoji: "🥩",
    image: "/images/viande.webp",
  },
  {
    nom: "Burger O'Vestiaire",
    description:
      "Pain brioché, steak haché frais, cheddar affiné, oignons confits et notre sauce secrète. Servi avec frites maison.",
    emoji: "🍔",
    image: "/images/burgera.webp",
  },
  {
    nom: "Salades Fraîcheur",
    description:
      "Salades généreuses aux fromages, croûtons dorés, tomates confites, oignons pickles et balsamique maison.",
    emoji: "🥗",
    image: "/images/salade.webp",
  },
  {
    nom: "Tapas du Terroir",
    description:
      "Assortiment de tapas catalanes : jambon ibérique, patatas bravas, croquetas et pan con tomate.",
    emoji: "🫒",
    image: "/images/tapas.webp",
  },
  {
    nom: "Cocktails Maison",
    description:
      "Cocktails artisanaux préparés avec soin. Mojitos, margaritas, spritz et créations du barman.",
    emoji: "🍹",
    image: "/images/cocktail.webp",
  },
  {
    nom: "Coupé Glacé",
    description:
      "Généreuse coupe de glaces artisanales, chantilly maison, coulis chocolat et barre croustillante. Le dessert signature.",
    emoji: "🍨",
    image: "/images/coupe-glacee.webp",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Menu() {
  return (
    <section id="carte" className="py-24 px-4 bg-wood-texture">
      <div className="max-w-6xl mx-auto">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-serif italic text-or text-lg">Nos spécialités</span>
          <h2 className="font-heading font-black text-5xl sm:text-6xl uppercase tracking-tight text-creme mt-2">
            Notre Carte
          </h2>
          <div className="w-16 h-[2px] bg-or mx-auto mt-6" />
          <p className="font-serif italic text-creme/60 mt-6 max-w-xl mx-auto text-lg">
            Des produits frais, une cuisine généreuse et des saveurs du terroir
          </p>
        </motion.div>

        {/* Grille de plats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {plats.map((plat) => (
            <motion.div
              key={plat.nom}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-bois-light border border-cuir/20 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-or/10 transition-shadow duration-300"
            >
              {/* Image ou placeholder */}
              <div className="relative h-48 overflow-hidden">
                {plat.image ? (
                  <Image
                    src={plat.image}
                    alt={plat.nom}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  // TODO: remplacer par vraie photo
                  <div className="w-full h-full bg-gradient-to-br from-cuir/30 to-bois flex items-center justify-center">
                    <span className="text-5xl">{plat.emoji}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bois-light via-transparent to-transparent" />
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{plat.emoji}</span>
                  <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-or">
                    {plat.nom}
                  </h3>
                </div>
                <p className="font-serif text-creme/70 text-sm leading-relaxed">
                  {plat.description}
                </p>
              </div>

              {/* Accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-or scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Prix moyen */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 font-serif italic text-creme/50 text-sm"
        >
          Prix moyen : 30–40 &euro;/personne &bull; Tickets restaurant acceptés
        </motion.p>
      </div>
    </section>
  );
}
