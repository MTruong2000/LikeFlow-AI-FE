"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Theo dõi vị trí scroll để hiển thị/ẩn nút
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Nút chính với hiệu ứng AI */}
      <button
        onClick={scrollToTop}
        className="group relative overflow-hidden bg-gradient-primary text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-blue-500/25"
      >

        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center">
          <ChevronUp className="w-6 h-6" />
        </div>

        {/* Particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
          <div className="absolute top-4 right-3 w-1 h-1 bg-blue-300/80 rounded-full animate-pulse"></div>
          <div className="absolute bottom-3 left-4 w-1 h-1 bg-purple-300/80 rounded-full animate-bounce"></div>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;
