"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaGraduationCap,
  FaQuoteLeft,
  FaChevronDown,
} from "react-icons/fa6";

import DepartmentHeroSection from "../../../components/department/Hero";
import DiplomaGlance from "@/components/department/DiplomaGlance";
import DepartmentOverview from "@/components/department/DepartmentOverview";
import LabsSection from "@/components/department/Lab";
import WhyChoose from "@/components/department/WhyChoose";
import CareerSection from "@/components/department/CareerSection";
import HigherStudy from "@/components/department/HigherStudy";
import Curriculum from "@/components/department/Curriculum";
import ReviewSectionHeader from "@/components/Shared/Review/ReviewSectionHeader";
import OneSlider from "@/components/Shared/Slider/OneSlider";
import { studentsFeedback } from "@/data/feedbackData/studentsFeedback";
import { filterStudentsByDepartment } from "@/utils/filterStudentsComment";
import Faq from "@/components/department/Faq";
import Action from "@/components/department/Action";

const department = {
  name: "Computer Technology",
  shortName: "Computer",
  subtitle: "Diploma in Engineering",
  description:
    "কম্পিউটার, Programming, Software, Web Development, Networking এবং আধুনিক Information Technology সম্পর্কে তাত্ত্বিক ও ব্যবহারিক জ্ঞান অর্জনের সুযোগ।",

  duration: "৪ বছর",
  education: "Diploma in Engineering",
  learning: "Theory + Practical",
  focus: "Information Technology",

  heroImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
};
const labImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    title: "Practical Class",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    title: "Student Activity",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
    title: "Learning Session",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
    title: "Team Work",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    title: "Computer Lab",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    title: "Programming Lab",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    title: "Technology Learning",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",
    title: "Workshop",
  },
];
const departmentOverviewData = {
  title: "Computer Technology কী?",
  description:
    "Computer Technology হলো Computer ও Information Technology সম্পর্কিত বিভিন্ন বিষয় শেখার একটি শিক্ষার্থীরা Computer fundamentals থেকে শুরু করে Programming, Web Development, Database, Networking এবং Hardware সম্পর্কে ধারণা অর্জন করে।",
  subDescription:
    " Theroy জ্ঞানের পাশাপাশি practical work, laboratory practice এবং project-এর মাধ্যমে বাস্তব দক্ষতা গড়ে তোলার সুযোগ থাকে।",
};
const whyChooseData = {
  id: 1,
  department: "Computer Technology",

  supTitle: "Why Computer",

  title: (
    <>
      কেন এবং কারা <span className="text-[#44a1a4] ">Computer Technology</span>{" "}
      পড়বে?
    </>
  ),

  description:
    " Technology-driven এই সময়ে Computer Technology শুধু একটি subject নয়, এটি future career গড়ার একটি strong foundation। যারা technology, programming এবং digital world-এর সঙ্গে কাজ করতে চান, তাদের জন্য এই Department হতে পারে একটি practical career path।",

  topics: [
    "Programming",
    "Web Development",
    "Software",
    "Networking",
    "Cyber Security",
    "AI & Technology",
  ],

  reasons: [
    "Computer ও Information Technology সম্পর্কে strong foundation তৈরি করা।",
    "Programming ও Problem Solving-এর মাধ্যমে logical thinking উন্নত করা।",
    "Web ও Software Development-এর practical knowledge অর্জন করা।",
    "Computer Networking, Hardware ও Database সম্পর্কে প্রয়োজনীয় ধারণা নেওয়া।",
    "Project-based learning-এর মাধ্যমে বাস্তব কাজের experience অর্জন করা।",
    "AI, Machine Learning ও modern technology সম্পর্কে basic ধারণা তৈরি করা।",
    "IT Sector-এ Job, Freelancing ও Remote Career-এর জন্য নিজেকে প্রস্তুত করা।",
    "Diploma শেষে Higher Education ও future IT career-এর জন্য প্রস্তুতি নেওয়া।",
  ],
};

/*  MAIN PAGE  */
export default function ComputerDepartmentPage() {
  const computerStudentReview = filterStudentsByDepartment(
    studentsFeedback,
    "Computer",
  );
  return (
    <main className="bg-white text-slate-800">
      {/* HERO / DEPARTMENT OVERVIEW */}
      <DepartmentHeroSection department={department} />

      {/* AT A GLANCE */}
      <DiplomaGlance focus={"Information & Technology"} />
      <DepartmentOverview departmentOverviewData={departmentOverviewData} />

      {/* LABS & PRACTICAL FACILITIES*/}
      <LabsSection
        labImages={labImages}
        lab={
          "https://ayinfotechgh.com/wp-content/uploads/2019/10/AY-Infotechgh-Computer-lab.jpg"
        }
        alt={"computer lab"}
      />

      {/* WHY CHOOSE THIS DEPARTMENT */}
      <WhyChoose data={whyChooseData} />

      {/* CAREER & INDUSTRY */}
      <CareerSection />

      {/* HIGHER STUDY & ENTREPRENEURSHIP */}
      <HigherStudy />

      {/* CURRICULUM */}
      <Curriculum />

      {/* ALUMNI SUCCESS STORIES */}

      <div className="py-16 md:py-20">
        <ReviewSectionHeader />
        <OneSlider reviewsContent={computerStudentReview} />
      </div>

      {/* FAQ */}
      <Faq />

      {/*  CTA */}
      <Action />
    </main>
  );
}
