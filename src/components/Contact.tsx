// src/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Contact </span>
            <span className="text-[#E6B400]">Me</span>
          </h2>
          <p className="text-gray-400 text-lg">
            आइए मिलकर दीघा के विकास की दिशा में काम करें
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">संपर्क जानकारी</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-12 h-12 bg-[#E6B400]/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-[#E6B400] text-lg"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">rajivkumarsingh.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-12 h-12 bg-[#E6B400]/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-[#E6B400] text-lg"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 9304832187</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-12 h-12 bg-[#E6B400]/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-[#E6B400] text-lg"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Address</p>
                    <p className="text-white font-medium">दीघा विधानसभा क्षेत्र, बिहार</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">सोशल मीडिया</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/rajiv.singh.545402"
                  className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-[#E6B400] hover:text-black transition-all duration-300 group"
                >
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a
                  href="https://www.instagram.com/rajivkumar_.singh/?fbclid=..."
                  className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-[#E6B400] hover:text-black transition-all duration-300 group"
                >
                  <i className="fab fa-instagram text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/30 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">संदेश भेजें</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">नाम *</label>
                  <input
                    type="text"
                    placeholder="आपका नाम"
                    className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 border border-gray-600 focus:outline-none focus:border-[#E6B400] focus:ring-1 focus:ring-[#E6B400] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">फोन नंबर</label>
                  <input
                    type="tel"
                    placeholder="आपका फोन नंबर"
                    className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 border border-gray-600 focus:outline-none focus:border-[#E6B400] focus:ring-1 focus:ring-[#E6B400] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">ईमेल *</label>
                <input
                  type="email"
                  placeholder="आपका ईमेल"
                  className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 border border-gray-600 focus:outline-none focus:border-[#E6B400] focus:ring-1 focus:ring-[#E6B400] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">विषय</label>
                <input
                  type="text"
                  placeholder="संदेश का विषय"
                  className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 border border-gray-600 focus:outline-none focus:border-[#E6B400] focus:ring-1 focus:ring-[#E6B400] transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">संदेश *</label>
                <textarea
                  rows={5}
                  placeholder="आपका संदेश..."
                  className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 border border-gray-600 focus:outline-none focus:border-[#E6B400] focus:ring-1 focus:ring-[#E6B400] transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E6B400] text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>संदेश भेजें</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}