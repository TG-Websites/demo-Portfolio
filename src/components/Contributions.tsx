// src/components/Contributions.tsx
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';

export default function Contributions() {
  const cards = [
    {
      title: "Infrastructure Development",
      description:
        "क्षेत्र में नई सड़कों, गलियों और सामुदायिक भवनों का निर्माण कर स्थानीय निवासियों को बेहतर मूलभूत सुविधाएं उपलब्ध कराईं। हर गांव तक सड़क पहुँचाना मेरा संकल्प रहा है।",
      image: gallery1,
    },
    {
      title: "Skill Development Centers", 
      description:
        "युवाओं के लिए आधुनिक स्किल डेवलपमेंट सेंटर खोले, जहाँ कंप्यूटर, हस्तकला और तकनीकी प्रशिक्षण के माध्यम से उन्हें आत्मनिर्भर बनाया गया। हजारों नौजवान लाभान्वित हुए।",
      image: gallery3,
    },
    {
      title: "Education Reforms",
      description:
        "स्कूलों में स्मार्ट क्लास, पुस्तकालय और खेल सामग्री की व्यवस्था कर शिक्षा की गुणवत्ता में व्यापक सुधार किया गया। बच्चों को बेहतर भविष्य की ओर अग्रसर किया।",
      image: gallery2,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-[#E6B400]">My </span>
          <span className=" ">Contributions</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          समाज सेवा और विकास के क्षेत्र में मेरे योगदान की एक झलक - आइए देखें कैसे हमने मिलकर बदलाव लाया है।
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-700 ease-out shadow-2xl hover:shadow-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-80 object-cover transform duration-1000 ease-out group-hover:scale-115"
              />
              
              {/* Content that's always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-0 group-hover:-translate-y-3 transition-all duration-500 ease-out">
                  {card.title}
                </h3>
                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-700 ease-out">
                  <p className="text-gray-200 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-900 delay-300 ease-out transform translate-y-4 group-hover:translate-y-0">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-800 delay-500 ease-out transform translate-y-6 group-hover:translate-y-0">
                    <span className="text-[#E6B400] text-sm font-semibold">Learn More</span>
                    <div className="w-8 h-8 rounded-full bg-[#E6B400] flex items-center justify-center transform scale-0 group-hover:scale-110 transition-all duration-600 delay-500 ease-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-black transform group-hover:translate-x-0.5 transition-transform duration-300 ease-out"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#E6B400]/20 via-[#E6B400]/40 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-800 ease-out z-15" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="./contributions.html"
            className="inline-flex items-center gap-2 border-2 border-[#E6B400] text-[#E6B400] font-semibold px-8 py-3 rounded-full hover:bg-[#E6B400] hover:text-black transition-all duration-500 ease-out transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-[#E6B400]/25"
          >
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">See More</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-500 ease-out hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}