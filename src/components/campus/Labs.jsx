import { FaArrowRight, FaChevronRight } from "react-icons/fa6";

import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";
import TitleStyle from "../UI/TitleStyle";

export default function CampusLabsSection({ labData = [], className = "" }) {
  const [header = {}, ...labItems] = labData;

  const { shortTitle, title, highlightedTitle, description } = header;

  return (
    <section
      className={`relative overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-20 ${className}`}
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER  */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionShortTitleStyle text={shortTitle} />

            <div className="mt-3">
              <TitleStyle title={title} highlightedTitle={highlightedTitle} />
            </div>

            {description && (
              <p className="mt-4 max-w-2xl text-base leading-7">
                {description}
              </p>
            )}
          </div>

          {/* View All Button */}
          <button
            type="button"
            className="group cursor-pointer flex w-fit shrink-0 items-center gap-3 rounded-full border  bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-teal-400/30"
          >
            <span>See All Labs</span>

            <FaChevronRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/*  LAB CARDS */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {labItems.map((data, index) => (
            <div
              key={data.name}
              className="cursor-pointer relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] "
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-full w-full object-cover"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

                {/* Image Bottom Title */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="mt-1 text-xl font-black text-white">
                    {data.name}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex items-center justify-between p-5">
                <button
                  type="button"
                  className="cursor-pointer group/button flex items-center gap-2 text-sm font-bold text-slate-300 transition-colors duration-300 hover:text-teal-400"
                >
                  <span>বিস্তারিত</span>

                  <FaArrowRight className="text-xs mb-1 transition-transform duration-300 group-hover/button:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
