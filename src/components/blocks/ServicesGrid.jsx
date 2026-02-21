import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "Motores eléctricos",
      desc: "Reparación, bobinado y mantenimiento orientado a confiabilidad.",
      bullets: ["Bobinado", "Rodamientos (SKF)", "Pruebas y puesta a punto"],
    },
    {
      title: "Bombas hidráulicas",
      desc: "Bombeo, riego, presurización y bombas de profundidad.",
      bullets: ["Bombas de profundidad", "Presurización", "Riego presurizado"],
    },
    {
      title: "Ascensores",
      desc: "Motores, frenos, bobinas de freno y sistemas de seguridad.",
      bullets: ["Frenos", "Bobinas de freno", "Mantenimiento"],
    },
    {
      title: "Sistemas industriales",
      desc: "Contra incendios y motores blindados para petróleo/estaciones.",
      bullets: ["Contra incendios", "Motores blindados", "Soporte técnico"],
    },
  ];

  return (
    <section>
      <Reveal>
        <div className="text-white">
          <div className="text-xs text-white font-semibold tracking-widest">
            SERVICIOS
          </div>
          <h2 className="h2 mt-2 text-white">Soluciones electromecánicas</h2>
          <p className="p-muted mt-2 max-w-2xl text-white">
            Diagnóstico claro, presupuesto y reparación con foco en durabilidad
            (precio/calidad).
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal
            key={s.title}
            variant={i % 2 === 0 ? "left" : "right"}
            delay={i * 90}
          >
            <div className="card-soft p-6">
              <div className="text-xs font-semibold tracking-widest text-slate-500">
                BOBINADOS YOKY
              </div>
              <div className="mt-2 text-xl font-semibold text-slate-900">
                {s.title}
              </div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Link className="link text-sm font-semibold" href="/servicios">
                  Ver más →
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
