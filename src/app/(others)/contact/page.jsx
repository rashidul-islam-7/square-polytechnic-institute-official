"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaPaperPlane,
  FaGraduationCap,
  FaCircleCheck,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const contactInfo = [
  {
    icon: FaPhone,
    title: "ফোন করুন",
    subtitle: "Call Us",
    value: "+880 1XXX-XXXXXX",
    href: "tel:+8801XXXXXXXXX",
  },
  {
    icon: FaEnvelope,
    title: "ইমেইল করুন",
    subtitle: "Email Us",
    value: "info@yourcollege.edu.bd",
    href: "mailto:info@yourcollege.edu.bd",
  },
  {
    icon: FaLocationDot,
    title: "আমাদের ঠিকানা",
    subtitle: "Our Location",
    value: "আপনার প্রতিষ্ঠানের সম্পূর্ণ ঠিকানা",
    href: "https://www.google.com/maps",
  },
  {
    icon: FaClock,
    title: "অফিস সময়",
    subtitle: "Office Hours",
    value: "রবি–বৃহস্পতি, সকাল ৯টা–বিকেল ৫টা",
    href: null,
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "সাধারণ জিজ্ঞাসা",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your backend or email service here.
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#f1fafa]">
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#44a1a4]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#44a1a4]/20 bg-white px-4 py-2 text-sm font-semibold text-[#34898c] shadow-sm">
              <FaGraduationCap />
              <span>আমরা আপনার পাশে আছি</span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              আপনার যেকোনো
              <span className="mt-2 block text-[#44a1a4]">প্রশ্নের উত্তর</span>
              দিতে আমরা প্রস্তুত
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              ভর্তি, একাডেমিক কার্যক্রম কিংবা অন্যান্য তথ্য জানতে আমাদের সঙ্গে
              যোগাযোগ করুন। আপনার শিক্ষা ও সাফল্যের যাত্রায় আমরা সহযোগিতা করতে
              আগ্রহী।
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#44a1a4] px-6 py-4 font-bold text-white shadow-lg shadow-[#44a1a4]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#34898c] hover:shadow-xl"
              >
                বার্তা পাঠান
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact-information"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 transition-all duration-300 hover:border-[#44a1a4] hover:text-[#34898c]"
              >
                যোগাযোগের তথ্য
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-7">
              <div className="flex -space-x-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#d9f0ee] text-[#34898c]">
                  <FaGraduationCap />
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#e7eaff] text-indigo-600">
                  <FaEnvelope />
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#fff0df] text-orange-600">
                  <FaPhone />
                </div>
              </div>
              <div>
                <p className="font-bold text-slate-800">
                  শিক্ষার্থীদের জন্য সহায়তা
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Student Support & Information
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-3xl border-2 border-dashed border-[#44a1a4]/30 sm:-right-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#44a1a4] to-[#286d73] p-7 text-white shadow-2xl shadow-teal-900/15 sm:p-10">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-6 -top-6 h-44 w-44 rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl ring-1 ring-white/20">
                  <FaGraduationCap />
                </div>

                <p className="mt-9 text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
                  We Are Here For You
                </p>

                <h2 className="mt-4 max-w-sm text-3xl font-extrabold leading-snug sm:text-4xl">
                  যোগাযোগই হোক
                  <br />
                  নতুন সম্ভাবনার শুরু।
                </h2>

                <p className="mt-5 max-w-sm leading-7 text-white/80">
                  সঠিক তথ্য, প্রয়োজনীয় দিকনির্দেশনা এবং আন্তরিক সহযোগিতার
                  মাধ্যমে আপনার পাশে থাকতে চাই আমরা।
                </p>

                <div className="mt-10 flex items-center justify-between border-t border-white/20 pt-6">
                  <span className="text-sm font-medium text-white/80">
                    Connect With Our Institute
                  </span>
                  <FaArrowUpRightFromSquare className="text-xl text-teal-100" />
                </div>
              </div>
            </div>

            <div className="relative -mt-6 ml-5 flex max-w-sm items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:ml-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8f7f5] text-xl text-[#34898c]">
                <FaCircleCheck />
              </div>
              <div>
                <p className="font-bold text-slate-800">
                  আপনার কথা আমাদের কাছে গুরুত্বপূর্ণ
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Your message matters to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section
        id="contact-information"
        className="scroll-mt-20 px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#34898c]">
              Contact Information
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              যোগাযোগের <span className="text-[#44a1a4]">ঠিকানা</span>
            </h2>
            <p className="mt-4 leading-7 text-slate-500">
              আপনার প্রয়োজন অনুযায়ী নিচের যেকোনো মাধ্যমে আমাদের সঙ্গে যোগাযোগ
              করতে পারেন।
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              const content = (
                <>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf7f6] text-xl text-[#34898c] transition-all duration-300 group-hover:bg-[#44a1a4] group-hover:text-white">
                    <Icon />
                  </div>

                  <div className="mt-6">
                    <p className="text-lg font-bold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {item.subtitle}
                    </p>
                    <p className="mt-4 break-words text-sm leading-6 text-slate-600">
                      {item.value}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#34898c]">
                    {item.href ? "যোগাযোগ করুন" : "কর্মদিবসে যোগাযোগ করুন"}
                    {item.href && (
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </div>
                </>
              );

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#44a1a4]/30 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("https://") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("https://")
                          ? "noreferrer"
                          : undefined
                      }
                      className="block h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="bg-[#f7fafb] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Form */}
          <div
            id="contact-form"
            className="scroll-mt-24 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-9 lg:p-10"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#34898c]">
              Send Us a Message
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              আমাদের লিখুন
            </h2>
            <p className="mt-3 leading-7 text-slate-500">
              নিচের ফর্মটি পূরণ করে আপনার প্রশ্ন বা মতামত আমাদের জানান।
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    আপনার নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="আপনার সম্পূর্ণ নাম"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-[#44a1a4] focus:bg-white focus:ring-4 focus:ring-[#44a1a4]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    ইমেইল ঠিকানা <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-[#44a1a4] focus:bg-white focus:ring-4 focus:ring-[#44a1a4]/10"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    ফোন নম্বর
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-[#44a1a4] focus:bg-white focus:ring-4 focus:ring-[#44a1a4]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    যোগাযোগের বিষয়
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all focus:border-[#44a1a4] focus:bg-white focus:ring-4 focus:ring-[#44a1a4]/10"
                  >
                    <option>সাধারণ জিজ্ঞাসা</option>
                    <option>ভর্তি সংক্রান্ত</option>
                    <option>একাডেমিক তথ্য</option>
                    <option>পরীক্ষা সংক্রান্ত</option>
                    <option>অন্যান্য</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  আপনার বার্তা <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="আপনার প্রশ্ন বা বার্তা বিস্তারিত লিখুন..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 outline-none transition-all placeholder:text-slate-400 focus:border-[#44a1a4] focus:bg-white focus:ring-4 focus:ring-[#44a1a4]/10"
                />
              </div>

              {submitted && (
                <div
                  role="status"
                  className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800"
                >
                  ফর্মটি যাচাই করা হয়েছে। বার্তাটি পাঠাতে এখনো একটি backend বা
                  email service সংযুক্ত করতে হবে।
                </div>
              )}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#44a1a4] px-6 py-4 font-bold text-white shadow-lg shadow-[#44a1a4]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#34898c] hover:shadow-xl sm:w-auto"
              >
                বার্তা পাঠান
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-xs leading-5 text-slate-400">
                * চিহ্নিত ঘরগুলো পূরণ করা বাধ্যতামূলক।
              </p>
            </form>
          </div>

          {/* Location Panel */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#34898c]">
                Find Our Campus
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                আমাদের ক্যাম্পাসে
                <span className="text-[#44a1a4]"> আসুন</span>
              </h2>
              <p className="mt-3 leading-7 text-slate-500">
                সরাসরি যোগাযোগের জন্য আমাদের প্রতিষ্ঠানের ক্যাম্পাসে আসতে পারেন।
              </p>
            </div>

            <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] border border-[#44a1a4]/15 bg-[#e9f5f4] p-6 sm:min-h-[340px] sm:p-8">
              <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border-[25px] border-white/50" />
              <div className="absolute -bottom-16 -left-12 h-64 w-64 rounded-full border-[35px] border-[#44a1a4]/10" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[#34898c] shadow-sm">
                <FaLocationDot />
              </div>

              <div className="relative mt-12 rounded-2xl border border-white bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                <h3 className="text-lg font-extrabold text-slate-900">
                  আমাদের প্রতিষ্ঠানের ঠিকানা
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  এখানে আপনার পলিটেকনিক ইনস্টিটিউটের সম্পূর্ণ ঠিকানা, উপজেলা,
                  জেলা ও পোস্ট কোড যুক্ত করুন।
                </p>

                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 font-bold text-[#34898c] transition-colors hover:text-[#245f62]"
                >
                  Google Maps-এ দেখুন
                  <FaArrowUpRightFromSquare className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <h3 className="font-bold text-slate-900">
                আমাদের সঙ্গে যুক্ত থাকুন
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                প্রতিষ্ঠানের সর্বশেষ খবর ও কার্যক্রম সম্পর্কে জানতে আমাদের
                অফিসিয়াল সামাজিক যোগাযোগমাধ্যম অনুসরণ করুন।
              </p>

              <div className="mt-5 flex gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf7f6] text-[#34898c] transition-all hover:-translate-y-1 hover:bg-[#44a1a4] hover:text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf7f6] text-[#34898c] transition-all hover:-translate-y-1 hover:bg-[#44a1a4] hover:text-white"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf7f6] text-[#34898c] transition-all hover:-translate-y-1 hover:bg-[#44a1a4] hover:text-white"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#286d73] px-6 py-10 text-center text-white sm:px-12 sm:py-14">
          <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-36 -left-16 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-100">
              We Would Love To Hear From You
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              আপনার প্রশ্ন আছে?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
              আমাদের সঙ্গে যোগাযোগ করুন। আপনার প্রয়োজনীয় তথ্য ও দিকনির্দেশনা
              পেতে আমরা সহযোগিতা করতে প্রস্তুত।
            </p>
            <a
              href="#contact-form"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-[#286d73] transition-all duration-300 hover:-translate-y-1 hover:bg-teal-50"
            >
              এখনই বার্তা পাঠান
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
