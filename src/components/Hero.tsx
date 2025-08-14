
const Hero = () => {
  return <section 
    style={{
      backgroundImage: 'url(/lovable-uploads/60c81b9d-f7f3-4230-9ffa-8f0f7acbce22.png)',
    }} 
    className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-no-repeat
               bg-[center_40%] 
               sm:bg-[center_40%]
               md:bg-[center_35%]
               lg:bg-[center_30%]
               xl:bg-[center_25%]
               2xl:bg-[center_20%]">
      {/* Hero content at bottom */}
      <div className="absolute bottom-2 sm:bottom-4 left-4 right-4 text-center">
        <p className="font-seasons text-henna text-base gap-2 sm:text-lg md:text-xl drop-shadow-lg my-[2px] px-0 lg:text-xl font-light py-0">
          A dream dipped in henna and made real — one cone at a time.
        </p>
      </div>
    </section>;
};
export default Hero;
