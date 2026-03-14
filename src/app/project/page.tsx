/* eslint-disable @next/next/no-img-element */
import HeaderTitle from "@/src/components/layout/header-title/page";
import { projects } from "@/src/constants/page";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <section className="flex  w-full  tapestry  p-1   flex-col justify-center items-center  border-amber-100  ">
      <div className="max-w-2xl   space-y-6">
        <HeaderTitle title={"Project"} />

        <div className="grid grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-800 tracking-tight overflow-hidden hover:border-zinc-700 transition flex flex-col h-full"
            >
              <div className="h-32 w-[350px] rounded-xl overflow-hidden">
                <div className="flex h-[86%] w-full">
                  {project.projectImage.map((img, i) => (
                    <div
                      key={i}
                      className="group flex-1 tacking-wider transition-all duration-150 hover:flex-[2] "
                    >
                      <img src={img} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg font-medium">{project.title}</h2>

                    <Link href={project.link}>
                      <Image
                        src={project.icon}
                        width={25}
                        height={25}
                        alt="icon"
                        className="opacity-80 rounded-full"
                      />
                    </Link>
                  </div>

                  <p className="text-sm mb-5">{project.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
                    ● {project.status}
                  </span>
                  <div className="flex gap-2">
                    {project.tech.map((t, i) => (
                      <div key={i} className="relative group">
                        <div className="w-7 h-7">
                          <img
                            className="w-full cursor-pointer h-full"
                            src={t.icon}
                            alt={t.name}
                          />
                        </div>

                        <span className="absolute tracking-tight -top-7 left-1/2 -translate-x-1/2 scale-0 text-sm font-bold  px-2 py-1  rounded group-hover:scale-100 transition">
                          {t.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="grid grid-cols-4 gap-4">
  {Object.entries(images).map(([key, imgs]) => (
    <div  className="border rounded-lg p-2">
      
      <h2 className="text-sm font-semibold mb-2">{key}</h2>

      {imgs.map((img, index) => (
        <div
          key={index}
          className="h-32 w-full overflow-hidden rounded-md"
        >
          <img
            src={img}
            alt={key}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

    </div>
  ))}
</div> */
}

//  <div className="h-32 w-[350px] rounded-xl overflow-hidden">
//                 <div className="flex h-[86%] w-full">
//                   {project.projectImage.map((img, i) => (
//                     <div
//                       key={i}
//                       className="group flex-1 tacking-wider transition-all duration-150 hover:flex-[2] "
//                     >
//                       <img src={img} className="w-full h-full object-cover" />
//                     </div>
//                   ))}
//                 </div>
