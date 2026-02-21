"use client";

import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav";
import { site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const waLink = useMemo(() => {
    const msg = "Hola, quiero solicitar un presupuesto. ¿Me ayudan?";
    return `https://wa.me/54${site.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container-site flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Ir a inicio"
        >
          <Image
            src="/logo.png"
            height={100}
            width={300}
            alt="Bobinados YOKY"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={
                isActive(l.href)
                  ? "font-semibold text-[color:var(--color-ink)]"
                  : "text-slate-700 hover:text-[color:var(--color-ink)]"
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a className="btn btn-ghost" href={`tel:+54${site.whatsapp}`}>
            Llamar
          </a>
          <a
            className="btn btn-primary"
            href={waLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <button
          className="md:hidden rounded-xl border bg-white px-3 py-2 text-sm font-semibold"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t bg-white">
          <div className="container-site py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={
                    isActive(l.href)
                      ? "rounded-xl border bg-[color:var(--color-surface-2)] px-4 py-3 text-sm font-semibold"
                      : "rounded-xl border bg-white px-4 py-3 text-sm text-slate-700 hover:bg-[color:var(--color-surface-2)]"
                  }
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                className="btn btn-ghost w-full"
                href={`tel:+54${site.whatsapp}`}
                onClick={() => setOpen(false)}
              >
                Llamar
              </a>
              <a
                className="btn btn-primary w-full"
                href={waLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
