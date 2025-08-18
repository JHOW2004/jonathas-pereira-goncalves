import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Logo from "../../public/LOGO JHOW_Prancheta 1 cópia 6 1.webp"

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black backdrop-blur-sm shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src={Logo}
              alt="Jhow Technology Logo" 
              fetchpriority="high"
              className="h-10 w-10"
            />
            <button
                aria-label="Ir para a seção Sobre"
                onClick={() => scrollToSection('about')}
                className="text-gray-200 hover:text-blue-600 transition-colors"
            >
              Jhow Technology
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button aria-label="Ir para a seção Início" onClick={() => scrollToSection('home')} className="text-gray-200 hover:text-blue-600 transition-colors">
              Início
            </button>
            <button aria-label="Ir para a seção Sobre" onClick={() => scrollToSection('about')} className="text-gray-200 hover:text-blue-600 transition-colors">
              Sobre
            </button>
            <button aria-label="Ir para a seção Experiência" onClick={() => scrollToSection('experience')} className="text-gray-200 hover:text-blue-600 transition-colors">
              Experiência
            </button>
            <button aria-label="Ir para a seção Habilidades" onClick={() => scrollToSection('skills')} className="text-gray-200 hover:text-blue-600 transition-colors">
              Habilidades
            </button>
            <button aria-label="Ir para a seção Contato" onClick={() => scrollToSection('contact')} className="text-gray-200 hover:text-blue-600 transition-colors">
              Contato
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/JHOW2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-200 hover:text-gray-900 transition-colors">
              <Github size={20} aria-label="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/jonathas-pereira-gon%C3%A7alves-abb045211" aria-label="Linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-600 transition-colors">
              <Linkedin size={20} aria-label="LinkedIn" />
            </a>
            <a href="mailto:jonathaspereira673@gmail.com" aria-label="Email" className="text-gray-200 hover:text-red-600 transition-colors">
              <Mail size={20}  aria-label="Email"/>
            </a>
            <a href="tel:+5514988168763" aria-label="Telefone" className="text-gray-200 hover:text-green-600 transition-colors">
              <Phone size={20} aria-label="Telefone"/>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            id="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button aria-label="Ir para a seção Início" onClick={() => scrollToSection('home')} className="text-left text-gray-200 hover:text-blue-600 transition-colors">
                Início
              </button>
              <button aria-label="Ir para a seção Sobre" onClick={() => scrollToSection('about')} className="text-left text-gray-200 hover:text-blue-600 transition-colors">
                Sobre
              </button>
              <button aria-label="Ir para a seção Experiência" onClick={() => scrollToSection('experience')} className="text-left text-gray-200 hover:text-blue-600 transition-colors">
                Experiência
              </button>
              <button aria-label="Ir para a seção Habilidades" onClick={() => scrollToSection('skills')} className="text-left text-gray-200 hover:text-blue-600 transition-colors">
                Habilidades
              </button>
              <button aria-label="Ir para a seção Contato" onClick={() => scrollToSection('contact')} className="text-left text-gray-200 hover:text-blue-600 transition-colors">
                Contato
              </button>
            </nav>
            
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              <a href="https://github.com/JHOW2004" target="_blank" aria-label="GitHub" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-900 transition-colors">
                <Github size={20} aria-label="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/jonathas-pereira-gon%C3%A7alves-abb045211" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-600 transition-colors">
                <Linkedin size={20} aria-label="LinkedIn" />
              </a>
              <a href="mailto:jonathaspereira673@gmail.com" aria-label="Email" className="text-gray-200 hover:text-red-600 transition-colors">
                <Mail size={20} aria-label="Email" />
              </a>
              <a href="tel:+5514988168763" aria-label="Telefone" className="text-gray-200 hover:text-green-600 transition-colors">
                <Phone size={20} aria-label="Telefone" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;