import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("servicos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[calc(100vh-6rem)] pt-24 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-background/20 to-background/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up text-foreground">
              <span className="text-foreground">Belíssima</span> Aluguéis
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground mb-4 animate-fade-in-up">
              Aqui você chega linda e sai <span className="text-foreground font-semibold">Belíssima</span>
            </p>
            
            <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
              Aluguel de vestidos de noivas, madrinhas, formandas e trajes especiais com consultoria de cores personalizada
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <button
                onClick={scrollToServices}
                className="btn-hero"
              >
                Conheça Nossos Serviços
              </button>
              
              <a
                href="https://wa.me/5554993383866"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-elegant"
              >
                Agende sua Consulta
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent/15 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
    </section>
  );
};

export default Hero;