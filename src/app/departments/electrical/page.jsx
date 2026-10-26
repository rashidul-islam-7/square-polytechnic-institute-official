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
} from "@/data/electricalData";

// SEO Metadata Configuration
export const metadata = {
  metadataBase: new URL("https://square.edu.bd"),

  title: {
    default: "Diploma in Electrical Technology | Square Polytechnic Institute",
    template: "%s | Square Polytechnic Institute",
  },

  description:
    "Explore the Diploma in Electrical Technology at Square Polytechnic Institute, Punnatola Mor, College Road, Sherpur, Bogura, Bangladesh. Learn about electrical circuits, power systems, electrical machines, wiring, practical laboratory facilities, and career opportunities. স্কয়ার পলিটেকনিক ইনস্টিটিউট, পুন্নাতলা মোড়, কলেজ রোড, শেরপুর, বগুড়ায় ডিপ্লোমা ইন ইলেকট্রিক্যাল টেকনোলজি, ব্যবহারিক শিক্ষা, ইলেকট্রিক্যাল ল্যাব ও ক্যারিয়ারের সুযোগ সম্পর্কে জানুন।",

  applicationName: "Square Polytechnic Institute",

  keywords: [
    // English keywords
    "Square Polytechnic Institute",
    "Square Polytechnic Institute Bogura",
    "Square Polytechnic Institute Sherpur",
    "Polytechnic Institute in Bogura",
    "Polytechnic Institute in Sherpur",
    "Electrical Department",
    "Electrical Technology",
    "Diploma in Electrical Technology",
    "Diploma in Electrical Engineering",
    "Electrical Engineering Diploma Bangladesh",
    "Electrical Technology Polytechnic",
    "Electrical Engineering Course",
    "Electrical Circuits",
    "Power Systems Engineering",
    "Electrical Machines",
    "Electrical Wiring and Installation",
    "Industrial Electrical Technology",
    "Electrical Laboratory",
    "Renewable Energy Technology",
    "Solar Power Systems",
    "Electrical Maintenance",
    "Electrical Engineering Career Opportunities",
    "Electrical Technology Curriculum",

    // Bangla keywords
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট",
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট বগুড়া",
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট শেরপুর",
    "বগুড়া পলিটেকনিক ইনস্টিটিউট",
    "শেরপুর বগুড়া পলিটেকনিক",
    "ইলেকট্রিক্যাল বিভাগ",
    "ইলেকট্রিক্যাল টেকনোলজি",
    "ডিপ্লোমা ইন ইলেকট্রিক্যাল টেকনোলজি",
    "ডিপ্লোমা ইন ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং",
    "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং ডিপ্লোমা",
    "ইলেকট্রিক্যাল সার্কিট",
    "বিদ্যুৎ উৎপাদন ও বিতরণ",
    "ইলেকট্রিক্যাল মেশিন",
    "বৈদ্যুতিক ওয়্যারিং",
    "ইলেকট্রিক্যাল ল্যাব",
    "সোলার পাওয়ার সিস্টেম",
    "ইলেকট্রিক্যাল মেইনটেন্যান্স",
    "ইলেকট্রিক্যাল টেকনোলজি ক্যারিয়ার",
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
    canonical: "https://square.edu.bd/departments/electrical",
  },

  openGraph: {
    title: "Electrical Technology Department | Square Polytechnic Institute",
    description:
      "Discover the Diploma in Electrical Technology program at Square Polytechnic Institute, Bogura. Explore electrical machines, power systems, practical training, laboratory facilities, and career opportunities.",
    siteName: "Square Polytechnic Institute",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
    url: "https://square.edu.bd/departments/electrical",
    images: [
      {
        url: "/images/electrical-department-og.jpg",
        width: 1200,
        height: 630,
        alt: "Electrical Technology Department at Square Polytechnic Institute, Bogura",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diploma in Electrical Technology | Square Polytechnic Institute",
    description:
      "Explore electrical technology education, practical laboratory training, power systems, and career opportunities at Square Polytechnic Institute, Bogura.",
    images: ["/images/electrical-department-og.jpg"],
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

export default function ElectricalPage() {
  const electricalStudentReview = filterStudentsByDepartment(
    studentsFeedback,
    "Electrical",
  );

  // Schema.org Course Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Diploma in Electrical Technology",
    description:
      "4-Year Diploma program covering electrical circuits, power systems, electrical machines, wiring, and practical laboratory training.",
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
      {/* Google Rich Snippets / Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
        alt={"electrical lab"}
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
        <OneSlider reviewsContent={electricalStudentReview} />
      </div>

      {/* FAQ */}
      <Faq faq={faqData} />
    </main>
  );
}
