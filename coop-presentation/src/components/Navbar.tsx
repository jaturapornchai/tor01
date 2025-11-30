"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "หน้าแรก", href: "#hero" },
    { name: "ภาพรวมระบบ", href: "#flowchart" },
    { name: "ระบบงาน", href: "#systems" },
    { name: "ตัวอย่าง", href: "#demo" },
    { name: "เทคโนโลยี", href: "#technology" },
    { name: "ความปลอดภัย", href: "#security" },
    { name: "แผนงาน", href: "#timeline" },
    { name: "ติดต่อ", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span
                className={`font-bold text-xl ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                COOP Web App
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              {/* Admin Demo Button */}
              <a
                href="/admin"
                className={`ml-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isScrolled
                    ? "bg-gradient-to-r from-emerald-500 to-pink-500 text-white hover:shadow-lg"
                    : "bg-white text-emerald-600 hover:bg-gray-100"
                }`}
              >
                ทดลองใช้งาน
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              >
                {item.name}
              </a>
            ))}
            {/* Admin Demo Button - Mobile */}
            <a
              href="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-3 mt-3 px-4 py-3 text-center rounded-lg text-base font-semibold bg-gradient-to-r from-emerald-500 to-pink-500 text-white"
            >
              ทดลองใช้งาน
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
