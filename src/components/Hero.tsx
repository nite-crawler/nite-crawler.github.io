const Hero = () => {
  return <section style={{
    backgroundImage: 'url(/lovable-uploads/FINAL__HK_BUSINESS_CARD_4.png)'
  }} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center sm:bg-center bg-no-repeat">
      {/* Hero content at bottom */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 text-center">
        <p className="font-seasons text-henna text-base sm:text-lg md:text-xl drop-shadow-lg my-[2px] px-0 lg:text-xl font-light py-0">
          A dream dipped in henna and made real — one cone at a time.
        </p>
      </div>
    </section>;
};
export default Hero;
