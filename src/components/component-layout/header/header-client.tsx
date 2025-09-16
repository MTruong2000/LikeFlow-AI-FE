"use client";
import Language from "@/components/component-childs/language";
import HeaderProfile from "@/components/component-layout/header/header-profile";
import Navigation from "@/components/component-childs/navigation";
import LogoLikeFlow from "@/components/component-childs/logo-likeflow";
import scrollToSection from "@/funcs/scrolltosection";

export default function HeaderClient({
  isLonggedIn,
}: {
  isLonggedIn: boolean;
}) {
  return (
    <div className="absolute text-white  z-10 w-full top-[52px] left-0 sm:px-12 px-4">
      <div className="w-full xl:w-[1200] h-[80]  flex xl:gap-20 gap-0 justify-between mx-auto  px-[33px] bg-gradient-to-r from-[#FEF8FF]/[0.21] to-[#FEF8FF]/[0] rounded-[107px] backdrop-blur-2xl">
        <div className="my-auto">
          <LogoLikeFlow />
        </div>

        <div className="hidden lg:flex xl:gap-15 justify-between items-center uppercase font-bold">
          <Navigation />
        </div>

        <div className="flex gap-4 justify-center items-center my-auto">
          {isLonggedIn ? (
            <HeaderProfile />
          ) : (
            <div
              className="h-fit flex gap-4 items-center px-5 py-2.5 border border-white rounded-[38px] cursor-pointer"
              onClick={() => scrollToSection("pricing")}
            >
              <p className="text-lg">Get Started Free</p>
            </div>
          )}
          <Language />
        </div>
      </div>
    </div>
  );
}
