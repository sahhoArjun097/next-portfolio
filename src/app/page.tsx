import Link from "next/link";
import { Button } from "../components/ui/button";
import About from "./about/page";
import Project from "./project/page";
import TechStack from "./techStack/page";
import Testimonials from "./testimonials/page";
import Experience from "./experience/page";
import Connect from "./connect/page";
import ViewMore from "../components/layout/view-more/page";
import Footer from "../components/layout/footer/page";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-10">
        <About />
        <Experience />
        <Project />
        <ViewMore />
        <TechStack />
        <Testimonials />
        <Connect />
        <Footer />
      </div>
    </div>
  );
};

export default page;
