import Reveal from "@/components/ui/Reveal";

export default function IndustriesGrid() {
  const items = [
    "Automotores",
    "Máquinas herramienta",
    "Motores industriales",
    "Electricidad y electrónica",
    "Edificios (ascensores)",
    "Estaciones de servicio / petróleo",
    "Riego y presurización",
    "Sistemas de seguridad",
  ];

  return (
    <section>
      <Reveal>
        <div>
          <div className="text-xs font-semibold tracking-widest text-slate-500">
            RUBROS
          </div>
          <h2 className="h2 mt-2">Dónde trabajamos</h2>
          <p className="p-muted mt-2 max-w-2xl">
            Hogar, edificios, comercio e industria: soluciones reales para
            equipos críticos.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((t, i) => (
          <Reveal key={t} delay={i * 60} variant="zoom">
            <div className="card-soft px-4 py-4 text-sm text-slate-700">
              {t}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
