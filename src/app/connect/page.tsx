import { Sparkles } from "lucide-react";
import FormModal from "../formModal/page";

const Connect = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl  p-10 md:p-14  border ">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(450px_280px_at_50%_20%,white_10%,transparent_70%)]" />
        </div>

        <div className="relative z-10 text-center space-y-4">
          <p className="text-sm md:text-base tracking-tight tapestry ">
            Connect With Me
          </p>

          <h2
            id="connect"
            className="text-2xl md:text-4xl font-bold tapestry tracking-tight leading-tight"
          >
            Let’s build something amazing together 🚀
          </h2>
        </div>

        {/* Description */}
        <div className="relative z-10 mt-6 text-center">
          <p className=" text-base md:text-lg tapestry tracking-tight max-w-xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to build impactful digital products.
          </p>
        </div>
        <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4">
          <FormModal />
        </div>
        <div className="relative z-10 mt-10 flex tapestry tracking-tight justify-center items-center gap-2 text-sm ">
          <Sparkles className="h-4 w-4 " />
          Open to freelance • collaborations • opportunities
        </div>
      </div>
    </section>
  );
};

export default Connect;
