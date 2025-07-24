// src/components/Header.tsx
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          <span className="text-accent">राजीव</span> कुमार सिंह
          <span className="text-yellow-500">.</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex">
          {["Home", "About", "Achievements", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-accent transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            {["Home", "About", "Achievements", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-accent transition"
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
