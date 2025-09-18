"use client";
import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image"; // Using Next.js Image component

interface FormData {
  phone: string;
  name: string;
  message: string;
}

export default function FormContact() {
  const [formData, setFormData] = useState<FormData>({
    phone: "",
    name: "",
    message: "",
  });

  // Type the event parameter as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);

    setFormData({
      phone: "",
      name: "",
      message: "",
    });
  };

  return (
    <div className="w-full lg:w-[1200px] flex gap-8 flex-col mx-auto mb-[54px]">
      <div className="text-center">
        <h1 className="text-[length:var(--text-title-sp)] md:text-[length:var(--text-title-pc)] font-bold text-gray-900 mb-2">
          START YOUR AI JOURNEY
        </h1>
        <p className="text-gray-600 text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)]">
          Trusted by 20,000+ customers worldwide
        </p>
      </div>

      <div className="flex gap-8 items-center mx-4 md:mx-0">
        {/* Left side - Form */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-auto w-full flex-1">
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 outline-none"
              />
              <div className="flex-1 flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 w-20">
                <Phone className="w-4 h-4 text-gray-400 mr-1" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  className="bg-transparent text-sm text-gray-700 w-full outline-none"
                />
              </div>
            </div>

            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Leave us a message"
                rows={4}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 outline-none resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-primary  text-white font-semibold py-4 px-6 rounded-full  hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer"
            >
              Contact Now
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block flex-1">
          <div className="relative">
            <Image
              src="/images/image-form-contact.webp"
              alt="Colorful AI chameleons"
              layout="responsive"
              width={900}
              height={550}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
    </div>
  );
}
