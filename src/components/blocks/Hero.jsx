import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import GoogleReview from "./GoogleReview";

export default function Hero() {
  const wa = `https://wa.me/54${site.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero solicitar un presupuesto. ¿Me ayudan?",
  )}`;

  return (
    <section className="container-site py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <Reveal variant="left">
          <div>
            <div className="text-xs font-semibold tracking-widest text-slate-500">
              TALLER ELECTROMECÁNICO · MENDOZA
            </div>

            <h1 className="h1 mt-3">
              BOBINADOS YOKY: reparación y bobinado con criterio técnico.
            </h1>

            <p className="p-muted mt-4 text-base md:text-lg">
              40 años de trayectoria familiar. Motores eléctricos, bombas
              hidráulicas, ascensores y sistemas industriales.{" "}
              <span className="font-semibold text-slate-900">Presupuestos</span>
              .
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                className="btn btn-primary"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                Pedir presupuesto
              </a>
              <a className="btn btn-ghost" href="/servicios">
                Ver servicios
              </a>
              <GoogleReview />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="pill">Precio / calidad</span>
              <span className="pill">Rodamientos SKF</span>
              <span className="pill">Ascensores</span>
              <span className="pill">Bombas</span>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <div className="card-soft p-6 md:p-8">
            <div className="text-xs font-semibold tracking-widest text-slate-500">
              ESPECIALIDADES
            </div>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {[
                "Reparación motores eléctricos y bobinado",
                "Bombas hidráulicas y bombas de profundidad",
                "Ascensores: motores, frenos y seguridad",
                "Sistemas contra incendios",
                "Riego y presurización domiciliaria",
                "Motores blindados (petróleo / estaciones de servicio)",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t pt-5 text-sm text-slate-600">
              <div className="font-semibold text-slate-900">Taller</div>
              <div className="mt-1">{site.address}</div>
              <div className="mt-1">
                WhatsApp:{" "}
                <span className="font-semibold text-slate-900">
                  {site.whatsapp}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
