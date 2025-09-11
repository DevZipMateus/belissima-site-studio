import { Heart, Users, Award, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
            Nossa História
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde 2022, realizamos sonhos através da união de experiência, paixão e atendimento diferenciado
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-semibold text-foreground">
              Como Nasceu a Belíssima
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Belíssima Noivas e Aluguéis nasceu no início de 2022, fruto da união de duas sócias que 
              decidiram transformar experiência e paixão em um projeto em comum. Uma delas já atuava na 
              área e, percebendo a oportunidade de crescimento, surgiu a necessidade de expandir o negócio 
              através da sociedade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde então, a Belíssima tem se dedicado a realizar sonhos, oferecendo qualidade, confiança 
              e um atendimento diferenciado para cada cliente, transformando momentos importantes em 
              memórias inesquecíveis.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="h-20 w-20 text-primary mx-auto mb-4" />
                <p className="text-lg font-serif italic text-muted-foreground">
                  "Transformando experiência e paixão em momentos únicos"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif font-semibold mb-6 text-foreground">
            Nossa Missão
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Proporcionar às noivas e clientes experiências únicas por meio de vestidos e trajes especiais, 
            unindo elegância, qualidade e atendimento acolhedor, para transformar momentos importantes em 
            memórias inesquecíveis.
          </p>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-serif font-semibold text-center mb-12 text-foreground">
            Nossos Valores
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-elegant text-center service-card">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-serif font-semibold mb-3">Compromisso com o Cliente</h4>
              <p className="text-muted-foreground">
                Confiança e acolhimento em cada detalhe
              </p>
            </div>

            <div className="card-elegant text-center service-card">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-serif font-semibold mb-3">Excelência</h4>
              <p className="text-muted-foreground">
                Qualidade em produtos e serviços
              </p>
            </div>

            <div className="card-elegant text-center service-card">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-serif font-semibold mb-3">Ética</h4>
              <p className="text-muted-foreground">
                Transparência e responsabilidade
              </p>
            </div>

            <div className="card-elegant text-center service-card">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-serif font-semibold mb-3">Inovação</h4>
              <p className="text-muted-foreground">
                Criatividade e atualização constante
              </p>
            </div>

            <div className="card-elegant text-center service-card">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-serif font-semibold mb-3">Paixão</h4>
              <p className="text-muted-foreground">
                Vestir sonhos é nossa vocação
              </p>
            </div>

            <div className="card-elegant text-center service-card">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-serif font-semibold mb-3">Diversidade</h4>
              <p className="text-muted-foreground">
                Toda mulher é única e merece se sentir especial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;