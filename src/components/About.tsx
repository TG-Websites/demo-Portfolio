// src/components/About.tsx
import { useState } from "react";
import aboutImage from '../assets/About.png';

export default function About() {
  const [tab, setTab] = useState<"skills" | "experience" | "vision">("skills");

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#E6B400]/15 to-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-amber-400/10 to-[#E6B400]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-conic from-[#E6B400]/5 via-transparent to-yellow-300/5 rounded-full blur-2xl animate-spin-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-32 left-20 w-2 h-2 bg-[#E6B400] rounded-full animate-ping"></div>
        <div className="absolute top-48 right-32 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-amber-400 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E6B400]/20 to-yellow-400/10 backdrop-blur-md px-6 py-3 rounded-full border border-[#E6B400]/30 shadow-lg mb-6">
            <div className="relative">
              <div className="w-3 h-3 bg-[#E6B400] rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-[#E6B400] rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-[#E6B400] text-sm font-bold uppercase tracking-wider">मेरे बारे में जानें</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
            <span className="text-white">About</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-[#E6B400] via-yellow-300 to-amber-400 bg-clip-text">Me</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            एक समर्पित जनसेवक का सफर, जो विकास और सेवा के साथ समाज को आगे बढ़ाने में विश्वास करता है
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Enhanced Image Section */}
          <div className="xl:col-span-5 relative group">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#E6B400]/30 to-yellow-400/20 rounded-3xl blur-2xl scale-105 group-hover:scale-110 transition-transform duration-700"></div>
              
              {/* Image container with glassmorphism */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:shadow-[#E6B400]/30 transition-all duration-500">
                <img
                  src={aboutImage}
                  alt="Rajiv Kumar Singh - About"
                  className="w-full h-auto object-contain rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-8 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#E6B400] to-yellow-400 rounded-full flex items-center justify-center shadow-xl animate-bounce hover:animate-none hover:scale-110 transition-transform duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E6B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="xl:col-span-7 space-y-8">
            
            {/* Personal Story Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-[#E6B400]/20 transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E6B400] to-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">राजीव कुमार सिंह</h3>
                    <p className="text-[#E6B400] font-semibold text-lg">दीघा विधानसभा क्षेत्र के जनसेवक</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  मैं एक समर्पित जनसेवक हूं जो पिछले <span className="text-[#E6B400] font-semibold">10 वर्षों</span> से 
                  शिक्षा, स्वास्थ्य और रोजगार के क्षेत्र में काम कर रहा हूं। मेरा उद्देश्य हर घर तक विकास 
                  पहुंचाना और युवाओं के लिए बेहतर अवसर सृजित करना है।
                </p>
                
                <div className="bg-gradient-to-r from-[#E6B400]/20 to-yellow-400/10 rounded-2xl p-6 border-l-4 border-[#E6B400]">
                  <p className="text-white font-semibold text-xl italic">
                    "विकास तभी सार्थक है जब हर वर्ग लाभान्वित हो"
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "वर्षों का अनुभव", value: "10+", icon: "⏱️" },
                { label: "पूर्ण परियोजनाएं", value: "300+", icon: "🏗️" },
                { label: "लाभार्थी परिवार", value: "5000+", icon: "👨‍👩‍👧‍👦" }
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-black text-[#E6B400] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
