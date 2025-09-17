"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import ImageNext from "next/image";
import ButtonAnimationPrimary from "@/components/component-childs/button-animation-primary";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export default function SmartAgent() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const features: FeatureItem[] = [
    {
      id: "specialized-agents",
      title: "50+ Ready-to-Use Specialized AI Agents",
      description:
        "Supercharge your AI Agents with vector embeddings. Effortlessly pull data from Google Drive or upload widely used file types such as PDF, DOCX, and more for smarter, context-aware performance.",
    },
    {
      id: "external-data",
      title: "Train with External Data Sources",
      description:
        "Integrate external data sources to give your AI Agents deeper context. Upload files or link cloud storage for seamless training.",
    },
    {
      id: "real-time-api",
      title: "Real-Time Access Through Dynamic APIs",
      description:
        "Give your Agents instant access to live business data via dynamic APIs — enabling real-time analysis, faster answers, and smarter decision-making.",
    },
    {
      id: "plugin-integration",
      title: "Seamless Plugin Integration for Connectivity",
      description:
        "Expand your Agents capabilities with intelligent plugins — from syncing schedules on Google Calendar to integrating directly with your internal systems.",
    },
    {
      id: "assign-model",
      title: "Assign Any AI Model to Any Agent",
      description:
        "Choose the most suitable AI model for each Agent and fine-tune it with custom prompts and instructions — ensuring specialized accuracy for every task.",
    },
    {
      id: "prompt-chaining",
      title: "Multi-Step Automation with Prompt Chaining",
      description:
        "Orchestrate complex workflows by linking multiple Agents with prompt chaining. Each Agent can operate with its own model, parameters, dynamic context, and system prompts — automating even the most complicated processes.",
    },
  ];

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <>
      <div className="w-full mb-12 bg-primary text-white pt-8">
        <div className="w-full xl:w-[1200px] xl:px-0 sm:px-12 px-4 m-auto flex justify-between">
          <div className="flex-1">
            <h2 className="text-left text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold bg-gradient-primary bg-clip-text text-transparent">
              Smart AI Agents – Built to Match Your Unique Workflow
            </h2>
          </div>
          <div className="flex-1 hidden md:flex flex-col justify-center items-end gap-4">
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

        <div className="w-full xl:w-[1200px] xl:px-0 sm:px-12 px-4 m-auto">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Image */}
              <div className="hidden md:flex flex-col items-center bg-gradient-primary rounded-[25px]">
                <div className="p-[25px]">
                  <ImageNext
                    src="/images/smart-ai-agent.png"
                    alt="AI Technology"
                    width={300}
                    height={300}
                  />
                </div>

                <h2 className="text-center text-[length:var(--text-title-sp)] md:text-[length:var(--text-title-pc)] font-bold text-white pb-[25px]">
                  Automate <br /> manual tasks
                </h2>
              </div>

              {/* Center - Expandable List */}
              <div className="space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-white shadow-lg overflow-hidden rounded-xl mb-4"
                  >
                    {/* Header Button */}
                    <button
                      onClick={() => toggleExpand(feature.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none transition-all duration-200 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)] font-semibold text-gray-800">
                        {feature.title}
                      </span>
                      {expandedItems.has(feature.id) ? (
                        <p className="text-black">-</p>
                      ) : (
                        <p className="text-black">+</p>
                      )}
                    </button>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedItems.has(feature.id)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 pt-2 bg-gray-50 border-b border-gray-100 last:border-b-0">
                        <p className="text-gray-700 leading-relaxed text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  // <div
                  //   key={feature.id}
                  //   className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/15"
                  // >
                  //   <button
                  //     onClick={() => toggleExpand(feature.id)}
                  //     className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                  //   >
                  //     <h3 className="text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)] font-semibold pr-4 text-black">
                  //       {feature.title}
                  //     </h3>
                  //     {expandedItems.has(feature.id) ? (
                  //       <span className="text-blue-400 text-2xl font-bold">
                  //         −
                  //       </span>
                  //     ) : (
                  //       <span className="text-blue-400 text-2xl font-bold">
                  //         +
                  //       </span>
                  //     )}
                  //   </button>

                  //   <div
                  //     className={`overflow-hidden transition-all duration-300 ${
                  //       expandedItems.has(feature.id)
                  //         ? "max-h-96 opacity-100"
                  //         : "max-h-0 opacity-0"
                  //     }`}
                  //   >
                  //     <div className="px-6 pb-4">
                  //       <div className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-4"></div>
                  //       <p className="text-gray-800 leading-relaxed text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)]">
                  //         {feature.description}
                  //       </p>
                  //     </div>
                  //   </div>
                  // </div>
                ))}
              </div>

              {/* Right Image */}
              <div className="flex flex-col-reverse items-center space-y-6">
                <div className="relative">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-xl object-cover"
                    width={379}
                    height={560}
                  >
                    <source src="/videos/life-flow.mp4" type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
