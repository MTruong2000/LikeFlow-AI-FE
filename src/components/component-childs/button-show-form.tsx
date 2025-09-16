"use client";
import { useState } from "react";
import FormLoginRegister from "@/components/form-login-register";

export default function ButtonShowForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full mb-6 transition-colors text-center"
        onClick={() => setIsOpen(true)}
      >
        Sign Up Now
      </div>
      <FormLoginRegister isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
