import Link from "next/link";
import { Button } from "../components/ui/button";
import About from "./about/page";
import Project from "./project/page";
import TechStack from "./techStack/page";
import Testimonials from "./testimonials/page";
import Experience from "./experience/page";
import Connect from "./connect/page";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-2xl flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-10">
        <About />
        <Experience />
        <Project />

        {/* VIEW MORE BUTTON */}
        <div className="flex justify-center">
          <Link href="/project">
            <Button className="cursor-pointer flex items-center gap-2 tracking-tight">
              view more
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                />
              </svg>
            </Button>
          </Link>
        </div>

        <TechStack />
        <Testimonials />
        <Connect />

        {/* FOOTER */}
        <div className="pt-6 sm:pt-10 pb-6 flex flex-col items-center text-center text-xs sm:text-sm gap-1 opacity-70 tracking-tight">
          <p>Design & Developed by Arjun Agarwal</p>
          <p>© 2026. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default page;
