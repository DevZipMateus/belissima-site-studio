import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-header.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300">
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo da empresa */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Belíssima Aluguéis" 
              className="h-24 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5554993383866"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
              <a
                href="https://wa.me/5554993383866"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero inline-block text-center"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;