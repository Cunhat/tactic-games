import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col">
      <div className="h-[30%] w-full relative">
        <div className="bg-black/60 absolute top-0 left-0 right-0 bottom-0 z-10 h-full w-full flex justify-center items-center">
          <h1 className="text-7xl font bold">TACTIC GAMES</h1>
        </div>
        <video
          autoPlay
          muted
          loop
          id="homepage-video"
          className="h-full w-full object-fill"
        >
          <source src="/videos/sample.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
