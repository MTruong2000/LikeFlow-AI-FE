import { useState, useEffect } from "react";
import { ChevronUp, Bot, Sparkles } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  // Hàm scroll lên đầu trang với hiệu ứng mượt mà
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-blue-500/25"
      >
        {/* Hiệu ứng glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

        {/* Hiệu ứng shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center">
          {isHovered ? (
            <div className="flex items-center space-x-1">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <ChevronUp className="w-5 h-5" />
              <Bot className="w-5 h-5 animate-bounce" />
            </div>
          ) : (
            <ChevronUp className="w-6 h-6" />
          )}
        </div>

        {/* Particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
          <div className="absolute top-4 right-3 w-1 h-1 bg-blue-300/80 rounded-full animate-pulse"></div>
          <div className="absolute bottom-3 left-4 w-1 h-1 bg-purple-300/80 rounded-full animate-bounce"></div>
        </div>
      </button>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900/90 text-white text-sm rounded-lg whitespace-nowrap backdrop-blur-sm border border-gray-700/50 transform transition-all duration-200 animate-in slide-in-from-bottom-2">
          <div className="flex items-center space-x-2">
            <Bot className="w-4 h-4 text-blue-400" />
            <span>Quay lên đầu trang</span>
          </div>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
