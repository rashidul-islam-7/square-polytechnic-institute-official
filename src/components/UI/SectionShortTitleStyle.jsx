import React from "react";

const SectionShortTitleStyle = ({ text }) => {
  return (
    <div className="max-w-3xl flex gap-2 items-center mb-2">
      <div className="h-[1px] w-[30px] md:w-[50px] bg-teal-600"></div>
      <span className="uppercase tracking-tighter text-xs text-teal-600">{text}</span>
    </div>
  );
};

export default SectionShortTitleStyle;
