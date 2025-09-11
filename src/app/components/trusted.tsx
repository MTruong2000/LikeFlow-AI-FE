"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Trusted() {
  const images = [
    "https://w.ladicdn.com/s500x350/66e18ea9521baa00137153a3/amazon-20250728065610-oxz4r.png",
    "https://w.ladicdn.com/s500x350/66e18ea9521baa00137153a3/amazon-20250728065610-oxz4r.png",
    "https://w.ladicdn.com/s500x400/66e18ea9521baa00137153a3/walmart-20250728065610-xafg2.png",
    "https://w.ladicdn.com/s500x350/66e18ea9521baa00137153a3/amazon-20250728065610-oxz4r.png",
    "https://w.ladicdn.com/s500x350/66e18ea9521baa00137153a3/amazon-20250728065610-oxz4r.png",
    "https://w.ladicdn.com/s500x400/66e18ea9521baa00137153a3/walmart-20250728065610-xafg2.png",
    "https://w.ladicdn.com/s500x350/66e18ea9521baa00137153a3/amazon-20250728065610-oxz4r.png",
    "https://w.ladicdn.com/s500x350/66e18ea9521baa00137153a3/amazon-20250728065610-oxz4r.png",
    "https://w.ladicdn.com/s500x400/66e18ea9521baa00137153a3/walmart-20250728065610-xafg2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Số lượng hình hiển thị cùng lúc
  const visibleItems = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Khi đến cuối thì quay lại đầu
        if (prevIndex >= images.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000); // 5 giây

    return () => clearInterval(interval);
  }, [images.length]);

  // Tạo mảng hình ảnh hiển thị (lặp lại để tạo hiệu ứng vô hạn)
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < visibleItems; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push({
        src: images[index],
        originalIndex: index,
      });
    }
    return visibleImages;
  };

  return (
    <>
      <div className="h-[380] mb-12 text-center text-white bg-[url('https://w.ladicdn.com/s1440x370/66e18ea9521baa00137153a3/hero-background-20250723063242-ctqbz.png')]">
        <div className="m-auto p-12">
          <h2 className="text-2xl sm:text-4xl font-bold">
            TRUSTED BY BUSINESSES NATIONWIDE
          </h2>
          <p className="text-xl mt-2">
            Automate manual tasks, save time, and reduce effort with Bothive AI
          </p>
        </div>

        <div className="w-full max-w-6xl m-auto">
          {/* Container carousel */}
          <div className="relative overflow-hidden">
            {/* Grid hiển thị hình ảnh */}
            <div className="grid grid-cols-5 gap-4">
              {getVisibleImages().map((item, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="relative h-20 md:h-24 lg:h-28  rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Image
                    src={item.src}
                    alt={`Logo ${item.originalIndex + 1}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 20vw, (max-width: 1200px) 16vw, 12vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
