import React from 'react';
import { Heart, Code } from 'lucide-react';
import Logo from "../../public/LOGO JHOW_Prancheta 1 cópia 6.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src={Logo}
              alt="Jhow Technology Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">Jhow Technology</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Desenvolvendo soluções inovadoras em tecnologia. Transformando ideias em realidade através do código.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <span>Feito com</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>e</span>
            <Code size={16} className="text-blue-500" />
            <span>por Jonathas Pereira Gonçalves</span>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Jhow Technology. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;