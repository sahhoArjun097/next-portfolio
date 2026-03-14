import HeaderTitle from "@/src/components/layout/header-title/page";
import ShadeBar from "@/src/components/ui/shadeBar";
import { jobWork } from "@/src/constants/page";

const Experience = () => {
  return (
    <section className="w-full max-w-2xl tapestry flex justify-center border-amber-100/40">
      <div className="w-full max-w-2xl">
        <HeaderTitle title={"Experience"} />
        <div className="flex flex-col gap-10 rounded-2xl ">
          <ShadeBar />
          <div className="flex sm:flex-row sm:items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl tracking-tight   flex items-center justify-center text-lg">
                📣
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-medium text-base blur-sm transition tracking-tight   select-none">
                    Company pvt. ltd.
                  </h3>

                  <span className="px-2 py-[2px] text-xs rounded-full bg-green-900/40 text-green-300 border border-green-800">
                    ● Working
                  </span>
                </div>

                <p className="text-sm tracking-tight   mt-1">
                  Software Engineer
                </p>
              </div>
            </div>

            <div className="text-sm tracking-tight   sm:text-right">
              <p>June 2025 — Present</p>
              <p>Gurgaon (on-site)</p>
            </div>
          </div>
          <div className="flex flex-col gap-3  ">
            {jobWork.map((item, index) => (
              <div key={index} className="tracking-tight text-lg ">
                {item.work}
              </div>
            ))}
          </div>
        </div>
        <ShadeBar />
      </div>
    </section>
  );
};

export default Experience;
