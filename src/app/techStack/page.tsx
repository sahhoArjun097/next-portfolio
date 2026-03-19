import HeaderTitle from "@/src/components/layout/header-title/page";
import LinkButton from "@/src/components/ui/linkButton";
import { techStack } from "@/src/constants/page";

const TechStack = () => {
  return (
    <section className="flex ">
      <div className="w-full max-w-4xl">
        <HeaderTitle title={"Tech Stack"} />

        {/* Buttons Container */}
        <div className="mt-5 flex flex-wrap gap-2 s">
          {techStack.map((item) => (
            <LinkButton
              key={item.buttonName}
              buttonName={item.buttonName}
              iconPath={item.iconPath}
              className="
                rounded-sm 
                py-1.5 px-3 
                text-xs sm:text-sm
                flex items-center gap-1.5
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
