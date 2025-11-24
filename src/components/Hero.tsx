import React from "react";
import { ChevronDown } from "lucide-react";
import Perfil from "../../public/perfil.webp";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-stone-950 to-black pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={Perfil}
              alt="Jonathas Pereira Gonçalves"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-2xl border-8 border-white"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-[#E70149] to-[#03E5FB] bg-clip-text text-transparent">
              Jonathas Pereira
            </span>
            <br />
            <span className="text-gray-400">Gonçalves</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Desenvolvedor Full Stack apaixonado pelo mundo da programação
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            4 anos de experiência em desenvolvimento mobile nativo e híbrido,
            desenvolvimento web e computação em nuvem
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              aria-label="Trabalho"
              id="trabalho"
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-[#E70149] to-[#03E5FB] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Conheça meu trabalho
            </button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
            id="scrollDown"
            aria-label="Scroll"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
