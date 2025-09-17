const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/uploads/65c7d2f1-d3bd-42f9-b02b-c6c64883bd03.png)",
      }}
      role="banner"
      aria-label="Henna Kala by Swathi - Professional Henna Artist"
    >
      {/* SEO-optimized hidden H1 */}
      <div className="sr-only">
        <h1>Henna Kala by Swathi - Professional Traditional & Modern Mehendi Artist in Lincoln, Nebraska</h1>
      </div>
      
      {/* Hero content at bottom - hidden per user request 
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="bg-black/30 backdrop-blur-sm py-4 px-6 mx-4 rounded-lg">
          <h2 className="font-seasons text-lg sm:text-xl lg:text-2xl font-light text-white drop-shadow-lg">
            A dream dipped in henna and made real — one cone at a time.
          </h2>
          <p className="text-white/90 text-sm mt-2 font-light">
            Professional Bridal & Festival Henna Artistry
          </p>
        </div>
      </div>
      */}
    </section>
  );
};

export default Hero;
