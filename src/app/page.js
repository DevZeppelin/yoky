import FixedBgSection from "@/components/ui/FixedBgSection";
import Hero from "@/components/blocks/Hero";
import TrustBar from "@/components/blocks/TrustBar";
import ServicesGrid from "@/components/blocks/ServicesGrid";
import IndustriesGrid from "@/components/blocks/IndustriesGrid";
import ProcessSteps from "@/components/blocks/ProcessSteps";
import CTAWide from "@/components/blocks/CTAWide";
import HeroFixed from "@/components/layout/HeroFixed";
import Gallery from "@/components/blocks/Gallery";

export default function HomePage() {

  const items = [
    {
      id: 1,
      src: "/bg-taller.png",
      title: "Nuestro taller",
      subtitle: "Orden, limpieza y proceso",
      footer: "Mendoza",
    },
    {
      id: 2,
      src: "/bg-motor-gigante.jpeg",
      title: "Motores eléctricos",
      subtitle: "Bobinado y pruebas",
      footer: "Confiabilidad",
      href: "/servicios",
    },
    {
      id: 3,
      src: "/bg-tablero.jpeg",
      title: "Tableros eléctricos",
      subtitle: "",
      footer: "Soporte técnico",
    },
  ];

  return (
    <main>
      <HeroFixed />
      <Hero />
      <TrustBar />

      <FixedBgSection imageUrl="/bg-taller-2.png" overlay="white">
        <div className="container-site py-12 md:py-16">
          <ServicesGrid />
        </div>
      </FixedBgSection>

      <div className="container-site py-12 md:py-16">
        <h2 className="h2">Galería</h2>
        <p className="p-muted mt-2">Trabajos, taller y equipamiento.</p>

        <div className="mt-8">
          <Gallery items={items} />
        </div>
      </div>

      <div className="container-site py-12 md:py-16">
        <IndustriesGrid />
      </div>

      <FixedBgSection imageUrl="/bg-taller.png" overlay="white">
        <div className="container-site py-12 md:py-16">
          <ProcessSteps />
        </div>
      </FixedBgSection>

      <div className="container-site py-12 md:py-16">
        <CTAWide />
      </div>
    </main>
  );
}