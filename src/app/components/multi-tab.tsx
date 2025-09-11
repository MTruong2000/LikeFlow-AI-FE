"use client";
import Image from "next/image";
import { useState } from "react";

export default function MultiTab() {
  const [activeTab, setActiveTab] = useState<string>("chat-pro");

  const tabs = [
    {
      id: "chat-pro",
      name: "Chat Pro",
      title: "CHAT PRO - ALL LEADING AIS IN ONE UNIFIED PLATFORM",
      description:
        "Chat Pro lets you talk to the world's top AI models — including ChatGPT, Gemini, Claude, Grok, and more — all seamlessly integrated into one powerful platform.",
      features: [
        "Access multiple powerful AIs in one place",
        "Diverse perspectives to match every need",
        "Save costs — no need to subscribe to multiple tools",
        "Easy-to-use interface with lightning-fast responses",
      ],
      image:
        "https://w.ladicdn.com/s1050x700/66e18ea9521baa00137153a3/20250726-150934-20250726080959-ehbbj.png",
    },
    {
      id: "ai-agents",
      name: "AI Agents",
      title: "AI AGENTS - CUSTOM AI ASSISTANTS FOR TASK-BASED AUTOMATION",
      description:
        "Users can upload private data, create custom prompts, and enable memory for smarter, more personalized conversations over time. These are AI assistants that truly understand you — learning continuously to support your work more effectively.",
      features: [
        "Build AI assistants tailored to your specific needs",
        "Upload training documents instantly; supports diverse plugins like DALL-E, Wikipedia, Google, Serper, and more",
        "Learns from past conversations for increasingly accurate responses",
        "Automates repetitive tasks with smart workflows",
      ],
      image:
        "https://w.ladicdn.com/s1050x700/66e18ea9521baa00137153a3/20250726-150934-20250726080959-ehbbj.png",
    },
    {
      id: "ai-search",
      name: "AI Search",
      title: "AI SEARCH - REAL-TIME INFORMATION DISCOVERY WITH AI",
      description:
        "AI Search helps you find the latest information from the internet in real time. Just ask a question, and the system will find the most recent data with accurate, up-to-date, and credible answers.",
      features: [
        "Real-time search for the latest information",
        "Stay updated with trends and breaking news",
        "Powered by AI and advanced web browsing",
        "Saves time by skipping the noise and surfacing only relevant insights",
      ],
      image:
        "https://w.ladicdn.com/s1050x700/66e18ea9521baa00137153a3/20250726-150934-20250726080959-ehbbj.png",
    },
    {
      id: "ai-photos",
      name: "AI Photos",
      title: "AI PHOTOS - ADVANCED IMAGE GENERATION",
      description:
        "Create stunning images with AI-powered image generation tools. Transform your ideas into beautiful visuals with cutting-edge AI technology.",
      features: [
        "Generate high-quality images from text descriptions",
        "Multiple art styles and formats available",
        "Advanced editing and enhancement tools",
        "Professional-grade output for commercial use",
      ],
      image:
        "https://w.ladicdn.com/s1050x700/66e18ea9521baa00137153a3/20250726-150934-20250726080959-ehbbj.png",
    },
    {
      id: "ai-voice",
      name: "AI Voice",
      title: "AI VOICE - NATURAL VOICE SYNTHESIS",
      description:
        "Convert text to natural-sounding speech with advanced AI voice technology. Create professional voiceovers and audio content effortlessly.",
      features: [
        "Natural-sounding voice synthesis",
        "Multiple languages and accents",
        "Customizable voice parameters",
        "High-quality audio output",
      ],
      image:
        "https://w.ladicdn.com/s1050x700/66e18ea9521baa00137153a3/20250726-150934-20250726080959-ehbbj.png",
    },
    {
      id: "ai-automation",
      name: "AI Automation",
      title: "AI AUTOMATION - INTELLIGENT WORKFLOW AUTOMATION",
      description:
        "Automate your workflows with intelligent AI-powered automation tools. Streamline repetitive tasks and boost productivity.",
      features: [
        "Smart workflow automation",
        "Integration with popular tools",
        "Customizable automation rules",
        "Real-time monitoring and analytics",
      ],
      image:
        "https://w.ladicdn.com/s1050x700/66e18ea9521baa00137153a3/20250726-150934-20250726080959-ehbbj.png",
    },
    {
      id: "ai-chatbot",
      name: "AI Chatbot",
      title: "AI CHATBOT - INTELLIGENT CONVERSATIONAL AI",
      description:
        "Build and deploy intelligent chatbots for your business needs. Create engaging customer experiences with advanced AI.",
      features: [
        "Advanced natural language processing",
        "Multi-channel deployment",
        "Custom training and fine-tuning",
        "Analytics and performance tracking",
      ],
      image:
        "https://w.ladicdn.com/s1050x700/66e18ea9521baa00137153a3/20250726-150934-20250726080959-ehbbj.png",
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <div className="xl:w-[1200] m-auto text-center xl:px-0 sm:px-12 px-4">
        <h1 className="text-2xl sm:text-4xl font-bold uppercase">
          All-in-One AI Workspace for Business Operations
        </h1>

        <div className="py-8">
          {/* Main Content Area */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
              {currentTab && (
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Left Side - Text Content */}
                  <div className="flex-1 lg:pr-8">
                    <h1 className="text-2xl sm:text-4xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
                      {currentTab.title}
                    </h1>

                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                      {currentTab.description}
                    </p>

                    <div className="space-y-4">
                      {currentTab.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="w-full lg:w-96 flex-shrink-0">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <Image
                        src={currentTab.image}
                        alt={currentTab.title}
                        width={400}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority
                        onError={(e) => {
                          // Fallback nếu image không load được
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.parentElement!.innerHTML = `
                            <div class="w-full h-96 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                              <div class="text-center p-8">
                                <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <span class="text-white text-2xl font-bold">${currentTab.name.charAt(
                                    0
                                  )}</span>
                                </div>
                                <h3 class="text-xl font-bold text-gray-800">${
                                  currentTab.name
                                }</h3>
                                <p class="text-gray-600 mt-2">Preview Interface</p>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Tabs - Bottom */}
          <div className=" bg-white rounded-xl shadow-lg p-2 overflow-x-auto scrollbar-hide">
            <div className="flex  flex-nowrap justify-start lg:justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
