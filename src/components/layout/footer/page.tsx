import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-6 sm:pt-10 pb-6 flex flex-col items-center cursor-pointer text-center text-xs sm:text-sm gap-1 opacity-70 tracking-tight">
      <p>
        Design & Developed by{" "}
        <Link href="/about" className="hover:underline ">
          Arjun Agarwal
        </Link>
      </p>
      <p>© 2026. All rights reserved.</p>
    </div>
  );
};

export default Footer;
