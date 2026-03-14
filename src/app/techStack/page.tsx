import HeaderTitle from "@/src/components/layout/header-title/page";
import LinkButton from "@/src/components/ui/linkButton";
import { techStack } from "@/src/constants/page";

const TechStack = () => {
  return (
    <section className="flex justify-center  p-1  border-amber-100">
      <div className="w-full max-w-2xl">
        <HeaderTitle title={"Tech Stack"} />
        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((item) => (
            <LinkButton
              key={item.buttonName}
              buttonName={item.buttonName}
              iconPath={item.iconPath}
              className="rounded-sm py-1.5 px-3"
              //   link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
