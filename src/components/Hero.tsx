const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/lovable-uploads/65c7d2f1-d3bd-42f9-b02b-c6c64883bd03.png)",
      }}
    >
      {/* Hero content at bottom */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <h1 className="font-seasons text-base sm:text-md lg:text-xl font-light drop-shadow-lg my-[2px]">
          A dream dipped in henna and made real — one cone at a time.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
