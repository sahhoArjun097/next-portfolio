"use client";

import { motion, useAnimation } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ShadeBar from "@/src/components/ui/shadeBar";
import HeaderTitle from "@/src/components/layout/header-title/page";
import Image from "next/image";
import { testimonials_bottom, testimonials_top } from "@/src/constants/page";
import { useEffect } from "react";

const Testimonials = () => {
  const controlsX = useAnimation();
  const controlsY = useAnimation();
  useEffect(() => {
    controlsX.start({
      x: "-50%",
      transition: { duration: 15, ease: "linear", repeat: Infinity },
    });
    controlsY.start({
      x: ["-50%", "0%"],
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    });
  }, [controlsX, controlsY]);
  return (
    <section className="w-full max-w-2xl tapestry flex justify-center overflow-hidden relative py-10">
      <div className="w-full max-w-2xl gap-6">
        <HeaderTitle title={"Testimonials"} />
        <ShadeBar />

        <div className="flex flex-col gap-6">
          <motion.div
            className="flex gap-6"
            animate={controlsX}
            onHoverStart={() => controlsX.stop()}
            onHoverEnd={() =>
              controlsX.start({
                x: "-50%",
                transition: { duration: 15, ease: "linear", repeat: Infinity },
              })
            }
          >
            {[...testimonials_top, ...testimonials_top].map((item, index) => (
              <div
                key={index}
                className="w-[380px] shrink-0 p-5 rounded-xl 
                backdrop-blur-md  transition duration-300"
              >
                <p className="text-sm leading-relaxed text-white/80 mb-6">
                  {item.text}
                </p>

                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    width={40}
                    height={40}
                    alt={item.name}
                    className="rounded-full border border-white/20"
                  />

                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-semibold text-sm">{item.name}</p>
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                    <p className="text-xs text-white/60">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <ShadeBar className="h-4" />

          <motion.div
            className="flex gap-6"
            animate={controlsY}
            onHoverStart={() => controlsY.stop()}
            onHoverEnd={() =>
              controlsY.start({
                x: ["-50%", "0%"],
                transition: { duration: 20, ease: "linear", repeat: Infinity },
              })
            }
          >
            {[...testimonials_bottom, ...testimonials_bottom].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-[300px] shrink-0 p-5 rounded-xl  transition duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={item.image}
                      width={40}
                      height={40}
                      alt={item.name}
                      className="rounded-full border border-white/20"
                    />

                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-semibold text-sm">{item.name}</p>
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <p className="text-xs text-white/60">{item.role}</p>
                    </div>
                  </div>

                  <p className="text-sm text-white/80 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ),
            )}
          </motion.div>
        </div>

        <ShadeBar />
      </div>
    </section>
  );
};

export default Testimonials;
