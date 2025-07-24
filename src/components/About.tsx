// src/components/About.tsx
import { useState } from "react";

export default function About() {
  const [tab, setTab] = useState<"skills" | "experience" | "vision">("skills");

  return (
    <section id="about" className="flex items-center py-20 bg-bgSection text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-xl overflow-hidden bg-gray-800 h-[35rem] md:h-[38rem] shadow-lg">
          <img
            src="./assets/gallery2.jpg"
            alt="Rajiv Kumar Singh"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            <span className="text-accent">About</span>{" "}
            <span className="underline decoration-accent decoration-4">Me</span>
          </h2>

          <p className="text-white mb-8 text-base md:text-lg leading-relaxed">
            मैं <span className="text-accent font-semibold">राजीव कुमार सिंह</span>,
            दीघा विधानसभा क्षेत्र से एक समर्पित जनसेवक हूं। मेरा उद्देश्य शिक्षा,
            स्वास्थ्य और रोजगार को हर घर तक पहुँचाना है। पिछले{" "}
            <span className="text-white">10 वर्षों</span> में अनेक विकास कार्य किए हैं
            जैसे सड़क निर्माण, विद्यालयों का आधुनिकीकरण एवं युवाओं के लिए स्किल
            डेवलपमेंट सेंटर। मैं मानता हूं कि{" "}
            <span className="text-white font-semibold">
              "विकास तभी सार्थक है जब हर वर्ग लाभान्वित हो"
            </span>।
          </p>

          {/* Tabs */}
          <div className="grid grid-cols-3 border-b border-gray-700 mb-6">
            {[
              { key: "skills", icon: "fas fa-lightbulb", label: "Skills" },
              { key: "experience", icon: "fas fa-award", label: "Achievements" },
              { key: "vision", icon: "fas fa-eye", label: "Vision" },
            ].map(({ key, icon, label }) => (
              <button
                key={key}
                onClick={() => setTab(key as any)}
                className={`pb-2 font-semibold text-lg flex items-center justify-center gap-2 ${
                  tab === key ? "border-b-2 border-accent text-accent" : "text-gray-400"
                }`}
              >
                <i className={icon}></i> {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {tab === "skills" && (
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <i className="fas fa-circle text-accent mt-1 text-xs"></i>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Leadership & Governance</h4>
                    <p className="text-gray-300">सभी वर्गों को जोड़कर विकास कार्यों का नेतृत्व।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-circle text-accent mt-1 text-xs"></i>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Policy Implementation</h4>
                    <p className="text-gray-300">सरकारी योजनाओं का प्रभावी क्रियान्वयन।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-circle text-accent mt-1 text-xs"></i>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Public Speaking</h4>
                    <p className="text-gray-300">जनसंपर्क में निपुणता।</p>
                  </div>
                </li>
              </ul>
            )}

            {tab === "experience" && (
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <i className="fas fa-star text-accent mt-1"></i>
                  <div>
                    <h4 className="text-white font-semibold text-lg">300+ Development Projects</h4>
                    <p className="text-gray-300">सड़कों, नालियों, सामुदायिक भवनों का निर्माण।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-star text-accent mt-1"></i>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Youth Empowerment Programs</h4>
                    <p className="text-gray-300">हजारों युवाओं को प्रशिक्षण और रोजगार।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-star text-accent mt-1"></i>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Health Camps</h4>
                    <p className="text-gray-300">निशुल्क चिकित्सा शिविरों का आयोजन।</p>
                  </div>
                </li>
              </ul>
            )}

            {tab === "vision" && (
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <i className="fas fa-bullseye text-accent mt-1"></i>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Inclusive Development</h4>
                    <p className="text-gray-300">हर वर्ग के लिए समान अवसर।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-bullseye text-accent mt-1"></i>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Digital Transformation</h4>
                    <p className="text-gray-300">डिजिटल इंडिया को गति देना।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-bullseye text-accent mt-1"></i>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Future Ready Youth</h4>
                    <p className="text-gray-300">स्टार्टअप और रोजगार को प्रोत्साहन।</p>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}