"use client";
import Image from "next/image";

export default function WhoIsUsing() {
  return (
    <>
      <div className="w-full xl:w-[1200] m-auto text-center mb-[length:var(--outline-sp)] md:mb-[length:var(--outline-pc)] xl:px-0 sm:px-12 px-4">
        <h1 className="mb-[var(--inline-sp)] md:mb-[var(--inline-pc)] text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold">
          WHO’S USING LIKEFLOW
        </h1>
        <div className="grid grid-cols-3 gap-6 lg:overflow-visible overflow-x-auto snap-x snap-mandatory">
          <div className="relative w-full h-[452px] self-end min-w-[300px] snap-center">
            <Image
              src="/images/online-entrepreneurs.png"
              alt="Bothive Logo"
              fill
              className="absolute object-cover rounded-2xl z-[-2]"
            />
            <div className="absolute text-white w-full bottom-0 text-left p-6">
              <h2 className="mb-4 text-[length:var(--text-title-sp)] md:text-[length:var(--text-title-pc)] font-bold text-center">
                Online Entrepreneurs
              </h2>
              <p className="text-[16px] md:text-[length:var(--text-body-text-pc)]">
                Likeflow helps you grow smarter—saving time, reducing costs, and
                leading in marketing.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[452px] min-w-[300px] snap-center ml-50 sm:ml-40 md:ml-20 lg:m-0">
            <Image
              src="/images/business-owners.png"
              alt="Bothive Logo"
              fill
              className="absolute object-cover rounded-2xl z-[-2]"
            />
            <div className="absolute text-white w-full bottom-0 text-left p-6">
              <h2 className="mb-4 text-[length:var(--text-title-sp)] md:text-[length:var(--text-title-pc)] font-bold text-center">
                Business Owners
              </h2>
              <p className="text-[16px] md:text-[length:var(--text-body-text-pc)]">
                Accelerate with AI assistants to streamline marketing,
                operations, customer care, and smarter decisions.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[452px] self-end min-w-[300px] snap-center ml-100 sm:ml-80 md:ml-40 lg:m-0">
            <Image
              src="/images/AI-beginners.png"
              alt="Bothive Logo"
              fill
              className="absolute object-cover rounded-2xl z-[-2]"
            />
            <div className="absolute text-white w-full bottom-0 text-left p-6">
              <h2 className="mb-4 text-[length:var(--text-title-sp)] md:text-[length:var(--text-title-pc)] font-bold text-center">
                AI Beginners
              </h2>
              <p className="text-[16px] md:text-[length:var(--text-body-text-pc)]">
                No code, no complexity. Write, design, generate voices, or ask
                anything — all in just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
