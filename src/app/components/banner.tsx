import Image from "next/image";
import ButtonAnimation from "@/app/components/component-childs/button-animation";

export default function Banner() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="https://w.ladicdn.com/s1440x733/66e18ea9521baa00137153a3/image-1-20250721023632-fad7g.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute top-4 left-20 ">
        <Image
          src="https://w.ladicdn.com/s550x450/66e18ea9521baa00137153a3/feature-card-20250804083102-sd1z0.png"
          alt="Background"
          width={240}
          height={120}
          className="object-cover"
        />
      </div>

      <div className="xl:w-[1200] w-full xl:px-0 sm:px-12 px-4 absolute top-[10%] left-1/2 translate-x-[-50%] translate-y-[50%] flex items-center justify-center text-center flex-col gap-8">
        <h1 className="text-white text-4xl sm:text-6xl font-bold">
          AI Workplace for Business Growth
        </h1>
        <p className="lg:w-[768] text-white text-xl sm:text-2xl font-bold">
          A comprehensive platform that empowers individuals and online
          businesses to create, automate operations, and grow smarter with AI.
        </p>
      </div>

      <div className="hidden sm:block xl:w-[1200] w-full xl:px-0 sm:px-12 px-4 absolute md:bottom-[40%] bottom-[32%] left-1/2 translate-x-[-50%] translate-y-[50%] text-center">
        <ButtonAnimation />
      </div>

      <div className="hidden lg:block absolute bottom-[40%] right-0 translate-x-[-50%] translate-y-[50%]">
        <Image
          src="https://w.ladicdn.com/s550x500/66e18ea9521baa00137153a3/metric-container-20250721015829-e2ifr.png"
          alt="Background"
          width={250}
          height={150}
          className="object-cover"
        />
      </div>
      <div className="w-full h-[376] bottom-[-20] absolute bg-[url('https://w.ladicdn.com/s2850x700/66e18ea9521baa00137153a3/ellipse-1-20250721012756-wbagq.png')]"></div>
      <div className="w-full h-[260] bottom-[-20] absolute bg-[url('https://w.ladicdn.com/s2850x600/66e18ea9521baa00137153a3/ellipse-2-20250721012756--ibfj.png')]"></div>
    </div>
  );
}
