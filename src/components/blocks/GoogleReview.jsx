import Link from "next/link";
import React from "react";

const GoogleReview = () => {
  return (
    <Link
      href="https://share.google/EPsZAZT2i92Yb5xx1"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl px-5 py-3 
                 bg-white border border-slate-200 
                 shadow-md hover:shadow-xl 
                 hover:-translate-y-1 
                 transition-all duration-300 
                 text-slate-800 font-medium justify-center"
    >
      {/* Icono Google simple */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          fill="#EA4335"
          d="M12 10.2v3.9h5.4c-.2 1.2-1.4 3.6-5.4 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3 14.6 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.6-4 9.6-9.7 0-.7-.1-1.3-.2-1.8H12z"
        />
      </svg>
      Ver en Google
    </Link>
  );
};

export default GoogleReview;
