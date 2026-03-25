"use client";

import { useEffect, useState } from "react";
const Navbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full  p-9 flex items-center justify-between">
      <div className="flex gap-6 text-sm">
        <span className="text-sm font-serif tracking-wide">
          {time}
          <span>(GMT+5:30) Gurugram , India</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
