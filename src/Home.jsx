import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingFallback from '@components/LoadingFallback';

const navLinks = [
  { label: "Home", to: "/", color: "bg-blue-500/80" },
  { label: "System", to: "/system", color: "bg-green-500/80" },
  { label: "Digital Liberia", to: "/digital-liberia", color: "bg-purple-500/80" },
  { label: "LibPay", to: "/libpay", color: "bg-yellow-500/80" },
  { label: "Liberian Post", to: "/liberian-post", color: "bg-pink-500/80" }
];

const logos = [
  "/logos/liberianpost.png",
  "/logos/digital.png",
  "/logos/libmusic.png",
  "/logos/libconnectsit.png",
  "/logos/libpaysit.png",
  "/logos/seal of liberia.png",
  "/logos/liberia.png"
];

const sections = [
  {
    id: "intro",
    title: "Welcome to Digital Liberia",
    bgColor: "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10",
    borderColor: "border-blue-400/30",
    content: (
      <>
        <p className="text-white">
          Digital Liberia is a <span className="font-semibold">bold, nation-scale digital ecosystem</span> that aims to digitally transform governance, commerce, and everyday life in Liberia.
        </p>
        <p className="mt-4 text-white">
          By unifying services into a single mobile platform, Digital Liberia serves citizens, businesses, and institutions with tools to interact securely, efficiently, and transparently—laying the foundation for a digitally empowered economy.
        </p>
        <div className="mt-6">
          <div className="inline-flex items-center bg-yellow-500/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-400/30 hover:bg-yellow-500/50 transition-colors">
            <Link to="/digital-liberia" className="text-yellow-100 hover:text-white transition-colors">
              To know more about 
              <span className="font-semibold ml-1">Digital Liberia</span>
            </Link>
            <span className="ml-2 text-yellow-100">→</span>
          </div>
        </div>
      </>
    )
  },
  {
    id: "ecosystem",
    title: "Ecosystem Components",
    bgColor: "bg-gradient-to-br from-green-500/10 via-teal-500/10 to-emerald-600/10",
    borderColor: "border-green-400/30",
    content: (
      <div className="space-y-12 text-white text-left">
        <article>
          <h3 className="text-2xl font-semibold mb-2">1. National Database Management System (NDMS)</h3>
          <p>A secure, centralized, and intelligent national data backbone to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Store/manage personal, institutional, and commercial data</li>
            <li>Enable access control across all government ministries</li>
            <li>Provide real-time data and analytics dashboards</li>
          </ul>
          <div className="mt-4">
            <div className="inline-flex items-center bg-yellow-500/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-400/30 hover:bg-yellow-500/50 transition-colors">
              <Link to="/system" className="text-yellow-100 hover:text-white transition-colors">
                Learn more about the 
                <span className="font-semibold ml-1">NDMS system</span>
              </Link>
              <span className="ml-2 text-yellow-100">→</span>
            </div>
          </div>
        </article>

        <article className="mt-8">
          <h3 className="text-2xl font-semibold mb-2">2. LibPay</h3>
          <p>A payment gateway solution that is fast, reliable, efficient and secure for all financial transactions in Liberia.</p>
          <div className="mt-2">
            <div className="inline-flex items-center bg-yellow-500/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-400/30 hover:bg-yellow-500/50 transition-colors">
              <Link to="/libpay" className="text-yellow-100 hover:text-white transition-colors">
                Discover more about 
                <span className="font-semibold ml-1">LibPay</span>
              </Link>
              <span className="ml-2 text-yellow-100">→</span>
            </div>
          </div>
        </article>
      </div>
    )
  },
  {
    id: "vision",
    title: "Vision & Mission",
    bgColor: "bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-600/10",
    borderColor: "border-purple-400/30",
    content: (
      <>
        <p className="mb-4 italic text-white text-lg">
          <strong>Vision:</strong> To become the digital backbone of Liberia—empowering people and the economy.
        </p>
        <p className="italic text-white text-lg">
          <strong>Mission:</strong> Deliver a secure platform for transparent governance and accessible services.
        </p>
      </>
    )
  },
  {
    id: "problem",
    title: "Problem Statement & Solution",
    bgColor: "bg-gradient-to-br from-rose-500/10 via-red-500/10 to-orange-600/10",
    borderColor: "border-rose-400/30",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">The Problem:</h3>
          <p className="text-white">
            For decades, Liberia has struggled with fragmented, paper-based records, weak identification systems and lack of centralized data. These limitations have impacted Government Services delivery, electoral credibility, healthcare access, educational tracking, social welfare distribution, and national security. This identity vacuum has made it nearly impossible to develop strong, inclusive digital or physical infrastructure.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Digital Liberia is Here to Fix That:</h3>
          <p className="text-white">
            At the heart of our system lies a Digital Social Security Number (DSSN) - a unique, immutable identifier assigned to every individual within or outside Liberia's borders. Whether you are a Liberian citizen, resident or foreign national within Liberia, the DSSN is your digital identity - a gateway to services, recognition and inclusion.
          </p>
        </div>
      </div>
    )
  }
];

// AI Chat Component
const AIChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  // API configuration - using relative URL to avoid CORS issues
  const baseUrl = window.location.origin; // Use the same origin as the website
  const chatUrl = `${baseUrl}/api/chat`; // Proxy through your own server
  const healthUrl = `${baseUrl}/api/health`; // Proxy through your own server

  // Check connection to AI server
  const checkConnection = async () => {
    try {
      const response = await fetch(healthUrl, { 
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setIsConnected(data.status === "healthy" && data.ollama === "connected");
      } else {
        setIsConnected(false);
      }
    } catch (error) {
      setIsConnected(false);
    }
  };

  // Send message to AI
  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, isUser: true };
    setMessages(prev => [userMessage, ...prev]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(chatUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiMessage = { text: data.response || "I'm here to help. What else would you like to know?", isUser: false };
        setMessages(prev => [aiMessage, ...prev]);
      } else {
        const errorMessage = { 
          text: "I'm experiencing some technical difficulties. Please try again later.", 
          isUser: false 
        };
        setMessages(prev => [errorMessage, ...prev]);
      }
    } catch (error) {
      const errorMessage = { 
        text: "I'm currently unavailable. Please check your connection and try again.", 
        isUser: false 
      };
      setMessages(prev => [errorMessage, ...prev]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      sendMessage();
    }
  };

  // Check connection when chat opens
  useEffect(() => {
    if (isChatOpen) {
      checkConnection();
    }
  }, [isChatOpen]);

  return (
    <>
      {/* Floating AI Button */}
      <div 
        className="fixed z-50 right-4 bottom-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all hover:scale-110"
        onClick={() => setIsChatOpen(true)}
      >
        <div className="text-white text-xs font-bold text-center px-1">
          AI Assistant
        </div>
      </div>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-900 w-full h-full max-w-4xl max-h-[90vh] rounded-lg flex flex-col border border-gray-700">
            {/* Header */}
            <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-800">
              <h2 className="text-white text-lg font-bold">Digital Liberia AI Assistant</h2>
              <button 
                className="text-white hover:text-gray-300 text-xl"
                onClick={() => setIsChatOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-900">
              {messages.length === 0 && !isLoading && (
                <div className="text-center text-gray-400 my-8">
                  <p>Hello! I'm your Digital Liberia AI assistant.</p>
                  <p className="mt-2">How can I help you today?</p>
                </div>
              )}
              
              {isLoading && (
                <div className="flex items-center p-4 text-gray-400">
                  <div className="w-5 h-5 border-t-2 border-green-500 rounded-full animate-spin mr-2"></div>
                  Digital Liberia AI is thinking...
                </div>
              )}
              
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    {!message.isUser && (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-white text-xs">AI</span>
                      </div>
                    )}
                    <div
                      className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                        message.isUser
                          ? "bg-blue-600 text-white"
                          : "bg-gray-800 text-white"
                      }`}
                    >
                      {message.text}
                    </div>
                    {message.isUser && (
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                        <span className="text-white text-xs">You</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-700 bg-gray-800">
              <div className="flex">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Message Digital Liberia AI..."
                  className="flex-1 bg-gray-700 text-white rounded-l p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-3 rounded-r hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  Send
                </button>
              </div>
              <div className="mt-2 flex items-center text-sm">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    isConnected ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <span className={isConnected ? "text-green-400" : "text-red-400"}>
                  {isConnected
                    ? "Connected to AI Server"
                    : "AI Server not connected"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function Home() {
  const location = useLocation();
  const [activeLogo, setActiveLogo] = useState(0);
  const [isAIOpen, setIsAIOpen] = useState(false);

  // Faster logo heartbeat (600ms instead of 1000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-blue-950 text-white font-inter overflow-x-hidden">
      {/* Layer 1: Dark Blue Background */}
      <div className="fixed inset-0 bg-blue-950 -z-50" />

      {/* Centered Image Slideshow - Fixed Position */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                index === activeLogo ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Layer 3: Navigation */}
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Combined Navigation and Logo Container */}
        <div className="bg-blue-950/80 backdrop-blur-md border-b border-blue-700/30">
          {/* Navigation Links - Single Row */}
          <div className="flex items-center justify-center px-4 py-4 max-w-7xl mx-auto">
            <nav className="flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center">
              {navLinks.map(link => (
                <div key={link.to} className={`flex-shrink-0 ${link.color} px-3 py-1 rounded-lg`}>
                  <Link 
                    to={link.to} 
                    className={`text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${
                      location.pathname === link.to 
                        ? "text-red-500" 
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Logo Bar - Updated with white backgrounds and heartbeat animation */}
          <div className="w-full bg-gradient-to-b from-blue-950 to-transparent overflow-x-auto">
            <div className="flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3">
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                    index === activeLogo 
                      ? "scale-110 bg-white shadow-lg" // White background for active logo
                      : "scale-100 bg-white/90" // White background for inactive logos
                  }`}
                  style={{
                    animation: index === activeLogo ? 'heartbeat 600ms ease-in-out' : 'none'
                  }}
                >
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Layer 4: Content Sections with Glass-like Backgrounds */}
      <main className="relative z-30 pt-48 pb-20 px-4 md:px-8">
        {sections.map((section, index) => (
          <section
            key={section.id}
            className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0
            }}
          >
            <div className={`${section.bgColor} backdrop-blur-lg rounded-xl border ${section.borderColor} p-6 md:p-8 shadow-lg relative overflow-hidden`}>
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              
              {/* Content container */}
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                  {section.title}
                </h2>
                <div className="text-white">
                  {section.content}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* New AI Assistant Section */}
        <section
          className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12"
          style={{
            animation: `fadeInUp 0.5s ease-out ${sections.length * 0.1}s forwards`,
            opacity: 0
          }}
        >
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-600/10 backdrop-blur-lg rounded-xl border border-purple-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                Digital Liberia AI Assistant
              </h2>
              <div className="text-white space-y-4">
                <p className="text-lg">
                  Our AI assistant is powered by advanced machine learning models to help you navigate Digital Liberia's ecosystem. It can answer questions about our services, provide guidance on using our platforms, and offer insights into Liberia's digital transformation journey.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 mt-4">
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">Features:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>24/7 assistance with Digital Liberia services</li>
                    <li>Information about government digital initiatives</li>
                    <li>Guidance on using LibPay and other platforms</li>
                    <li>Answers to frequently asked questions</li>
                    <li>Multi-language support (English and local dialects)</li>
                  </ul>
                </div>

                <button
                  onClick={() => setIsAIOpen(true)}
                  className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <span>Chat with AI Assistant</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* New Contact Us Section with Unique Styling */}
        <section
          className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12"
          style={{
            animation: `fadeInUp 0.5s ease-out ${(sections.length + 1) * 0.1}s forwards`,
            opacity: 0
          }}
        >
          <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-yellow-600/10 backdrop-blur-lg rounded-xl border border-amber-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            {/* Unique glass reflection effect with diagonal gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 backdrop-blur-sm"></div>
            
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                Contact Us
              </h2>
              <div className="text-white space-y-4">
                <p className="text-lg">
                  Have questions or need support? Reach out to us through any of these channels:
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="text-xl font-semibold mb-2 text-amber-200">Email:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:info@digitalliberia.com" className="hover:text-amber-300 transition-colors">info@digitalliberia.com</a>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:info@liberianpost.com" className="hover:text-amber-300 transition-colors">info@liberianpost.com</a>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="text-xl font-semibold mb-2 text-amber-200">Phone:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>WhatsApp: <a href="https://wa.me/231888001077" className="hover:text-amber-300 transition-colors">+231 888 001 077</a></span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call: <a href="tel:+231775055817" className="hover:text-amber-300 transition-colors">+231 775 055 817</a></span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-white/70 mt-4">
                  Our team is available to assist you Monday through Friday, 8:00 AM to 5:00 PM GMT.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Copyright */}
      <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
        <div className="border-t border-blue-700/30 pt-6">
          © {new Date().getFullYear()} Digital Liberia. All rights reserved.
        </div>
      </footer>

      {/* AI Chat Component */}
      <AIChat />

      {/* Global Styles - Updated with heartbeat animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        /* Hide scrollbar for containers */
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
