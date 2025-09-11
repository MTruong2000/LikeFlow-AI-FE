"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonShowForm from "@/app/components/component-childs/button-show-form";

type PlanType = "1month" | "3months" | "6months" | "yearly";

interface PlanData {
  duration: string;
  free: {
    price: string;
    period: string;
  };
  starter: {
    price: string;
    originalPrice?: string;
    period: string;
    discount?: string;
  };
  grow: {
    price: string;
    originalPrice?: string;
    period: string;
    discount?: string;
  };
}

const planData: Record<PlanType, PlanData> = {
  "1month": {
    duration: "1 Month Plan",
    free: {
      price: "0",
      period: "/Month",
    },
    starter: {
      price: "340.000",
      period: "/Month",
    },
    grow: {
      price: "680.000",
      period: "/Month",
    },
  },
  "3months": {
    duration: "3 Month Plan",
    free: {
      price: "0",
      period: "/3 Months",
    },
    starter: {
      price: "898.000",
      originalPrice: "1.020.000",
      period: "/3 Months",
      discount: "Save 5%",
    },
    grow: {
      price: "1.998.000",
      originalPrice: "2.040.000",
      period: "/3 Months",
      discount: "Save 5%",
    },
  },
  "6months": {
    duration: "6 Month Plan",
    free: {
      price: "0",
      period: "/6 Months",
    },
    starter: {
      price: "1.870.000",
      originalPrice: "2.040.000",
      period: "/6 Months",
      discount: "Save 10%",
    },
    grow: {
      price: "3.740.000",
      originalPrice: "4.080.000",
      period: "/6 Months",
      discount: "Save 10%",
    },
  },
  yearly: {
    duration: "Yearly Plan",
    free: {
      price: "0",
      period: "/Year",
    },
    starter: {
      price: "3.400.000",
      originalPrice: "4.080.000",
      period: "/Year",
      discount: "Save 20%",
    },
    grow: {
      price: "6.800.000",
      originalPrice: "8.160.000",
      period: "/Year",
      discount: "Save 20%",
    },
  },
};

const aiModels = [
  {
    name: "Grok",
    image:
      "https://w.ladicdn.com/s350x350/66e18ea9521baa00137153a3/grok-20250724063252-lrzjl.png",
  },
  {
    name: "GPT-4",
    image:
      "https://w.ladicdn.com/66e18ea9521baa00137153a3/gpt-4-20250724042654-ur3gi.webp",
  },
  {
    name: "Claude",
    image:
      "https://w.ladicdn.com/66e18ea9521baa00137153a3/claude-color-20250724062748-mt6m2.svg",
  },
  {
    name: "Gemini",
    image:
      "https://w.ladicdn.com/s350x350/66e18ea9521baa00137153a3/gemini-20250724042654-2evzs.png",
  },
];

function Pricing({ checkLogin }: { checkLogin: boolean }) {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("1month");
  const currentData = planData[selectedPlan];

  const planTabs = [
    { key: "1month" as PlanType, label: "1 Month Plan" },
    { key: "3months" as PlanType, label: "3 Month Plan" },
    { key: "6months" as PlanType, label: "6 Month Plan" },
    { key: "yearly" as PlanType, label: "Yearly Plan" },
  ];

  return (
    <div className="xl:w-[1200] m-auto mb-12 xl:px-0 sm:px-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold pb-4">
          START SMALL, SCALE BIG
        </h2>
        <p className="text-xl">
          Explore premium AI features and flexible packages to grow your
          business
        </p>
      </div>

      <div className="mx-auto p-6 bg-gray-50">
        {/* Plan Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-nowrap bg-white rounded-lg p-1 shadow-sm overflow-x-auto">
            {planTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedPlan(tab.key)}
                className={`w-[150px] px-6 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all ${
                  selectedPlan === tab.key
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl border-2 border-purple-200 p-6 relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Free</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold">
                  {currentData.free.price}
                </span>
                <span className="text-gray-600 ml-2">
                  VND{currentData.free.period}
                </span>
              </div>
            </div>

            <hr className="my-6 border-gray-200" />
            {checkLogin ? (
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full mb-6 transition-colors">
                Buy Now
              </button>
            ) : (
              <ButtonShowForm />
            )}

            <div className="space-y-4">
              <p className="font-semibold text-gray-900">Free plan includes:</p>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Access to the latest AI models
                </span>
              </div>

              <div className="flex space-x-2 ml-6">
                {aiModels.map((model, index) => (
                  <div key={index} className="w-8 h-8 relative">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">80 Credits /month</span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Create up to 5 Bot AI
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Automate complex task processing with AI Workflow
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Advanced features: Deep Research, Web Search, AI Research
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  100+ Expert Bots, Marketing Bots,... written in 100+ AI
                  languages
                </span>
              </div>
            </div>
          </div>

          {/* Starter Plan */}
          <div className="bg-white rounded-2xl border-2 border-purple-300 p-6 relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">
                Starter
              </h3>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold">
                  {currentData.starter.price}
                </span>
                <span className="text-gray-600 ml-2">
                  VND{currentData.starter.period}
                </span>
              </div>
              {currentData.starter.originalPrice && (
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <span className="text-gray-400 line-through text-sm">
                    {currentData.starter.originalPrice} VND
                  </span>
                  {currentData.starter.discount && (
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                      {currentData.starter.discount}
                    </span>
                  )}
                </div>
              )}
            </div>

            <hr className="my-6 border-gray-200" />

            {checkLogin ? (
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full mb-6 transition-colors">
                Buy Now
              </button>
            ) : (
              <ButtonShowForm />
            )}

            <div className="space-y-4">
              <p className="font-semibold text-gray-900">
                Includes everything in Free, plus:
              </p>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Access to the latest AI models
                </span>
              </div>

              <div className="flex space-x-2 ml-6">
                {aiModels.map((model, index) => (
                  <div key={index} className="w-8 h-8 relative">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  2.000 Credits /month
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Create up to 50 Bot AI
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  {selectedPlan === "3months"
                    ? "Generate 3 voice clones"
                    : selectedPlan === "6months"
                    ? "Generate 3 voice clones"
                    : selectedPlan === "yearly"
                    ? "Generate 3 voice clones"
                    : "Generate 1 voice clone"}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Image generation with 10+ new AI models
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Priority support via email
                </span>
              </div>

              {(selectedPlan === "yearly" ||
                selectedPlan === "6months" ||
                selectedPlan === "3months") && (
                <div className="mt-6">
                  <p className="font-semibold text-gray-900 mb-3">
                    Exclusive privileges for AI membership:
                  </p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <span>✦</span>
                      <span>Join the AI Membership</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <span>✦</span>
                      <span>30 ready-to-use AI Agents</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <span>✦</span>
                      <span>Full support & tutorials with BotHive</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <span>✦</span>
                      <span>Automated video creation system</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <span>✦</span>
                      <span>Connect with the Freedom Builders network</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Grow Plan */}
          <div className="bg-white rounded-2xl border-2 border-pink-300 p-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <span>Most Popular</span>
              </span>
            </div>

            <div className="text-center mb-6 mt-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Grow
              </h3>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold">
                  {currentData.grow.price}
                </span>
                <span className="text-gray-600 ml-2">
                  VND{currentData.grow.period}
                </span>
              </div>
              {currentData.grow.originalPrice && (
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <span className="text-gray-400 line-through text-sm">
                    {currentData.grow.originalPrice} VND
                  </span>
                  {currentData.grow.discount && (
                    <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium">
                      {currentData.grow.discount}
                    </span>
                  )}
                </div>
              )}
            </div>

            <hr className="my-6 border-gray-200" />

            {checkLogin ? (
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full mb-6 transition-colors">
                Buy Now
              </button>
            ) : (
              <ButtonShowForm />
            )}

            <div className="space-y-4">
              <p className="font-semibold text-gray-900">
                Includes everything in Starter, plus:
              </p>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Access to the latest AI models
                </span>
              </div>

              <div className="flex space-x-2 ml-6">
                {aiModels.map((model, index) => (
                  <div key={index} className="w-8 h-8 relative">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  4.200 Credits /month
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Create up to 150 Bot AI
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Generate 8 voice clone
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Image generation with 10+ new AI models
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Priority support via email
                </span>
              </div>

              <div className="mt-6">
                <p className="font-semibold text-gray-900 mb-3">
                  Exclusive privileges for AI membership:
                </p>
                <div className="space-y-2 ml-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <span>✦</span>
                    <span>Join the AI Membership</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <span>✦</span>
                    <span>30 ready-to-use AI Agents</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <span>✦</span>
                    <span>Full support & tutorials with BotHive</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <span>✦</span>
                    <span>Automated video creation system</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <span>✦</span>
                    <span>Connect with the Freedom Builders network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
