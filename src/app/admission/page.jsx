
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
