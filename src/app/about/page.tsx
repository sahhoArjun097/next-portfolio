import LinkButton from "@/src/components/ui/linkButton";
import { Music } from "@/src/components/ui/music";
import Resume from "@/src/components/ui/resume";

import { ModeToggle } from "@/src/components/ui/theme-toggle";

import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col w-full max-w-2xl h-full p-1  border-amber-100 gap-3 ">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border border-zinc-800">
            <Image
              src="https://avatars.githubusercontent.com/u/123585663?v=4&size=256"
              alt="Profile"
              width={96}
              height={96}
              sizes="96px"
              className="object-cover grayscale"
              priority
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-semibold tapestry tracking-tight">
              Arjun Agarwal
            </h1>
            <p className="text-sm tapestry">Software Engineer</p>
          </div>
        </div>
        <div className="flex p-5 justify-center items-center gap-2 ">
          <Music />
          <ModeToggle />
          <Resume />
        </div>
      </div>

      <div>
        <div className=" max-w-2xl gap-5 flex flex-col ">
          <p className="text-lg md:text-lg tapestry leading-relaxed">
            hi, i’m <span className=" tracking-tight ">arjun! </span>
            <span className=" font-medium tapestry">
              a 22 year old developer based in Gurugram - India
            </span>
            .
          </p>
          <p className="text-lg md:text-lg tapestry leading-relaxed">
            i build cool stuff with tech i like,
            <span className="  ml-1">always shipping</span>
            <span className="inline-flex tracking-tight ml-3 align-middle">
              <LinkButton
                link="https://github.com/sahhoArjun097"
                buttonName="GitHub"
                iconPath="/github-svgrepo-com.svg"
              />
            </span>
          </p>

          <div className="flex">
            <p className="text-base md:text-lg leading-relaxed flex flex-wrap items-center">
              <span>got an idea worth building?</span>

              <span className="ml-1 font-medium">let’s chat</span>

              {/* Email Button */}
              <span className="ml-2 mt-2 sm:mt-0">
                <LinkButton
                  link="https://mail.google.com/mail/?view=cm&fs=1&to=heonyagarwal@gmail.com"
                  buttonName="Email"
                  iconPath="/email-open-svgrepo-com.svg"
                />
              </span>

              <span className="mx-2 mt-2 sm:mt-0">&</span>

              {/* Twitter Button */}
              <span className="mt-2 sm:mt-0">
                <LinkButton
                  link="https://x.com/SAAHO94539047"
                  buttonName="Twitter dm"
                  size={12}
                  iconPath="/twitter-svgrepo-com.svg"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
