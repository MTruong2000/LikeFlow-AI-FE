"use client";
import { ArrowUpRight } from "lucide-react";
import scrollToSection from "@/funcs/scrolltosection";

export default function ButtonBaner() {
  return (
    <>
      <div className="w-fit px-[15px] py-[13px] rounded-[52px] bg-[#50A6B3]/[0.28] border border-white">
        <div
          className="w-fit flex gap-[13px] text-[26px] text-[#0F535D] font-semibold px-[26px] py-[13px] bg-white rounded-[31px] cursor-pointer"
          onClick={() => scrollToSection("pricing")}
        >
          Get Started
          <ArrowUpRight className="h-[26px] w-[26px]" />
        </div>
      </div>
    </>
  );
}
