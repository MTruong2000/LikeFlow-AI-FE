"use client";

interface ButtonAnimationPrimaryProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function ButtonAnimationPrimary({
  children,
  onClick,
  className,
  disabled,
}: ButtonAnimationPrimaryProps) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          h-auto gap-4 items-center px-5 py-2.5 text-white border border-white rounded-[38px] cursor-pointer bg-gradient-primary
          ${className}
        `}
        style={{
          animation: "pulse-custom 1.5s ease-in-out infinite",
        }}
      >
        <span className="relative z-10">{children}</span>
        {/* <div
          className="absolute inset-0 rounded-full bg-gradient-primary opacity-75 blur-sm"
          style={{
            animation: "glow-pulse 2s ease-in-out infinite",
          }}
        /> */}
      </button>

      <style jsx>{`
        @keyframes pulse-custom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}
