import { site } from "@/lib/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-black">
      <div className="container-site py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="font-semibold text-white">BOBINADOS YOKY</div>
            <div className="text-sm text-white mt-1">{site.address}</div>
            <div className="text-sm text-white mt-1">
              WhatsApp: {site.whatsapp}
            </div>
          </div>
          <div className="text-sm text-white">
            Web made in Mendoza by{" "}
            <Link
              href="https://devzeppelin.com.ar"
              target="_blank"
              rel="noreferrer"
            >
              DevZeppelin
            </Link>
            <span> {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
