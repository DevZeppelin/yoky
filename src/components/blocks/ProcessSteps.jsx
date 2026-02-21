import Reveal from "@/components/ui/Reveal";

export default function ProcessSteps() {
  const steps = [
    { n: "01", t: "Recepción", d: "Revisamos el equipo y el tipo de falla." },
    { n: "02", t: "Diagnóstico", d: "Determinamos causa raíz y alcance real." },
    { n: "03", t: "Presupuesto", d: "Propuesta clara antes de intervenir." },
    {
      n: "04",
      t: "Reparación y prueba",
      d: "Trabajo de taller sumado a control final.",
    },
  ];

  return (
    <section className="h-screen flex flex-col justify-center">
      <Reveal>
        <div>
          <div className="text-xs font-semibold tracking-widest text-white">
            PROCESO
          </div>
          <h2 className="h2 mt-2 text-white">Cómo trabajamos</h2>
          <p className="p-muted mt-2 max-w-2xl text-white">
            Orden, control y seguridad: un proceso simple para resultados
            confiables.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 90} variant="zoom">
            <div className="card-soft p-6">
              <div className="text-sm font-semibold text-slate-600">#{s.n}</div>
              <div className="mt-2 text-lg font-semibold text-brand-2">
                {s.t}
              </div>
              <div className="mt-2 text-sm text-slate-600">{s.d}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
