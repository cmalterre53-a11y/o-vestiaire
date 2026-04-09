import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O'Vestiaire — Tapas Bar & Brasserie | Saint-Estève",
  description:
    "Brasserie, Tapas Bar & Pub ambiance rugby à Saint-Estève (66240). Entrecôte, burgers, tapas, concerts et retransmission de matchs. Réservez au 04 68 51 48 68.",
  keywords: "restaurant, brasserie, tapas, pub, rugby, Saint-Estève, 66240, O'Vestiaire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
