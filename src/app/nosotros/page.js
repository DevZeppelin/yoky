import FixedBgSection from "@/components/ui/FixedBgSection";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import CTAWide from "@/components/blocks/CTAWide";

export const metadata = {
    title: "Nosotros",
    description:
        "BOBINADOS YOKY: 40 años de trayectoria familiar en Mendoza. Taller electromecánico con enfoque en seguridad, durabilidad y precio/calidad. Reparación y bobinado de motores, bombas y ascensores.",
};

export default function NosotrosPage() {
    const wa = `https://wa.me/54${site.whatsapp}?text=${encodeURIComponent(
        "Hola, quiero consultar por un presupuesto. ¿Podemos coordinar?"
    )}`;

    return (
        <main>
            {/* Hero con bg-fixed */}
            <FixedBgSection imageUrl="/taller.jpeg" overlay="white">
                <div className="container-site py-12 md:py-16">
                    <Reveal>
                        <div className="max-w-3xl text-white h-5/6">
                            <div className="text-xs font-semibold tracking-widest text-white">NOSOTROS</div>
                            <h1 className="h1 mt-2 text-white">BOBINADOS YOKY · 40 años de trayectoria familiar</h1>
                            <p className="p-muted mt-4 text-base md:text-lg text-white">
                                Taller electromecánico en Mendoza. Soluciones confiables para motores eléctricos, bombas hidráulicas,
                                ascensores y sistemas industriales. Trabajo serio, orientado a seguridad y durabilidad.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
                                    Consultar
                                </a>
                                <a className="btn btn-ghost text-black" href="/servicios">
                                    Ver servicios
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </FixedBgSection>

            {/* Trayectoria + Enfoque */}
            <section className="container-site py-12 md:py-16">
                <div className="grid gap-6 md:grid-cols-2">
                    <Reveal variant="left">
                        <div className="card p-6 md:p-8">
                            <div className="text-xs font-semibold tracking-widest text-slate-500">TRAYECTORIA</div>
                            <h2 className="h2 mt-2">Experiencia real, resultados durables</h2>
                            <p className="p-muted mt-4">
                                La trayectoria no se improvisa: resolvemos fallas en equipos críticos con diagnóstico claro,
                                presupuesto y control final antes de entregar.
                            </p>

                            <ul className="mt-5 space-y-3 text-sm text-slate-700">
                                {[
                                    "Atención directa en taller",
                                    "Precio / calidad con criterio técnico",
                                    "Mantenimiento y cambio de rodamientos (SKF)",
                                    "Soporte para edificios e industria",
                                ].map((t) => (
                                    <li key={t} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal variant="right" delay={120}>
                        <div className="card-soft p-6 md:p-8">
                            <div className="text-xs font-semibold tracking-widest text-slate-500">CÓMO TRABAJAMOS</div>
                            <h3 className="text-xl font-semibold text-slate-900 mt-2">Trabajo serio</h3>
                            <p className="text-sm text-slate-600 mt-3">
                                Preferimos hacer menos promesas y más control: diagnóstico, presupuesto, reparación y prueba.
                            </p>

                            <div className="mt-6 grid gap-3">
                                {[
                                    { t: "Seguridad", d: "Criterio técnico en cada intervención." },
                                    { t: "Durabilidad", d: "Reparaciones pensadas para durar." },
                                    { t: "Transparencia", d: "Presupuesto claro antes de intervenir." },
                                ].map((x) => (
                                    <div key={x.t} className="rounded-xl border bg-white p-4">
                                        <div className="font-semibold text-slate-900">{x.t}</div>
                                        <div className="text-sm text-slate-600 mt-1">{x.d}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6">
                                <a className="btn btn-primary" href="/contacto">Contacto</a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Misión / Visión con bg-fixed */}
            <FixedBgSection imageUrl="/bg-tablero.jpeg" overlay="white">
                <div className="container-site py-12 md:py-16">
                    <div className="grid gap-6 md:grid-cols-2">
                        <Reveal variant="left">
                            <div className="card p-6 md:p-8">
                                <div className="text-xs font-semibold tracking-widest text-slate-500">MISIÓN</div>
                                <h2 className="h2 mt-2">Resolver fallas críticas con criterio técnico</h2>
                                <p className="p-muted mt-4">
                                    Brindar soluciones electromecánicas confiables en motores, bombas y ascensores,
                                    cuidando seguridad, calidad y tiempos razonables.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal variant="right" delay={120}>
                            <div className="card p-6 md:p-8">
                                <div className="text-xs font-semibold tracking-widest text-slate-500">VISIÓN</div>
                                <h2 className="h2 mt-2">Ser referencia local por trabajo serio</h2>
                                <p className="p-muted mt-4">
                                    Seguir creciendo con el mismo estándar: reparaciones durables, atención directa y relaciones
                                    de largo plazo con clientes en Mendoza.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </FixedBgSection>

            {/* Valores (SEO + confianza) */}
            <section className="container-site py-12 md:py-16">
                <Reveal>
                    <div className="max-w-2xl">
                        <div className="text-xs font-semibold tracking-widest text-slate-500">VALORES</div>
                        <h2 className="h2 mt-2">Qué nos importa en cada trabajo</h2>
                        <p className="p-muted mt-2">
                            Estas son las reglas internas que nos mantienen consistentes.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {[
                        { t: "Responsabilidad", d: "Cuidamos seguridad y funcionamiento real del equipo." },
                        { t: "Precisión", d: "Diagnóstico y control antes de entregar." },
                        { t: "Materiales", d: "Priorizamos calidad (SKF y repuestos confiables)." },
                    ].map((x, i) => (
                        <Reveal key={x.t} delay={i * 90} variant="zoom">
                            <div className="card p-6">
                                <div className="text-lg font-semibold text-slate-900">{x.t}</div>
                                <div className="text-sm text-slate-600 mt-2">{x.d}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-10">
                    <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
                        Consultar por WhatsApp
                    </a>
                </div>
            </section>

            <section className="container-site pb-12 md:pb-16">
                <CTAWide />
            </section>
        </main>
    );
}