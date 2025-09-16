"use client";
import { useRouter, usePathname } from "next/navigation";
import scrollToSection from "@/funcs/scrolltosection";

interface Navigation {
  id: string;
  name: string;
}

const navigations: Navigation[] = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "features",
    name: "Features",
  },
  {
    id: "tools",
    name: "Tools",
  },
  {
    id: "pricing",
    name: "Pricing",
  },
];

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleDirection = async (section: string) => {
    if (pathname === "/") {
      scrollToSection(section);
    } else {
      router.push(`/#${section}`);
    }
  };

  return (
    <>
      {navigations.map((navigation) => (
        <p
          className="cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-300 text-lg"
          onClick={() => handleDirection(navigation.id)}
          key={navigation.id}
        >
          {navigation.name}
        </p>
      ))}
    </>
  );
};

export default Navigation;
