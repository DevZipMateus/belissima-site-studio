import { Crown, Users, GraduationCap, Heart, Shirt, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Vestidos de Noiva",
      description: "Coleção exclusiva de vestidos de noiva para o seu grande dia",
      features: ["Diversos modelos e tamanhos", "Assessoria personalizada", "Prova com agendamento"]
    },
    {
      icon: Users,
      title: "Madrinhas",
      description: "Vestidos elegantes para madrinhas e damas de honra",
      features: ["Coordenação de cores", "Múltiplos estilos", "Tamanhos variados"]
    },
    {
      icon: GraduationCap,
      title: "Formandas",
      description: "Vestidos especiais para sua cerimônia de formatura",
      features: ["Modelos clássicos e modernos", "Cores tradicionais", "Acessórios inclusos"]
    },
    {
      icon: Heart,
      title: "Mães e Convidadas",
      description: "Trajes sofisticados para mães e convidadas especiais",
      features: ["Elegância e conforto", "Looks completos", "Consultoria de estilo"]
    },
    {
      icon: Users,
      title: "Daminhas",
      description: "Vestidos encantadores para as pequenas princesas",
      features: ["Modelos infantis", "Tecidos delicados", "Segurança e conforto"]
    },
    {
      icon: Shirt,
      title: "Ternos e Trajes Masculinos",
      description: "Ternos elegantes para noivos e convidados",
      features: ["Corte impecável", "Diversos tamanhos", "Acessórios completos"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de trajes especiais para todos os momentos importantes da sua vida
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group card-elegant service-card">
                <div className="text-center mb-4 lg:mb-6">
                  <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 lg:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 lg:mb-4">{service.description}</p>
                </div>
                
                <ul className="space-y-1.5 lg:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-primary rounded-full mr-2 lg:mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Consultation CTA */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Palette className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-primary mx-auto mb-4 lg:mb-6" />
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3 lg:mb-4">Consultoria de Cores</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 lg:mb-6">
              Oferecemos consultoria personalizada de cores para ajudar você a escolher o traje perfeito 
              que realce sua beleza natural e combine com o seu estilo pessoal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <a
                href="https://wa.me/5554993383866"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero w-full sm:w-auto"
              >
                Agendar Consultoria
              </a>
              <button
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline-elegant w-full sm:w-auto"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;