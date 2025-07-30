// src/components/Contributions.tsx
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';

export default function Contributions() {
  const cards = [
    {
      title: "Infrastructure Development",
      subtitle: "बुनियादी ढांचा विकास",
      description:
        "क्षेत्र में नई सड़कों, गलियों और सामुदायिक भवनों का निर्माण कर स्थानीय निवासियों को बेहतर मूलभूत सुविधाएं उपलब्ध कराईं। हर गांव तक सड़क पहुँचाना मेरा संकल्प रहा है।",
      image: gallery1,
      stats: "50+ सड़कें",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0v-4a2 2 0 012-2h2m0 0V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v6.1" />
        </svg>
      ),
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Skill Development Centers",
      subtitle: "कौशल विकास केंद्र", 
      description:
        "युवाओं के लिए आधुनिक स्किल डेवलपमेंट सेंटर खोले, जहाँ कंप्यूटर, हस्तकला और तकनीकी प्रशिक्षण के माध्यम से उन्हें आत्मनिर्भर बनाया गया। हजारों नौजवान लाभान्वित हुए।",
      image: gallery3,
      stats: "5000+ युवा",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Education Reforms",
      subtitle: "शिक्षा सुधार",
      description:
        "स्कूलों में स्मार्ट क्लास, पुस्तकालय और खेल सामग्री की व्यवस्था कर शिक्षा की गुणवत्ता में व्यापक सुधार किया गया। बच्चों को बेहतर भविष्य की ओर अग्रसर किया।",
      image: gallery2,
      stats: "25+ स्कूल",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-orange-500 to-red-600"
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#E6B400]/10 to-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-amber-400/8 to-[#E6B400]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-[#E6B400]/3 via-transparent to-yellow-300/3 rounded-full blur-2xl animate-spin-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-32 left-20 w-2 h-2 bg-[#E6B400] rounded-full animate-ping"></div>
        <div className="absolute top-48 right-32 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-amber-400 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E6B400]/20 to-yellow-400/10 backdrop-blur-md px-6 py-3 rounded-full border border-[#E6B400]/30 shadow-lg mb-6">
            <div className="relative">
              <div className="w-3 h-3 bg-[#E6B400] rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-[#E6B400] rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-[#E6B400] text-sm font-bold uppercase tracking-wider">मेरे योगदान</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
            <span className="text-white">My</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-[#E6B400] via-yellow-300 to-amber-400 bg-clip-text">Contributions</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            समाज सेवा और विकास के क्षेत्र में मेरे योगदान की एक झलक - आइए देखें कैसे हमने मिलकर सकारात्मक बदलाव लाया है
          </p>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-[#E6B400]/50 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-[#E6B400]/20"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#E6B400] to-yellow-400 rounded-full px-4 py-2 transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500 delay-200">
                  <span className="text-black font-bold text-sm">{card.stats}</span>
                </div>
                
                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 transform -translate-x-20 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                  <div className="text-[#E6B400]">
                    {card.icon}
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#E6B400] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[#E6B400] font-semibold text-lg">
                    {card.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-all duration-500">
                  {card.description}
                </p>
                
                {/* Action Button */}
                <div className="pt-4">
                  <button className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-[#E6B400]/20 to-yellow-400/10 hover:from-[#E6B400] hover:to-yellow-400 text-[#E6B400] hover:text-black font-semibold px-6 py-3 rounded-2xl transition-all duration-500 transform hover:scale-105 border border-[#E6B400]/30 hover:border-transparent overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">विस्तार से देखें</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Enhanced Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E6B400]/5 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Impact Statistics */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            <span className="text-[#E6B400]">Impact</span> Summary
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "300+", label: "परियोजनाएं पूर्ण", icon: "🏗️" },
              { number: "5000+", label: "परिवार लाभान्वित", icon: "👨‍👩‍👧‍👦" },
              { number: "25+", label: "स्कूल सुधारे", icon: "🏫" },
              { number: "10+", label: "वर्षों का अनुभव", icon: "⏱️" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-black text-[#E6B400] mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call-to-Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="space-y-3 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                और भी बहुत कुछ देखना चाहते हैं?
              </h3>
              <p className="text-gray-300 text-lg">
                मेरे सभी योगदान और परियोजनाओं की विस्तृत जानकारी प्राप्त करें
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="./contributions.html"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#E6B400] via-yellow-400 to-amber-400 text-black font-bold px-8 py-4 rounded-2xl hover:from-amber-400 hover:via-yellow-400 hover:to-[#E6B400] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#E6B400]/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">सभी योगदान देखें</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border-2 border-[#E6B400] text-[#E6B400] font-bold px-8 py-4 rounded-2xl hover:bg-[#E6B400] hover:text-black transition-all duration-500 transform hover:scale-105 backdrop-blur-md bg-white/5 hover:shadow-xl hover:shadow-[#E6B400]/25"
              >
                <span>संपर्क करें</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
