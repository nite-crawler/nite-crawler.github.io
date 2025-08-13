const Hero = () => {

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/lovable-uploads/3ae05482-62fc-465d-901b-6f9da57bf75e.png)'}}>
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-warm rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-primary rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-primary-glow/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero section now only contains background */}
    </section>
  );
};

export default Hero;