"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import ShadeBar from "@/src/components/ui/shadeBar";
import HeaderTitle from "@/src/components/layout/header-title/page";
import Image from "next/image";
import { testimonials_bottom, testimonials_top } from "@/src/constants/page";

export default function Testimonials() {
  const controlsX = useAnimation();
  const controlsY = useAnimation();

  useEffect(() => {
    controlsX.start({
      x: "-50%",
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    });
    controlsY.start({
      x: ["-50%", "0%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controlsX, controlsY]);

  return (
    <section className="w-full max-w-2xl tapestry flex justify-center overflow-hidden relative py-8">
      <div className="w-full max-w-2xl gap-4">
        <HeaderTitle title={"Testimonials"} />
        <ShadeBar />
        <div className="w-full flex flex-col">
          <motion.div
            className="flex gap-6"
            animate={controlsX}
            onHoverStart={() => controlsX.stop()}
            onHoverEnd={() =>
              controlsX.start({
                x: "-50%",
                transition: {
                  duration: 15,
                  ease: "linear",
                  repeat: Infinity,
                },
              })
            }
          >
            {[...testimonials_top, ...testimonials_top].map((item, index) => (
              <div key={index} className="w-[400px] shrink-0 p-4 rounded-lg  ">
                <p className="tracking-tight tapestry mb-6 text-sm">
                  {item.text}
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full tracking-tight tapestry  object-cover border ">
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt="hi"
                      className="opacity-80 rounded-full group-hover:opacity-100 tracking-tight tapestry transition"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-semibold tracking-tight tapestry text-sm">
                        {item.name}
                      </p>
                      <CheckCircle className="w-3 h-3 tracking-tight tapestry" />
                    </div>
                    <p className="text-xs tracking-tight tapestry ">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          {/* <motion.div
            className="flex  gap-6"
            animate={controlsY}
            onHoverStart={() => controlsY.stop()}
            onHoverEnd={() =>
              controlsY.start({
                x: ["-50%", "0%"],
                transition: {
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                },
              })
            }
          >
            {[...testimonials_bottom, ...testimonials_bottom].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-[400px] shrink-0 p-4 rounded-lg  "
                >
                  <p className="tracking-tight tapestry mb-6 text-sm">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-10 rounded-full tracking-tight tapestry  object-cover border ">
                      <Image
                        src={item.image}
                        width={100}
                        height={100}
                        alt="hi"
                        className="opacity-80  rounded-full group-hover:opacity-100 tracking-tight tapestry transition"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-semibold tracking-tight tapestry text-sm">
                          {item.name}
                        </p>

                        <CheckCircle className="w-3 h-3 tracking-tight tapestry" />
                      </div>

                      <p className="text-xs tracking-tight tapestry ">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </motion.div> */}
        </div>
        <ShadeBar />
      </div>
    </section>
  );
}
