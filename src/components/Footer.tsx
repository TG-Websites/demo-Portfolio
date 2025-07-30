import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden px-6 py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#E6B400]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#E6B400]/5 rounded-full blur-2xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        {/* Brand Section (Left) */}
        <div className="flex flex-col justify-between space-y-6 w-full md:w-1/2 items-center md:items-start">
          <div>
            <h3 className="text-2xl font-bold mb-2">Rajiv Kumar Singh</h3>
            <p className="text-[#E6B400] font-semibold mb-4">
              समाज सेवा और विकास के लिए प्रतिबद्ध
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              हमारा लक्ष्य समुदाय के कल्याण और विकास के लिए निरंतर काम करना है। 
              आपके सुझाव और सहयोग हमारे लिए महत्वपूर्ण हैं।
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2 justify-center md:justify-start">
            {[
              { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
              { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
              { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
              { name: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50 hover:border-[#E6B400] hover:bg-[#E6B400]/20 transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info (Right) */}
        <div className="flex flex-col justify-between w-full md:w-1/2 items-center md:items-start">
          <h4 className="text-white font-semibold text-lg mb-4">संपर्क जानकारी</h4>
          <div className="space-y-4">
            <div className="flex items-start justify-center md:justify-start gap-3 text-sm">
              <span className="text-[#E6B400] mt-1" aria-hidden="true">📍</span>
              <p className="text-gray-400">दीघा, पटना, बिहार</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-sm">
              <span className="text-[#E6B400]" aria-hidden="true">📞</span>
              <a
                href="tel:+919876543210"
                className="text-gray-400 hover:text-[#E6B400] transition-colors duration-300"
              >
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-sm">
              <span className="text-[#E6B400]" aria-hidden="true">✉️</span>
              <a
                href="mailto:contact@rajivsingh.in"
                className="text-gray-400 hover:text-[#E6B400] transition-colors duration-300"
              >
                contact@rajivsingh.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700/50 mt-12 pt-6 mx-5 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p>© 2025 Rajiv Kumar Singh. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <a href="#" className="hover:text-[#E6B400] transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-[#E6B400] transition-colors duration-300">Terms of Service</a>
          <span className="flex items-center gap-1">
            Made with <span className="text-red-500 animate-pulse">❤️</span> in India
          </span>
        </div>
      </div>
    </footer>
  );
}