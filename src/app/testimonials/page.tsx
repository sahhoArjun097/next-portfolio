"use client";

import { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import ShadeBar from "@/src/components/ui/shadeBar";
import HeaderTitle from "@/src/components/layout/header-title/page";
import Image from "next/image";
import { testimonials_bottom, testimonials_top } from "@/src/constants/page";
import gsap from "gsap";
import Link from "next/link";

const Testimonials = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const topTween = useRef<gsap.core.Tween | null>(null);
  const bottomTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (topRef.current) {
      topTween.current = gsap.to(topRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "linear",
        repeat: -1,
      });
    }

    if (bottomRef.current) {
      bottomTween.current = gsap.fromTo(
        bottomRef.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          duration: 10,
          ease: "linear",
          repeat: -1,
        },
      );
    }
  }, []);

  return (
    <section className="w-full max-w-2xl tapestry flex justify-center overflow-hidden relative py-10">
      <div className="w-full max-w-2xl gap-6">
        <HeaderTitle title={"Testimonials"} />
        <ShadeBar />

        <div className="flex flex-col gap-6">
          {/* 🔥 TOP SLIDER */}
          <div
            ref={topRef}
            className="flex gap-6 w-max"
            onMouseEnter={() => topTween.current?.pause()}
            onMouseLeave={() => topTween.current?.resume()}
          >
            {[...testimonials_top, ...testimonials_top].map((item, index) => (
              <div
                key={index}
                className="w-[380px] shrink-0 p-5 rounded-xl backdrop-blur-md transition duration-300"
              >
                <p className="text-sm leading-relaxed tracking-tight tapestry mb-6">
                  {item.text}
                </p>
                <Link href={item.link}>
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.image}
                      width={40}
                      height={40}
                      alt={item.name}
                      className="rounded-full  border border-white/20"
                    />

                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-semibold tracking-tight tapestry text-sm">
                          {item.name}
                        </p>
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <p className="text-xs tracking-tight tapestry">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* <ShadeBar className="h-4" /> */}

          {/* 🔥 BOTTOM SLIDER */}
          <div
            ref={bottomRef}
            className="flex gap-6 w-max"
            onMouseEnter={() => bottomTween.current?.pause()}
            onMouseLeave={() => bottomTween.current?.resume()}
          >
            {[...testimonials_bottom, ...testimonials_bottom].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-[370px] shrink-0 p-2 rounded-xl transition duration-300"
                >
                  <Link href={item.link}>
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
                          <p className=" tracking-tight tapestry text-sm">
                            {item.name}
                          </p>
                          <CheckCircle className="w-3 h-3 text-green-400" />
                        </div>
                        <p className="text-xs tracking-tight tapestry">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </Link>

                  <p className="text-sm tracking-tight tapestry leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        <ShadeBar />
      </div>
    </section>
  );
};

export default Testimonials;
