import { site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export default function WhatsAppFloat() {
  const wa = `https://wa.me/54${site.whatsapp}?text=${encodeURIComponent("Hola, quiero solicitar un presupuesto.")}`;
  return (
    <Link
      href={wa}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 "
      aria-label="WhatsApp BOBINADOS YOKY"
    >
      <Image
        src="/whatsapp.webp"
        width={80}
        height={80}
        alt="WhatsApp BOBINADOS YOKY"
      />
    </Link>
  );
}
