const Hero = () => {
  return <section style={{
    backgroundImage: 'url(/lovable-uploads/3ae05482-62fc-465d-901b-6f9da57bf75e.png)'
  }} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat">
      {/* Hero content centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Main title and floral elements will be positioned here */}
      </div>
      
      {/* Tagline at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center px-4">
        <p className="font-seasons text-henna text-base sm:text-lg md:text-xl drop-shadow-lg font-light">
          A dream dipped in henna
        </p>
      </div>
    </section>;
};
export default Hero;
