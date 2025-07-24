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
    <section id="testimonials" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-accent">जनता </span>
          <span className="underline decoration-accent">की राय</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {feedback.map((item, i) => (
            <div
              key={i}
              className="bg-bgSection border border-yellow-400 rounded-lg p-6 hover:shadow-xl transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-yellow-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6..."></path>
              </svg>
              <p className="text-gray-300 mb-6">{item.message}</p>
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-yellow-400 font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}