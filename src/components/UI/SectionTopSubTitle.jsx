const SectionTopSubTitle = ({ text, icon: Icon }) => {
  if (!text) return null;

  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C28B24]/20 bg-[#FFFDF7] px-4 py-1.5 shadow-sm" > 
      {Icon ? (
        <Icon size={14} className="shrink-0 text-[#9B6F17]" />
      ) : (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9B6F17]" />
      )}

      <span className="uppercase tracking-wide text-[#9B6F17] text-xs font-semibold mt-1">
        {text}
      </span>
    </div>
  );
};

export default SectionTopSubTitle;
