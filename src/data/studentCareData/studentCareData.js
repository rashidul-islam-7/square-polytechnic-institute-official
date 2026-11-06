import {
  FaAward,
  FaBookOpen,
  FaBriefcase,
  FaCalendarDays,
  FaClipboardList,
  FaComments,
  FaFileLines,
  FaFutbol,
  FaGraduationCap,
  FaLaptop,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa6";

// Images
export const images = {
  hero: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=90",
  academic:
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1100&q=85",
  career:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1100&q=85",
  library:
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900&q=85",
  lab: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85",
  students:
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000&q=85",
  campus:
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=85",
};

// Quick Access
export const quickLinks = [
  {
    icon: FaCalendarDays,
    title: "Class Routine",
    subtitle: "View class schedule",
    href: "/class-routine",
  },
  {
    icon: FaClipboardList,
    title: "Suggestion Box",
    subtitle: "Get study tips and guidance",
    href: "/study-suggestion",
  },
  {
    icon: FaFileLines,
    title: "Previous Questions ",
    subtitle: "Access previous years' question papers",
    href: "/old-question-papers",
  },
  {
    icon: FaGraduationCap,
    title: "Results",
    subtitle: "Check examination results",
    href: "/result",
  },
  {
    icon: FaBookOpen,
    title: "Syllabus & Booklist",
    subtitle: "Check syllabus and booklist",
    href: "/syllabus-booklist",
  },
  {
    icon: FaComments,
    title: "Others Activitys",
    subtitle: "Provide your feedback and report issues",
    href: "/contact",
  },
  {
    icon: FaComments,
    title: "Notice Board",
    subtitle: "Provide your feedback and report issues",
    href: "/contact",
  },
];

// Student Services
export const services = [
  {
    icon: FaBookOpen,
    number: "01",
    title: "Academic Support",
    text: "পড়াশোনা, ক্লাস, পরীক্ষা ও একাডেমিক বিষয়ে প্রয়োজনীয় পরামর্শ ও সহযোগিতা।",
    href: "/contact",
  },
  {
    icon: FaAward,
    number: "02",
    title: "Scholarship Information",
    text: "সরকারি ও অন্যান্য শিক্ষাবৃত্তির সুযোগ এবং আবেদন সম্পর্কে তথ্য।",
    href: "/contact",
  },
  {
    icon: FaBriefcase,
    number: "03",
    title: "Career Guidance",
    text: "উচ্চশিক্ষা, চাকরির প্রস্তুতি ও ভবিষ্যৎ ক্যারিয়ার পরিকল্পনায় দিকনির্দেশনা।",
    href: "/contact",
  },
  {
    icon: FaUsers,
    number: "04",
    title: "Student Counseling",
    text: "শিক্ষার্থীদের বিভিন্ন সমস্যা ও প্রয়োজন নিয়ে পরামর্শ ও সহযোগিতা।",
    href: "/contact",
  },
  {
    icon: FaLaptop,
    number: "05",
    title: "Technical Support",
    text: "প্রযুক্তিগত শিক্ষা, ল্যাব ও অনলাইন সেবা সংক্রান্ত সহযোগিতা।",
    href: "/contact",
  },
  {
    icon: FaComments,
    number: "06",
    title: "Complaint & Feedback",
    text: "আপনার অভিযোগ, মতামত ও পরামর্শ জানানোর সুযোগ।",
    href: "#contact",
  },
];

// Student Resources
export const resources = [
  {
    icon: FaCalendarDays,
    title: "Academic Calendar",
    desc: "শিক্ষাবর্ষের গুরুত্বপূর্ণ তারিখ",
    href: "/academic-calendar",
  },
  {
    icon: FaClipboardList,
    title: "Class Routine",
    desc: "ক্লাসের সময়সূচি দেখুন",
    href: "/class-routine",
  },
  {
    icon: FaFileLines,
    title: "Exam Routine",
    desc: "পরীক্ষার সময়সূচি দেখুন",
    href: "/exam-routine",
  },
  {
    icon: FaGraduationCap,
    title: "Exam Result",
    desc: "পরীক্ষার ফলাফল দেখুন",
    href: "/result",
  },
  {
    icon: FaBookOpen,
    title: "Student Handbook",
    desc: "শিক্ষার্থীদের প্রয়োজনীয় নির্দেশিকা",
    href: "/student-handbook",
  },
  {
    icon: FaComments,
    title: "Notice Board",
    desc: "সর্বশেষ নোটিশ ও ঘোষণা",
    href: "/notices",
  },
];

// Student Activities
export const activities = [
  {
    icon: FaFutbol,
    title: "Sports & Recreation",
    text: "খেলাধুলা ও ক্রীড়া প্রতিযোগিতায় অংশগ্রহণের সুযোগ।",
  },
  {
    icon: FaUsers,
    title: "Cultural Activities",
    text: "সাংস্কৃতিক অনুষ্ঠান ও সৃজনশীল কার্যক্রম।",
  },
  {
    icon: FaLightbulb,
    title: "Technology & Innovation",
    text: "প্রযুক্তি ও উদ্ভাবনভিত্তিক কার্যক্রমে অংশগ্রহণ।",
  },
];
