import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "Odontologia sin Fronteras Treinamentos LTDA.",
      period: "Julho 2023 - Atual",
      location: "Bauru, SP",
      description: [
        "Responsável por cuidar de todas a infraestrutura de software da empresa, desenvolvendo soluções internas para automatizar e simplificar processos",
        "Criei diversos webapp para os alunos da instituição, para diversas finalidades, fazendo com que a experiência dos usuários fosse imersivas e agradável",
        "Tecnologias: React, React Native, Node, GraphQL, Laravel, Google Cloud, PostgreSQL, Python"
      ],
      current: true
    },
    {
      title: "Autônomo",
      company: "Jhow Technology",
      period: "Abril 2022 - Atual",
      location: "Bauru, SP",
      description: [
        "Criei diversos webapps, aplicativos, ERPs e páginas estáticas para diversos clientes, sendo o maior deles o Sebrae no projeto ALI Academy",
        "Tecnologias: React, React Native, Next, Vite, Node, GraphQL, Google Cloud, AWS, Vercel, Oracle DB e SQL Server"
      ],
      current: true
    },
    {
      title: "Programador Web",
      company: "Agência 7AB",
      period: "Junho 2022 - Julho 2023",
      location: "Bauru, SP",
      description: [
        "Responsável pelo projeto que culminou na criação do app que é utilizado por toda instituição para envio de atividades acadêmicas",
        "Desenvolvi diversas páginas web para lançamentos de produtos digitais",
        "Tecnologias: React, React Native, Node, Wordpress, Google Cloud, Azure"
      ],
      current: false
    },
    {
      title: "Programador Mobile",
      company: "Honorio Advocacia",
      period: "Janeiro 2021 - Junho 2022",
      location: "Bauru, SP",
      description: [
        "Responsável pelo projeto de ERP integrado a um app para auxiliar os clientes da empresa",
        "Desenvolvi um início de app para a criação de uma rede de relacionamentos dos clientes para a Empresa",
        "Tecnologias: React, React Native, Node, AWS"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-bl from-neutral-900 via-stone-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">
            Experiência <span className="bg-gradient-to-r from-[#E70149] to-[#03E5FB] bg-clip-text text-transparent">Profissional</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E70149] to-[#03E5FB] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-[#E70149] to-[#03E5FB]"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#E70149] to-[#00eaff] rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-500">{exp.period}</span>
                      {exp.current && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          Atual
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Building size={16} className="text-gray-500" />
                      <span className="font-medium text-gray-700">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-500">{exp.location}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-600 text-sm leading-relaxed">
                          • {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;