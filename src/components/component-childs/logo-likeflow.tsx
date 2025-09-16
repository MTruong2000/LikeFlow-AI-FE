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
          priority
        />
        <p className="text-[24px]">Likeflow</p>
      </div>
    </>
  );
}
