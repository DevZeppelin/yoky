import Reveal from "@/components/ui/Reveal";

export default function TrustBar() {
  const items = [
    { k: "40+", v: "Años de trayectoria familiar" },
    { k: "SKF", v: "Rodamientos y mantenimiento" },
    { k: "Edificios", v: "Ascensores en Mendoza" },
    { k: "Industria", v: "Sistemas críticos y bombas" },
  ];

  return (
    <section className="container-site pb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((it, i) => (
          <Reveal key={it.k} delay={i * 80} variant="zoom">
            <div className="card p-4 text-center">
              <div className="text-2xl font-semibold text-slate-900">
                {it.k}
              </div>
              <div className="text-xs text-slate-600 mt-1">{it.v}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
