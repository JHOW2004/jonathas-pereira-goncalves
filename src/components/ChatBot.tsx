import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Carry from "../../public/Carry sem fundo.webp"

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Olá! Eu sou a Carry, a IA criada pelo Jonathas. Como posso te ajudar hoje? Você poder perguntar algo sobre Jonathas ou qualquer coisa como: Como resolver problemas em um código ou dicas e ajuda para solucionar um problemas, uma curiosidade sobre um país, e etc..`,
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("https://servidor-carry.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage,
          usuario: "Visitante do portfólio",
          inteligencia: "Carry AI",
        }),
      });

      if (!response.ok) {
        throw new Error("Erro na requisição");
      }

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente mais tarde.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        id="IA"
        aria-label="IA"
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-[#E70149] to-[#03E5FB] text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[330px] h-[500px] bg-gray-900 border rounded-xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#E70149] to-[#03E5FB] rounded-t-xl">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
              
                <img src={Carry} width={20} height={20}/>
              </div>
              <div>
                <h3 className="text-white font-semibold">Carry AI</h3>
                <p className="text-white/80 text-sm">Assistente do Jonathas</p>
              </div>
            </div>
            <button
              id="IaOpen"
              aria-label="IA Open"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? "bg-[#E70149] text-white"
                      : "bg-gray-800 text-gray-100"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && (
                       <img src={Carry} width={16} height={16}/>
                    )}
                    {message.isUser && (
                      <User
                        size={16}
                        className="text-white mt-1 flex-shrink-0"
                      />
                    )}
                    <div className="flex-1">
                      {message.isUser ? (
                        <p className="text-sm">{message.text}</p>
                      ) : (
                        <div className="text-sm prose prose-invert max-w-none">
                          <ReactMarkdown
                            components={{
                              p: ({ children }) => (
                                <p className="mb-2 last:mb-0">{children}</p>
                              ),
                              strong: ({ children }) => (
                                <strong className="text-[#03E5FB]">
                                  {children}
                                </strong>
                              ),
                              em: ({ children }) => (
                                <em className="text-[#E70149]">{children}</em>
                              ),
                              code: ({ children }) => (
                                <code className="bg-gray-700 px-1 py-0.5 rounded text-[#03E5FB]">
                                  {children}
                                </code>
                              ),
                              ul: ({ children }) => (
                                <ul className="list-disc list-inside mb-2">
                                  {children}
                                </ul>
                              ),
                              ol: ({ children }) => (
                                <ol className="list-decimal list-inside mb-2">
                                  {children}
                                </ol>
                              ),
                              li: ({ children }) => (
                                <li className="mb-1">{children}</li>
                              ),
                            }}
                          >
                            {message.text}
                          </ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-100 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bot size={16} className="text-[#03E5FB]" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#03E5FB] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#03E5FB] rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-[#03E5FB] rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#03E5FB] focus:outline-none"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                aria-label="SendMenssage"
                disabled={!inputMessage.trim() || isLoading}
                className="px-4 py-2 bg-gradient-to-r from-[#E70149] to-[#03E5FB] text-white rounded-lg hover:from-[#E70149]/90 hover:to-[#03E5FB]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
