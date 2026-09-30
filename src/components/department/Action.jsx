import Link from "next/link";
import React from "react";

import { FaArrowRight } from "react-icons/fa6";

const Action = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/75 via-slate-950/65 to-slate-950/60" />

      <div className="relative mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          আপনার ভবিষ্যৎ, আপনার সিদ্ধান্ত
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
          সঠিক সিদ্ধান্তের মাধ্যমেই শুরু হোক আপনার সুন্দর ভবিষ্যতের যাত্রা।
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <Link
            href="/admission"
            className="inline-flex items-center gap-2 rounded-md bg-[#ff9a00] px-6 py-3 text-sm font-semibold text-white shadow-lg "
          >
            Admission
            <FaArrowRight className="text-xs" />
          </Link>

          <Link
            href="/departments"
            className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm"
          >
            All Department
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Action;
