"use client";
import { Play } from "lucide-react";
import ButtonBaner from "@/components/component-childs/button-banner";

const textBanner = {
  title: "Smarter AI, Faster Growth",
  description:
    "A user-friendly AI platform that’s easy to deploy, helping SMEs automate processes, boost efficiency, and connect with customers naturally.",
};

export default function Banner() {
  return (
    <div className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-[1148px] mb-[var(--outline-sp)] md:mb-[var(--outline-pc)]">
      <picture>
        <source media="(max-width: 767px)" srcSet="/images/banner-sp.webp" />
        <img
          src="/images/banner.webp"
          alt="Background"
          fetchPriority="high" // ưu tiên mạng cho LCP
          className="absolute inset-0 object-cover w-full h-full -z-10"
          
        />
      </picture>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-[#0F535D] via-transparent to-transparent" />

      {/* Content */}
      <div className="w-full xl:w-[1200px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:px-0 sm:px-12 px-4 mt-12">
        <div className="w-full md:w-[728px] sm:w-[90%] xs:w-full text-center md:text-left">
          <div className="">
            <h1 className="text-white text-[42px] md:text-[56px] lg:text-[69px] font-extrabold">
              {textBanner.title}
            </h1>
            <p className="text-white text-[18px] md:text-[21px] font-medium mt-6">
              {textBanner.description}
            </p>
          </div>

          <div className="mt-10 md:mt-12 flex gap-[20px] items-center justify-center md:justify-start">
            <ButtonBaner />
            <div className="w-fit p-[2px] rounded-full bg-[#50A6B3]/30 border-[2px] border-white">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-full cursor-pointer">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
