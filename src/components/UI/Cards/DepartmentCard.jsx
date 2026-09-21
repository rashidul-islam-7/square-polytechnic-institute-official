import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const DepartmentCard = ({ department }) => {
  if (!department) return null;

  const Icon = department.icon;

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#DCE7E8] bg-white shadow-sm transition-all duration-300 hover:border-[#44A1A4]/40">
      {/* Top Accent */}
      <div className="absolute left-0 top-0 z-30 h-1 w-full bg-gradient-to-r from-[#224248] via-[#44A1A4] to-[#FF9A00]" />

      {/* Corner Decoration */}
      <div className="absolute -right-10 -top-10 z-20 h-32 w-32 rounded-full bg-[#44A1A4]/50 transition-transform duration-500 group-hover:scale-150 hover:bg-[#44A1A4]/70" />

      {/* Image Section */}
      <div className="relative mt-1 h-[210px] w-full overflow-hidden bg-gray-100">
        <Image
          src={department.image}
          alt={department.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#224248]/50 via-transparent to-transparent opacity-60" />

        {/* Diploma Badge */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-[#EEF7F7] px-3 py-1 text-xs font-semibold text-[#325E6A] shadow-sm">
          Diploma
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative p-6">
        {/* Floating Icon */}
        <div className="-mt-12 mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#224248] text-white shadow-md transition-all duration-300 group-hover:bg-[#44A1A4] group-hover:shadow-lg">
          {Icon && <Icon size={26} strokeWidth={1.8} />}
        </div>

        {/* Department Label */}
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#44A1A4]">
          Department
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold leading-snug text-[#224248] transition-colors duration-300 group-hover:text-[#44A1A4]">
          {department.name}
        </h3>

        {/* Description */}
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#325E6A]">
          {department.description}
        </p>

        {/* Button */}
        <Link
          href={`/departments/${department.shortName?.toLowerCase()}`}
          className="group/btn mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#224248] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FF9A00]"
        >
          Explore Department
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default DepartmentCard;
