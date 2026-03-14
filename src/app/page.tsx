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
    <div className="w-full  flex flex-col justify-center items-center ">
      <div className="mt-10 w-full max-w-2xl justify-center items-center gap-8 flex flex-col">
        <About />
        <Experience />
        <Project />
        <div className="flex items-center justify-center ">
          <Link href="/project">
            <Button className="cursor-pointer tapestry tracking-tight">
              view more
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
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
        <div className="flex p-9 flex-col text-xs tapestry gap-1  tracking-tight ">
          <p>Design & Developed by Arjun Agarwal</p>
          <p>© 2026. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default page;
