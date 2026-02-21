// components/HeroFixed.jsx
export default function HeroFixed({
  imageUrl = "/hero.png",
  title = "BOBINADOS YOKY",
  subtitle = "Soluciones Electromecánicas de Alto Rendimiento",
}) {
  return (
    <section
      className="relative min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Contenido */}
      <div className="relative z-10 min-h-screen">
        <div className="container-site min-h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-4 text-white/85 text-base md:text-xl">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
