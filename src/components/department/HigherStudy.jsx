import { FaCheck } from "react-icons/fa6";

import { higherStudy } from "@/data/cstData";
import CustomIcon from "../UI/CustomIcon";

export default function HigherStudy() {
  const sections = [higherStudy.higherStudy, higherStudy.entrepreneurship];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {sections.map((section) => {
            const Icon = section.icon;
            const isDark = section.theme === "dark";
            return (
              <div
                key={section.id}
                className={
                  isDark
                    ? "rounded-3xl bg-slate-900 p-8 text-white sm:p-10"
                    : "rounded-3xl bg-slate-50 p-8 sm:p-10"
                }
              >
                {/* Icon */}
                <div>
                  {isDark ? (
                    <CustomIcon
                      bg={"bg-white"}
                      color={"text-black"}
                      icon={section.icon}
                    />
                  ) : (
                    <CustomIcon icon={section.icon} />
                  )}
                </div>

                {/* Title */}
                <h2
                  className={
                    isDark
                      ? "mt-6 text-2xl font-bold"
                      : "mt-6 text-2xl font-bold text-slate-900"
                  }
                >
                  {section.title}
                </h2>

                {/* Description */}
                <p
                  className={
                    isDark
                      ? "mt-3 text-sm leading-7 text-slate-400"
                      : "mt-3 text-sm leading-7 text-slate-600"
                  }
                >
                  {section.description}
                </p>

                {/* Items */}
                <div
                  className={
                    isDark ? "mt-7 grid gap-3 sm:grid-cols-2" : "mt-7 space-y-3"
                  }
                >
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className={
                        isDark
                          ? "flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                          : "flex items-center gap-3 rounded-xl bg-white p-3"
                      }
                    >
                      <FaCheck
                        className={
                          isDark
                            ? "text-xs text-slate-300"
                            : "text-xs text-slate-900"
                        }
                      />

                      <span
                        className={
                          isDark
                            ? "text-sm text-slate-300"
                            : "text-sm text-slate-700"
                        }
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
