import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoFooter from "@/assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logoFooter} 
                alt="Belíssima Aluguéis"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Realizando sonhos desde 2022 através de vestidos e trajes especiais. 
              Aqui você chega linda e sai Belíssima.
            </p>
            <div className="flex items-center space-x-2 text-background/80">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm italic">Vestir sonhos é nossa vocação</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>R. João Mafessoni, 20</p>
                  <p>Constantina, RS - 99680-000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/5554993383866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  (54) 99338-3866
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:belissimaalugueis@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  belissimaalugueis@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Horário de Funcionamento</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Segunda a Sexta</p>
                  <p className="font-medium">8:30h às 18:00h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Sábado</p>
                  <p className="font-medium">8:30h às 11:00h</p>
                </div>
              </div>
              
              <div className="mt-4">
                <a
                  href="https://wa.me/5554993383866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors"
                >
                  Agendar Visita
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              <p>&copy; 2024 Belíssima Aluguéis Ltda. Todos os direitos reservados.</p>
              <p className="mt-1">CNPJ: 46.776.467/0001-29</p>
            </div>
            
            <div className="text-background/60 text-sm text-center md:text-right">
              <p>Desenvolvido com</p>
              <div className="flex items-center justify-center md:justify-end space-x-1 mt-1">
                <Heart className="h-4 w-4 text-primary" />
                <span>para realizar sonhos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;