"useclient";

import React from "react";
import {
  Building2,
  Zap,
  Monitor,
  Cog,
  Shirt,
  GraduationCap,
} from "lucide-react";

import DepartmentCard from "../UI/Cards/DepartmentCard";

import civilImg from "@/assets/images/department_images/civil_square_polytechnic.jpg";
import electricalImg from "@/assets/images/department_images/electrical_square_polytechnic.jpg";
import computerImg from "@/assets/images/department_images/computer_square_polytechnic.jpg";
import mechanicalImg from "@/assets/images/department_images/mechanical_square_polytechnic.jpeg";
import textileImg from "@/assets/images/department_images/textile_square_polytechnic.jpg";
import othersImg from "@/assets/images/department_images/others_skills_square_polytechnic.jpg";

const departmentsData = [
  {
    id: 1,
    name: "Civil Engineering",
    shortName: "Civil",
    icon: Building2,
    image: civilImg,
    link: "civilPage",
    description:
      "আধুনিক নির্মাণশিল্প, অবকাঠামোগত ডিজাইন ও স্ট্রাকচারাল ইঞ্জিনিয়ারিংয়ের ব্যবহারিক দক্ষতার মাধ্যমে টেকসই ভবিষ্যৎ গড়ার কারিগর হন।",
  },
  {
    id: 2,
    name: "Electrical Engineering",
    shortName: "Electrical",
    icon: Zap,
    image: electricalImg,
    link: "electricalPage",
    description:
      "স্মার্ট পাওয়ার সিস্টেম, আধুনিক ইলেকট্রনিক্স ও শিল্প কারখানা অটোমেশনে ইন্ডাস্ট্রি-লেভেল জ্ঞান অর্জন করে নিজেকে তৈরি করুন।",
  },
  {
    id: 3,
    name: "Computer Science & Engineering",
    shortName: "Computer",
    icon: Monitor,
    image: computerImg,
    link: "computerPage",
    description:
      "প্রোগ্রামিং, সফটওয়্যার ও ওয়েব ডেভেলপমেন্ট থেকে শুরু করে আধুনিক কৃত্রিম বুদ্ধিমত্তার প্রযুক্তিতে গড়ে তুলুন সফল আইটি ক্যারিয়ার।",
  },
  {
    id: 4,
    name: "Mechanical Engineering",
    shortName: "Mechanical",
    icon: Cog,
    image: mechanicalImg,
    link: "mechanicalPage",
    description:
      "এডভান্সড মেশিনারি, রোবোটিক্স, ম্যানুফ্যাকচারিং প্রসেস ও মেকানিক্যাল অটোমেশনে সরাসরি প্র্যাকটিক্যাল কাজের অভিজ্ঞতা অর্জন করুন।",
  },
  {
    id: 5,
    name: "Textile Engineering",
    shortName: "Textile",
    icon: Shirt,
    image: textileImg,
    link: "textilePage",
    description:
      "আধুনিক টেক্সটাইল প্রযুক্তি, গার্মেন্টস ম্যানুফ্যাকচারিং ও কোয়ালিটি কন্ট্রোলের দক্ষতা নিয়ে দ্রুত বর্ধনশীল টেক্সটাইল খাতে নিজেকে এগিয়ে রাখুন।",
  },
  {
    id: 6,
    name: "Short Courses & Training",
    shortName: "Others",
    icon: GraduationCap,
    image: othersImg,
    link: "shortCourses",
    description:
      "প্রফেশনাল স্কিল ডেভেলপমেন্ট, কম্পিউটার, আইটি ট্রেনিং, ও বিভিন্ন প্র্যাকটিক্যাল শর্ট কোর্সের মাধ্যমে নিজেকে আধুনিক জব মার্কেট উপযোগী করে তুলুন।",
  },
];

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
          {departmentsData.map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
