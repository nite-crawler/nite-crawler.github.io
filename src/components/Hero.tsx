const Hero = () => {
  return <section 
    style={{
      backgroundImage: 'url(/lovable-uploads/e242f893-571e-4990-9e42-6ee5f49b4d1d.png)',
    }} 
    className="min-h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat
               bg-[length:100%_auto] bg-[center_40%] 
               sm:bg-[length:100%_auto] sm:bg-[center_40%]
               md:bg-[length:100%_auto] md:bg-[center_35%]
               lg:bg-[length:90%_auto] lg:bg-[center_30%]
               xl:bg-[length:85%_auto] xl:bg-[center_25%]
               2xl:bg-[length:80%_auto] 2xl:bg-[center_20%]">
      {/* Hero content at bottom */}
      <div className="absolute bottom-2 sm:bottom-4 left-4 right-4 text-center">
        <p className="font-seasons text-henna text-base gap-2 sm:text-lg md:text-xl drop-shadow-lg my-[2px] px-0 lg:text-xl font-light py-0">
          A dream dipped in henna and made real — one cone at a time.
        </p>
      </div>
    </section>;
};
export default Hero;
