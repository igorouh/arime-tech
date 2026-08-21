import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Realisations from "@/components/Realisations";
import Whychoose from "@/components/Whychoose";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Realisations />
      <Whychoose />
      <Footer />
    </>
  );
}