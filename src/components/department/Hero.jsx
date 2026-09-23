import Link from "next/link";
import React from "react";
import { FaArrowRight, FaLaptopCode } from "react-icons/fa6";

const DepartmentHeroSection = ({ department }) => {
  console.log(department);
  return (
    <section className="relative min-h-[400px] overflow-hidden bg-slate-900/50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${department.heroImage})`,
        }}
      />

      <div className="absolute inset-0 bg-slate-950/60" />

      <div className="relative mx-auto flex min-h-[400px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-6 md:mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-slate-200 backdrop-blur">
            <FaLaptopCode />
            {department.subtitle}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl ">
            {department.name}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {department.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-lg bg-orange px-5 py-2 md:py-3 font-semibold text-white transition hover:bg-orange-400"
            >
              Explore Department
              <FaArrowRight className="text-sm" />
            </a>

            <Link
              href="/admission"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2 md:py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Admission Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentHeroSection;
