import { tabs } from "@/src/constants/page";
import Link from "next/link";

export default function SegmentedControl() {
  return (
    <div className="relative flex w-full max-w-xs h-9 rounded-full border-2 border-[#323232] bg-transparent shadow-[4px_4px_0_#323232] p-[2px]">
      {tabs.map((item, index) => (
        <Link key={item.tabName} href={item.href} className="flex-1">
          <label className="relative flex w-full h-full rounded-full cursor-pointer">
            <input
              type="radio"
              name="btn"
              defaultChecked={index === 0}
              className="peer absolute inset-0 appearance-none cursor-pointer"
            />

            <div className="flex h-full w-full items-center justify-center rounded-full transition-all duration-200 peer-checked:bg-[#323232] hover:bg-[#505050]">
              <span className="text-xs sm:text-sm text-white-color transition-colors duration-200">
                {item.tabName}
              </span>
            </div>
          </label>
        </Link>
      ))}
    </div>
  );
}
