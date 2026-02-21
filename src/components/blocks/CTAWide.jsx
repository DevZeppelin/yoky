import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export default function CTAWide() {
  const wa = `https://wa.me/54${site.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero solicitar un presupuesto. Tengo un equipo para revisar.",
  )}`;

  return (
    <Reveal>
      <div className="card-soft p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-slate-900">
            ¿Necesitás presupuesto?
          </div>
          <div className="mt-1 text-sm text-slate-600">
            Escribinos por WhatsApp y coordinamos evaluación en taller.
          </div>
        </div>
        <div className="flex gap-3">
          <a
            className="btn btn-primary"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a className="btn btn-ghost" href="/contacto">
            Contacto
          </a>
        </div>
      </div>
    </Reveal>
  );
}
