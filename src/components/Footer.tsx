// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2025 Rajiv Kumar Singh. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
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
    </footer>
  );
}
