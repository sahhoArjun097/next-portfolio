import Link from "next/link";
import React from "react";

type LinkButtonProps = {
  link?: string;
  buttonName: string;
  iconPath: string;
  size?: number;
  className?: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  link = "#",
  buttonName,
  iconPath,
  size = 16,
  className = "",
}) => {
  return (
    <Link
      href={link}
      className={`group relative inline-flex items-center gap-2 rounded-lg px-2 py-0.5 
      border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md
      hover:border-zinc-600 hover:bg-zinc-900
      shadow-sm hover:shadow-md
      transition-all duration-200 ease-out
      active:scale-[0.97] ${className}`}
    >
      {/* subtle gradient glow */}
      <span
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 
      group-hover:opacity-100 transition duration-300 
      bg-gradient-to-r from-transparent via-white/5 to-transparent"
      />

      {/* icon */}
      <img
        src={iconPath}
        width={size}
        height={size}
        alt={buttonName}
        className="opacity-80 group-hover:opacity-100 transition"
      />
      {/* text */}
      <span className="text-zinc-200 text-sm font-medium tracking-tight">
        {buttonName}
      </span>
    </Link>
  );
};

export default LinkButton;
