// src/components/Hero.tsx

import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E6B400]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E6B400]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 gap-12 w-full z-10">
        {/* Text Content */}
        <div className="space-y-6 order-2 lg:order-1 pb-8 animate-fadeInLeft">
          <div className="inline-flex items-center gap-2 bg-[#E6B400]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E6B400]/30">
            <div className="w-2 h-2 bg-[#E6B400] rounded-full animate-pulse"></div>
            <p className="text-[#E6B400] uppercase tracking-wider text-sm font-semibold">जनसेवक</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block text-white mb-2 animate-fadeInUp">नमस्ते, मैं</span>
            <span className="block text-transparent bg-gradient-to-r from-[#E6B400] to-yellow-300 bg-clip-text animate-fadeInUp delay-200">
              राजीव कुमार सिंह
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 animate-fadeInUp delay-300">
            दीघा से आपके लिए
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl animate-fadeInUp delay-400">
            विकास, शिक्षा और रोजगार के लिए आपके साथ कदम से कदम मिलाकर चलने का संकल्प। 
            <span className="text-[#E6B400] font-medium"> समाज सेवा ही मेरा धर्म है।</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fadeInUp delay-500">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E6B400] to-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:from-yellow-400 hover:to-[#E6B400] transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-[#E6B400]/25"
            >
              <span>संपर्क करें</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-2 border-2 border-[#E6B400] text-[#E6B400] font-semibold px-8 py-4 rounded-full hover:bg-[#E6B400] hover:text-black transition-all duration-500 transform hover:scale-105 backdrop-blur-sm bg-white/5"
            >
              <span>हमारा विजन</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </a>
          </div>
          
          {/* Social Stats */}
          <div className="flex items-center gap-8 pt-8 animate-fadeInUp delay-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E6B400]">10+</div>
              <div className="text-sm text-gray-400">वर्षों का अनुभव</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E6B400]">5000+</div>
              <div className="text-sm text-gray-400">खुश परिवार</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E6B400]">25+</div>
              <div className="text-sm text-gray-400">विकास परियोजनाएं</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center items-center w-full order-1 lg:order-2 animate-fadeInRight">
          <div className="relative">
            {/* Profile Image Container */}
            <div className="relative flex items-center justify-center bg-transparent rounded-lg p-4">
              <img
                src={heroImage}
                alt="Rajiv Kumar Singh"
                className="w-80 h-96 lg:w-96 lg:h-[32rem] object-contain rounded-md shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#E6B400] rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E6B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-2 text-[#E6B400]">
          <span className="text-sm font-medium">नीचे स्क्रॉल करें</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
