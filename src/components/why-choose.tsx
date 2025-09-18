"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play, ArrowUpRight } from "lucide-react";
import ButtonAnimationPrimary from "@/components/component-childs/button-animation-primary";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface SlideData {
  videoUrl: string;
  accordionData: AccordionItem[];
}

export default function WhyChoose() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [isChanging, setIsChanging] = useState(false);

  const slidesData: SlideData[] = [
    {
      videoUrl: "/images/should-businesses.png",
      accordionData: [
        {
          id: "cut-marketing-costs",
          title: "Cut marketing costs, boost results",
          content:
            "LikeFlow's Chat Pro integrates leading AI models (ChatGPT, Gemini, Claude...) to generate content, plan campaigns, and analyze performance — helping you reduce outsourcing costs and make faster, smarter decisions.",
        },
        {
          id: "automate-creative",
          title: "Automate creative work, save 70–90% of time",
          content:
            "No need to rely solely on human teams. With tools like AI Photo, AI Voice, and Chat AI, you can create copy, images, and audio effortlessly — drastically reducing workload while keeping quality high.",
        },
        {
          id: "unify-customer-data",
          title: "Unify customer data, personalize at scale",
          content:
            "Stop struggling with scattered data. LikeFlow's AI Agents remember customer history, analyze behaviors, and recommend personalized engagement programs — all managed seamlessly in one place.",
        },
        {
          id: "automate-workflows",
          title: "Automate workflows, scale without extra staff",
          content:
            "With AI Workflow, automate repetitive tasks such as sending emails, post-sale care, and report generation — allowing your business to scale without inflating headcount.",
        },
        {
          id: "faster-onboarding",
          title: "Faster onboarding, consistent training",
          content:
            "Build internal AI Assistants to store SOPs, onboarding guides, and training flows — speeding up new hire integration while ensuring process consistency across the team.",
        },
      ],
    },
    {
      videoUrl: "/images/should-online-entrepreneurs.png",
      accordionData: [
        {
          id: "one-unified-platform",
          title: "One Unified Platform",
          content:
            "Write with Chat Pro, design with AI Photo, generate voices with AI Voice — all under one login, one credit system. No more juggling multiple apps.",
        },
        {
          id: "endless-inspiration",
          title: "Endless Inspiration",
          content:
            "Chat Pro connects with top AI models (Claude, ChatGPT, Gemini...) so you can switch perspectives instantly. Break free from one-dimensional thinking and spark fresh ideas.",
        },
        {
          id: "smart-knowledge-hub",
          title: "Smart Knowledge Hub",
          content:
            "Train AI Agents with your own documents. Ask questions, extract insights, or run analysis — like having a personal research assistant at your fingertips.",
        },
        {
          id: "full-workflow-automation",
          title: "Full Workflow Automation",
          content:
            "Build flows with AI Workflow to handle tasks from input → processing → output → email. Built with AI at its core and far simpler to integrate.",
        },
        {
          id: "tailored-expertise",
          title: "Tailored Expertise",
          content:
            "Create domain-specific AI Agents by uploading your industry materials. Fine-tune context so AI understands your field — delivering precise, expert-level outputs.",
        },
      ],
    },
    {
      videoUrl: "/images/should-AI-beginners.png",
      accordionData: [
        {
          id: "guided-simplicity",
          title: "Guided Simplicity",
          content:
            "A clean UI with step-by-step tutorials, prompts, and ready examples. No experience needed — just start.",
        },
        {
          id: "all-in-one",
          title: "All in One, everything you need",
          content:
            "Writing, images, voice, research… Likeflow bundles the best AI tools into a single platform. One login, one solution.",
        },
        {
          id: "plug-and-go",
          title: "Plug in and go, no editing needed",
          content:
            "A unified interface across chat, image, voice, and workflow. Master it once, use it everywhere.",
        },
        {
          id: "transparent-pricing",
          title: "Clear, Transparent Pricing",
          content:
            "One credit system covers all tools. Easy tracking, no hidden fees, always affordable.",
        },
        {
          id: "faster-onboarding",
          title: "Faster onboarding, consistent training",
          content:
            "Build internal AI Assistants to store SOPs, onboarding guides, and training flows - speeding up new hire integration while ensuring process consistency across the team.",
        },
      ],
    },
  ];

  const rightColRef = useRef<HTMLDivElement | null>(null);
  const [rightColHeight, setRightColHeight] = useState<string | number>("auto");
  const animatingHeightRef = useRef(false);

  const currentSlideData = slidesData[currentSlide];

  const toggleAccordion = (itemId: string) => {
    const newExpandedItems = new Set(expandedItems);
    newExpandedItems.has(itemId)
      ? newExpandedItems.delete(itemId)
      : newExpandedItems.add(itemId);
    setExpandedItems(newExpandedItems);
  };
  // Helper: đo chiều cao thực của nội dung (auto height)
  const measureContentHeight = () => {
    const el = rightColRef.current;
    if (!el) return 0;
    // Tạm set auto để lấy chiều cao thật
    const prev = el.style.height;
    el.style.height = "auto";
    const h = el.getBoundingClientRect().height;
    el.style.height = prev;
    return h;
  };

  // Animate khi slide/fold thay đổi (accordion mở/đóng)
  useLayoutEffect(() => {
    const el = rightColRef.current;
    if (!el) return;
  
    // Đang animate => bỏ qua để tránh chồng animation
    if (animatingHeightRef.current) return;
  
    // Mobile: tránh jump bằng cách không animate height
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      setRightColHeight("auto");
      return;
    }
  
    const fromH = el.getBoundingClientRect().height;
    setRightColHeight(fromH);
  
    let raf1 = 0;
    let raf2 = 0;
    let fallbackTimer: number | undefined;
  
    // Double-RAF để đảm bảo DOM của slide/accordion đã paint xong trước khi đo
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const toH = measureContentHeight();
  
        // Nếu không đổi chiều cao đáng kể => bỏ animate để tránh giật
        if (Math.abs(toH - fromH) < 1) {
          setRightColHeight("auto");
          return;
        }
  
        animatingHeightRef.current = true;
  
        const onEnd = () => {
          animatingHeightRef.current = false;
          setRightColHeight("auto"); // trả về auto sau khi animate xong
          el.removeEventListener("transitionend", onEnd);
          if (fallbackTimer) window.clearTimeout(fallbackTimer);
        };
  
        el.addEventListener("transitionend", onEnd);
  
        // Fallback khi transitionend không bắn (một số thiết bị/mobile)
        // Lấy duration hiện tại (ms) nếu có, rồi cộng biên độ an toàn
        const durStr = getComputedStyle(el).transitionDuration || "0s";
        const durMs =
          durStr.split(",")[0]?.trim().endsWith("ms")
            ? parseFloat(durStr)
            : parseFloat(durStr) * 1000;
        fallbackTimer = window.setTimeout(onEnd, (isNaN(durMs) ? 300 : durMs) + 80);
  
        // Force reflow rồi set height đích để chắc chắn trigger transition
        void el.offsetHeight;
        setRightColHeight(toH);
      });
    });
  
    // Cleanup nếu deps đổi nhanh hoặc unmount
    return () => {
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [currentSlide, expandedItems]);
  

  const handleSlideChange = (newSlide: number) => {
    setIsChanging(true);

    // Đồng thời animate height dựa trên nội dung mới:
    // Bước 1: khoá chiều cao hiện tại để tránh jump
    const el = rightColRef.current;
    if (el) setRightColHeight(el.getBoundingClientRect().height);

    setTimeout(() => {
      setCurrentSlide(newSlide);
      setExpandedItems(new Set()); // đóng hết khi sang slide mới
      setIsChanging(false);
    }, 300);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slidesData.length);
  };
  const prevSlide = () => {
    handleSlideChange(
      currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1
    );
  };

  return (
    <div className="xl:w-[1200px] m-auto mb-12 xl:px-0 sm:px-12 px-4">
      <div className="flex justify-between">
        <div className="uppercase flex-1">
          <h2 className="bg-gradient-primary bg-clip-text text-transparent text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold">
            Why
          </h2>
          <h2 className="w-full text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold">
            should online entrepreneurs use
            {/* Bug */}
          </h2>
          <h2 className="bg-gradient-primary bg-clip-text text-transparent text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold">
            LikeFlow
          </h2>
        </div>
        <div className="flex-1 hidden md:flex flex-col justify-center items-end gap-4">
          <h3 className="text-[length:var(--text-title-sp)] md:text-[length:var(--text-title-pc)] bg-gradient-primary bg-clip-text text-transparent">
            What&apos;s Your Next Idea?
          </h3>
          <div className="flex">
            <ButtonAnimationPrimary
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Try for Free
            </ButtonAnimationPrimary>
            <Play className="bg-gradient-primary rounded-[50%] text-white h-12 w-12 p-3 ml-8" />
          </div>
        </div>
      </div>
      <div className="md:flex mt-12 gap-12">
        {/* Left: Image với fade/scale & min-h để ổn định khung */}
        <div className="flex justify-center mb-12 md:mb-0">
          <div className="w-[384px] min-h-[220px]">
            <img
              key={currentSlide}
              src={currentSlideData.videoUrl}
              alt="Slide Image"
              className={`w-full min-h-[450px] rounded-xl shadow-2xl transition-all duration-300 transform ${
                isChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />
          </div>
        </div>

        {/* Right: Accordion wrapper animate height */}
        <div
          ref={rightColRef}
          style={{
            height: rightColHeight,
            transition: "height 300ms ease",
          }}
          className={`flex-1`}
        >
          <div
            className={`space-y-0 transition-all duration-300 transform ${
              isChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {currentSlideData.accordionData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg overflow-hidden rounded-xl mb-4"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full h-[90px] px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none transition-all duration-200 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)] font-semibold text-gray-800">
                    {item.title}
                  </span>
                  {expandedItems.has(item.id) ? <p>-</p> : <p>+</p>}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItems.has(item.id)
                      ? "opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 bg-gray-50 border-b border-gray-100 last:border-b-0">
                    <p className="text-gray-700 leading-relaxed text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={nextSlide}
              className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Next
              <ArrowUpRight className="h-5 w-5" />
            </button>

            <div className="flex gap-3">
              <button
                aria-label="Prev"
                onClick={prevSlide}
                className="p-2 bg-white hover:bg-gray-50 text-gray-700 rounded-full font-medium transition-colors shadow border border-gray-200 flex items-center gap-1"
              >
                <ArrowLeft />
              </button>
              <button
                aria-label="Next"
                onClick={nextSlide}
                className="p-2 bg-white hover:bg-gray-50 text-gray-700 rounded-full font-medium transition-colors shadow border border-gray-200 flex items-center gap-1"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
