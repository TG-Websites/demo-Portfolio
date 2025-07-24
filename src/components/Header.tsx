// src/components/Header.tsx
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-black/75 backdrop-blur-md shadow-lg border-b border-[#E6B400]/20' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 px-6 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}>
        <h1 className={`font-bold text-white transition-all duration-300 ${
          isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
        }`}>
          <span className="text-[#E6B400]">राजीव</span> कुमार सिंह
          <span className="text-[#E6B400]">.</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="space-x-8 hidden md:flex">
          {["Home", "About", "Achievements", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-[#E6B400] transition-all duration-300 font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E6B400] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none group"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#E6B400]/20 animate-slideDown">
          <nav className="flex flex-col space-y-4 py-6 px-6">
            {["Home", "About", "Achievements", "Gallery", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#E6B400] transition-all duration-300 font-medium py-2 border-b border-gray-800 hover:border-[#E6B400]/30"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
