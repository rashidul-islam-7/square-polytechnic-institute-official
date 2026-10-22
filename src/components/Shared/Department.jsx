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
import { FaGraduationCap } from "react-icons/fa6";

import DepartmentCard from "../UI/Cards/DepartmentCard";
import civilImg from "@/assets/images/department_images/civil_square_polytechnic.jpg";
import electricalImg from "@/assets/images/department_images/electrical_square_polytechnic.jpg";
import computerImg from "@/assets/images/department_images/computer_square_polytechnic.jpg";
import mechanicalImg from "@/assets/images/department_images/mechanical_square_polytechnic.jpeg";
import textileImg from "@/assets/images/department_images/textile_square_polytechnic.jpg";
import othersImg from "@/assets/images/department_images/others_skills_square_polytechnic.jpg";
import TitleStyle from "../UI/TitleStyle";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";

const departmentsData = [
  {
    id: 1,
    type: " Diploma ",
    name: "Civil Engineering",
    shortName: "Civil",
    icon: Building2,
    image: civilImg,
    link: "civil",
    description:
      "আধুনিক নির্মাণশিল্প, অবকাঠামোগত ডিজাইন ও স্ট্রাকচারাল ইঞ্জিনিয়ারিংয়ের ব্যবহারিক দক্ষতার মাধ্যমে টেকসই ভবিষ্যৎ গড়ার কারিগর হন।",
  },
  {
    id: 2,
    type: " Diploma ",
    name: "Electrical Engineering",
    shortName: "Electrical",
    icon: Zap,
    image: electricalImg,
    link: "electrical",
    description:
      "স্মার্ট পাওয়ার সিস্টেম, আধুনিক ইলেকট্রনিক্স ও শিল্প কারখানা অটোমেশনে ইন্ডাস্ট্রি-লেভেল জ্ঞান অর্জন করে নিজেকে তৈরি করুন।",
  },
  {
    id: 3,
    type: " Diploma ",
    name: "Computer Science & Engineering",
    shortName: "Computer",
    icon: Monitor,
    image: computerImg,
    link: "computer",
    description:
      "প্রোগ্রামিং, সফটওয়্যার ও ওয়েব ডেভেলপমেন্ট থেকে শুরু করে আধুনিক কৃত্রিম বুদ্ধিমত্তার প্রযুক্তিতে গড়ে তুলুন সফল আইটি ক্যারিয়ার।",
  },
  {
    id: 4,
    type: " Diploma ",
    name: "Mechanical Engineering",
    shortName: "Mechanical",
    icon: Cog,
    image: mechanicalImg,
    link: "mechanical",
    description:
      "এডভান্সড মেশিনারি, রোবোটিক্স, ম্যানুফ্যাকচারিং প্রসেস ও মেকানিক্যাল অটোমেশনে সরাসরি প্র্যাকটিক্যাল কাজের অভিজ্ঞতা অর্জন করুন।",
  },
  {
    id: 5,
    type: " Diploma ",
    name: "Textile Engineering",
    shortName: "Textile",
    icon: Shirt,
    image: textileImg,
    link: "textile",
    description:
      "আধুনিক টেক্সটাইল প্রযুক্তি, গার্মেন্টস ম্যানুফ্যাকচারিং ও কোয়ালিটি কন্ট্রোলের দক্ষতা নিয়ে দ্রুত বর্ধনশীল টেক্সটাইল খাতে নিজেকে এগিয়ে রাখুন।",
  },
  {
    id: 6,
    type: "Training ",
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
          <SectionTopSubTitle text={"Our Departments"} icon={FaGraduationCap} />
          <div className="flex justify-center">
            <TitleStyle title={"সাফল্যের"} highlightedTitle={"পথ বেছে নিন"} />
          </div>

          <p className="mt-4 text-sm leading-6 text-[#325E6A] sm:text-base">
            আমাদের ডিপ্লোমা ইঞ্জিনিয়ারিং বিভাগগুলো ঘুরে দেখুন এবং একটি সফল
            কর্মজীবনের জন্য প্রয়োজনীয় ব্যবহারিক দক্ষতা অর্জন করুন।
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
