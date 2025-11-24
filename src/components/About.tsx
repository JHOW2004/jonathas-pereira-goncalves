import React from 'react';
import { Code, Smartphone, Cloud, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="bg-gradient-to-r from-[#E70149] to-[#03E5FB] bg-clip-text text-transparent">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E70149] to-[#03E5FB] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Profissional na área de desenvolvimento de software há 4 anos, sendo todos voltados para o segmento de 
              desenvolvimento mobile nativo e híbrido, desenvolvimento web e computação em nuvem.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Sou desenvolvedor Full Stack podendo desempenhar qualquer função no âmbito de desenvolvimento, 
              utilizando as principais e mais variadas linguagens usadas no mercado como: Java, Javascript/Typescript, 
              PHP e entre outras linguagens.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Formação</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800">Tecnólogo em Banco de Dados</h4>
                  <p className="text-gray-600">Fatec Bauru | 2022 – 2024</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Técnico em Desenvolvimento de Sistemas</h4>
                  <p className="text-gray-600">ETEC Rodrigues de Abreu | 2020 - 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm">React, Next.js, Vue, Angular e mais</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Development</h3>
              <p className="text-gray-600 text-sm">React Native, Ionic, apps nativos</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cloud Computing</h3>
              <p className="text-gray-600 text-sm">AWS, Google Cloud, Azure</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-orange-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Databases</h3>
              <p className="text-gray-600 text-sm">PostgreSQL, MySQL, Oracle, MongoDB, Redis e mais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;