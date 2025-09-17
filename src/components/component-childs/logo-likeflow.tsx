import Image from "next/image";

export default function LogoLikeFlow() {
  return (
    <>
      <div className="h-fit flex gap-4 items-center px-5 py-2.5 border border-white rounded-[38px]">
        <Image
          src="/images/logo-likeflow.png"
          alt="logo-likeflow"
          width={56}
          height={36}
          className="w-[48px] md:w-[56px] h-[28px] md:h-[36px] object-contain"
          priority
        />
        <p className="text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)]">Likeflow</p>
      </div>
    </>
  );
}
