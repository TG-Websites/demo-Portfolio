// src/components/Testimonials.tsx
export default function Testimonials() {
  const feedback = [
    {
      name: "रमेश यादव",
      role: "दीघा निवासी",
      message:
        "राजीव जी ने हर समय हमारी समस्याओं को सुना और तुरंत समाधान किया। उनका काम काबिले तारीफ है।",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "सीमा देवी",
      role: "ग्राम पंचायत सदस्य",
      message:
        "हमारे गांव में सड़क और नाली बनवाकर उन्होंने जो काम किया, उससे सभी लोग खुश हैं।",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "विनोद कुमार",
      role: "स्थानीय व्यापारी",
      message:
        "विकास के हर काम में उनकी ईमानदारी और मेहनत साफ झलकती है। हम गर्व महसूस करते हैं।",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20  bg-gradient-to-br from-gray-800 to-gray-900  text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#E6B400]">जनता </span>
            <span className="text-white">की राय</span>
          </h2>
          <p className="text-gray-400 text-lg">
            समुदाय के लोगों के विचार और अनुभव
          </p>
        </div>

        {/* Clean Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {feedback.map((item, i) => (
            <div
              key={i}
              className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300"
            >
              {/* Quote */}
              <div className="text-[#E6B400] text-4xl font-extrabold  font-sans mb-4">"</div>
              
              {/* Message */}
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {item.message}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}