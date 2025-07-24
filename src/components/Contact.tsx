// src/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-bgSection text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <i className="fas fa-paper-plane text-white text-lg"></i>
              <span>rajivkumarsingh.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-phone-alt text-white text-lg"></i>
              <span>+91 9304832187</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com/rajiv.singh.545402"
              className="text-gray-400 hover:text-[#E6B400] text-xl"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/rajivkumar_.singh/?fbclid=..."
              className="text-gray-400 hover:text-[#E6B400] text-xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-800 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E6B400]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-800 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E6B400]"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full bg-gray-800 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E6B400]"
          />
          <button
            type="submit"
            className="bg-[#E6B400] text-black font-semibold px-6 py-3 rounded hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}