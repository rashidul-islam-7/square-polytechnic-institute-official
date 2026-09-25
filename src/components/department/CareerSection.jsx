import {
  FaLaptopCode,
  FaBrain,
  FaNetworkWired,
  FaRocket,
} from "react-icons/fa6";
import CustomIcon from "../UI/CustomIcon";
import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";
import { careerData } from "@/data/cstData";
import TitleStyle from "../UI/TitleStyle";
import { DialogDescription } from "@base-ui/react";

export default function CareerSection() {
  const {
    sectionLabel,
    title,
    highlightedTitle,
    description,
    highlight,
    careers,
    workAreas,
    specialNote,
  } = careerData;

  return (
    <section
      id="career"
      className="scroll-mt-20 bg-[#f8faf9] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Header Left (Sticky on Desktop) + Cards Right */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Sticky Section Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionShortTitleStyle text="Career & Job Opportunities" />


<TitleStyle title={title} highlightedTitle={highlightedTitle} />
            {/* <h2 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {title} <span className="text-[#224248]">{} </span>
            </h2> */}

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>

            {/* Highlighted Quote Callout */}
            <div className="mt-8 hidden md:block rounded-xl border-l-4 border-[#224248] bg-white p-4 shadow-sm sm:p-5">
              <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
               {highlight}
              </p>
            </div>
          </div>

          {/* Right Column: Career Category Cards Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {careers.map((career, index) => (
              <div
                key={career.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm "
              >
                <div>
                  {/* Top Header: Icon Container + Step Badge */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#224248]/10 text-[#224248] transition-colors duration-300 group-hover:bg-[#224248] group-hover:text-white">
                      <CustomIcon icon={career.icon} />
                    </div>

                    <span className="rounded-full px-3 py-1 font-mono text-xs font-bold text-slate-400 0 ">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 transition-colors duration-200 group-hover:text-[#224248]">
                    {career.title}
                  </h3>

                  {/* Bulleted List */}
                  <ul className="mt-5 space-y-3">
                    {career.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm font-medium leading-relaxed text-slate-600"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#224248]/15 text-[#224248]">
                          <svg
                            className="h-2.5 w-2.5 fill-current"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 2.28a.75.75 0 00-1.06 0L4.5 6.94 2.78 5.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l5.25-5.25a.75.75 0 000-1.06z" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Areas Section */}
        <div className="relative mt-16 overflow-hidden rounded-[28px] bg-[#18363b] p-6 md:p-8 ">
          {/* Background Effects */}
          <div className="pointer-events-none absolute inset-0">
            {/* Soft glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#224248] blur-3xl" />

            <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#7ac7c0]/5 blur-3xl" />

            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-14">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-teal-300/60" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200/80">
                 {workAreas.label}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                {workAreas.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/65 sm:text-base">
            {workAreas.description}
              </p>
            </div>

            {/* Right Content */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="flex flex-wrap gap-2.5">
                {workAreas?.areas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-teal-200/30 hover:bg-teal-200/10 hover:text-white"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Executive Pro-Tip / Special Note Callout */}
        <div className="mt-10 rounded-2xl border border-amber-200/80 bg-linear-to-r from-amber-50/80 via-orange-50/50 to-amber-50/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl text-amber-700 shadow-inner">
              📝
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-800">{specialNote.title}</h4>

              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                {specialNote.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
