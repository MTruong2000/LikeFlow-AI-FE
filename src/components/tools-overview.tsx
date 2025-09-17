"use client";
import { Play } from "lucide-react";
import ImageNext from "next/image";
import ButtonAnimation from "@/components/component-childs/button-animation";

export default function ToolOverview() {
  const tools = [
    {
      id: 1,
      title: "Video Ad Script",
      description:
        "Write engaging video ads — with storytelling, shot planning, CTAs, and pacing",
      icon: "/images/img-video.png",
      bgImage: "/images/img-bg-tool.png",
      borderGradient: "from-purple-300 to-purple-500",
    },
    {
      id: 2,
      title: "AIDA Copy Formula",
      description:
        "Create persuasive copy that attracts, interests, and converts",
      icon: "/images/img-AIDA-Copy-Formula.png",
      bgImage: "/images/img-bg-tool.png",
      borderGradient: "from-orange-300 to-orange-500",
    },
    {
      id: 3,
      title: "Video Intro Script",
      description:
        "Craft compelling intros with strong hooks, storytelling, and CTA",
      icon: "/images/img-Video-Intro-Script.png",
      bgImage: "/images/img-bg-tool.png",
      borderGradient: "from-blue-300 to-blue-500",
    },
    {
      id: 4,
      title: "SEO Title Generator",
      description:
        "Generate top 10 SEO-friendly blog titles based on your keywords",
      icon: "/images/img-SEO-Title-Generator.png",
      bgImage: "/images/img-bg-tool.png",
      borderGradient: "from-pink-300 to-pink-500",
    },
    {
      id: 5,
      title: "Marketing Strategy Templates",
      description:
        "Build effective marketing strategies based on business goals",
      icon: "/images/img-Marketing-Strategy-Templates.png",
      bgImage: "/images/img-bg-tool.png",
      borderGradient: "from-blue-200 to-blue-400",
    },
    {
      id: 6,
      title: "Ideogram Image Prompt Generator",
      description: "Get visual prompts using keywords for ideogram-based tools",
      icon: "/images/img-Ideogram-Prompt-Generator.png",
      bgImage: "/images/img-bg-tool.png",
      borderGradient: "from-indigo-300 to-purple-500",
    },
    {
      id: 7,
      title: "Content Calendar",
      description:
        "Plan, organize, and manage your marketing content effectively",
      icon: "/images/img-Content-Calendar.png",
      bgImage: "/images/img-bg-tool.png",
      borderGradient: "from-orange-200 to-orange-400",
    },
    {
      id: 8,
      title: "PAS Ad Writing",
      description:
        "Create ads with the PAS model: Problem, Agitate, Solve using keyword-based prompts",
      icon: "/images/img-PAS-Ad-Writing.png",
      bgImage: "/images/img-bg-tool.png",
      borderGradient: "from-purple-300 to-pink-500",
    },
  ];

  return (
    <>
      <div className="xl:w-[1200px] m-auto mb-12 xl:px-0 sm:px-12 px-4">
        <div className="w-full xl:w-[1200px] xl:px-0 sm:px-12 px-4 m-auto flex justify-between">
          <div className="flex-1">
            <h2 className="text-center md:text-left text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold bg-gradient-primary bg-clip-text text-transparent">
              50+ SUPPORTED CUSTOMER APP X10 PERFORMANCE
            </h2>
          </div>
          <div className="flex-1 hidden md:flex flex-col justify-center items-end gap-4">
            <h3 className="text-[length:var(--text-title-sp)] md:text-[length:var(--text-title-pc)] bg-gradient-primary bg-clip-text text-transparent">
              What&apos;s Your Next Idea?
            </h3>
            <div className="flex gap">
              <ButtonAnimation />
              <Play className="bg-gradient-primary rounded-[50%] text-white h-12 w-12 p-3 ml-8" />
            </div>
          </div>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-4 lg:gap-12 flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="relative min-w-[250px] max-w-[280px] snap-center flex-shrink-0"
            >
              {/* Background image */}
              <ImageNext
                src={tool.bgImage}
                alt={tool.title}
                width={300}
                height={300}
                className="w-full rounded-xl shadow-2xl"
              />

              {/* Content on top of background */}
              <div className="w-full h-full absolute top-0 left-0 p-6 flex items-center justify-center">
                <div className="bg-white w-full h-full rounded-xl shadow-lg p-6 flex flex-col justify-between">
                  <div className="w-full flex justify-center mb-4">
                    <ImageNext
                      src={tool.icon}
                      alt="icon"
                      width={56}
                      height={56}
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="text-center">
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
    </>
  );
}
