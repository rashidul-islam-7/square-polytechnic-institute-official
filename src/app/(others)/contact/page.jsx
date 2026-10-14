"use client";

import InstituteLocation from "@/components/Shared/Location";
import {
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaLocationDot,
  FaMapLocationDot,
  FaPhone,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa6";

import Btn from "@/components/UI/Btn";
import SectionTopSubTitle from "@/components/UI/SectionTopSubTitle";
const contactInfo = [
  {
    icon: FaLocationDot,
    title: "প্রতিষ্ঠানের ঠিকানা",
    subtitle: "Our Location",
    value: "পুন্নাতলা মোড়, কলেজ রোড, শেরপুর, বগুড়া",
    color: "bg-[#E8F5F2] text-[#2F7577]",
  },
  {
    icon: FaPhone,
    title: "ফোন নম্বর",
    subtitle: "Phone Number",
    value: "+880 1849267660",
    href: "tel:+8801849267660",
    color: "bg-[#FFF4E5] text-[#B98228]",
  },
  {
    icon: FaEnvelope,
    title: "ইমেইল ঠিকানা",
    subtitle: "Email Address",
    value: "squarepoly@gmail.com",
    href: "mailto:squarepoly@gmail.com",
    color: "bg-[#EAF1FF] text-[#5276B8]",
  },
  {
    icon: FaClock,
    title: "অফিস সময়",
    subtitle: "Office Hours",
    value: "রবিবার – বৃহস্পতিবার",
    detail: "সকাল ৯টা – বিকাল ৫টা",
    color: "bg-[#F2ECFA] text-[#8563AC]",
  },
];
export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/*  HERO */}
      <section className="relative isolate overflow-hidden border-b border-[#DCE7E8] bg-linear-to-br from-[#F5FAF9] via-white to-[#EAF5F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-[#44A1A4]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#D9A441]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE7E8] bg-white/80 px-4 py-2 text-sm font-semibold text-[#2F7577] shadow-sm">
                <FaEnvelope />
                Contact & Support
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight text-[#224248] sm:text-5xl lg:text-6xl">
                যোগাযোগ করুন,
                <span className="mt-2 block text-[#44A1A4]">
                  আমরা আছি আপনার পাশে
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#325E6A] sm:text-base sm:leading-8">
                যেকোনো তথ্যে বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন। আপনার
                প্রশ্ন ও মতামত আমাদের কাছে গুরুত্বপূর্ণ।
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Btn text="  যোগাযোগের তথ্য" link="#contact-information " />
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:col-span-4 lg:block">
              <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border border-[#44A1A4]/20 bg-white/70 shadow-xl shadow-[#224248]/[0.04]">
                <div className="absolute inset-5 rounded-full border border-dashed border-[#44A1A4]/30" />

                <div className="flex h-36 w-36 items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#44A1A4] to-[#224248] text-6xl text-white shadow-xl shadow-[#224248]/20">
                  <FaPaperPlane />
                </div>

                <div className="absolute -right-3 top-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DCE7E8] bg-white text-xl text-[#44A1A4] shadow-lg">
                  <FaEnvelope />
                </div>

                <div className="absolute -bottom-2 left-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DCE7E8] bg-white text-xl text-[#D9A441] shadow-lg">
                  <FaPhone />
                </div>
              </div>

              <p className="mt-7 text-center text-sm font-semibold tracking-wide text-[#325E6A]">
                We are here to help you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION  */}
      <section
        id="contact-information"
        className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionTopSubTitle text={" Get In Touch"} />

            <h2 className="mt-4 text-3xl font-extrabold text-[#224248] sm:text-4xl">
              যোগাযোগের তথ্য
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#325E6A] sm:text-base">
              আমাদের সঙ্গে যোগাযোগের জন্য নিচের মাধ্যম গুলো ব্যবহার করুন।
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#DCE7E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#44A1A4]/40 hover:shadow-xl hover:shadow-[#224248]/[0.05]"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${item.color}`}
                  >
                    <Icon />
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#44A1A4]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-[#224248]">
                    {item.title}
                  </h3>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-3 block break-words text-sm leading-6 text-[#325E6A] transition hover:text-[#2F7577]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-sm leading-6 text-[#325E6A]">
                      {item.value}
                    </p>
                  )}

                  {item.detail && (
                    <p className="mt-1 text-sm text-[#325E6A]/80">
                      {item.detail}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <InstituteLocation />
    </main>
  );
}
