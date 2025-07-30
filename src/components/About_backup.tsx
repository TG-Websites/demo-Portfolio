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

            {/* Enhanced Interactive Tabs */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
              
              {/* Tab Navigation */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { 
                    key: "skills", 
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ),
                    label: "Skills",
                    hindi: "कौशल"
                  },
                  { 
                    key: "experience", 
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    ),
                    label: "Achievements", 
                    hindi: "उपलब्धियां"
                  },
                  { 
                    key: "vision", 
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ),
                    label: "Vision", 
                    hindi: "दृष्टि"
                  },
                ].map(({ key, icon, label, hindi }) => (
                  <button
                    key={key}
                    onClick={() => setTab(key as any)}
                    className={`group relative p-6 rounded-2xl font-bold text-center flex flex-col items-center gap-3 transition-all duration-500 transform hover:scale-105 ${
                      tab === key 
                        ? "bg-gradient-to-br from-[#E6B400] to-yellow-400 text-black shadow-xl shadow-[#E6B400]/30" 
                        : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      tab === key ? "bg-black/20" : "bg-[#E6B400]/20"
                    }`}>
                      {icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{label}</div>
                      <div className="text-xs opacity-75">{hindi}</div>
                    </div>
                    
                    {tab === key && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-50"></div>
                    )}
                  </button>
                ))}
              </div>

              </div>

              {/* Enhanced Tab Content */}
              <div className="min-h-[400px]">
                {tab === "skills" && (
                  <div className="space-y-6 animate-fadeInUp">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">मुख्य कौशल</h3>
                    <div className="grid gap-6">
                      {[
                        {
                          title: "Leadership & Governance",
                          desc: "सभी वर्गों को जोड़कर विकास कार्यों का कुशल नेतृत्व और प्रभावी प्रशासन।",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          ),
                          progress: 95
                        },
                        {
                          title: "Policy Implementation", 
                          desc: "सरकारी योजनाओं का जमीनी स्तर पर सफल क्रियान्वयन और निगरानी।",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          progress: 90
                        },
                        {
                          title: "Public Speaking & Communication",
                          desc: "जनसंपर्क, भाषण कला और प्रभावी संवाद में विशेषज्ञता।",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                          ),
                          progress: 88
                        }
                      ].map((skill, index) => (
                        <div key={index} className="group bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-6 hover:from-[#E6B400]/10 hover:to-yellow-400/5 transition-all duration-500 hover:scale-105 border border-white/10">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#E6B400] to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-bold text-xl mb-2">{skill.title}</h4>
                              <p className="text-gray-300 leading-relaxed">{skill.desc}</p>
                            </div>
                          </div>
                          
                          {/* Progress bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">दक्षता स्तर</span>
                              <span className="text-[#E6B400] font-bold">{skill.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-[#E6B400] to-yellow-400 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "experience" && (
                  <div className="space-y-6 animate-fadeInUp">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">मुख्य उपलब्धियां</h3>
                    <div className="grid gap-6">
                      {[
                        {
                          title: "300+ Development Projects",
                          desc: "सड़कों, नालियों, सामुदायिक भवनों और बुनियादी ढांचे का निर्माण।",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0v-4a2 2 0 012-2h2m0 0V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v6.1" />
                            </svg>
                          ),
                          stats: "300+",
                          period: "2015-2025"
                        },
                        {
                          title: "Youth Empowerment Programs",
                          desc: "हजारों युवाओं को कौशल प्रशिक्षण, रोजगार और स्वरोजगार के अवसर।",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          ),
                          stats: "5000+",
                          period: "2018-2025"
                        },
                        {
                          title: "Health & Wellness Camps",
                          desc: "निःशुल्क चिकित्सा शिविर और स्वास्थ्य जागरूकता कार्यक्रम।",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          ),
                          stats: "100+",
                          period: "2016-2025"
                        }
                      ].map((achievement, index) => (
                        <div key={index} className="group bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-6 hover:from-[#E6B400]/10 hover:to-yellow-400/5 transition-all duration-500 hover:scale-105 border border-white/10">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#E6B400] to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              {achievement.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="text-white font-bold text-xl">{achievement.title}</h4>
                                <div className="text-right">
                                  <div className="text-2xl font-black text-[#E6B400]">{achievement.stats}</div>
                                  <div className="text-xs text-gray-400">{achievement.period}</div>
                                </div>
                              </div>
                              <p className="text-gray-300 leading-relaxed">{achievement.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "vision" && (
                  <div className="space-y-6 animate-fadeInUp">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">भविष्य की दृष्टि</h3>
                    <div className="grid gap-6">
                      {[
                        {
                          title: "Inclusive Development",
                          desc: "सभी वर्गों के लिए समान अवसर और न्यायसंगत विकास की नीति।",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          ),
                          target: "2025-2030"
                        },
                        {
                          title: "Digital Transformation",
                          desc: "डिजिटल इंडिया मिशन को तेज़ी से आगे बढ़ाना और ई-गवर्नेंस को मजबूत करना।",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          ),
                          target: "2026-2030"
                        },
                        {
                          title: "Future Ready Youth",
                          desc: "स्टार्टअप इकोसिस्टम, इनोवेशन हब और उद्यमिता को बढ़ावा देना।",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ),
                          target: "2025-2035"
                        }
                      ].map((vision, index) => (
                        <div key={index} className="group bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-6 hover:from-[#E6B400]/10 hover:to-yellow-400/5 transition-all duration-500 hover:scale-105 border border-white/10">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#E6B400] to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              {vision.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="text-white font-bold text-xl">{vision.title}</h4>
                                <div className="bg-[#E6B400]/20 px-3 py-1 rounded-full">
                                  <span className="text-[#E6B400] text-sm font-semibold">{vision.target}</span>
                                </div>
                              </div>
                              <p className="text-gray-300 leading-relaxed">{vision.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}