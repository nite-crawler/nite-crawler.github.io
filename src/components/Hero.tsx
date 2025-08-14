const Hero = () => {
  return <section style={{
    backgroundImage: 'url(/lovable-uploads/65c7d2f1-d3bd-42f9-b02b-c6c64883bd03.png)'
  }} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat">
      {/* Hero content at bottom */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 text-center">
        <p className="font-seasons text-henna text-base gap-1 sm:text-lg md:text-xl drop-shadow-lg my-[2px] px-0 lg:text-l font-light py-0">
          A dream dipped in henna and made real — one cone at a time.
        </p>
      </div>
    </section>;
};
export default Hero;
