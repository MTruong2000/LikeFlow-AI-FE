"use client";
import { ArrowUpRight } from "lucide-react";
import scrollToSection from "@/funcs/scrolltosection";

export default function ButtonBaner() {
  return (
    <div className="w-fit px-3 py-2 rounded-full bg-[#50A6B3]/30 border-[2px] border-white sm:px-4 sm:py-3">
      <div
        className="flex items-center gap-2 sm:gap-3 text-base sm:text-xl bg-gradient-primary text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full cursor-pointer"
        onClick={() => scrollToSection("pricing")}
      >
        Get Started
        <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
    </div>
  );
}
