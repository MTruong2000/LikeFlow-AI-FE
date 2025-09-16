"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X, Mail, Lock, User, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormLoginRegisterProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AILoginPopup({
  isOpen,
  onClose,
}: FormLoginRegisterProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState<"form" | "verify">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [verifyCode, setVerifyCode] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      });
      setErrorMessage("");
      setStep("form");
      setVerifyCode("");
      setIsLogin(true);
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        onClose();
        router.refresh();
      } else {
        setErrorMessage(data.message || "Login failed");
      }
    } else {
      // Register
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.code === 200 && data.status === "success") {
        // Chuyển sang step verify
        setStep("verify");
      } else {
        setErrorMessage(data.message || "Register failed");
      }
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrorMessage("");
    setFormData({
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
    setStep("form");
  };

  const handleVerifySubmit = async () => {
    const res = await fetch("/api/verify-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: verifyCode,
        email: formData.email,
      }),
    });
  
    const data = await res.json();
  
    if (data.status === "success") {
      setStep("form");
      setIsLogin(true);
  
      setFormData((prev) => ({
        ...prev,
        email: formData.email,
        password: "",
        confirm_password: "",
      }));
  
      // ✅ Clear verify code
      setVerifyCode("");
  
      // ✅ Thông báo cho user
      setErrorMessage("Email verified successfully. Please log in.");
    } else {
      setErrorMessage(data.message || "Verification failed");
    }
  };
  

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-3xl"></div>

            {/* Close button */}
            <button
              onClick={() => onClose()}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200 z-20"
            >
              <X size={24} />
            </button>

            {/* Animate steps */}
            <AnimatePresence mode="wait">
              {step === "form" && (
                <motion.div
                  key="form"
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -400, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {isLogin ? "Welcome Back" : "Create Account"}
                    </h2>
                    <p className="text-white/70">
                      {isLogin
                        ? "Sign in to your account"
                        : "Join our AI community"}
                    </p>
                  </div>

                  {/* Form */}
                  <div className="space-y-6">
                    {!isLogin && (
                      <div className="relative">
                        <User
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
                          size={20}
                        />
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    )}

                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
                        size={20}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
                        size={20}
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-12 pr-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/70"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>

                    {!isLogin && (
                      <div className="relative">
                        <Lock
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
                          size={20}
                        />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="confirm_password"
                          placeholder="Password Verification"
                          value={formData.confirm_password}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-12 pr-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    )}

                    {errorMessage && (
                      <p className="text-red-400 text-sm text-center">
                        {errorMessage}
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
                    >
                      {isLogin ? "Sign In" : "Create Account"}
                    </button>
                  </div>

                  {/* Toggle Mode */}
                  <div className="text-center mt-6">
                    <p className="text-white/70">
                      {isLogin
                        ? "Don't have an account? "
                        : "Already have an account? "}
                      <button
                        onClick={toggleMode}
                        className="text-blue-400 hover:text-blue-300 font-semibold"
                      >
                        {isLogin ? "Sign up" : "Sign in"}
                      </button>
                    </p>
                  </div>
                </motion.div>
              )}

              {step === "verify" && (
                <motion.div
                  key="verify"
                  initial={{ x: 400, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 400, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  {/* Back button */}
                  <button
                    onClick={() => setStep("form")}
                    className="absolute top-4 left-4 text-white/70 hover:text-white"
                  >
                    <ArrowLeft size={24} />
                  </button>

                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Verify Your Email
                    </h2>
                    <p className="text-white/70">
                      Please enter the verification code sent to your email.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
                        size={20}
                      />
                      <input
                        type="text"
                        name="verifyCode"
                        placeholder="Verification Code"
                        value={verifyCode}
                        onChange={(e) => setVerifyCode(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleVerifySubmit}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
                    >
                      Verify Email
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
