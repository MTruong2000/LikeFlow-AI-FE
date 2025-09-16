"use client";
import { useState } from "react";
import ButtonAnimation from "@/components/component-childs/button-animation";

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
      title: "50+ Specialized AI Agents Ready to Go",
      description:
        "Experience powerful, task-specific AI Agents pre-trained and ready to use — complete with essential plugins like Amazon KDP assistant, English tutor, competitor ad analyzer, and more. Or create your own custom Agents to fit your exact needs.",
    },
    {
      id: "external-data",
      title: "Train with External Data Sources",
      description:
        "Train your AI Agents using vector embeddings. Seamlessly connect data from Google Drive or upload common file types like PDF, DOCX, and more.",
    },
    {
      id: "real-time-api",
      title: "Real-Time Data Access via API",
      description:
        "Allow AI Agents to access your live business data using dynamic context APIs — enabling real-time responses and smarter decisions.",
    },
    {
      id: "plugin-integration",
      title: "Plugin Integration for System Connectivity",
      description:
        "Extend your Agents with intelligent plugins — from syncing with Google Calendar to interacting with your internal business systems.",
    },
    {
      id: "assign-model",
      title: "Assign Any AI Model to Each Agent",
      description:
        "Match each Agent with a specific AI model, complete with custom instructions and prompts — ensuring highly specialized task handling.",
    },
    {
      id: "prompt-chaining",
      title: "Prompt Chaining for Multi-Step Automation",
      description:
        "Connect multiple AI Agents in a dynamic workflow using multi-step prompt chains. Each Agent can run on a different model, with unique parameters, dynamic context, system prompts, and plugins — perfect for automating complex or repetitive tasks.",
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
            <h2 className="text-4xl font-bold">
              Build Smart AI Agents – Tailored for Your Workflow
            </h2>
          </div>
          <div className="flex-1 text-right">
            <h3 className="text-2xl">What&apos;s Your Next Idea?</h3>
            <ButtonAnimation />
          </div>
        </div>

        <div className="w-full xl:w-[1200px] xl:px-0 sm:px-12 px-4 m-auto">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Image */}
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <img
                    src="https://w.ladicdn.com/s600x600/66e18ea9521baa00137153a3/97e8ddb09a792b66c7853a9fa8c92806-20250728062457-wb7fs.jpg"
                    alt="AI Technology"
                    className="w-full max-w-sm rounded-xl shadow-2xl border border-blue-500/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
                </div>

                <div className="text-center space-y-4">
                  <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Automate
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">
                    manual tasks
                  </h2>
                </div>
              </div>

              {/* Center - Expandable List */}
              <div className="space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/15"
                  >
                    <button
                      onClick={() => toggleExpand(feature.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {feature.title}
                      </h3>
                      {expandedItems.has(feature.id) ? (
                        <span className="text-blue-400 text-2xl font-bold">
                          −
                        </span>
                      ) : (
                        <span className="text-blue-400 text-2xl font-bold">
                          +
                        </span>
                      )}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedItems.has(feature.id)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-4"></div>
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Image */}
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <img
                    src="https://w.ladicdn.com/s650x850/66e18ea9521baa00137153a3/b33f4ced03729ba3296f722ffa8b1e28-20250725080033-ugoga.jpg"
                    alt="AI Future Technology"
                    className="w-full max-w-sm rounded-xl shadow-2xl border border-purple-500/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-xl"></div>
                </div>

                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
