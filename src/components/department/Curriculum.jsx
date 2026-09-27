import React from "react";
import Link from "next/link";
import { FaBookOpen, FaCheck, FaDownload } from "react-icons/fa6";

import { curriculum } from "@/data/cstData";
import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";
import TitleStyle from "../UI/TitleStyle";
import CustomIcon from "../UI/CustomIcon";

const Curriculum = () => {
  const [section, ...semesters] = curriculum;

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionShortTitleStyle text={section.sectionLabel} />
            <TitleStyle title={section.title} />
            <p className="max-w-2xl text-base text-gray-700">
              {section.description}
            </p>
          </div>

          <Link
            href="/documents/computer-curriculum.pdf"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            <FaDownload />
            Full Curriculum
          </Link>
        </div>

        {/* Semester Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {semesters.map((item) => (
            <div
              key={item.semester}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <div>
                  <CustomIcon size={15} icon={FaBookOpen} />
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
  );
};

export default Curriculum;
