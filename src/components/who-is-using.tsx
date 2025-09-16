"use client";
import Image from "next/image";

export default function WhoIsUsing() {
  return (
    <>
      <div className="w-full xl:w-[1200] m-auto text-center mb-12 xl:px-0 sm:px-12 px-4">
        <h1 className="mb-3 text-2xl sm:text-4xl font-bold">WHO’S USING BOTHIVE?</h1>
        <p className="mb-12 text-xl">
          Bothive empowers businesses shaping the digital future.
        </p>
        <div className="grid grid-cols-3 gap-6 lg:overflow-visible overflow-x-auto snap-x snap-mandatory">
          <div className="relative w-full h-[452px] self-end min-w-[300px] snap-center">
            <Image
              src="https://w.ladicdn.com/s650x750/66e18ea9521baa00137153a3/service-card-20250721024715-efkae.png"
              alt="Bothive Logo"
              fill
              className="absolute object-cover rounded-2xl"
            />
            <Image
              src="https://w.ladicdn.com/s650x550/66e18ea9521baa00137153a3/person-using-ar-technology-perform-their-occupation-1-20250723025037-tua3a.png"
              alt="Bothive Logo"
              width={342}
              height={240}
              className="object-cover rounded-2xl absolute top-4 left-1/2 translate-x-[-50%]"
            />
            <div className="absolute text-white w-full top-68 text-left p-6">
              <h2 className="mb-4 text-2xl font-bold">Business Owners</h2>
              <p>
                Leverage personalized AI assistants and an all-in-one toolkit –
                from marketing and operations to customer care. Make faster
                decisions, reduce costs, and boost team productivity.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[500px] min-w-[300px] snap-center ml-50 sm:ml-40 md:ml-20 lg:m-0">
            <Image
              src="https://w.ladicdn.com/s750x850/66e18ea9521baa00137153a3/service-card-2-20250721025902-t5-uk.png"
              alt="Bothive Logo"
              fill
              className="absolute object-cover rounded-2xl"
            />
          </div>

          <div className="relative w-full h-[452px] self-end min-w-[300px] snap-center ml-100 sm:ml-80 md:ml-40 lg:m-0">
            <Image
              src="https://w.ladicdn.com/s650x750/66e18ea9521baa00137153a3/service-card-1-20250721025753-p-l6-.png"
              alt="Bothive Logo"
              fill
              className="absolute object-cover rounded-2xl"
            />
            <Image
              src="https://w.ladicdn.com/s650x550/66e18ea9521baa00137153a3/person-using-ar-technology-perform-their-occupation-20250723025039-jpuj_.png"
              alt="Bothive Logo"
              width={342}
              height={240}
              className="object-cover rounded-2xl absolute top-4 left-1/2 translate-x-[-50%]"
            />
            <div className="absolute text-white w-full top-68 text-left p-6">
              <h2 className="mb-4 text-2xl font-bold">AI Beginners</h2>
              <p>
                No tech skills needed. Create images, write content, generate
                voices, ask questions, and explore AI power in just a few
                clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
