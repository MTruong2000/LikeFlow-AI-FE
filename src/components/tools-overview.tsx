"use client";
import {
  Play,
  Edit3,
  Video,
  Search,
  TrendingUp,
  Image,
  Calendar,
  MousePointer,
} from "lucide-react";
import ImageNext from "next/image";
import ButtonAnimation from "@/components/component-childs/button-animation";

export default function ToolOverview() {
  const tools = [
    {
      id: 1,
      title: "Video Ad Script",
      description:
        "Write engaging video ads — with storytelling, shot planning, CTAs, and pacing",
      icon: Play,
      bgImage:
        "https://w.ladicdn.com/66e18ea9521baa00137153a3/background-1-20250724030953-768d3.webp",
      borderGradient: "from-purple-300 to-purple-500",
    },
    {
      id: 2,
      title: "AIDA Copy Formula",
      description:
        "Create persuasive copy that attracts, interests, and converts",
      icon: Edit3,
      bgImage:
        "https://w.ladicdn.com/66e18ea9521baa00137153a3/background-4-20250724030953-g6uuj.webp",
      borderGradient: "from-orange-300 to-orange-500",
    },
    {
      id: 3,
      title: "Video Intro Script",
      description:
        "Craft compelling intros with strong hooks, storytelling, and CTA",
      icon: Video,
      bgImage:
        "https://w.ladicdn.com/66e18ea9521baa00137153a3/background-11-20250724031123-vi1lu.webp",
      borderGradient: "from-blue-300 to-blue-500",
    },
    {
      id: 4,
      title: "SEO Title Generator",
      description:
        "Generate top 10 SEO-friendly blog titles based on your keywords",
      icon: Search,
      bgImage:
        "https://w.ladicdn.com/66e18ea9521baa00137153a3/background-6-20250724030953-jor0r.webp",
      borderGradient: "from-pink-300 to-pink-500",
    },
    {
      id: 5,
      title: "Marketing Strategy Templates",
      description:
        "Build effective marketing strategies based on business goals",
      icon: TrendingUp,
      bgImage:
        "https://w.ladicdn.com/66e18ea9521baa00137153a3/background-7-20250724031123-3rp2-.webp",
      borderGradient: "from-blue-200 to-blue-400",
    },
    {
      id: 6,
      title: "Ideogram Image Prompt Generator",
      description: "Get visual prompts using keywords for ideogram-based tools",
      icon: Image,
      bgImage:
        "https://w.ladicdn.com/66e18ea9521baa00137153a3/background-34-20250724031123-8mclq.webp",
      borderGradient: "from-indigo-300 to-purple-500",
    },
    {
      id: 7,
      title: "Content Calendar",
      description:
        "Plan, organize, and manage your marketing content effectively",
      icon: Calendar,
      bgImage:
        "https://w.ladicdn.com/66e18ea9521baa00137153a3/background-12-20250724031123-rk_1y.webp",
      borderGradient: "from-orange-200 to-orange-400",
    },
    {
      id: 8,
      title: "PAS Ad Writing",
      description:
        "Create ads with the PAS model: Problem, Agitate, Solve using keyword-based prompts",
      icon: MousePointer,
      bgImage:
        "https://w.ladicdn.com/66e18ea9521baa00137153a3/background-5-20250724030953-zcviv.webp",
      borderGradient: "from-purple-300 to-pink-500",
    },
  ];

  return (
    <>
      <div className="xl:w-[1200px] m-auto mb-12 xl:px-0 sm:px-12 px-4">
        <div className="flex justify-between flex-col md:flex-row text-center md:text-start">
          <div className="flex-1 mb-4 md:m-0">
            <h2 className="text-2xl sm:text-4xl font-bold">
              50+ AI Assistants Boosting Productivity by 10x
            </h2>
          </div>
          <div className="flex-1 text-center md:text-right">
            <ButtonAnimation />
            <h3 className="text-xl sm:text-2xl">
              Flexible, personalized AI tools designed to help your business
              scale smarter and faster.
            </h3>
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

              {/* Overlay */}
              <div className="absolute w-full h-full top-0 left-0 p-4">
                <div className="bg-gradient-primary hover:opacity-100 w-full h-full rounded-xl"></div>
              </div>

              {/* Content */}
              <div className="w-full h-full absolute top-0 left-0 p-8 flex flex-col justify-between">
                <div className="w-full flex justify-center">
                  <tool.icon
                    className="w-16 h-16 text-purple-600"
                    strokeWidth={2}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{tool.title}</h3>
                  <p className="min-h-[64px] flex flex-col justify-end">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
