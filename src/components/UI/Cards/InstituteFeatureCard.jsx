"use client";

import { ArrowUpRight } from "lucide-react";

const InstituteFeatureCard = ({ feature, index, isActive }) => {
  const Icon = feature.icon;

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border bg-white
        px-4 py-7 text-center transition-all duration-500
        md:min-h-[200px]
        ${
          isActive
            ? "border-[#44A1A4]/40 shadow-[0_15px_40px_rgba(68,161,164,0.12)]"
            : "border-[#E2E8F0] hover:border-[#44A1A4]/30 hover:shadow-lg"
        }
      `}
    >
      {/* Top Gradient */}
      <div
        className={`absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#224248] via-[#44A1A4] to-[#C28B24] transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Corner Decoration */}
      <div
        className={`absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#44A1A4]/10 transition-all duration-700 ${
          isActive ? "scale-[1.7]" : "group-hover:scale-150"
        }`}
      />

      {/* Number */}
      <span
        className={`absolute right-4 top-3 text-[11px] font-bold tracking-widest ${
          isActive ? "text-[#C28B24]" : "text-gray-500"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
          isActive
            ? "scale-110 bg-[#224248] text-[#F4C95D] shadow-lg"
            : "bg-[#EEF7F7] text-[#325E6A] group-hover:bg-[#44A1A4] group-hover:text-white"
        }`}
      >
        <Icon size={27} strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3
        className={`text-[15px] font-bold leading-6 sm:text-base ${
          isActive
            ? "text-[#224248]"
            : "text-[#263F50] group-hover:text-[#44A1A4]"
        }`}
      >
        {feature.title}
      </h3>

      {/* Arrow */}
      <ArrowUpRight
        size={15}
        className={`absolute bottom-5 right-5 text-[#44A1A4] transition-all duration-500 ${
          isActive
            ? "translate-x-0 opacity-100"
            : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        }`}
      />

      {/* Bottom Indicator */}
      <div
        className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#44A1A4] to-[#C28B24] transition-all duration-700 ${
          isActive ? "w-[65%]" : "w-0"
        }`}
      />
    </div>
  );
};

export default InstituteFeatureCard;
