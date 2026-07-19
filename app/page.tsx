import Image from "next/image";
import BubbleField from "@/components/BubbleField";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      {/* Ocean Background */}
      <div className="absolute inset-0 ocean-gradient" />


      {/* Bubble Animation */}
      <BubbleField />

      {/* Content */}
      <section className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <Image
            src="/logo.png"
            alt="The Reef Squad"
            width={700}
            height={520}
            priority
            className="mx-auto w-[300px] sm:w-[360px] md:w-[430px] lg:w-[500px] select-none"
          />

          <p className="subtitle mt-8">Coming Soon</p>
        </div>
      </section>
    </main>
  );
}