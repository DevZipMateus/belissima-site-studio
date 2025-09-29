import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("servicos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] pt-16 sm:pt-20 md:pt-24 flex items-center justify-center overflow-hidden w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-background/20 to-background/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center w-full">
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 md:mb-6 animate-fade-in-up text-foreground">
              <span className="text-foreground">Belíssima</span> Aluguéis
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-3 md:mb-4 animate-fade-in-up">
              Aqui você chega linda e sai <span className="text-foreground font-semibold">Belíssima</span>
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in-up">
              Aluguel de vestidos de noivas, madrinhas, formandas e trajes especiais com consultoria de cores personalizada
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in-up">
              <button
                onClick={scrollToServices}
                className="btn-hero w-full sm:w-auto"
              >
                Conheça Nossos Serviços
              </button>
              
              <a
                href="https://wa.me/5554993383866"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-elegant w-full sm:w-auto"
              >
                Agende sua Consulta
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements - Hide on mobile */}
      <div className="hidden md:block absolute top-32 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="hidden lg:block absolute top-1/2 left-20 w-12 h-12 bg-accent/15 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
    </section>
  );
};

export default Hero;