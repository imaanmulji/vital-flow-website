"use client";

import { Phone, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay so it animates in, or show it after scrolling past hero
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-border p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-3 max-w-sm mx-auto">
        <a
          href="tel:267-362-9596"
          className="flex-1 flex items-center justify-center gap-2 py-3 border border-brand-primary text-brand-primary rounded-full font-medium text-sm"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
        <a
          href="https://vitaflowpt.janeapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-primary text-white rounded-full font-medium text-sm"
        >
          <Calendar className="w-4 h-4" />
          Book
        </a>
      </div>
    </div>
  );
}
