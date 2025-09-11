import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontas para ajudar você a encontrar o traje perfeito para o seu momento especial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Endereço</h4>
                    <p className="text-muted-foreground">R. João Mafessoni, 20</p>
                    <p className="text-muted-foreground">Constantina, RS - 99680-000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">Segunda a Sexta: 8:30h às 18:00h</p>
                    <p className="text-muted-foreground">Sábado: 8:30h às 11:00h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telefone</h4>
                    <a 
                      href="https://wa.me/5554993383866"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (54) 99338-3866
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a 
                      href="mailto:belissimaalugueis@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      belissimaalugueis@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-muted/30 rounded-2xl p-4 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-52.983!3d-27.733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzU4LjgiUyA1MsKwNTgnNTguOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Belíssima Aluguéis"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elegant">
            <h3 className="text-2xl font-serif font-semibold mb-6">Envie sua Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Sobre o que você gostaria de falar?"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Conte-nos sobre o seu evento especial..."
                  className="w-full h-32 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Ou entre em contato diretamente pelo{" "}
                <a
                  href="https://wa.me/5554993383866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;