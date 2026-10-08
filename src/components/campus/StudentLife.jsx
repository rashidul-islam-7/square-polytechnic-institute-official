import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";
import TitleStyle from "../UI/TitleStyle";

const StudentLife = ({ data = {} }) => {
  const { shortTitle, title, highlightedTitle, description, items = [] } = data;

  return (
    <section className="bg-slate-50/60 py-16 sm:py-24 px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          {shortTitle && <SectionShortTitleStyle text={shortTitle} />}

          <div className="mt-2">
            <TitleStyle title={title} highlightedTitle={highlightedTitle} />
          </div>

          {description && (
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          )}
        </div>

        {/* ACTIVITIES GRID */}
        {items.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {items.map((item, index) => (
              <div
                key={item.title || index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/70 "
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title || "Student activity"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* Dark Gradient Overlay for Title Legibility */}
                  <div
                    className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 
                "
                  />

                  {/* Card Title Inside Image */}
                  <div className="absolute bottom-0 inset-x-0 pl-4 pb-3">
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentLife;
