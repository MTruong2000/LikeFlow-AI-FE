"use client";
import { Play } from "lucide-react";
import ImageNext from "next/image";
import ButtonAnimationPrimary from "@/components/component-childs/button-animation-primary";

export default function ToolOverview() {
  const tools = [
    {
      id: 1,
      title: "Video Ad Script",
      description:
        "Engaging ad scripts with storytelling, pacing, and strong CTAs.",
      icon: "/images/img-video.webp",
      bgImage: "/images/img-bg-tool.webp",
    },
    {
      id: 2,
      title: "AIDA Copy Formula",
      description: "Persuasive copy that attracts, interests, and converts.",
      icon: "/images/img-AIDA-Copy-Formula.webp",
      bgImage: "/images/img-bg-tool.webp",
    },
    {
      id: 3,
      title: "Video Intro Script",
      description: "Powerful intros with hooks, story, and clear CTAs.",
      icon: "/images/img-Video-Intro-Script.webp",
      bgImage: "/images/img-bg-tool.webp",
    },
    {
      id: 4,
      title: "SEO Title Generator",
      description: "10 SEO-friendly blog titles from your keywords.",
      icon: "/images/img-SEO-Title-Generator.webp",
      bgImage: "/images/img-bg-tool.webp",
    },
    {
      id: 5,
      title: "Marketing Strategy Templates",
      description: "Ready-made strategies aligned with business goals.",
      icon: "/images/img-Marketing-Strategy-Templates.webp",
      bgImage: "/images/img-bg-tool.webp",
    },
    {
      id: 6,
      title: "Ideogram Image Prompt Generator",
      description: "Visual prompts created from your keywords.",
      icon: "/images/img-Ideogram-Prompt-Generator.webp",
      bgImage: "/images/img-bg-tool.webp",
    },
    {
      id: 7,
      title: "Content Calendar",
      description: "Plan and organize content with ease.",
      icon: "/images/img-Content-Calendar.webp",
      bgImage: "/images/img-bg-tool.webp",
    },
    {
      id: 8,
      title: "PAS Ad Writing",
      description: "Problem–Agitate–Solve ads that resonate and convert.",
      icon: "/images/img-PAS-Ad-Writing.webp",
      bgImage: "/images/img-bg-tool.webp",
    },
  ];

  return (
    <>
      <div className="xl:w-[1200px] m-auto mb-[var(--outline-sp)] md:mb-[var(--outline-pc)] xl:px-0 sm:px-12 px-4">
        <div className="w-full xl:w-[1200px] xl:px-0 sm:px-12 px-4 m-auto flex justify-between mb-[var(--inline-sp)] md:mb-[var(--inline-pc)]">
          <div className="flex-1">
            <h2 className="text-center md:text-left text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold bg-gradient-primary bg-clip-text text-transparent uppercase">
              50+ Supported Customer App x10 Performance
            </h2>
          </div>
          <div className="flex-1 hidden md:flex flex-col justify-start items-end gap-4">
            <h3 className="text-[length:var(--text-title-sp)] md:text-[length:var(--text-title-pc)] bg-gradient-primary bg-clip-text text-transparent">
              What&apos;s Your Next Idea?
            </h3>
            <div className="flex gap">
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

        <div className="space-y-6">
          {/* Hàng 1 */}
          <div className="lg:grid lg:grid-cols-4 lg:gap-12 flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {tools.slice(0, 4).map((tool) => (
              <div
                key={tool.id}
                className="relative min-w-[250px] max-w-[280px] snap-center flex-shrink-0"
              >
                <ImageNext
                  src={tool.bgImage}
                  alt={tool.title}
                  priority
                  width={400}
                  height={400}
                  className="w-full rounded-xl"
                />
                <div className="w-full h-full absolute top-0 left-0 p-4 flex items-center justify-center">
                  <div className="bg-white w-full h-full rounded-xl shadow-lg p-2 flex flex-col justify-between">
                    <div className="w-full flex justify-center mt-4">
                      <ImageNext
                        src={tool.icon}
                        alt="icon"
                        priority
                        width={56}
                        height={56}
                        className="w-14 h-14"
                      />
                    </div>
                    <div className="text-center mb-2">
                      <h3 className="text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)] font-bold">
                        {tool.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hàng 2 */}
          <div className="lg:grid lg:grid-cols-4 lg:gap-12 flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {tools.slice(4, 8).map((tool) => (
              <div
                key={tool.id}
                className="relative min-w-[250px] max-w-[280px] snap-center flex-shrink-0"
              >
                <ImageNext
                  src={tool.bgImage}
                  alt={tool.title}
                  priority
                  width={400}
                  height={400}
                  className="w-full rounded-xl"
                />
                <div className="w-full h-full absolute top-0 left-0 p-4 flex items-center justify-center">
                  <div className="bg-white w-full h-full rounded-xl shadow-lg p-2 flex flex-col justify-between">
                    <div className="w-full flex justify-center mt-4">
                      <ImageNext
                        src={tool.icon}
                        alt="icon"
                        priority
                        width={56}
                        height={56}
                        className="w-14 h-14"
                      />
                    </div>
                    <div className="text-center mb-2">
                      <h3 className="text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)] font-bold">
                        {tool.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
