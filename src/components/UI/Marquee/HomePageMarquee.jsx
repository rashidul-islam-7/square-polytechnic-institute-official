import React from "react";
import Marquee from "react-fast-marquee";
import { Bell, ArrowRight } from "lucide-react";
import Link from "next/link";

const HomePageMarquee = () => {
  const notices = [
    {
      text: "ভর্তি চলছে! ২০২৬-২৭ শিক্ষাবর্ষে ডিপ্লোমা ইন ইঞ্জিনিয়ারিং-এ ভর্তি চলছে।",
      type: "admission",
    },
    {
      text: "Civil, Electrical, Computer, Mechanical ও Textile Engineering-এ ভর্তি চলছে।",
      type: "info",
    },
    {
      text: "বিশেষ ছাড়ে ভর্তি চলছে — আসন সংখ্যা সীমিত।",
      type: "offer",
    },
    {
      text: "Admission Helpline: 01849-267660",
      type: "contact",
    },
  ];

  return (
    <section className="w-full bg-[#224248]">
      <div className="mx-auto flex max-w-7xl items-center overflow-hidden">
        {/* Announcement Label */}
        <div className="relative z-10 flex shrink-0 items-center gap-2 bg-[#FF9A00] px-4 py-2.5 text-white shadow-md md:px-5">
          <Bell size={16} className="fill-white" />

          {/* <span className="hidden text-sm font-bold sm:block">
            Announcements
          </span> */}

          {/* <span className="text-sm font-bold sm:hidden">Notice</span> */}
        </div>

        {/* Marquee */}
        <div className="min-w-0 flex-1">
          <Marquee
            speed={45}
            pauseOnHover
            gradient={true}
            gradientColor="#224248"
            gradientWidth={60}
          >
            {notices.map((notice, index) => (
              <div key={index} className="flex items-center">
                {/* Separator */}
                <span className="mx-5 h-1.5 w-1.5 rounded-full bg-[#44A1A4]" />

                {/* Notice Text */}
                <span
                  className={`whitespace-nowrap text-sm font-medium ${
                    notice.type === "admission"
                      ? "text-white"
                      : notice.type === "offer"
                        ? "text-[#FF9A00]"
                        : "text-[#D8EEEE]"
                  }`}
                >
                  {notice.text}
                </span>

                {/* Admission Link */}
                {notice.type === "admission" && (
                  <Link
                    href="/admission"
                    className="group ml-3 mr-5 flex shrink-0 items-center gap-1 text-xs font-semibold text-[#FF9A00] transition-colors hover:text-white"
                  >
                    Apply Now
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                )}

                <span className="mx-5 h-1.5 w-1.5 rounded-full bg-[#44A1A4]" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default HomePageMarquee;
