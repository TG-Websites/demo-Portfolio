// src/components/Hero.tsx
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 relative bg-black text-white"
      style={{
        backgroundImage: "url('./assets/matt-gross-9aCkSl6YcXg-unsplash.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 gap-8 w-full z-10">
        {/* Image */}
        <div className="relative flex justify-center items-center w-full max-w-md aspect-square mx-auto order-1 md:order-2">
          <div className="relative h-30 w-50 overflow-hidden">
            <img
              src="./assets/profile 02.png"
              alt="Rajiv Kumar Singh"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-4 order-2 md:order-1 pb-8">
          <p className="text-yellow-400 uppercase tracking-wide">जनसेवक</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            नमस्ते, मैं{" "}
            <span className="text-yellow-400">राजीव कुमार सिंह</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold">
            दीघा से आपके लिए
          </h3>
          <p className="text-gray-300 max-w-md">
            विकास, शिक्षा और रोजगार के लिए आपके साथ कदम से कदम मिलाकर चलने
            का संकल्प।
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:opacity-90 transition"
            >
              संपर्क करें
            </a>
            <a
              href="#about"
              className="inline-block border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition"
            >
              हमारा विजन
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
