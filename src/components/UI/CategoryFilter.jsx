const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div
      className="mt-9 flex gap-2 overflow-x-auto pb-3"
      role="group"
      aria-label="Filter by category"
    >
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => setActiveCategory(category.value)}
          aria-pressed={activeCategory === category.value}
          className={`shadow-lg shrink-0 cursor-pointer rounded-full px-5 py-1.5 text-sm  transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${
            activeCategory === category.value
              ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
              : "border border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
