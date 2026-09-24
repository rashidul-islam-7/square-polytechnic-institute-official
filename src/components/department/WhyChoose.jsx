
import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";

const WhyChoose = ({ data }) => {
  const { supTitle, title, description, topics, reasons } = data;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
          
          {/* Left Content */}
          <div className="lg:sticky lg:top-24">
            <SectionShortTitleStyle text={supTitle} />

            <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-8 flex max-w-xl flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-700">
              {topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="border-t border-slate-200">
            {reasons.map((reason, index) => (
              <div
                key={`${reason}-${index}`}
                className="group flex gap-5 border-b border-slate-200 py-5"
              >
                <span className="w-8 shrink-0 pt-1 text-sm font-semibold text-slate-400 transition-colors group-hover:text-slate-900">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-base leading-7 text-slate-700">
                  {reason}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

