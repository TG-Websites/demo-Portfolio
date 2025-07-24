// src/components/About.tsx
import { useState } from "react";
import aboutImage from '../assets/About.png';

export default function About() {
  const [tab, setTab] = useState<"skills" | "experience" | "vision">("skills");

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E6B400]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E6B400]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm p-6 shadow-2xl">
              <img
                src={aboutImage}
                alt="Rajiv Kumar Singh - About"
                className="w-full h-auto max-h-[32rem] object-contain rounded-xl transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#E6B400] to-yellow-300 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E6B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#E6B400]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E6B400]/30 mb-6 w-fit">
              <div className="w-2 h-2 bg-[#E6B400] rounded-full animate-pulse"></div>
              <span className="text-[#E6B400] text-sm font-semibold uppercase tracking-wider">परिचय</span>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">About</span>{" "}
              <span className="text-transparent bg-gradient-to-r from-[#E6B400] to-yellow-300 bg-clip-text">Me</span>
            </h2>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              मैं <span className="text-[#E6B400] font-semibold">राजीव कुमार सिंह</span>,
              दीघा विधानसभा क्षेत्र से एक समर्पित जनसेवक हूं। मेरा उद्देश्य शिक्षा,
              स्वास्थ्य और रोजगार को हर घर तक पहुँचाना है। पिछले{" "}
              <span className="text-white font-semibold">10 वर्षों</span> में अनेक विकास कार्य किए हैं
              जैसे सड़क निर्माण, विद्यालयों का आधुनिकीकरण एवं युवाओं के लिए स्किल
              डेवलपमेंट सेंटर।
            </p>

            <blockquote className="border-l-4 border-[#E6B400] pl-6 mb-8 bg-gray-800/30 py-4 rounded-r-lg">
              <p className="text-white font-semibold text-xl italic">
                "विकास तभी सार्थक है जब हर वर्ग लाभान्वित हो"
              </p>
            </blockquote>

            {/* Enhanced Tabs */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-2 mb-6">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "skills", icon: "fas fa-lightbulb", label: "Skills" },
                  { key: "experience", icon: "fas fa-award", label: "Achievements" },
                  { key: "vision", icon: "fas fa-eye", label: "Vision" },
                ].map(({ key, icon, label }) => (
                  <button
                    key={key}
                    onClick={() => setTab(key as any)}
                    className={`px-4 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      tab === key 
                        ? "bg-[#E6B400] text-black shadow-lg transform scale-105" 
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    <i className={icon}></i> {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Tab Content */}
            <div className="min-h-[200px]">
              {tab === "skills" && (
                <div className="space-y-4 animate-fadeInUp">
                  {[
                    {
                      title: "Leadership & Governance",
                      desc: "सभी वर्गों को जोड़कर विकास कार्यों का नेतृत्व।",
                      icon: "fas fa-users"
                    },
                    {
                      title: "Policy Implementation", 
                      desc: "सरकारी योजनाओं का प्रभावी क्रियान्वयन।",
                      icon: "fas fa-clipboard-check"
                    },
                    {
                      title: "Public Speaking",
                      desc: "जनसंपर्क में निपुणता।",
                      icon: "fas fa-microphone"
                    }
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/40 transition-colors duration-300">
                      <div className="w-12 h-12 bg-[#E6B400]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${skill.icon} text-[#E6B400] text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">{skill.title}</h4>
                        <p className="text-gray-300">{skill.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab === "experience" && (
                <div className="space-y-4 animate-fadeInUp">
                  {[
                    {
                      title: "300+ Development Projects",
                      desc: "सड़कों, नालियों, सामुदायिक भवनों का निर्माण।",
                      icon: "fas fa-hammer"
                    },
                    {
                      title: "Youth Empowerment Programs",
                      desc: "हजारों युवाओं को प्रशिक्षण और रोजगार।",
                      icon: "fas fa-graduation-cap"
                    },
                    {
                      title: "Health Camps",
                      desc: "निशुल्क चिकित्सा शिविरों का आयोजन।",
                      icon: "fas fa-heart"
                    }
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/40 transition-colors duration-300">
                      <div className="w-12 h-12 bg-[#E6B400]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${achievement.icon} text-[#E6B400] text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">{achievement.title}</h4>
                        <p className="text-gray-300">{achievement.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab === "vision" && (
                <div className="space-y-4 animate-fadeInUp">
                  {[
                    {
                      title: "Inclusive Development",
                      desc: "हर वर्ग के लिए समान अवसर।",
                      icon: "fas fa-hands-helping"
                    },
                    {
                      title: "Digital Transformation",
                      desc: "डिजिटल इंडिया को गति देना।",
                      icon: "fas fa-laptop"
                    },
                    {
                      title: "Future Ready Youth",
                      desc: "स्टार्टअप और रोजगार को प्रोत्साहन।",
                      icon: "fas fa-rocket"
                    }
                  ].map((vision, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/40 transition-colors duration-300">
                      <div className="w-12 h-12 bg-[#E6B400]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${vision.icon} text-[#E6B400] text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">{vision.title}</h4>
                        <p className="text-gray-300">{vision.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}