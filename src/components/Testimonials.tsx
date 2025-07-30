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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E6B400]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#E6B400]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E6B400]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E6B400]/30 mb-6">
            <div className="w-2 h-2 bg-[#E6B400] rounded-full animate-pulse"></div>
            <span className="text-[#E6B400] text-sm font-semibold uppercase tracking-wider">प्रतिक्रिया</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-[#E6B400] to-yellow-300 bg-clip-text">जनता</span>{" "}
            <span className="text-white">की राय</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            समुदाय के लोगों के विचार और अनुभव — देखें कैसे हमारे काम ने उनके जीवन में सकारात्मक बदलाव लाया है
          </p>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedback.map((item, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-[#E6B400]/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#E6B400]/20"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#E6B400] to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              {/* Message */}
              <p className="text-gray-200 text-base leading-relaxed mb-8 mt-4 group-hover:text-white transition-colors duration-300">
                {item.message}
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#E6B400]/30 group-hover:border-[#E6B400] transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#E6B400]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg group-hover:text-[#E6B400] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    {item.role}
                  </p>
                </div>
                
                {/* Rating Stars */}
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 text-[#E6B400] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E6B400]/5 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white">
              आपका भी अनुभव साझा करें
            </h3>
            <p className="text-gray-300 text-sm max-w-md">
              हमारे काम के बारे में आपकी क्या राय है? अपना फीडबैक दें
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E6B400] to-yellow-300 text-black font-semibold px-6 py-3 rounded-full hover:from-yellow-300 hover:to-[#E6B400] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>फीडबैक दें</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}