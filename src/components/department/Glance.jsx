import React from "react";

const Glance = ({focus}) => {
  const department = [
   
    {
      label: "Program",
      value: "Diploma in Engineering",
    },
     {
      label: "Duration",
      value: "৪ বছর",
    },
    {
      label: "Learning",
      value: "Theory + Practical",
    },
    {
      label: "Focus",
      value: focus,
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-slate-200 sm:grid-cols-4">
          {department.map((item) => (
            <div
              key={item.label}
              className="border-r border-slate-200 px-4 py-6 text-center even:border-r sm:border-l-0 sm:px-6 sm:odd:border-l-0"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {item.label}
              </p>

              <p className="mt-2 text-sm font-bold text-[#44a0a3]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glance;
