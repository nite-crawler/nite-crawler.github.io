const Hero = () => {
  return <section style={{
    backgroundImage: 'url(/lovable-uploads/3ae05482-62fc-465d-901b-6f9da57bf75e.png)'
  }} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat mx-0 py-0">
      {/* Hero content at bottom */}
      <div className="absolute bottom-8 left-0 right-0 text-center px-4">
        <p className="font-seasons text-henna text-lg md:text-xl lg:text-2xl drop-shadow-lg">
          A dream dipped in henna and made real — one cone at a time.
        </p>
      </div>
    </section>;
};
export default Hero;