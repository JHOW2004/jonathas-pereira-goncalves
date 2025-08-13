import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Building } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="bg-gradient-to-r from-[#E70149] to-[#03E5FB] bg-clip-text text-transparent">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E70149] to-[#03E5FB] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto? Estou sempre aberto a novas oportunidades e desafios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:jonathaspereira673@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      jonathaspereira673@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <a href="tel:+5514988168763" className="text-gray-600 hover:text-green-600 transition-colors">
                      +55 14 988168763
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Localização</h4>
                    <p className="text-gray-600">Bauru, São Paulo - Brasil</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Building className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Empresa</h4>
                    <p className="text-gray-600">Jhow Technology</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/JHOW2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jonathas-pereira-gon%C3%A7alves-abb045211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Jhow Technology</h3>
              <p className="text-blue-100 mb-4">
                Minha empresa onde criamos diversos sistemas. Já tivemos dezenas de clientes, 
                sendo o maior deles o Sebrae no projeto ALI Academy.
              </p>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="text-sm text-blue-100">
                  Especializada em desenvolvimento de sistemas web, mobile e soluções em nuvem.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E70149] to-[#03E5FB] text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;