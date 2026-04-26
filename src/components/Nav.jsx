import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => setIsOpen(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-gray-100/60'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-2 cursor-pointer group">
          <div className="grid grid-cols-2 gap-[3px] transition-transform duration-300 group-hover:rotate-[8deg]">
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">ChronoTask</span>
        </a>

        {/* Center Navigation Links — Desktop */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-500">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-gray-900 transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action Buttons — Desktop */}
        <div className="hidden md:flex items-center gap-4 text-[15px] font-medium">
          <a
            href="#signin"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            Sign in
          </a>
          <button className="px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-200 active:scale-[0.97] shadow-sm">
            Get demo
          </button>
        </div>

        {/* Hamburger Menu — Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-5 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="block py-3 px-4 text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
            <a
              href="#signin"
              onClick={handleLinkClick}
              className="block py-3 px-4 text-[15px] font-medium text-gray-500 hover:text-gray-900 rounded-xl transition-colors"
            >
              Sign in
            </a>
            <button
              onClick={handleLinkClick}
              className="w-full py-3 px-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all active:scale-[0.98]"
            >
              Get demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}