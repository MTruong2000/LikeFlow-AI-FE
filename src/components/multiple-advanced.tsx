"use client";
import React from "react";
import Image from "next/image";

export default function MultipleAdvanced() {
  return (
    <>
      <div className="mb-12">
        <div className="w-full md:w-[768] m-auto text-center px-8 md:px-0">
          <h2 className="text-[length:var(--text-header-sp)]  md:text-[length:var(--text-header-pc)] font-bold mb-4">
            ADVANCED AI, ALL IN ONE PLATFORM
          </h2>
          <p className="text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)]">
            Access leading models including GPT-4, Gemini, Claude, and Grok —
            without the hassle of constant updates. Use open-source models or
            deploy your own private AI.
          </p>
        </div>
        <div className="relative w-full h-[250px] md:h-[500px] mt-8">
          <Image
            src="/images/advanced-ai.webp"
            alt="Built with multiple advanced AI models"
            fill
            className="object-contain p-2"
          />
        </div>
      </div>
    </>
  );
}
