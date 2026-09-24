"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaGlobe,
  FaNetworkWired,
  FaMicrochip,
  FaCheck,
  FaGraduationCap,
  FaBriefcase,
  FaFlask,
  FaBookOpen,
  FaUsers,
  FaBuildingColumns,
  FaDownload,
  FaQuoteLeft,
  FaChevronDown,
} from "react-icons/fa6";

import DepartmentHeroSection from "../../../components/department/Hero";
import DiplomaGlance from "@/components/department/DiplomaGlance";
import DepartmentOverview from "@/components/department/DepartmentOverview";
import LabsSection from "@/components/department/Lab";
import WhyChoose from "@/components/department/WhyChoose";

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

const learningAreas = [
  {
    icon: FaCode,
    title: "Programming",
    description:
      "Programming Language ব্যবহার করে সমস্যা সমাধান এবং Software তৈরির মৌলিক ধারণা শেখানো হয়।",
  },
  {
    icon: FaGlobe,
    title: "Web Development",
    description:
      "HTML, CSS, JavaScript এবং আধুনিক Web Technology ব্যবহার করে Website ও Web Application তৈরি শেখানো হয়।",
  },
  {
    icon: FaDatabase,
    title: "Database",
    description:
      "Data সংরক্ষণ, পরিচালনা এবং Database ব্যবহারের প্রয়োজনীয় ধারণা শেখানো হয়।",
  },
  {
    icon: FaNetworkWired,
    title: "Networking",
    description:
      "Computer Network, Internet, Router, IP Address এবং Network Management সম্পর্কে শেখানো হয়।",
  },
  {
    icon: FaLaptopCode,
    title: "Software Development",
    description:
      "Software planning, development, testing এবং maintenance সম্পর্কে বাস্তব ধারণা তৈরি করা হয়।",
  },
  {
    icon: FaMicrochip,
    title: "Computer Hardware",
    description:
      "Computer components, assembly, maintenance এবং basic troubleshooting সম্পর্কে শেখানো হয়।",
  },
];

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

const careers = [
  {
    title: "Web Developer",
    description: "Website এবং Web Application তৈরি ও রক্ষণাবেক্ষণের কাজ।",
  },
  {
    title: "Software Developer",
    description:
      "Software ও Application development-এর বিভিন্ন কাজে যুক্ত হওয়া।",
  },
  {
    title: "Network Technician",
    description: "Network setup, maintenance ও troubleshooting-এর কাজ।",
  },
  {
    title: "IT Support",
    description: "Computer, software এবং IT-related technical support প্রদান।",
  },
  {
    title: "Database Assistant",
    description:
      "Database ও data management-related বিভিন্ন কাজে সহযোগিতা করা।",
  },
  {
    title: "Freelancer",
    description:
      "Web, software, design বা technology-based project নিয়ে কাজ করা।",
  },
];

const higherStudies = [
  "B.Sc. in Engineering",
  "Bachelor Degree in Technology",
  "Masters / Advanced Study",
  "Professional Certification",
  "Scholarship Opportunities",
  "Research & Innovation",
];

const entrepreneurship = [
  "Freelancing",
  "Web Development Service",
  "Software / App Development",
  "IT Support Service",
  "Technology-based Business",
  "Startup & Innovation",
];

const curriculum = [
  {
    semester: "1st Semester",
    subjects: [
      "Computer Fundamentals",
      "Engineering Drawing",
      "Mathematics",
      "Physics",
    ],
  },
  {
    semester: "2nd Semester",
    subjects: [
      "Programming Fundamentals",
      "Digital Electronics",
      "Mathematics",
      "English",
    ],
  },
  {
    semester: "3rd Semester",
    subjects: [
      "Object Oriented Programming",
      "Database",
      "Web Technology",
      "Networking",
    ],
  },
  {
    semester: "4th Semester",
    subjects: [
      "Data Structure",
      "Computer Architecture",
      "Operating System",
      "Web Development",
    ],
  },
];

const faculty = [
  {
    name: "Teacher Name",
    designation: "Chief Instructor",
    image: "/images/faculty/faculty-1.jpg",
  },
  {
    name: "Teacher Name",
    designation: "Instructor",
    image: "/images/faculty/faculty-2.jpg",
  },
  {
    name: "Teacher Name",
    designation: "Junior Instructor",
    image: "/images/faculty/faculty-3.jpg",
  },
];

const alumni = [
  {
    name: "Alumni Name",
    position: "Software Developer",
    company: "Organization Name",
    quote:
      "Computer Technology আমাকে Programming এবং Technology সম্পর্কে শক্ত ভিত্তি তৈরি করতে সাহায্য করেছে।",
    image: "/images/alumni/alumni-1.jpg",
  },
  {
    name: "Alumni Name",
    position: "IT Professional",
    company: "Organization Name",
    quote:
      "Practical learning এবং project experience আমার পরবর্তী career-এর জন্য গুরুত্বপূর্ণ ছিল।",
    image: "/images/alumni/alumni-2.jpg",
  },
];

/* FAQ */
const faqs = [
  {
    question: "Computer Technology কী?",
    answer:
      "Computer Technology হলো Computer, Programming, Software, Web Development, Networking, Database এবং Hardware-এর মতো বিষয় শেখার একটি প্রযুক্তিভিত্তিক শিক্ষা ক্ষেত্র।",
  },
  {
    question: "Computer Technology পড়তে আগে থেকে Programming জানা প্রয়োজন?",
    answer:
      "না। সাধারণত শুরু থেকেই প্রয়োজনীয় Computer ও Programming concepts ধাপে ধাপে শেখানো হয়।",
  },
  {
    question: "এই Department-এ কি Practical কাজ করা হয়?",
    answer:
      "হ্যাঁ। Computer Technology-তে laboratory practice, programming, networking, hardware এবং project-based practical learning গুরুত্বপূর্ণ অংশ।",
  },
  {
    question: "পড়াশোনা শেষে কী করা যায়?",
    answer:
      "শিক্ষার্থীরা তাদের দক্ষতা ও পরবর্তী শিক্ষার ভিত্তিতে বিভিন্ন IT-related career, higher study, freelancing বা entrepreneurship-এর দিকে যেতে পারে।",
  },
];

/*  MAIN PAGE  */

export default function ComputerDepartmentPage() {
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
      <section id="career" className="scroll-mt-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            dark
            label="Career & Industry"
            title="ক্যারিয়ার ও ইন্ডাস্ট্রি সংযোগ"
            description="Computer Technology-এর দক্ষতা বিভিন্ন IT-related কাজ, internship, industrial training এবং project-based কাজের ক্ষেত্রে ব্যবহার করা যেতে পারে।"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {careers.map((career) => (
              <div
                key={career.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-900">
                  <FaBriefcase />
                </div>

                <h3 className="mt-5 font-bold text-white">{career.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {career.description}
                </p>
              </div>
            ))}
          </div>

          {/* INDUSTRY EXPERIENCE */}

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9">
            <div className="grid gap-8 sm:grid-cols-3">
              <IndustryItem
                icon={<FaBuildingColumns />}
                title="Industrial Training"
                text="Industry-oriented practical training-এর সুযোগ।"
              />

              <IndustryItem
                icon={<FaUsers />}
                title="Internship"
                text="বাস্তব কাজের পরিবেশ সম্পর্কে অভিজ্ঞতা অর্জনের সুযোগ।"
              />

              <IndustryItem
                icon={<FaBriefcase />}
                title="Career Preparation"
                text="Industry-relevant skills ও project experience তৈরি।"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHER STUDY & ENTREPRENEURSHIP */}

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* HIGHER STUDY */}

            <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white">
                <FaGraduationCap />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                উচ্চশিক্ষার সুযোগ
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Diploma-এর পর যোগ্যতা ও প্রতিষ্ঠানের নিয়ম অনুযায়ী বিভিন্ন higher
                study ও professional learning-এর সুযোগ রয়েছে।
              </p>

              <div className="mt-7 space-y-3">
                {higherStudies.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-3"
                  >
                    <FaCheck className="text-xs" />

                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ENTREPRENEURSHIP */}

            <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl text-slate-900">
                <FaLaptopCode />
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Freelancing & Entrepreneurship
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Technology skill ব্যবহার করে project-based work, freelancing
                অথবা নিজস্ব technology service তৈরি করার সুযোগ থাকতে পারে।
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {entrepreneurship.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <FaCheck className="text-xs text-slate-300" />

                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              label="Curriculum"
              title="কী কী পড়ানো হয়?"
              description="নিচে কিছু গুরুত্বপূর্ণ semester ও subject-এর উদাহরণ দেওয়া হলো। সম্পূর্ণ curriculum PDF আকারে রাখা যেতে পারে।"
            />

            <Link
              href="/documents/computer-curriculum.pdf"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              <FaDownload />
              Full Curriculum
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {curriculum.map((item) => (
              <div
                key={item.semester}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <FaBookOpen />
                  </div>

                  <h3 className="font-bold text-slate-900">{item.semester}</h3>
                </div>

                <div className="mt-5 grid gap-2">
                  {item.subjects.map((subject) => (
                    <div
                      key={subject}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <FaCheck className="text-[10px]" />
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY */}

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            label="Faculty Members"
            title="আমাদের শিক্ষকবৃন্দ"
            description="Department-এর শিক্ষক ও instructors-এর পরিচিতি এখানে দেখানো যেতে পারে।"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member) => (
              <div
                key={member.name + member.designation}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-slate-900">{member.name}</h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {member.designation}
                  </p>

                  <Link
                    href="#"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-800"
                  >
                    View Profile
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALUMNI SUCCESS STORIES */}

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            label="Alumni Success Stories"
            title="আমাদের প্রাক্তন শিক্ষার্থীদের কথা"
            description="বাস্তব Alumni-এর অভিজ্ঞতা ও career journey নতুন শিক্ষার্থীদের জন্য একটি মূল্যবান ধারণা দিতে পারে।"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {alumni.map((person) => (
              <div
                key={person.name + person.position}
                className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8"
              >
                <FaQuoteLeft className="text-2xl text-slate-300" />

                <p className="mt-5 text-base leading-8 text-slate-600">
                  “{person.quote}”
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {person.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {person.position} · {person.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section>
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading
            label="FAQ"
            title="সাধারণ কিছু প্রশ্ন"
            description="Computer Technology সম্পর্কে নতুন শিক্ষার্থীদের সাধারণ প্রশ্নের উত্তর।"
          />

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 font-semibold text-slate-900">
                  {faq.question}

                  <FaChevronDown className="shrink-0 text-sm transition group-open:rotate-180" />
                </summary>

                <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-slate-900">
            <FaGraduationCap />
          </div>

          <h2 className="mt-7 text-3xl font-bold text-white sm:text-4xl">
            Computer Technology সম্পর্কে আরও জানতে চান?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Admission, curriculum এবং অন্যান্য প্রয়োজনীয় তথ্য জানতে সংশ্লিষ্ট
            section দেখুন।
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/admission"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Admission Information
              <FaArrowRight />
            </Link>

            <Link
              href="/departments"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Other Departments
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* REUSABLE COMPONENTS */

function SectionLabel({ children, dark = false }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.2em] ${
        dark ? "text-slate-400" : "text-slate-500"
      }`}
    >
      {children}
    </p>
  );
}

function SectionHeading({ label, title, description, dark = false }) {
  return (
    <div className="max-w-2xl">
      <SectionLabel dark={dark}>{label}</SectionLabel>

      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-5 leading-8 ${
          dark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function IndustryItem({ icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-900">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-white">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
      </div>
    </div>
  );
}
