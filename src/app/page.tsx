import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Esprit from "@/components/Esprit";
import Reviews from "@/components/Reviews";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Esprit />
        <Reviews />
        <Info />
      </main>
      <Footer />
    </>
  );
}
