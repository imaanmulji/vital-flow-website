"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-heading font-bold text-2xl md:text-3xl text-brand-primaryDark tracking-tight whitespace-nowrap">
            Vital Flow Physical Therapy
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/how-it-works" className="text-brand-textPrimary hover:text-brand-primary transition-colors text-sm font-medium">
            How It Works
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-brand-textPrimary hover:text-brand-primary transition-colors text-sm font-medium py-2">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-xl border border-brand-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              <Link href="/services/pelvic-floor-therapy" className="block px-4 py-2 text-sm text-brand-textPrimary hover:bg-brand-accentLight hover:text-brand-primary">
                Pelvic Floor Therapy
              </Link>
              <Link href="/services/orthopedic-sports" className="block px-4 py-2 text-sm text-brand-textPrimary hover:bg-brand-accentLight hover:text-brand-primary">
                Orthopedic & Sports
              </Link>
              <Link href="/services/vestibular-rehabilitation" className="block px-4 py-2 text-sm text-brand-textPrimary hover:bg-brand-accentLight hover:text-brand-primary">
                Vestibular Rehabilitation
              </Link>
              <Link href="/services/pain-management" className="block px-4 py-2 text-sm text-brand-textPrimary hover:bg-brand-accentLight hover:text-brand-primary">
                Chronic Pain Management
              </Link>
            </div>
          </div>
          <Link href="/about" className="text-brand-textPrimary hover:text-brand-primary transition-colors text-sm font-medium">
            About
          </Link>
          <Link href="/insurance" className="text-brand-textPrimary hover:text-brand-primary transition-colors text-sm font-medium">
            Insurance
          </Link>
          <Link href="/medicare" className="text-brand-textPrimary hover:text-brand-primary transition-colors text-sm font-medium">
            Medicare
          </Link>
          <Link href="/telehealth" className="text-brand-textPrimary hover:text-brand-primary transition-colors text-sm font-medium">
            Telehealth
          </Link>
          <Link href="/faq" className="text-brand-textPrimary hover:text-brand-primary transition-colors text-sm font-medium">
            FAQ
          </Link>
          <Link href="/blog" className="text-brand-textPrimary hover:text-brand-primary transition-colors text-sm font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-brand-textPrimary hover:text-brand-primary transition-colors text-sm font-medium">
            Contact
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:267-362-9596" className="flex items-center gap-2 text-brand-textPrimary hover:text-brand-primary transition-colors text-sm font-medium">
            <Phone className="w-4 h-4" />
            <span>(267) 362-9596</span>
          </a>
          <a
            href="https://vitaflowpt.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-primaryDark transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brand-textPrimary"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 transition-transform duration-300 ease-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="font-heading font-bold text-xl leading-tight text-brand-primaryDark pr-4">Vital Flow Physical Therapy</span>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6 text-brand-textPrimary" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-4 flex-grow overflow-y-auto pb-4">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-brand-textPrimary">Home</Link>
            <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-brand-textPrimary">How It Works</Link>
            
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-brand-textMuted uppercase tracking-wider">Services</span>
              <Link href="/services/pelvic-floor-therapy" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-textPrimary">Pelvic Floor Therapy</Link>
              <Link href="/services/orthopedic-sports" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-textPrimary">Orthopedic & Sports</Link>
              <Link href="/services/vestibular-rehabilitation" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-textPrimary">Vestibular Rehabilitation</Link>
              <Link href="/services/pain-management" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-textPrimary">Chronic Pain Management</Link>
            </div>

            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-brand-textPrimary">About</Link>
            <Link href="/insurance" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-brand-textPrimary">Insurance</Link>
            <Link href="/medicare" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-brand-textPrimary">Medicare</Link>
            <Link href="/telehealth" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-brand-textPrimary">Telehealth</Link>
            <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-brand-textPrimary">FAQ</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-brand-textPrimary">Blog</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-brand-textPrimary">Contact</Link>
          </nav>

          <div className="pt-6 border-t border-brand-border mt-auto flex flex-col gap-4">
            <a href="tel:267-362-9596" className="flex items-center justify-center gap-2 w-full py-3 border border-brand-border rounded-full font-medium text-brand-textPrimary">
              <Phone className="w-4 h-4" />
              Call (267) 362-9596
            </a>
            <a
              href="https://vitaflowpt.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 bg-brand-primary text-white rounded-full font-medium"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
