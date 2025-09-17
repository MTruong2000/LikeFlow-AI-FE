"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import ButtonBaner from "@/components/component-childs/button-banner";

const textBanner = {
  title: "Smarter AI, Faster Growth",
  description:
    "A user-friendly AI platform that’s easy to deploy, helping SMEs automate processes, boost efficiency, and connect with customers naturally.",
};

export default function Banner() {
  return (
    <div
      className="
        relative w-full
        min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-[1148px]
        mb-[110px]
      "
    >
      {/* Background image */}
      <Image
        src="/images/banner.png"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-[#0F535D] via-transparent to-transparent" />

      {/* Content */}
      <div className="w-full xl:w-[1200px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:px-0 sm:px-12 px-4">
        <div className="w-full md:w-[728px] sm:w-[90%] xs:w-full text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-white text-[42px] md:text-[56px] lg:text-[69px] font-extrabold">
            {textBanner.title}
          </h1>
          <p className="text-white text-[18px] md:text-[21px] font-medium mt-6">
            {textBanner.description}
          </p>

          <div className="mt-10 md:mt-12 flex gap-[20px] items-center justify-center md:justify-start">
            <ButtonBaner />
            <div className="w-fit px-[15px] py-[13px] rounded-[52px] bg-[#50A6B3]/[0.28] border border-white">
              <div className="w-fit flex gap-[13px] text-[26px] text-[#0F535D] font-semibold px-[13px] py-[13px] bg-white rounded-[50%]">
                <Play />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
