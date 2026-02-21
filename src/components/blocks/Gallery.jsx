"use client";

import { useCallback, useMemo, useState } from "react";

export default function Gallery({ items = [] }) {
  // En mobile no hay hover real: usamos "activeIndex" para mostrar overlay al tocar.
  const [activeIndex, setActiveIndex] = useState(null);

  const isTouchDevice = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }, []);

  const onCardClick = useCallback(
    (idx) => {
      if (!isTouchDevice) return; // en desktop no hace falta toggle
      setActiveIndex((prev) => (prev === idx ? null : idx));
    },
    [isTouchDevice],
  );

  const closeOverlay = useCallback(() => setActiveIndex(null), []);

  return (
    <section className="w-full">
      {/* Grid */}
      <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((it, idx) => {
          const isActive = activeIndex === idx;

          return (
            <article
              key={it.id || `${it.src}-${idx}`}
              className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3]">
                {/* fondo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out
                             group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url(${it.src})` }}
                />

                {/* Glow + overlay (hover desktop / active en touch) */}
                <div
                  className={[
                    "absolute inset-0 transition-opacity duration-500",
                    "bg-gradient-to-tr from-black/70 via-black/25 to-transparent",
                    "opacity-0 group-hover:opacity-100",
                    isActive ? "opacity-100" : "",
                  ].join(" ")}
                />

                {/* Línea decorativa */}
                <div
                  className={[
                    "absolute left-0 top-0 h-full w-1 transition-all duration-500",
                    "bg-gradient-to-b from-[color:var(--color-brand)] to-transparent",
                    "opacity-0 group-hover:opacity-100",
                    isActive ? "opacity-100" : "",
                  ].join(" ")}
                />

                {/* Contenido overlay */}
                <div
                  className={[
                    "absolute inset-x-0 bottom-0 p-4 sm:p-5",
                    "translate-y-2 opacity-0 transition-all duration-500",
                    "group-hover:translate-y-0 group-hover:opacity-100",
                    isActive ? "translate-y-0 opacity-100" : "",
                  ].join(" ")}
                >
                  <div className="text-white">
                    <div className="text-xs font-semibold tracking-widest text-white/75">
                      {it.kicker || "BOBINADOS YOKY"}
                    </div>
                    <h3 className="mt-1 text-lg font-semibold leading-snug">
                      {it.title || "Proyecto"}
                    </h3>
                    {it.subtitle ? (
                      <p className="mt-1 text-sm text-white/80">
                        {it.subtitle}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Botón/tap target invisible para mobile */}
                <button
                  type="button"
                  onClick={() => onCardClick(idx)}
                  className="absolute inset-0"
                  aria-label={
                    isTouchDevice
                      ? isActive
                        ? "Cerrar detalle"
                        : "Ver detalle"
                      : "Abrir"
                  }
                />
              </div>

              {/* Pie fijo (si querés siempre visible) */}
              <div className="flex items-center justify-between gap-3 p-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {it.title || "Título"}
                  </div>
                  {it.footer ? (
                    <div className="text-xs text-slate-600 mt-1">
                      {it.footer}
                    </div>
                  ) : (
                    <div className="text-xs text-slate-600 mt-1">
                      Ver detalle con hover / tap
                    </div>
                  )}
                </div>

                {it.href ? (
                  <a
                    href={it.href}
                    className="text-sm font-semibold text-[color:var(--color-brand)] hover:underline"
                    onClick={(e) => {
                      // si estás en touch y el overlay está cerrado, el primer tap abre overlay.
                      if (isTouchDevice && activeIndex !== idx) {
                        e.preventDefault();
                        setActiveIndex(idx);
                      }
                    }}
                  >
                    Ver →
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-slate-400">
                    ●
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Capa para cerrar en mobile tocando fuera (opcional) */}
      {activeIndex !== null ? (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default bg-black/0"
          aria-label="Cerrar overlay"
          onClick={closeOverlay}
        />
      ) : null}
    </section>
  );
}
