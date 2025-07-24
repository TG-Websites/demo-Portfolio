// src/components/Gallery.tsx
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';

export default function Gallery() {
  const images = [
    { src: gallery1, title: "समुदायिक विकास", desc: "गांव में नई सुविधाएं" },
    { src: gallery2, title: "शिक्षा सुधार", desc: "स्कूलों का आधुनिकीकरण" },
    { src: gallery3, title: "स्वास्थ्य सेवा", desc: "निशुल्क चिकित्सा शिविर" },
    { src: gallery4, title: "युवा सशक्तिकरण", desc: "स्किल डेवलपमेंट प्रोग्राम" },
    { src: gallery5, title: "बुनियादी ढांचा", desc: "सड़क और नाली निर्माण" },
    { src: gallery3, title: "जन संपर्क", desc: "समुदाय के साथ बातचीत" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#E6B400]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E6B400]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E6B400]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E6B400]/30 mb-6">
            <div className="w-2 h-2 bg-[#E6B400] rounded-full animate-pulse"></div>
            <span className="text-[#E6B400] text-sm font-semibold uppercase tracking-wider">फोटो गैलरी</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-[#E6B400] to-yellow-300 bg-clip-text">हमारी </span>
            <span className="text-white">गैलरी</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            विकास, सेवा और समर्पण के पलों की एक झलक — आइए देखें हमारी यात्रा की कुछ झलकियां जो समुदाय के साथ हमारे जुड़ाव को दर्शाती हैं।
          </p>
        </div>

        {/* Enhanced Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-[#E6B400]/50 transition-all duration-700 ${
                i === 0 ? 'lg:col-span-2 lg:row-span-2' : 
                i === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    i === 0 ? 'h-96 lg:h-full' : 'h-64'
                  }`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.desc}</p>
                    
                    {/* View Button */}
                    <button className="mt-4 inline-flex items-center gap-2 bg-[#E6B400] text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition-colors">
                      <span>देखें</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

              

                
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: "500+", label: "खुश परिवार" },
            { number: "25+", label: "विकास परियोजनाएं" },
            { number: "10+", label: "वर्षों का अनुभव" },
            { number: "100%", label: "समर्पित सेवा" },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-[#E6B400]/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-[#E6B400] mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <a
            href="./Gallery.html"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E6B400] to-yellow-300 text-black font-semibold px-8 py-4 rounded-full hover:from-yellow-300 hover:to-[#E6B400] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>और देखें</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
