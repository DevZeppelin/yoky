import { site } from "@/lib/site";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="border-b bg-black">
      <div className="container-site flex flex-col gap-2 py-2 text-sm md:flex-row md:items-center md:justify-between">
        <div className="text-white flex">
          <span className="hidden md:flex font-semibold text-white">
            BOBINADOS YOKY
          </span>{" "}
          <span className="px-2 text-slate-500">|</span>
          {site.address}
          <span className="px-2 text-slate-500">|</span>
          <Link
            className="link font-semibold"
            href={`https://wa.me/54${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            {site.whatsapp}
          </Link>
        </div>
      </div>
    </div>
  );
}
