import { FaArrowRight, FaGraduationCap, FaRegCompass } from "react-icons/fa6";

import Btn from "../UI/Btn";

const AdmissionCTA = () => {
  return (
    <section className="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-teal-500/20 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-blue-500/15 blur-[100px]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

        {/* Content */}
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 sm:text-sm">
              Start Your Journey
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-3xl font-black leading-[1.35] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            আপনার ভবিষ্যৎ গড়ার যাত্রা
            <span className="mt-2 block bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              শুরু হোক এখান থেকেই
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Build your skills, explore technology, and prepare for a successful
            career with Square Polytechnic Institute. Your future starts with
            the right decision today.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Btn
              text="ভর্তি সম্পর্কে জানুন"
              link="/admission"
              icon={<FaArrowRight />}
              className="w-full rounded-xl bg-teal-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 hover:bg-teal-400 sm:w-auto sm:text-base"
            />

            <Btn
              text="Contact Us"
              link="/contact"
              icon={<FaRegCompass />}
              iconPosition="left"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white hover:border-teal-400/40 hover:bg-white/10 sm:w-auto sm:text-base"
            />
          </div>

          {/* Supporting Information */}
          <div className="mx-auto mt-12 flex max-w-xl flex-col items-center justify-center gap-4 border-t border-white/10 pt-7 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <FaGraduationCap className="text-lg text-teal-400" />
              <span>Build Your Future</span>
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

            <p className="text-sm text-slate-400">
              Learn Today. Lead Tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
