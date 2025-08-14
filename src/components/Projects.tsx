import React from "react";
import { ExternalLink, Github, Bot, Terminal, Package } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Carry AI",
      description:
        "Minha IA personalizada estilo ChatGPT, desenvolvida com tecnologias modernas para oferecer uma experiência conversacional inteligente e intuitiva.",
      icon: <Bot className="w-8 h-8" />,
      link: "https://carrybr.vercel.app/",
      github: null,
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      color: "from-[#E70149] to-[#E70149]/80",
    },
    {
      title: "Carry CLI",
      description:
        "Versão CLI da minha IA para usar diretamente no terminal. Permite interações rápidas e eficientes com a IA através da linha de comando.",
      icon: <Terminal className="w-8 h-8" />,
      link: null,
      github: "https://github.com/JHOW2004/carry-cli",
      technologies: ["Node.js", "CLI", "JavaScript", "NPM Package"],
      color: "from-[#03E5FB] to-[#03E5FB]/80",
    },
    {
      title: "Blobfy",
      description:
        "Biblioteca JavaScript que desenvolvi para transformar qualquer imagem em blob de forma simples e eficiente. Ideal para manipulação de imagens em aplicações web.",
      icon: <Package className="w-8 h-8" />,
      link: null,
      github: "https://github.com/JHOW2004/blobfy",
      technologies: [
        "JavaScript",
        "NPM Package",
        "Image Processing",
        "Web APIs",
      ],
      color: "from-[#E70149] to-[#03E5FB]",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus <span className="text-[#E70149]">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E70149] to-[#03E5FB] mx-auto mb-8"></div>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            Alguns dos projetos pessoais que desenvolvi, demonstrando minha
            paixão por inovação e tecnologia. Cada projeto representa uma
            solução única para problemas reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-[#E70149]/50 transition-all hover:transform hover:scale-105 group"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.color} mb-6 group-hover:scale-110 transition-transform`}
              >
                <div className="text-white">{project.icon}</div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-[#03E5FB] rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Carry"
                    className="flex items-center px-4 py-2 bg-[#E70149] text-white rounded-lg hover:bg-[#E70149]/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                    className="flex items-center px-4 py-2 border border-[#03E5FB] text-[#03E5FB] rounded-lg hover:bg-[#03E5FB] hover:text-black transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Projetos Empresariais
            </h3>
            <p className="text-gray-100 mb-6 leading-relaxed">
              Através da{" "}
              <span className="text-[#E70149] font-semibold">
                Jhow Technology
              </span>
              , já desenvolvi dezenas de projetos para diversos clientes,
              incluindo webapps, aplicativos mobile, ERPs e páginas estáticas. O
              maior projeto foi o
              <span className="text-[#03E5FB] font-semibold"> ALI Academy</span>{" "}
              para o Sebrae.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:jonathaspereira673@gmail.com"
                aria-label="Email"
                className="px-8 py-3 bg-gradient-to-r from-[#E70149] to-[#03E5FB] text-white rounded-lg font-semibold hover:from-[#E70149]/90 hover:to-[#03E5FB]/90 transition-all transform hover:scale-105"
              >
                Vamos conversar sobre seu projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
