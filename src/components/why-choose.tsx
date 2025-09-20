"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Play, ArrowUpRight } from "lucide-react";
import ButtonAnimationPrimary from "@/components/component-childs/button-animation-primary";
import ListDownUp from "@/components/component-childs/list-down-up";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

interface SlideData {
  videoUrl: string;
  accordionData: FeatureItem[];
}

export default function WhyChoose() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const slidesData: SlideData[] = [
    {
      videoUrl: "/images/should-businesses.webp",
      accordionData: [
        {
          id: "cut-marketing-costs",
          title: "Cut marketing costs, boost results",
          description:
            "LikeFlow's Chat Pro integrates leading AI models (ChatGPT, Gemini, Claude...) to generate content, plan campaigns, and analyze performance — helping you reduce outsourcing costs and make faster, smarter decisions.",
        },
        {
          id: "automate-creative",
          title: "Automate creative work, save 70–90% of time",
          description:
            "No need to rely solely on human teams. With tools like AI Photo, AI Voice, and Chat AI, you can create copy, images, and audio effortlessly — drastically reducing workload while keeping quality high.",
        },
        {
          id: "unify-customer-data",
          title: "Unify customer data, personalize at scale",
          description:
            "Stop struggling with scattered data. LikeFlow's AI Agents remember customer history, analyze behaviors, and recommend personalized engagement programs — all managed seamlessly in one place.",
        },
        {
          id: "automate-workflows",
          title: "Automate workflows, scale without extra staff",
          description:
            "With AI Workflow, automate repetitive tasks such as sending emails, post-sale care, and report generation — allowing your business to scale without inflating headcount.",
        },
        {
          id: "faster-onboarding",
          title: "Faster onboarding, consistent training",
          description:
            "Build internal AI Assistants to store SOPs, onboarding guides, and training flows — speeding up new hire integration while ensuring process consistency across the team.",
        },
      ],
    },
    {
      videoUrl: "/images/should-online-entrepreneurs.webp",
      accordionData: [
        {
          id: "one-unified-platform",
          title: "One Unified Platform",
          description:
            "Write with Chat Pro, design with AI Photo, generate voices with AI Voice — all under one login, one credit system. No more juggling multiple apps.",
        },
        {
          id: "endless-inspiration",
          title: "Endless Inspiration",
          description:
            "Chat Pro connects with top AI models (Claude, ChatGPT, Gemini...) so you can switch perspectives instantly. Break free from one-dimensional thinking and spark fresh ideas.",
        },
        {
          id: "smart-knowledge-hub",
          title: "Smart Knowledge Hub",
          description:
            "Train AI Agents with your own documents. Ask questions, extract insights, or run analysis — like having a personal research assistant at your fingertips.",
        },
        {
          id: "full-workflow-automation",
          title: "Full Workflow Automation",
          description:
            "Build flows with AI Workflow to handle tasks from input → processing → output → email. Built with AI at its core and far simpler to integrate.",
        },
        {
          id: "tailored-expertise",
          title: "Tailored Expertise",
          description:
            "Create domain-specific AI Agents by uploading your industry materials. Fine-tune context so AI understands your field — delivering precise, expert-level outputs.",
        },
      ],
    },
    {
      videoUrl: "/images/should-AI-beginners.webp",
      accordionData: [
        {
          id: "guided-simplicity",
          title: "Guided Simplicity",
          description:
            "A clean UI with step-by-step tutorials, prompts, and ready examples. No experience needed — just start.",
        },
        {
          id: "all-in-one",
          title: "All in One, everything you need",
          description:
            "Writing, images, voice, research… Likeflow bundles the best AI tools into a single platform. One login, one solution.",
        },
        {
          id: "plug-and-go",
          title: "Plug in and go, no editing needed",
          description:
            "A unified interface across chat, image, voice, and workflow. Master it once, use it everywhere.",
        },
        {
          id: "transparent-pricing",
          title: "Clear, Transparent Pricing",
          description:
            "One credit system covers all tools. Easy tracking, no hidden fees, always affordable.",
        },
        {
          id: "faster-onboarding",
          title: "Faster onboarding, consistent training",
          description:
            "Build internal AI Assistants to store SOPs, onboarding guides, and training flows - speeding up new hire integration while ensuring process consistency across the team.",
        },
      ],
    },
  ];

  const currentSlideData = slidesData[currentSlide];

  const handleSlideChange = (newSlide: number) => {
    setIsChanging(true);

    setTimeout(() => {
      setCurrentSlide(newSlide);
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
    <div className="xl:w-[1200px] m-auto mb-[var(--outline-sp)] md:mb-[var(--outline-pc)] xl:px-0 sm:px-12 px-4">
      <div className="flex justify-between mb-[var(--inline-sp)] md:mb-[var(--inline-pc)]">
        <div className="uppercase flex-1">
          <h2 className="bg-gradient-primary bg-clip-text text-transparent text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold">
            Why
          </h2>
          <h2 className="w-full text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold">
            should online entrepreneurs use
          </h2>
          <h2 className="bg-gradient-primary bg-clip-text text-transparent text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold">
            LikeFlow
          </h2>
        </div>
        <div className="flex-1 hidden md:flex flex-col justify-start items-end gap-4">
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
      <div className="md:flex gap-12 min-h-[450px]">
        <div className="flex justify-center mb-[var(--inline-sp)] md:mb-0">
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

        <div>
          <div
            className={`space-y-0 transition-all duration-300 transform ${
              isChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {currentSlideData.accordionData.map((item) => (
              <ListDownUp key={item.id} items={[item]} />
            ))}
          </div>

          <div className="flex items-center justify-between">
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
