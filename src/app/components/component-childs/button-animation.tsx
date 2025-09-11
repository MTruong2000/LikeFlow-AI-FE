"use client";
import scrollToSection from "@/app/components/funcs/scrolltosection";

export default function ButtonAnimation() {
  return (
    <>
      <div
        className="primary-button-custom"
        onClick={() => scrollToSection("pricing")}
      >
        Start Free Trial
      </div>
    </>
  );
}
