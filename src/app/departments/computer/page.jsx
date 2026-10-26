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
import {
  higherStudy,
  whyChooseData,
  labImages,
  department,
  faqData,
  curriculum,
  departmentOverviewData,
  careerData,
} from "@/data/cstData";

// SEO Metadata Configuration
export const metadata = {
  metadataBase: new URL("https://square.edu.bd"),

  title: {
    default: "Diploma in Computer Technology | Square Polytechnic Institute",
    template: "%s | Square Polytechnic Institute",
  },

  description:
    "Explore the Diploma in Computer Technology at Square Polytechnic Institute, Punnatola Mor, College Road, Sherpur, Bogura, Bangladesh. Learn about programming, AI, web development, networking, software development, computer labs, and career opportunities. স্কয়ার পলিটেকনিক ইনস্টিটিউট, পুন্নাতলা মোড়, কলেজ রোড, শেরপুর, বগুড়ায় কম্পিউটার টেকনোলজিতে ডিপ্লোমা, ব্যবহারিক শিক্ষা ও ক্যারিয়ারের সুযোগ সম্পর্কে জানুন।",

  applicationName: "Square Polytechnic Institute",

  keywords: [
    // English keywords
    "Square Polytechnic Institute",
    "Square Polytechnic Institute Bogura",
    "Square Polytechnic Institute Sherpur",
    "Polytechnic Institute in Bogura",
    "Polytechnic Institute in Sherpur",
    "Diploma in Computer Technology",
    "Computer Technology Department",
    "Diploma in Computer Engineering",
    "Computer Science and Technology",
    "Computer Technology in Bangladesh",
    "Programming and Software Development",
    "Web Development",
    "Computer Networking",
    "Database Management",
    "Information Technology",
    "Computer Laboratory",
    "IT Career Opportunities",

    // Bangla keywords
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট",
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট বগুড়া",
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট শেরপুর",
    "বগুড়া পলিটেকনিক ইনস্টিটিউট",
    "শেরপুর বগুড়া পলিটেকনিক",
    "কম্পিউটার টেকনোলজি",
    "ডিপ্লোমা ইন কম্পিউটার টেকনোলজি",
    "কম্পিউটার ইঞ্জিনিয়ারিং",
    "কম্পিউটার বিভাগ",
    "প্রোগ্রামিং ও সফটওয়্যার ডেভেলপমেন্ট",
    "ওয়েব ডেভেলপমেন্ট",
    "কম্পিউটার নেটওয়ার্কিং",
    "তথ্য প্রযুক্তি শিক্ষা",
    "পলিটেকনিক ভর্তি বাংলাদেশ",
  ],

  authors: [
    {
      name: "Square Polytechnic Institute",
    },
  ],

  creator: "Square Polytechnic Institute",
  publisher: "Square Polytechnic Institute",
  category: "Education",

  alternates: {
    canonical: "https://square.edu.bd/departments/computer",
  },

  openGraph: {
    title: "Computer Technology Department | Square Polytechnic Institute",
    description:
      "Study Computer Technology at Square Polytechnic Institute, Sherpur, Bogura. Explore programming, software development, practical lab facilities, and future career opportunities.",
    siteName: "Square Polytechnic Institute",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
    url: "https://square.edu.bd/departments/computer",
    images: [
      {
        url: "/images/computer-department-og.jpg",
        width: 1200,
        height: 630,
        alt: "Computer Technology Department at Square Polytechnic Institute, Bogura",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Computer Technology | Square Polytechnic Institute",
    description:
      "Explore Computer Technology education, programming, software development, and career opportunities at Square Polytechnic Institute, Bogura.",
    images: ["/images/computer-department-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function ComputerDepartmentPage() {
  const computerStudentReview = filterStudentsByDepartment(
    studentsFeedback,
    "Computer",
  );

  // Schema.org Course Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Diploma in Computer Technology",
    description:
      "4-Year Diploma program covering programming, web development, computer networking, AI, and database management.",
    provider: {
      "@type": "EducationalOrganization",
      name: "Square Polytechnic Institute",
      sameAs: "https://square.edu.bd",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Punnatola Mor, College Road",
        addressLocality: "Sherpur",
        addressRegion: "Bogura",
        addressCountry: "BD",
      },
    },
  };

  return (
    <main className="bg-white text-slate-800">
      {/* Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO / DEPARTMENT OVERVIEW */}
      <DepartmentHeroSection department={department} />

      {/* AT A GLANCE */}
      <DiplomaGlance focus={"Information & Technology"} />
      <DepartmentOverview departmentOverviewData={departmentOverviewData} />

      {/* LABS & PRACTICAL FACILITIES */}
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
      <CareerSection careerData={careerData} />

      {/* HIGHER STUDY & ENTREPRENEURSHIP */}
      <HigherStudy higherStudy={higherStudy} />

      {/* CURRICULUM */}
      <Curriculum curriculum={curriculum} />

      {/* CTA */}
      <Action />

      {/* ALUMNI SUCCESS STORIES */}
      <div className="py-16 md:py-20">
        <ReviewSectionHeader />
        <OneSlider reviewsContent={computerStudentReview} />
      </div>

      {/* FAQ */}
      <Faq faq={faqData} />
    </main>
  );
}
