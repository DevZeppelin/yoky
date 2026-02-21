import FixedBgSection from "@/components/ui/FixedBgSection";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

import ServicesGrid from "@/components/blocks/ServicesGrid";
import ProcessSteps from "@/components/blocks/ProcessSteps";
import CTAWide from "@/components/blocks/CTAWide";
import ContactPanel from "@/components/blocks/ContactPanel";

export const metadata = {
    title: "Servicios",
    description:
        "Servicios de BOBINADOS YOKY en Mendoza: reparación y bobinado de motores eléctricos, bombas hidráulicas, ascensores, sistemas contra incendios, presurización y motores blindados. Presupuestos.",
};

export default function ServiciosPage() {
    const wa = `https://wa.me/54${site.whatsapp}?text=${encodeURIComponent(
        "Hola, quiero solicitar un presupuesto. ¿Qué datos necesitan?"
    )}`;

    return (
        <main>
            {/* Hero Servicios */}
            <section className="container-site py-12 md:py-16">
                <Reveal>
                    <div className="max-w-3xl">
                        <div className="text-xs font-semibold tracking-widest text-slate-500">SERVICIOS</div>
                        <h1 className="h1 mt-2">Soluciones electromecánicas en Mendoza</h1>
                        <p className="p-muted mt-4 text-base md:text-lg">
                            En <span className="font-semibold text-slate-900">BOBINADOS YOKY</span> hacemos reparación y bobinado
                            con criterio técnico: motores eléctricos, bombas, ascensores y sistemas industriales.
                            <span className="font-semibold text-slate-900"> Presupuestos</span> y atención directa en taller.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
                                Pedir presupuesto
                            </a>
                            <a className="btn btn-ghost" href="/contacto">
                                Ver contacto
                            </a>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <span className="pill">Motores eléctricos</span>
                            <span className="pill">Bombas hidráulicas</span>
                            <span className="pill">Ascensores</span>
                            <span className="pill">Contra incendios</span>
                            <span className="pill">Presurización</span>
                            <span className="pill">Motores blindados</span>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Servicios con bg-fixed */}
            <FixedBgSection imageUrl="/bg-taller.png" overlay="white">
                <div className="container-site py-12 md:py-16">
                    <ServicesGrid />
                </div>
            </FixedBgSection>

            {/* Equipos y sistemas que atendemos (SEO fuerte) */}
            <section className="container-site py-12 md:py-16">
                <div className="grid gap-6 md:grid-cols-2">
                    <Reveal variant="left">
                        <div className="card p-6 md:p-8">
                            <div className="text-xs font-semibold tracking-widest text-slate-500">
                                EQUIPOS Y SISTEMAS
                            </div>
                            <h2 className="h2 mt-2">Qué atendemos</h2>
                            <p className="p-muted mt-3">
                                Trabajo para hogar, edificios e industria. Si el equipo es crítico, el enfoque es el mismo:
                                diagnóstico claro, reparación segura y control final.
                            </p>

                            <ul className="mt-5 space-y-3 text-sm text-slate-700">
                                {[
                                    "Reparación y bobinado de motores eléctricos",
                                    "Bombas hidráulicas y bombas de profundidad",
                                    "Riego presurizado y presurización domiciliaria",
                                    "Ascensores: reparación, frenos y bobinas de freno",
                                    "Sistemas contra incendios",
                                    "Motores blindados para petróleo / estaciones de servicio",
                                    "Mantenimiento y cambio de rodamientos (SKF)",
                                    "Sistemas de seguridad vinculados a equipos",
                                ].map((t) => (
                                    <li key={t} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
                                    Consultar por WhatsApp
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal variant="right" delay={120}>
                        <div className="card-soft p-6 md:p-8">
                            <div className="text-xs font-semibold tracking-widest text-slate-500">
                                PARA AGILIZAR
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mt-2">Qué enviar para presupuestar</h3>
                            <p className="text-sm text-slate-600 mt-2">
                                Enviando estos datos, el presupuesto sale mucho más rápido:
                            </p>

                            <ul className="mt-5 space-y-3 text-sm text-slate-700">
                                {[
                                    "Foto de elemento (modelo, potencia, voltaje)",
                                    "Síntoma: no arranca / ruido / vibra / baja presión",
                                    "Uso: hogar / edificio / industria",
                                    "Cuándo empezó y si hubo intervención previa",
                                ].map((t) => (
                                    <li key={t} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 flex gap-3">
                                <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
                                    Enviar datos
                                </a>
                                <a className="btn btn-ghost" href="/contacto">
                                    Mapa y dirección
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Proceso con bg-fixed (overlay un toque más “industrial”) */}
            <FixedBgSection imageUrl="/bg-taller-2.png" overlay="dark">
                <div className="container-site py-12 md:py-16">
                    <div className="max-w-2xl">
                        <Reveal>
                            <div className="text-xs font-semibold tracking-widest text-white/80">PROCESO</div>
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mt-2">
                                Orden, control y seguridad
                            </h2>
                            <p className="mt-3 text-white/85">
                                Un proceso simple para resultados confiables: recepción, diagnóstico, presupuesto y prueba final.
                            </p>
                        </Reveal>
                    </div>


                </div>
            </FixedBgSection>

            <section className="container-site py-12 md:py-16">
                <CTAWide />
            </section>

            <section className="container-site pb-12 md:pb-16">
                <ContactPanel />
            </section>
        </main>
    );
}