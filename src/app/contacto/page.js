import Reveal from "@/components/ui/Reveal";
import FixedBgSection from "@/components/ui/FixedBgSection";
import { site } from "@/lib/site";
import CTAWide from "@/components/blocks/CTAWide";
import ContactPanel from "@/components/blocks/ContactPanel";
import Image from "next/image";
import GoogleReview from "@/components/blocks/GoogleReview";

export const metadata = {
    title: "Contacto",
    description:
        "Contacto de BOBINADOS YOKY en San José, Mendoza. Dirección, WhatsApp y mapa. Presupuestos para reparación y bobinado de motores eléctricos, bombas y ascensores.",
};

export default function ContactoPage() {
    const waLink = `https://wa.me/54${site.whatsapp}?text=${encodeURIComponent(
        "Hola, quiero solicitar un presupuesto. Tengo un equipo para revisar."
    )}`;

    return (
        <main>
            {/* Hero Contacto */}
            <section className="container-site py-12 md:py-16">
                <Reveal>
                    <div className="max-w-3xl">
                        <div className="text-xs font-semibold tracking-widest text-slate-500">CONTACTO</div>
                        <h1 className="h1 mt-2">Hablemos y coordinamos evaluación</h1>
                        <p className="p-muted mt-4 text-base md:text-lg">
                            Atención directa en taller. Para agilizar el presupuesto:
                            <span className="font-semibold text-slate-900"> foto de elemento + síntoma + uso</span>.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
                                WhatsApp
                            </a>
                            <a className="btn btn-ghost" href={`tel:+54${site.whatsapp}`}>
                                Llamar
                            </a>
                            <GoogleReview />
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Panel + Mapa con bg-fixed */}
            <FixedBgSection imageUrl="/bg-taller-2.png" overlay="white">
                <div className="container-site py-12 md:py-16">
                    {/* Este panel con showMap true mete el iframe */}
                    <ContactPanel showMap />
                </div>
            </FixedBgSection>

            {/* SEO local: “zonas / tipos de trabajo” */}
            <section className="container-site py-12 md:py-16">
                <div className="grid gap-6 md:grid-cols-2">
                    <Reveal variant="left">
                        <div className="card p-6 md:p-8">
                            <div className="text-xs font-semibold tracking-widest text-slate-500">UBICACIÓN</div>
                            <h2 className="h2 mt-2">San José, Mendoza</h2>
                            <p className="p-muted mt-3">
                                Taller ubicado en {site.address}. Trabajamos con clientes de Gran Mendoza para motores,
                                bombas, ascensores y sistemas industriales.
                            </p>
                            <div className="mt-6">

                            </div>
                        </div>
                    </Reveal>

                    <Reveal variant="right" delay={120}>
                        <div className="card-soft p-6 md:p-8">
                            <Image src="/taller.jpeg" fit="cover" width={1000} height={1000} alt="TALLER YOKY" />
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="container-site pb-12 md:pb-16">
                <CTAWide />
            </section>
        </main>
    );
}