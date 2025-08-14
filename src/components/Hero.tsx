const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/lovable-uploads/65c7d2f1-d3bd-42f9-b02b-c6c64883bd03.png)",
      }}
    >
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

      {/* Hero content at bottom */}
    
    </section>
  );
};

export default Hero;
