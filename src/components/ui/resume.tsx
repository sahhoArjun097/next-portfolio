import { FileText } from "lucide-react";

const Resume = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1BsKGMU1fLlxR-Widn5hPf6_wabkS78FK/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center cursor-pointer group"
    >
      <FileText className="w-4 h-4 tracking-tight  tapestry transition" />

      <span
        className="absolute -top-8 left-1/2 -translate-x-1/2 
        opacity-0 
        group-hover:opacity-100 group-hover:scale-100 
        transition-all duration-300 
        text-xs font-medium px-2 py-1   tapestry whitespace-nowrap"
      >
        Resume
      </span>
    </a>
  );
};

export default Resume;
