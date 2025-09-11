"use client";
import React from "react";
import Image from "next/image";

export default function MultipleAdvanced() {
  return (
    <>
      <div className="mb-12">
        <div className="w-[768] m-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            BUILT WITH MULTIPLE ADVANCED AI MODELS
          </h2>
          <p className="text-xl">
            We integrate the latest models like GPT-4, Gemini, Claude, and Grok
            — so you don’t have to manually update. You can choose between
            open-source models or your own private AI solutions
          </p>
        </div>
        <div className="relative w-full h-[300px] mt-8">
          {/* <Image
            src="/built-with-multiple-advanced-ai-models.webp"
            alt="Built with multiple advanced AI models"
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 20vw, (max-width: 1200px) 16vw, 12vw"
          /> */}
        </div>
      </div>
    </>
  );
}
