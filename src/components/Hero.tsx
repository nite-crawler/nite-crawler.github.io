import heroBackground from "@/assets/henna-1.jpg";

const Hero = () => {
  return <section style={{
    backgroundImage: `url(${heroBackground})`
  }} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat">
      {/* Hero content at bottom */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 text-center">
        <p className="font-seasons text-henna text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-lg px-2">
          A dream dipped in henna and made real — one cone at a time.
        </p>
      </div>
    </section>;
};
export default Hero;