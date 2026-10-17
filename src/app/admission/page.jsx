import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBookOpen,
  FaCheck,
  FaChevronDown,
  FaClipboardCheck,
  FaClock,
  FaFileAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaPhone,
  FaRegCalendarCheck,
  FaRegCircleCheck,
  FaRegFileLines,
  FaShieldHalved,
  FaUserGraduate,
  FaWrench,
} from "react-icons/fa6";
import AdmissionHeroSection from "@/components/admission/AdmissionHero";
import AdmissionForm from "@/components/admission/AdmissionForm";

export default function AdmissionPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <AdmissionHeroSection />

      <AdmissionForm />
    </main>
  );
}
