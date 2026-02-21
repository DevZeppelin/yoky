import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export default function ContactPanel({ showMap = false }) {
  const wa = `https://wa.me/54${site.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero solicitar un presupuesto. ¿Qué datos necesitan?",
  )}`;

  const mapQuery = encodeURIComponent(site.address);

  return (
    <section>
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal variant="left">
          <div className="card p-6 md:p-8">
            <div className="text-xs font-semibold tracking-widest text-slate-500">
              CONTACTO
            </div>
            <h2 className="h2 mt-2">Coordinemos evaluación</h2>
            <p className="p-muted mt-3">
              Atención directa en taller. Para cotizar más rápido: foto de
              elemento + síntoma + uso.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="card-soft p-4">
                <div className="text-slate-500">Dirección</div>
                <div className="mt-1 font-semibold text-slate-900">
                  {site.address}
                </div>
              </div>
              <div className="card-soft p-4">
                <div className="text-slate-500">WhatsApp</div>
                <div className="mt-1 font-semibold text-slate-900">
                  {site.whatsapp}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                className="btn btn-primary"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a className="btn btn-ghost" href={`tel:+54${site.whatsapp}`}>
                Llamar
              </a>
            </div>
          </div>
        </Reveal>

        {showMap ? (
          <Reveal variant="right" delay={120}>
            <div className="card overflow-hidden">
              <iframe
                title="Mapa - BOBINADOS YOKY"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              />
            </div>
          </Reveal>
        ) : (
          <Reveal variant="right" delay={120}>
            <div className="card-soft p-6 md:p-8">
              <div className="text-xs font-semibold tracking-widest text-slate-500">
                PARA AGILIZAR
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mt-2">
                Qué enviar por WhatsApp
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {[
                  "Foto de elemento (modelo, potencia, voltaje)",
                  "Síntoma (no arranca, ruido, vibra, baja presión)",
                  "Uso: hogar / edificio / industria",
                  "Tiempo de falla y si hubo intervención previa",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a className="btn btn-primary" href="/contacto">
                  Ver contacto y mapa
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
