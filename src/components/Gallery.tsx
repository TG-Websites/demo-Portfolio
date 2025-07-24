// src/components/Gallery.tsx
export default function Gallery() {
  const images = [
    "./assets/gallery1.jpg",
    "./assets/gallery2.jpg",
    "./assets/gallery3.jpg",
    "./assets/gallery4.jpg",
    "./assets/gallery5.jpg",
    "./assets/gallery3.jpg", // repeated intentionally
  ];

  return (
    <section id="gallery" className="bg-bgSection text-gray-300 body-font py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-yellow-400">हमारी </span>
          <span className="underline decoration-yellow-400">गैलरी</span>
        </h2>
        <p className="text-base leading-relaxed text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          विकास, सेवा और समर्पण के पलों की एक झलक — आइए देखें हमारी यात्रा की कुछ झलकियां।
        </p>

        {/* Gallery Grid */}
        <div className="flex flex-wrap -m-1 md:-m-2">
          {/* Left column */}
          <div className="flex flex-wrap w-full md:w-1/2">
            {images.slice(0, 3).map((src, i) => (
              <div
                key={i}
                className={`${i === 2 ? "w-full" : "w-1/2"} p-1 md:p-2`}
              >
                <img
                  src={src}
                  alt={`gallery${i}`}
                  className="w-full aspect-video object-cover rounded shadow-md hover:scale-105 transition"
                />
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-wrap w-full md:w-1/2">
            {images.slice(3).map((src, i) => (
              <div
                key={i + 3}
                className={`${i === 0 ? "w-full" : "w-1/2"} p-1 md:p-2`}
              >
                <img
                  src={src}
                  alt={`gallery${i + 3}`}
                  className="w-full aspect-video object-cover rounded shadow-md hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* See More */}
        <div className="text-center mt-10">
          <a
            href="./Gallery.html"
            className="inline-block border border-accent text-accent font-semibold px-6 py-3 rounded hover:bg-accent hover:text-black transition"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
