"use client";
import Image from "next/image";
import { useState } from "react";

export default function MultiTab() {
  const [activeTab, setActiveTab] = useState<string>("chat-pro");

  const tabs = [
    {
      id: "chat-pro",
      name: "Chat Pro",
      title: "Chat Pro – One Platform, Every Leading AI at Your ",
      description:
        "FingertipsWith Chat Pro, you can connect with the world’s most advanced AI models — including ChatGPT, Gemini, Claude, Grok, and more — all brought together in a single powerful hub.",
      features: [
        "Gain diverse perspectives tailored to your needs",
        "Enjoy seamless access to multiple AIs without juggling separate subscriptions",
        "Experience a sleek interface designed for speed, simplicity, and efficiency",
      ],
      image: "/images/chat-pro.png",
    },
    {
      id: "ai-agents",
      name: "AI Agents",
      title: "AI Agents – Personalized AI Assistants for Task",
      description:
        "AutomationUsers can securely upload private data, design custom prompts, and activate memory for deeper, more tailored interactions over time. These assistants don’t just respond — they evolve, learning from every exchange to support your work with greater precision.",
      features: [
        "Create AI assistants crafted for your unique needs",
        "Continuously improve through past conversations for sharper accuracy",
        "Streamline repetitive tasks with intelligent, automated workflows",
      ],
      image: "/images/ai-agents.png",
    },
    {
      id: "ai-search",
      name: "AI Search",
      title: "AI Search – Real-Time Information Discovery with AI",
      description:
        "Search keeps you connected to the world’s latest updates in real time. Simply ask a question, and it instantly pulls the most recent, accurate, and reliable information from across the web.",
      features: [
        "Real-time access to the newest insights",
        "Powered by AI with advanced browsing capabilities",
        "Stay ahead of trends and breaking news",
        "Save time with precise, relevant results—without the clutter",
      ],
      image: "/images/ai-search.png",
    },
    {
      id: "ai-photos",
      name: "AI Photos",
      title: "All-in-One AI Workspace – Creative Media & Smart",
      description:
        "EditingPowered by leading-edge models such as ChatGPT Image, Ideogram, Gemini, Veo, Kling AI, and more, AI Creative brings seamless image and video generation to your fingertips. Effortlessly transform ideas into visuals, whether it’s outfit swaps, color adjustments, background changes, cinematic storytelling, or precise object removal.",
      features: [
        "Multi-AI Image & Video Creation. Bring your imagination to life with simple prompts.",
        "Advanced AI Editing & Retouching Tools. Streamline your workflow and eliminate the need for complicated design or editing software.",
      ],
      image: "/images/ai-photos.png",
    },
    {
      id: "ai-voice",
      name: "AI Voice",
      title: "AI Voice – Natural Voice Generation & Audio Creation",
      description:
        "AI Voice turns text into lifelike, expressive speech with remarkable diversity. From voice cloning and podcast production to AI-generated music, it makes audio creation effortless.",
      features: [
        "Streamline your content workflow",
        "Deliver immersive user experiences with authentic sound",
        "Reduce production expenses with advanced AI voice tools",
        "Customize every project with a wide range of voice styles",
      ],
      image: "/images/ai-voice.png",
    },
    {
      id: "ai-automation",
      name: "AI Automation",
      title: "AI Automation – Simplify Your Work with Intelligent Workflows",
      description:
        "Harness the power of AI to streamline every task — from content creation, email outreach, and reporting to customer support. Blend advanced language intelligence with flexible workflow logic.",
      features: [
        "No coding required - build with simple drag-and-drop tools.",
        "Effortlessly connects with Chat Pro, AI Agents, Voice, Photo, and more.",
        "Fully customizable to fit any business process.",
        "An all-in-one solution designed to cut development costs and boost efficiency.",
      ],
      image: "/images/ai-automation.png",
    },
    {
      id: "ai-chatbot",
      name: "AI Chatbot",
      title: "AI Chatbot empowers you to save time and maximize productivity",
      description:
        "Effortlessly integrate it into your website and customize it with your own data. AI CHATBOT – Train & Deploy with Your Expertise.",
      features: [
        "Seamlessly embed on your website or landing page",
        "Unlock powerful plugins like DALL·E, Wikipedia, Google, Serper...",
        "Easily upload and manage your professional documents",
        "Train the AI with your unique knowledge base for smarter results",
      ],
      image: "/images/ai-chatbot.png",
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <div className="xl:w-[1200] m-auto text-center xl:px-0 sm:px-12 px-4 mb-[54px]">
        <h1 className="text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold uppercase mb-[54px]">
          All-in-One AI Workspace for Business Operations
        </h1>

        <div className="">
          {/* Main Content Area */}
          <div className="mb-[54px]">
            <div className="rounded-2xl p-5 border border-[var(--color-border)]">
              {currentTab && (
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h1 className="text-[length:var(--text-title-sp)] md:text-[length:var(--text-title-pc)] font-bold text-start bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight">
                      {currentTab.title}
                    </h1>

                    <p className="text-gray-700 text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)] mb-8 leading-relaxed text-start">
                      {currentTab.description}
                    </p>

                    <div className="space-y-4">
                      {currentTab.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                          <span className="text-gray-700 text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)] text-start">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full flex-1">
                    <div className="w-fit ">
                      <Image
                        src={currentTab.image}
                        alt={currentTab.title}
                        width={552}
                        height={463}
                        className="w-[552px] h-[463px] rounded-[33px] object-cover"
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
          <div className="rounded-xl py-5 overflow-x-auto scrollbar-hide">
            <div className="flex  flex-nowrap justify-start lg:justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? "bg-gradient-primary text-white shadow-lg"
                      : "text-gray-600 hover:text-[var(--color-primary)] hover:bg-purple-50 "
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
