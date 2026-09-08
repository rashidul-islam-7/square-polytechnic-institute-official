

import React from "react";
import Link from "next/link";
import { Building2, Zap, Monitor, Cog, Shirt, ArrowRight } from "lucide-react";

const departments = [
  {
    id: 1,
    name: "Civil Engineering",
    shortName: "Civil",
    icon: Building2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsINWkPRWzQiauSkWyO5gzMUPl_5q8XX06RkcxtDCila6hIcRQpAcj5Q&s=10",
    description:
      "আধুনিক নির্মাণ, অবকাঠামো ও স্ট্রাকচারাল ইঞ্জিনিয়ারিংয়ের মাধ্যমে ভবিষ্যৎ নির্মাণের দক্ষতা অর্জন করুন।",
  },

  {
    id: 2,
    name: "Electrical Engineering",
    shortName: "Electrical",
    icon: Zap,
    image:
      "https://media.istockphoto.com/id/2230952100/photo/electrician-use-meters-to-measure-current-at-devices-in-the-mdb-cabinet-for-safety-in-the.jpg?s=612x612&w=0&k=20&c=uTbiZdxJ0hCIyoGm_6U-pKs37YhcshJ88o9RZZSq9U4=",
    description:
      "ইলেকট্রিক্যাল সিস্টেম, পাওয়ার টেকনোলজি ও আধুনিক অটোমেশনে ব্যবহারিক দক্ষতা তৈরি করুন।",
  },

  {
    id: 3,
    name: "Computer Science & Engineering",
    shortName: "Computer",
    icon: Monitor,
    image:
      "https://cdn.unoeste.br/images/graduacao/cursos/10/infraestrutura/fotogrande/faculdade-de-ciencia-da-computacao-laboratorio-aula-pratica.jpg",
    description:
      "প্রোগ্রামিং, সফটওয়্যার ডেভেলপমেন্ট, ওয়েব ডেভেলপমেন্ট ও আধুনিক ডিজিটাল প্রযুক্তি শিখুন।",
  },

  {
    id: 4,
    name: "Mechanical Engineering",
    shortName: "Mechanical",
    icon: Cog,
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQHiNmb9Sxc6Eg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1691755378976?e=2147483647&v=beta&t=8mbRLmP7OIhadfYGhdUtTW-g-IejBPbrwwjf-IofMTo",
    description:
      "মেশিন, ম্যানুফ্যাকচারিং, মেকানিক্যাল সিস্টেম ও আধুনিক ইন্ডাস্ট্রিয়াল প্রযুক্তিতে দক্ষতা অর্জন করুন।",
  },

  {
    id: 5,
    name: "Textile Engineering",
    shortName: "Textile",
    icon: Shirt,
    image:
      "https://international.sdu.edu.tr/uploads/bolum/27694f63-531e-4062-a5c0-5715ecfbc03e.jpg",
    description:
      "আধুনিক টেক্সটাইল প্রযুক্তি ও উৎপাদন ব্যবস্থার ব্যবহারিক জ্ঞান নিয়ে গড়ে তুলুন ক্যারিয়ার।",
  },
];

const DepartmentCard = ({ department }) => {
  const Icon = department.icon;

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#DCE7E8] bg-white shadow-sm transition-all duration-300  hover:border-[#44A1A4]/40 ">
      {/* Top Accent */}
      <div className="absolute left-0 top-0 z-30 h-1 w-full bg-linear-to-r from-[#224248] via-[#44A1A4] to-[#FF9A00]" />

      {/* Corner Decoration */}
      <div className="absolute -right-10 -top-10 z-20 h-32 w-32 rounded-full bg-[#44A1A4]/50 transition-transform duration-500 group-hover:scale-290 hover:bg-[#44A1A4]/70" />

      {/* Image Section */}
      <div className="relative mt-1 h-[210px] overflow-hidden">
        <img
          src={department.image}
          alt={department.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        Image Overlay
        <div className="absolute inset-0 bg-linear-to-t from-[#224248]/50 via-transparent to-transparent opacity-60" />
        {/* Diploma Badge */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-[#EEF7F7] px-3 py-1 text-xs font-semibold text-[#325E6A] shadow-sm">
          Diploma
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative p-6">
        {/* Floating Icon */}
        <div className="-mt-12 mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#224248] text-white shadow-md transition-all duration-300 group-hover:bg-[#44A1A4] group-hover:shadow-lg">
          <Icon size={26} strokeWidth={1.8} />
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
          href={`/departments/${department.shortName.toLowerCase()}`}
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

const Departments = () => {
  return (
    <section className="bg-[#F8FAFA] py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-[#44A1A4]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#44A1A4]">
            Our Departments
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#224248] sm:text-4xl">
            Choose Your Path to <span className="text-[#44A1A4]">Success</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#325E6A] sm:text-base">
            Explore our diploma engineering departments and build the practical
            skills you need for a successful career.
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
