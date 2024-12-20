import Image from "next/image";
import Wave from "@/public/Vector 64.svg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="relative  overflow-hidden flex items-center justify-center aspect-[16/6.5] h-[320px] sm:h-auto">
        <video
          width="522"
          height="295"
          autoPlay controls
          loop
          playsInline
          className="sm:w-full w-fit sm:max-w-full max-w-fit  h-[450px] sm:h-auto"
          src="https://golf.goldennet.com.tw/%E5%85%AC%E5%8B%9D%E7%90%83%E8%B3%BD%E5%89%8D%E5%B0%8E%E7%89%87_FA.mp4" poster="https://golf.goldennet.com.tw/og.png"
        ></video>
        <Image
          src={Wave}
          alt="kv"
          priority
          className="w-[100vw] h-fit absolute sm:bottom-[-8px] bottom-[-2px] left-0"
          width={1440}
          height={115}
        />
      </section>
    </main>
  );
}
