export default function FixedBgSection({
  imageUrl,
  overlay = "white",
  children,
}) {
  // overlay: "white" (NETTO-like) o "dark" (industrial más fuerte)
  const overlayClass =
    overlay === "dark" ? "bg-slate-950/60 text-white" : "bg-black/45";

  return (
    <section
      className="bg-fixed-soft"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={`${overlayClass} backdrop-blur-[2px]`}>{children}</div>
    </section>
  );
}
