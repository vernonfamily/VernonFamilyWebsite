import Hero from "@/components/hero";
import Services from "@/components/services";
import Proof from "@/components/proof";
import About from "@/components/about";
import Contact from "@/components/contact";
import SpotlightOverlay from "@/components/spotlight-overlay";

export default function Home() {
  return (
    <main style={{ overflowY: "auto", overflowX: "hidden" }}>
      <Hero />
      <Services />
      <Proof />
      <About />
      <Contact />
      <SpotlightOverlay />
    </main>
  );
}
