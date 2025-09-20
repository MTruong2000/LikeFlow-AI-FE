"use client";
import { Play } from "lucide-react";
import ImageNext from "next/image";
import ButtonAnimationPrimary from "@/components/component-childs/button-animation-primary";
import ListDownUp from "@/components/component-childs/list-down-up";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

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

export default function SmartAgent() {
  return (
    <>
      <div className="w-full mb-[var(--outline-sp)] md:mb-[var(--outline-pc)] bg-primary text-white">
        <div className="w-full xl:w-[1200px] xl:px-0 sm:px-12 px-4 m-auto flex justify-between mb-[var(--inline-sp)] md:mb-[var(--inline-pc)]">
          <div className="flex-1">
            <h2 className="text-left text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold bg-gradient-primary bg-clip-text text-transparent">
              Smart AI Agents – Built to Match Your Unique Workflow
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

        <div className="w-full xl:w-[1200px] xl:px-0 sm:px-12 px-4 m-auto">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Image */}
              <div className="hidden md:flex flex-col items-center bg-gradient-primary rounded-[25px]">
                <div className="p-[25px]">
                  <ImageNext
                    src="/images/smart-ai-agent.webp"
                    alt="AI Technology"
                    priority
                    width={300}
                    height={300}
                  />
                </div>

                <h2 className="text-center text-[length:var(--text-title-sp)] md:text-[length:var(--text-title-pc)] font-semibold text-white pb-[25px]">
                  Automate <br /> manual tasks
                </h2>
              </div>

              {/* Center - Expandable List */}
              <ListDownUp items={features} />

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
