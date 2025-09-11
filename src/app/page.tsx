import Image from "next/image";
import Banner from "@/app/components/banner";
import MultiTab from "@/app/components/multi-tab";
import WhoIsUser from "@/app/components/who-is-using";
import WhyChoose from "@/app/components/why-choose";
import SmartAgent from "@/app/components/smart-agent";
import ToolOverview from "@/app/components/tools-overview";
import Trusted from "@/app/components/trusted";
// import MultipleAdvanced from "@/app/components/multiple-advanced";
import TestimonialsSection from "@/app/components/testimonials-section";
import Pricing from "@/app/components/pricing";
import isLoggedIn from "@/app/components/funcs/isLonggedIn";

export default async function Home() {
  const checkLogin = await isLoggedIn();

  return (
    <div className="pt-[68px]">
      <div id="home">
        <Banner />
      </div>
      <div className="relative w-full h-[160px] sm:h-[260px] md:h-[360px] lg:h-[560px] xl:px-0 sm:px-12 px-4">
        <Image
          src="https://w.ladicdn.com/s1400x850/66e18ea9521baa00137153a3/anh-man-hinh-2025-07-23-luc-081621-20250726013157-9hhbj.png"
          alt="Background"
          width={1200}
          height={598}
          className="object-cover xl:rounded-[20px] absolute top-[-100px] left-1/2 translate-x-[-50%] "
        />
      </div>
      <div id="features">
        <MultiTab />
      </div>
      <WhoIsUser />
      <WhyChoose />
      <SmartAgent />
      <div id="tools">
        <ToolOverview />
      </div>
      <Trusted />
      {/* <MultipleAdvanced /> */}
      <TestimonialsSection />
      <div id="pricing">
        <Pricing checkLogin={checkLogin} />
      </div>
    </div>
  );
}
