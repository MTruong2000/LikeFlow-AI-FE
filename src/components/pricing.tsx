"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ButtonShowForm from "@/components/component-childs/button-show-form";

type PlanType = "1month" | "3months" | "6months" | "yearly";
interface ApiPlan {
  id: string;
  plan: string;
  interval: string;
  intervalCount: number;
  discountedAmountUSD: number;
  amountUsd: number;
  discount: number;
  stripePriceId?: string;
}

interface PlanData {
  duration: string;
  free: {
    price: string;
    period: string;
    planId?: string;
  };
  starter: {
    price: string;
    originalPrice?: string;
    period: string;
    discount?: string;
    planId?: string;
  };
  grow: {
    price: string;
    originalPrice?: string;
    period: string;
    discount?: string;
    planId?: string;
  };
}

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

export default function Pricing({ checkLogin }: { checkLogin: boolean }) {
  const tabListRef = useRef<HTMLDivElement>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("1month");
  const [planData, setPlanData] = useState<Record<PlanType, PlanData> | null>(
    null
  );

  const handleSelectTab =
    (key: PlanType) => (e: React.MouseEvent<HTMLButtonElement>) => {
      setSelectedPlan(key);
      // để mượt, và không nhảy lung tung
      e.currentTarget.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("/api/plans"); // ✅ gọi API Next.js
        const result = await res.json();

        if (result.status !== "success") return;

        // const apiPlans: any[] = Array.isArray(result?.data) ? result.data : [];
        const apiPlans: ApiPlan[] = Array.isArray(result?.data)
          ? (result.data as ApiPlan[])
          : [];

        // Map API → planData
        const mapped: Record<PlanType, PlanData> = {
          "1month": {
            duration: "1 Month Plan",
            free: { price: "0", period: "/Month" },
            starter: { price: "-", period: "/Month" },
            grow: { price: "-", period: "/Month" },
          },
          "3months": {
            duration: "3 Month Plan",
            free: { price: "0", period: "/3 Months" },
            starter: { price: "-", period: "/3 Months" },
            grow: { price: "-", period: "/3 Months" },
          },
          "6months": {
            duration: "6 Month Plan",
            free: { price: "0", period: "/6 Months" },
            starter: { price: "-", period: "/6 Months" },
            grow: { price: "-", period: "/6 Months" },
          },
          yearly: {
            duration: "Yearly Plan",
            free: { price: "0", period: "/Year" },
            starter: { price: "-", period: "/Year" },
            grow: { price: "-", period: "/Year" },
          },
        };

        apiPlans.forEach((plan) => {
          let key: PlanType | null = null;
          if (plan.interval === "month" && plan.intervalCount === 1)
            key = "1month";
          if (plan.interval === "month" && plan.intervalCount === 3)
            key = "3months";
          if (plan.interval === "month" && plan.intervalCount === 6)
            key = "6months";
          if (plan.interval === "year" && plan.intervalCount === 1)
            key = "yearly";

          if (!key) return;

          const price = plan.discountedAmountUSD.toFixed(2);
          const original =
            plan.discount > 0 ? plan.amountUsd.toFixed(2) : undefined;
          const discount =
            plan.discount > 0 ? `Save ${plan.discount}%` : undefined;
          const period =
            key === "1month"
              ? "/Month"
              : key === "3months"
              ? "/3 Months"
              : key === "6months"
              ? "/6 Months"
              : "/Year";

          const detail = {
            price,
            originalPrice: original,
            period,
            discount,
            planId: plan.id,
          };

          if (plan.plan === "starter") {
            mapped[key].starter = detail;
          } else if (plan.plan === "grow") {
            mapped[key].grow = detail;
          }
        });

        setPlanData(mapped);
      } catch (err) {
        console.error("Fetch plans error", err);
      }
    };

    fetchPlans();
  }, []);

  if (!planData) return <div>Loading...</div>;

  const currentData = planData[selectedPlan];

  const planTabs = [
    { key: "1month" as PlanType, label: "1 Month Plan" },
    { key: "3months" as PlanType, label: "3 Month Plan" },
    { key: "6months" as PlanType, label: "6 Month Plan" },
    { key: "yearly" as PlanType, label: "Yearly Plan" },
  ];

  const handleCheckout = async (planId?: string) => {
    try {
      const res = await fetch("/api/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planId,
        }),
      });

      const data = await res.json();

      if (res.status === 200 && data.code === 200) {
        window.location.href = data.data.sessionUrl;
      } else {
        console.log("❌ Lỗi:", data.message);
      }
    } catch (err) {
      console.error("❌ Fetch error:", err);
    }
  };

  return (
    <div className="xl:w-[1200] m-auto mb-12 xl:px-0 sm:px-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold pb-4">
          START SMALL, SCALE BIG
        </h2>
        <p className="text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)]">
          Explore premium AI features and flexible packages to grow your
          business
        </p>
      </div>

      <div className="mx-auto rounded-2xl">
        {/* Plan Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div
            ref={tabListRef}
            className="flex flex-nowrap bg-white rounded-lg p-1 shadow-sm overflow-x-auto 
             scroll-smooth snap-x snap-mandatory overscroll-x-contain"
          >
            {planTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={handleSelectTab(tab.key)}
                className={`snap-center w-[150px] px-6 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all ${
                  selectedPlan === tab.key
                    ? "bg-gradient-primary text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex items-stretch md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 py-4 md:items-stretch">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl border-2 border-[var(--color-sub-primary)] p-6 relative w-[320px] shrink-0 md:w-auto flex flex-col h-full min-h-[850px] md:min-h-0">
            <div className="text-center mb-0">
              <h3 className="text-2xl font-bold text-[var(--color-sub-primary)] mb-2">
                Free
              </h3>

              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold">
                  {currentData.free.price}
                </span>
                <span className="text-gray-600 ml-2">
                  ${currentData.free.period}
                </span>
              </div>

              {/* Hàng cố định 24px cho original + badge (placeholder ẩn) */}
              <div className="h-6 mt-2 flex items-center justify-center space-x-2">
                <span className="text-gray-400 line-through text-sm opacity-0">
                  0.00 $
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium opacity-0">
                  placeholder
                </span>
              </div>
            </div>

            <hr className="my-3 border-gray-200" />

            <div className="">
              {checkLogin ? (
                <button
                  className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-full transition-colors"
                  onClick={() => {
                    window.location.href =
                      "https://affitfy.lovinbot.ai/overview";
                  }}
                >
                  Buy Now
                </button>
              ) : (
                <ButtonShowForm />
              )}
            </div>

            {/* Nội dung features */}
            <div className="space-y-4">
              <p className="font-semibold text-gray-900">Free plan includes:</p>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[var(--color-sub-primary)]"
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
                      priority
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[var(--color-sub-primary)]"
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
                  className="w-5 h-5 text-[var(--color-sub-primary)]"
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
                  className="w-5 h-5 text-[var(--color-sub-primary)]"
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
                  className="w-5 h-5 text-[var(--color-sub-primary)]"
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
                  className="w-5 h-5 text-[var(--color-sub-primary)]"
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
          <div className="bg-white rounded-2xl border-2 border-[var(--color-sub-primary)] p-6 relative w-[320px] shrink-0 md:w-auto flex flex-col h-full min-h-[850px] md:min-h-0">
            <div className="text-center mb-0">
              <h3 className="text-2xl font-bold text-[var(--color-sub-primary)] mb-2">
                Starter
              </h3>

              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold">
                  {currentData.starter.price}
                </span>
                <span className="text-gray-600 ml-2">
                  ${currentData.starter.period}
                </span>
              </div>

              {/* Hàng cố định 24px cho original + badge */}
              <div className="h-6 mt-2 flex items-center justify-center space-x-2">
                {currentData.starter.originalPrice ? (
                  <>
                    <span className="text-gray-400 line-through text-sm">
                      {currentData.starter.originalPrice} $
                    </span>
                    {currentData.starter.discount ? (
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                        {currentData.starter.discount}
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded-full text-xs font-medium opacity-0">
                        placeholder
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <span className="text-gray-400 line-through text-sm opacity-0">
                      0.00 $
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium opacity-0">
                      placeholder
                    </span>
                  </>
                )}
              </div>
            </div>

            <hr className="my-3 border-gray-200" />

            {/* Nút */}
            <div className="mb-6">
              {checkLogin ? (
                <button
                  className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-full transition-colors"
                  onClick={() => {
                    handleCheckout(currentData.starter.planId);
                  }}
                >
                  Buy Now
                </button>
              ) : (
                <ButtonShowForm />
              )}
            </div>

            {/* Features (chiếm phần còn lại) */}
            <div className="space-y-4">
              <p className="font-semibold text-gray-900">
                Includes everything in Free, plus:
              </p>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[var(--color-sub-primary)]"
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
                      priority
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[var(--color-sub-primary)]"
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
                  className="w-5 h-5 text-[var(--color-sub-primary)]"
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
                  {selectedPlan === "3months" ||
                  selectedPlan === "6months" ||
                  selectedPlan === "yearly"
                    ? "Generate 3 voice clones"
                    : "Generate 1 voice clone"}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[var(--color-sub-primary)]"
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
                  className="w-5 h-5 text-[var(--color-sub-primary)]"
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
          <div className="bg-white rounded-2xl border-2 border-[var(--color-primary)] p-6 relative w-[320px] shrink-0 md:w-auto flex flex-col h-full min-h-[850px] md:min-h-0">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <span>Most Popular</span>
              </span>
            </div>

            <div className="text-center mb-0">
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                Grow
              </h3>

              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold">
                  {currentData.grow.price}
                </span>
                <span className="text-gray-600 ml-2">
                  ${currentData.grow.period}
                </span>
              </div>

              {/* Hàng cố định 24px cho original + badge */}
              <div className="h-6 mt-2 flex items-center justify-center space-x-2">
                {currentData.grow.originalPrice ? (
                  <>
                    <span className="text-gray-400 line-through text-sm">
                      {currentData.grow.originalPrice} $
                    </span>
                    {currentData.grow.discount ? (
                      <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium">
                        {currentData.grow.discount}
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded-full text-xs font-medium opacity-0">
                        placeholder
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <span className="text-gray-400 line-through text-sm opacity-0">
                      0.00 $
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium opacity-0">
                      placeholder
                    </span>
                  </>
                )}
              </div>
            </div>

            <hr className="my-3 border-gray-200" />

            {/* Nút */}
            <div className="mb-6">
              {checkLogin ? (
                <button
                  className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-full transition-colors"
                  onClick={() => handleCheckout(currentData.grow.planId)}
                >
                  Buy Now
                </button>
              ) : (
                <ButtonShowForm />
              )}
            </div>

            {/* Features */}
            <div className="space-y-4">
              <p className="font-semibold text-gray-900">
                Includes everything in Starter, plus:
              </p>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)]"
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
                      priority
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)]"
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
                  className="w-5 h-5 text-[var(--color-primary)]"
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
                  className="w-5 h-5 text-[var(--color-primary)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Generate 8 voice clone
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Image generation with 10+ new AI models
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z"
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
