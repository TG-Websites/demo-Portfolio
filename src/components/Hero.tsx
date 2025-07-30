// src/components/Hero.tsx

import { useEffect, useState } from 'react';
import heroImage from '../assets/hero.png';

export default function Hero() {

  const [showScrollDown, setShowScrollDown] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollDown(window.scrollY < 50);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-[#E6B400]/20 to-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-[#E6B400]/15 to-amber-300/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-[#E6B400]/5 via-transparent to-yellow-300/5 rounded-full blur-2xl animate-spin-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#E6B400] rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-[#E6B400] rounded-full animate-ping delay-700"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
          
          {/* Left Content - Text Section */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E6B400]/20 to-yellow-400/10 backdrop-blur-md px-6 py-3 rounded-full border border-[#E6B400]/30 shadow-lg animate-fadeInUp">
              <div className="relative">
                <div className="w-3 h-3 bg-[#E6B400] rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-[#E6B400] rounded-full animate-ping opacity-75"></div>
              </div>
              <p className="text-[#E6B400] uppercase tracking-wider text-sm font-bold">जनसेवक • लीडर • विजनरी</p>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                <span className="block text-white  animate-fadeInUp">
                  नमस्ते,
                </span>
                <span className="block text-transparent bg-gradient-to-r from-[#E6B400] via-yellow-300 to-amber-400 bg-clip-text animate-fadeInUp delay-200 drop-shadow-lg mb-2">
                  राजीव कुमार
                </span>
                <span className="block text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-[#E6B400] bg-clip-text animate-fadeInUp delay-300">
                  सिंह
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-200 animate-fadeInUp delay-400">
                <span className="text-[#E6B400]">दीघा</span> से आपके लिए
              </h2>
            </div>
            
            {/* Description */}
            <div className="space-y-6 animate-fadeInUp delay-500">
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl">
                विकास, शिक्षा और रोजगार के लिए आपके साथ कदम से कदम मिलाकर चलने का संकल्प।
              </p>
              <p className="text-xl lg:text-2xl font-semibold text-[#E6B400] italic">
                "समाज सेवा ही मेरा धर्म है।"
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp delay-600">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#E6B400] via-yellow-400 to-amber-400 text-black font-bold px-8 py-4 rounded-2xl hover:from-amber-400 hover:via-yellow-400 hover:to-[#E6B400] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#E6B400]/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">संपर्क करें</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-3 border-2 border-[#E6B400] text-[#E6B400] font-bold px-8 py-4 rounded-2xl hover:bg-[#E6B400] hover:text-black transition-all duration-500 transform hover:scale-105 backdrop-blur-md bg-white/5 hover:shadow-xl hover:shadow-[#E6B400]/25"
              >
                <span>हमारा विजन</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            </div>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fadeInUp delay-700">
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="text-3xl lg:text-4xl font-black text-[#E6B400] group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="absolute inset-0 text-3xl lg:text-4xl font-black text-[#E6B400] blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300">10+</div>
                </div>
                <div className="text-sm lg:text-base text-gray-400 font-medium mt-1">वर्षों का अनुभव</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="text-3xl lg:text-4xl font-black text-[#E6B400] group-hover:scale-110 transition-transform duration-300">5000+</div>
                  <div className="absolute inset-0 text-3xl lg:text-4xl font-black text-[#E6B400] blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300">5000+</div>
                </div>
                <div className="text-sm lg:text-base text-gray-400 font-medium mt-1">खुश परिवार</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="text-3xl lg:text-4xl font-black text-[#E6B400] group-hover:scale-110 transition-transform duration-300">25+</div>
                  <div className="absolute inset-0 text-3xl lg:text-4xl font-black text-[#E6B400] blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300">25+</div>
                </div>
                <div className="text-sm lg:text-base text-gray-400 font-medium mt-1">विकास परियोजनाएं</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="lg:col-span-5 relative flex justify-center items-center order-1 lg:order-2 animate-fadeInRight">
            <div className="relative w-full max-w-lg mx-auto">
              
              {/* Main Image Container with Glassmorphism */}
              <div className="relative group">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#E6B400]/30 to-yellow-400/20 rounded-3xl blur-2xl scale-105 group-hover:scale-110 transition-transform duration-700"></div>
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl group-hover:shadow-[#E6B400]/30 transition-all duration-500">
                  <img
                    src={heroImage}
                    alt="Rajiv Kumar Singh"
                    className="w-full h-auto object-contain rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-6 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
              
              {/* Floating Action Badges - Positioned to avoid overlap */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#E6B400] to-yellow-400 rounded-full flex items-center justify-center shadow-xl animate-bounce hover:animate-none hover:scale-110 transition-transform duration-300 cursor-pointer z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300 cursor-pointer z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#E6B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <div className="absolute top-1/3 -right-6 w-10 h-10 bg-gradient-to-br from-amber-400/80 to-[#E6B400]/60 rounded-full flex items-center justify-center shadow-lg animate-ping z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className="absolute bottom-1/3 -left-6 w-8 h-8 bg-gradient-to-br from-yellow-300/70 to-amber-400/50 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Action Cards */}
        <div className="mt-20 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeInUp delay-800">
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#E6B400]/50 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E6B400] to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0v-4a2 2 0 012-2h2m0 0V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v6.1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">शिक्षा सुधार</h3>
                  <p className="text-gray-400 text-sm">गुणवत्तापूर्ण शिक्षा</p>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#E6B400]/50 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E6B400] to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">रोजगार सृजन</h3>
                  <p className="text-gray-400 text-sm">स्व-रोजगार के अवसर</p>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#E6B400]/50 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E6B400] to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">सामाजिक कल्याण</h3>
                  <p className="text-gray-400 text-sm">समुदायिक विकास</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
    {showScrollDown && (
  <div className="absolute bottom-52 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
    <div className="flex flex-col items-center gap-3 text-[#E6B400] animate-bounce cursor-pointer group">
      <span className="text-sm font-semibold tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
        नीचे स्क्रॉल करें
      </span>
      <div className="w-6 h-10 border-2 border-[#E6B400] rounded-full flex justify-center group-hover:border-yellow-300 transition-colors duration-300">
        <div className="w-1 h-3 bg-[#E6B400] rounded-full mt-2 animate-pulse group-hover:bg-yellow-300"></div>
      </div>
    </div>
  </div>
)}
    </section>
  );
}
