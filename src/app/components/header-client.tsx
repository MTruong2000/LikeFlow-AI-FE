"use client";
import Image from "next/image";
import ButtonAnimation from "@/app/components/component-childs/button-animation";
import Language from "@/app/components/component-childs/language";
import scrollToSection from "@/app/components/funcs/scrolltosection";
import HeaderProfile from "@/app/components/header-profile";

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
          <p
            className="cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-300 text-lg"
            onClick={() => scrollToSection("home")}
          >
            Home
          </p>
          <p
            className="cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-300 text-lg"
            onClick={() => scrollToSection("features")}
          >
            Features
          </p>
          <p
            className="cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-300 text-lg"
            onClick={() => scrollToSection("tools")}
          >
            Tools
          </p>
          <p
            className="cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-300 text-lg"
            onClick={() => scrollToSection("pricing")}
          >
            Pricing
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center my-auto">
          <Language />
          {isLonggedIn ? (
            <HeaderProfile />
          ) : (
            <ButtonAnimation />
          )}
        </div>
      </div>
    </div>
  );
}
