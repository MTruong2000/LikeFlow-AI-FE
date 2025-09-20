"use client";
import { Brain, Cpu, Zap, CircuitBoard } from "lucide-react";
import { useEffect } from "react";

interface AILoadingProps {
  open?: boolean;
  message?: string;
}

const Loading = ({
  open = false,
  message = "Processing...",
}: AILoadingProps) => {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center bg-loading w-screen min-h-screen ">
      <div className="relative">
        <div className={`w-24 h-24  animate-spin relative`}>
          <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <Brain className="w-6 h-6 text-blue-400 animate-pulse" />
        </div>

        <div className="absolute -inset-4">
          <div className="relative w-full h-full animate-spin animation-duration-3000">
            <Cpu className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 text-cyan-400" />
            <Zap className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 text-yellow-400" />
            <CircuitBoard className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 text-purple-400" />
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full"></div>
          </div>
        </div>

        <div
          className={`absolute inset-0 w-24 h-24 border-2 border-blue-400/30 rounded-full animate-ping`}
        ></div>
      </div>

      <p className={`mt-6 text-white text-lg font-medium animate-pulse`}>
        {message}
      </p>

      <div className="flex space-x-1 mt-4">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
};

export default Loading;
