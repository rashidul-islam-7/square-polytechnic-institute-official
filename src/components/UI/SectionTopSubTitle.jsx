const SectionTopSubTitle = ({ text }) => {
  return (
    <>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C28B24]/20 bg-[#FFFDF7] px-4 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#C28B24]" />

        <span className="text-xs font-bold tracking-wide text-[#9B6F17] sm:text-sm">
          {text}
        </span>
      </div>
    </>
  );
};

export default SectionTopSubTitle;
