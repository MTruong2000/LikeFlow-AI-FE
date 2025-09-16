"use client";
import Image from "next/image";
import ButtonAnimation from "@/components/component-childs/button-animation";
import Language from "@/components/component-childs/language";
import HeaderProfile from "@/components/component-layout/header/header-profile";
import Navigation from "@/components/component-childs/navigation";

export default function HeaderClient({
  isLonggedIn,
}: {
  isLonggedIn: boolean;
}) {
  return (
    <div className="bg-[#0d0123] text-white fixed z-10 w-full top-0 left-0">
      <div className="w-full xl:w-[1200] h-[72] xl:mx-auto flex xl:gap-20 gap-0 justify-between xl:px-0 sm:px-12 px-4">
        <div className="my-auto">
          <Image
            src="https://w.ladicdn.com/s500x400/66e18ea9521baa00137153a3/logo-2-20240915105146-eew1_.png"
            alt="Bothive Logo"
            width={160}
            height={60}
          />
        </div>

        <div className="hidden lg:flex xl:gap-20 gap-12 justify-between items-center uppercase font-bold">
          <Navigation />
        </div>

        <div className="flex gap-4 justify-center items-center my-auto">
          {isLonggedIn ? <HeaderProfile /> : <ButtonAnimation />}
          <Language />
        </div>
      </div>
    </div>
  );
}
