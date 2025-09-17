"use client";
import { Menu, X, Home, User, Phone, Star } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import HeaderProfile from "@/components/component-layout/header/header-profile";
import Navigation from "@/components/component-childs/navigation";
import LogoLikeFlow from "@/components/component-childs/logo-likeflow";
import scrollToSection from "@/funcs/scrolltosection";
import ButtonAnimationPrimary from "@/components/component-childs/button-animation-primary";

export default function HeaderClient({
  isLonggedIn,
}: {
  isLonggedIn: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigationData = [
    { id: "home", name: "Home", icon: Home },
    { id: "features", name: "Features", icon: User },
    { id: "tools", name: "Tools", icon: Star },
    { id: "pricing", name: "Pricing", icon: Phone },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigationClick = (section: string) => {
    if (pathname === "/") {
      scrollToSection(section);
    } else {
      router.push(`/#${section}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="absolute text-white z-10 w-full top-[52px] left-0 sm:px-12 px-4">
      <div className="w-full xl:w-[1200] h-[80] flex xl:gap-20 gap-0 justify-between mx-auto px-4 md:px-[33px] bg-gradient-header">
        <div className="flex md:hidden gap-4 justify-center items-center my-auto">
          <Menu
            className="block md:hidden w-8 h-8 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className="my-auto">
          <LogoLikeFlow />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex xl:gap-15 gap-12 justify-between items-center uppercase font-bold">
          <Navigation />
        </div>

        {/* Right-side (Profile or Menu) */}
        <div className="flex gap-4 justify-center items-center my-auto">
          {isLonggedIn ? (
            <HeaderProfile />
          ) : (
            <ButtonAnimationPrimary onClick={() => scrollToSection("pricing")}>
              Get Started
            </ButtonAnimationPrimary>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-20 transition-all duration-500 ease-out ${
          isMenuOpen
            ? "bg-black/50 backdrop-blur-sm opacity-100 visible"
            : "bg-black/0 backdrop-blur-none opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* AI-Style Sliding Menu */}
      <div
        className={`fixed top-0 right-0 z-30 w-40 h-auto transition-all duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Glass Background */}
        <div className="absolute inset-0 bg-gradient-menu border-l border-white/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10 p-8 h-full flex flex-col">
          <nav className="flex-1">
            <ul className="space-y-2">
              {navigationData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li
                    key={item.id}
                    className={`transform transition-all duration-500 ease-out ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div
                      onClick={() => handleNavigationClick(item.id)}
                      className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300"
                    >
                      {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-purple-500/40 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-cyan-300 group-hover:text-white transition-colors duration-300" />
                      </div> */}
                      <span className="text-white text-lg font-medium group-hover:text-cyan-300 transition-colors duration-300">
                        {item.name}
                      </span>
                      <div className="flex-1"></div>
                      <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75"></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
