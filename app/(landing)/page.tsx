import { Partners } from "@/components/partners";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="h-full gap-24">
      <div className="h-[50%] sm:h-[50%] w-full relative flex">
        <div className="bg-black/60 absolute top-0 left-0 right-0 bottom-0 z-10 h-full w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-5xl sm:text-7xl font-kanit bold">
            1 · 2 · 3 DEZ 2024
          </h1>
          <h1 className="text-xl sm:text-5xl font-kanit">VILA FRANCA XIRA</h1>
          <button className="text-base sm:text-lg bg-primary rounded-lg p-4">
            INCRICOES EM BREVE
          </button>
        </div>
        <video
          autoPlay
          muted
          loop
          id="homepage-video"
          className="h-full w-full object-cover"
        >
          <source src="/videos/sample.mp4" type="video/mp4" />
        </video>
      </div>
      <Partners />
      <PrizeMoney />
      <Location />
      <Footer />
    </div>
  );
}

const Location = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center ">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary font-satoshi">
        Localização
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.0057245874295!2d-8.9934911!3d38.9466976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1927c720bc2781%3A0xf5e348ad6f2be1d!2sPavilhao%20Multiusos%20de%20Vila%20Franca%20de%20Xira!5e0!3m2!1spt-PT!2spt!4v1704841236198!5m2!1spt-PT!2spt"
        width="100%"
        height="350"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const PrizeMoney = () => {
  return (
    <section className="w-full bg-black flex justify-center my-12">
      <div className="container flex flex-col gap-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary font-satoshi">
            Prize Money
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Compete na tua categoria e habilita-te a ganhar parte do nosso
            prémio total de 4000€!
          </p>
        </div>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center px-12">
          <div className="p-6 border-2 border-gray-700 rounded-lg bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-bold text-gray-100">Elite</h3>
            <p className="text-gray-400">$175</p>
          </div>
          <div className="p-6 border-2 border-gray-700 rounded-lg bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-bold text-gray-100">RX</h3>
            <p className="text-gray-400">$700</p>
          </div>
          <div className="p-6 border-2 border-gray-700 rounded-lg bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-bold text-gray-100">Extreme</h3>
            <p className="text-gray-400">$700</p>
          </div>
          <div className="p-6 border-2 border-gray-700 rounded-lg bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-bold text-gray-100">Masters</h3>
            <p className="text-gray-400">$700</p>
          </div>
          <div className="p-6 border-2 border-gray-700 rounded-lg bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-bold text-gray-100">Scaled</h3>
            <p className="text-gray-400">$600</p>
          </div>
        </div>
      </div>
    </section>
  );
};
