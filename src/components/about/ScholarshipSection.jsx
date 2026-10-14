import { FaAward, FaTrophy, FaStar, FaArrowRight } from "react-icons/fa";

export default function ScholarshipSection() {
  return (
    <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#44A1A4]/20 bg-gradient-to-br from-[#F8FAFA] via-white/80 to-[#EDF7F5] p-8 shadow-2xl backdrop-blur-xl sm:p-12 lg:p-16">
        {/* Background Glowing Orbs */}
        <div className="pointer-events-none absolute -right-16 -top-20 h-80 w-80 rounded-full bg-[#44A1A4]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-[#D9A441]/15 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#44A1A4]/20 bg-[#44A1A4]/10 px-4 py-1.5 backdrop-blur-md">
              <FaAward className="text-base text-[#44A1A4]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#44A1A4] sm:text-sm">
                Scholarship & Student Support
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-[#224248] sm:text-4xl lg:text-5xl">
              মেধা ও সম্ভাবনার বিকাশে{" "}
              <span className="mt-2 block bg-gradient-to-r from-[#44A1A4] via-[#2F7577] to-[#224248] bg-clip-text text-transparent">
                শিক্ষার্থীদের পাশে
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#325E6A] sm:text-lg">
              মেধাবী ও যোগ্য শিক্ষার্থীদের উৎসাহিত করা এবং শিক্ষার সুযোগ
              সম্প্রসারণে বৃত্তি ও সহায়তামূলক উদ্যোগ গুরুত্বপূর্ণ ভূমিকা রাখতে
              পারে।
            </p>
          </div>

          {/* Right Trophy & Action */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-5">
            {/* Animated Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-[#44A1A4]/30 sm:h-72 sm:w-72" />
            <div className="absolute top-1/2 left-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9A441]/25 sm:h-60 sm:w-60" />

            {/* Trophy Card Container */}
            <div className="group relative flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-[#FFF9E9] via-[#F9EBC9] to-[#E8CB82] shadow-2xl shadow-[#D9A441]/25 transition-transform duration-500 hover:scale-105 sm:h-60 sm:w-60">
              <div className="absolute inset-3 rounded-full border border-[#D9A441]/40" />

              {/* Trophy Icon */}
              <FaTrophy className="relative z-10 text-7xl text-[#B88A2D] drop-shadow-lg transition-transform duration-500 group-hover:scale-110 sm:text-8xl" />

              {/* Sparkles */}
              <FaStar className="absolute right-6 top-6 animate-pulse text-xl text-[#D9A441]" />
              <FaStar className="absolute bottom-8 left-6 animate-pulse text-base text-[#D9A441]" />
            </div>

            {/* Trophy Caption */}
            <div className="relative mt-8 text-center">
              <h3 className="text-xl font-bold text-[#224248] sm:text-2xl">
                মেধার স্বীকৃতি, সাফল্যের অনুপ্রেরণা
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-xs text-[#325E6A]/80 sm:text-sm">
                প্রতিটি অর্জন হোক আগামীর পথচলার নতুন প্রেরণা।
              </p>
            </div>

            {/* Premium CTA Button */}
            <a
              href="/scholarship"
              className="group relative mt-7 inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#224248] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#224248]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2F7577] hover:shadow-2xl hover:shadow-[#2F7577]/30 sm:text-base"
            >
              <span>বৃত্তি ও পুরস্কার সম্পর্কে জানুন</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
