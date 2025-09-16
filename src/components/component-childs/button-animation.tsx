"use client";
import scrollToSection from "@/funcs/scrolltosection";

export default function ButtonAnimation() {
  return (
    <>
      <div
        className="primary-button-custom"
        onClick={() => scrollToSection("pricing")}
      >
        Try for Free
      </div>
    </>
  );
}
