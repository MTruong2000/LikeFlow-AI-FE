"use client";
import { useState } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import ButtonAnimation from "@/app/components/component-childs/button-animation";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface SlideData {
  videoUrl: string;
  accordionData: AccordionItem[];
  defaultExpanded: string;
}

export default function WhyChoose() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["scattered-tools"])
  );

  const slidesData: SlideData[] = [
    {
      videoUrl:
        "https://s.ladicdn.com/66e18ea9521baa00137153a3/pinterestdownloadercom-1753414473038108-20250725070700-xn7e8.mp4",
      defaultExpanded: "scattered-tools",
      accordionData: [
        {
          id: "scattered-tools",
          title: "Too many scattered tools",
          content:
            "All-in-one platform: write with Chat Pro, edit with AI Photo, create voice with AI Voice... One login, one credit system.",
        },
        {
          id: "creativity-blocks",
          title: "Creativity blocks, lack of ideas",
          content:
            "Chat Pro integrates multiple AI brains (Claude, ChatGPT, Gemini...) — switch between AIs for diverse perspectives. No more being stuck with one style.",
        },
        {
          id: "disorganized-data",
          title: "Disorganized data, hard to find info",
          content:
            "Train AI Agents with your documents — ask questions, analyze, extract info like having a personal assistant.",
        },
        {
          id: "repetitive-tasks",
          title: "Wasting time on repetitive tasks",
          content:
            "Use AI Workflow to automate tasks: input → process → output → email. Similar to Make.com, but easier to integrate with AI.",
        },
        {
          id: "generic-ai",
          title: "Generic AI can't handle specific expertise",
          content:
            "Create domain-specific AI Agents — upload your industry docs, fine-tune context, and make AI deeply understand your field.",
        },
      ],
    },
    {
      videoUrl:
        "https://s.ladicdn.com/66e18ea9521baa00137153a3/st3-20250725075349-ro_9v.mp4",
      defaultExpanded: "dont-know-start",
      accordionData: [
        {
          id: "dont-know-start",
          title: "Don't know where to start",
          content:
            "Simple UI with step-by-step guides, use-case prompts, and examples. No experience needed — start right away.",
        },
        {
          id: "too-many-tools",
          title: "Too many AI tools, unsure what fits",
          content:
            "Bothive bundles popular AI tools into one: writing, image, voice, research... One platform is enough.",
        },
        {
          id: "afraid-complex",
          title: "Afraid of complex tech",
          content:
            "Pre-made templates by use case (FB post, CV, image, news reader...). Just fill in the blanks — AI does the rest.",
        },
        {
          id: "no-time-learn",
          title: "No time to learn each tool",
          content:
            "Unified interface across all tools (chat, image, voice, workflow). Learn once — use all.",
        },
        {
          id: "worried-costs",
          title: "Worried about costs",
          content:
            "One credit system for all tools. Easy to track spending, no surprise bills. Affordable and transparent.",
        },
      ],
    },
    {
      videoUrl:
        "https://s.ladicdn.com/66e18ea9521baa00137153a3/pinterestdownloadercom-1753329224843363-20250724035509-dyu29.mp4",
      defaultExpanded: "high-marketing-costs",
      accordionData: [
        {
          id: "high-marketing-costs",
          title: "High marketing costs, low effectiveness",
          content:
            "Bothive integrates top AI models (ChatGPT, Gemini, Claude...) in Chat Pro to help you generate content, plan campaigns, and analyze performance — reducing outsourcing costs and accelerating decision-making.",
        },
        {
          id: "lack-creative-staff",
          title: "Lack of creative staff & over-reliance on humans",
          content:
            "Tools like AI Photo, AI Voice, and Chat AI automate writing, image creation, and audio generation — cutting 70-90% of creative workload while maintaining quality.",
        },
        {
          id: "fragmented-customer-data",
          title: "Fragmented customer data, hard to track & care for",
          content:
            "AI Agents remember customer data, analyze behavior, and suggest personalized care programs — all data managed centrally and seamlessly.",
        },
        {
          id: "no-process-automation",
          title: "No process automation system",
          content:
            "AI Workflow lets you build automated workflows (like Make.com): send emails, post-sale care, generate reports, etc. Scale up without increasing manpower.",
        },
        {
          id: "slow-onboarding",
          title: "Slow onboarding, inconsistent processes",
          content:
            "Create internal AI Assistants to store SOPs, onboarding docs, and training flows — train new hires faster and ensure consistency.",
        },
      ],
    },
  ];

  const currentSlideData = slidesData[currentSlide];

  const toggleAccordion = (itemId: string) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(itemId)) {
      newExpandedItems.delete(itemId);
    } else {
      newExpandedItems.add(itemId);
    }
    setExpandedItems(newExpandedItems);
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % slidesData.length;
    setCurrentSlide(newSlide);
    // Reset expanded items to default for new slide
    setExpandedItems(new Set([slidesData[newSlide].defaultExpanded]));
  };

  const prevSlide = () => {
    const newSlide =
      currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    // Reset expanded items to default for new slide
    setExpandedItems(new Set([slidesData[newSlide].defaultExpanded]));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    setExpandedItems(new Set([slidesData[slideIndex].defaultExpanded]));
  };

  return (
    <>
      <div className="xl:w-[1200px] m-auto mb-12 xl:px-0 sm:px-12 px-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[var(--color-primary)] text-xl sm:text-2xl font-bold">
              Why
            </h3>
            <h2 className="text-2xl sm:text-4xl font-bold">
              should online entrepreneurs use
            </h2>
            <h2 className="text-[var(--color-primary)] text-2xl sm:text-4xl font-bold">
              bothive.ai
            </h2>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl">What&apos;s Your Next Idea?</h3>
            <ButtonAnimation />
          </div>
        </div>

        <div className="md:flex mt-12 gap-12 ">
          {/* Left side - Video */}
          <div className="flex justify-center mb-12 md:mb-0">
            <div className="w-[384px]">
              <video
                key={currentSlide} // Force video reload when slide changes
                className="w-full rounded-xl shadow-2xl"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={currentSlideData.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right side - Accordion */}
          <div className="flex-1">
            <div className="space-y-0">
              {currentSlideData.accordionData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-lg overflow-hidden rounded-xl mb-4"
                >
                  {/* Header Button */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none transition-all duration-200 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </span>
                    {expandedItems.has(item.id) ? <p>-</p> : <p>+</p>}
                  </button>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedItems.has(item.id)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2 bg-gray-50 border-b border-gray-100 last:border-b-0">
                      <p className="text-gray-700 leading-relaxed">
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
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Next →
              </button>

              <div className="flex gap-3">
                <button
                  aria-label="Prev"
                  onClick={prevSlide}
                  className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-full font-medium transition-colors shadow border border-gray-200 flex items-center gap-1"
                >
                  <ChevronsLeft />
                </button>
                <button
                  aria-label="Next"
                  onClick={nextSlide}
                  className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-full font-medium transition-colors shadow border border-gray-200 flex items-center gap-1"
                >
                  <ChevronsRight />
                </button>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {slidesData.map((_, index) => (
                <button
                  aria-label="Go to slide"
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? "bg-purple-600 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
