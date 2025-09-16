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
    <div className="relative w-full h-[1148px] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(180deg,#0F535D_0%,rgba(0,0,0,0)_82%)] mb-[110px]">
      <Image
        src="/images/banner.png"
        alt="Background"
        width={1440}
        height={1148}
        className="object-cover w-full h-full"
        priority
      />

      <div className="w-full xl:w-[1200] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:px-0 sm:px-12 px-4">
        <div className="w-[728px]">
          <h1 className="text-white text-[69px] font-extrabold">
            {textBanner.title}
          </h1>
          <p className="text-white text-[21px] font-medium mt-[27px]">
            {textBanner.description}
          </p>
          <div className="mt-[50px] flex gap-[20px] items-center">
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
