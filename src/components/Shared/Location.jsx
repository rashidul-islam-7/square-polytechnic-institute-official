import { FaBuilding, FaLocationDot, FaArrowRight } from "react-icons/fa6";

import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";
import TitleStyle from "../UI/TitleStyle";
import CustomIcon from "../UI/CustomIcon";
import Btn from "../UI/Btn";

const InstituteLocation = () => {
  const googleMapsLink =
    "https://www.google.com/maps/search/?api=1&query=Square+Polytechnic+Institute%2C+Garidaha%2C+Sherpur%2C+Bogura";

  const googleMapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.762424310036!2d89.39698757402452!3d24.700692351634544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdb30e6ecc90ab%3A0x4f3db0536e32df08!2sSquare%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1791688212522!5m2!1sen!2sbd";

  return (
    <section id="location" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 lg:grid-cols-2">
          {/* Institute Information */}
          <div className="p-8 sm:p-12 lg:p-16">
            <SectionShortTitleStyle text="Find Us" />

            <TitleStyle title="আমাদের" highlightedTitle="ঠিকানা" />

            <p className="mt-4 text-base leading-6 text-slate-500">
              স্কয়ার পলিটেকনিক ইন্সটিটিউট
              <br />
              গাড়িদহ, শেরপুর, বগুড়া
            </p>

            {/* Location Details */}
            <div className="mt-3 ">
              <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                <CustomIcon icon={FaLocationDot} />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    Garidaha, Sherpur, Bogura
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                <CustomIcon icon={FaBuilding} />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Institution Code
                  </p>

                  <p className="mt-1 font-bold text-slate-800">20294</p>
                </div>
              </div>
            </div>

            {/* Google Maps Link */}
            <Btn
              text="Google Map দেখুন"
              link={googleMapsLink}
              icon={<FaArrowRight />}
              className="mt-8"
            />
          </div>

          {/* Google Maps */}
          <div className="relative min-h-[350px] overflow-hidden bg-slate-100 sm:min-h-[450px]">
            <iframe
              src={googleMapsEmbed}
              title="Square Polytechnic Institute Location"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteLocation;
