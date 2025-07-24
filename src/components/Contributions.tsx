// src/components/Contributions.tsx
export default function Contributions() {
  const cards = [
    {
      title: "Infrastructure Development",
      description:
        "क्षेत्र में नई सड़कों, गलियों और सामुदायिक भवनों का निर्माण कर स्थानीय निवासियों को बेहतर मूलभूत सुविधाएं उपलब्ध कराईं। हर गांव तक सड़क पहुँचाना मेरा संकल्प रहा है।",
      image: "./assets/gallery1.jpg",
    },
    {
      title: "Skill Development Centers",
      description:
        "युवाओं के लिए आधुनिक स्किल डेवलपमेंट सेंटर खोले, जहाँ कंप्यूटर, हस्तकला और तकनीकी प्रशिक्षण के माध्यम से उन्हें आत्मनिर्भर बनाया गया। हजारों नौजवान लाभान्वित हुए।",
      image: "./assets/gallery3.jpg",
    },
    {
      title: "Education Reforms",
      description:
        "स्कूलों में स्मार्ट क्लास, पुस्तकालय और खेल सामग्री की व्यवस्था कर शिक्षा की गुणवत्ता में व्यापक सुधार किया गया। बच्चों को बेहतर भविष्य की ओर अग्रसर किया।",
      image: "./assets/gallery2.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-accent">My </span>
          <span className="underline decoration-accent">Contributions</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#E6B400]/90 via-[#E6B400]/90 to-black/95 opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 text-center p-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-black mb-4">{card.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-[#E6B400] hover:scale-110 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="./contributions.html"
            className="inline-block border border-accent text-accent font-semibold px-6 py-3 rounded hover:bg-accent hover:text-black transition"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
}