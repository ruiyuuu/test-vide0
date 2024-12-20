import Image from "next/image";
import Wave from "@/public/Vector 64.svg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="relative  overflow-hidden flex items-center justify-center aspect-[16/6.5] h-[320px] sm:h-auto">
        <video
          width="522"
          height="295"
          autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true"
          className="sm:w-full w-fit sm:max-w-full max-w-fit  h-[450px] sm:h-auto"
          src="https://test-vide0.vercel.app/video.mp4" poster="https://golf.goldennet.com.tw/og.png"
        ></video>
        <Image
          src={Wave}
          alt="kv"
          priority
          className=" absolute sm:bottom-[-8px] bottom-[-2px] !left-0 px-0 mx-0"
        />
      </section>
    </main>
  );
}
