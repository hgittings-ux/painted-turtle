"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-forest/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/images/Painted Turtle Logo_Horizontal_High Res Standard.png" 
              alt="Painted Turtle logo" 
              width={105} 
              height={36} 
              className="h-[36px] w-auto object-contain" 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-body text-olive">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/shop" className="nav-link">Shop</Link>
            <Link href="/giving-back" className="nav-link">Giving Back</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-forest hover:text-turtle hover:bg-sky/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-forest/10 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="mobile-nav-link">Home</Link>
              <Link href="/about" className="mobile-nav-link">About</Link>
              <Link href="/shop" className="mobile-nav-link">Shop</Link>
              <Link href="/giving-back" className="mobile-nav-link">Giving Back</Link>
              <Link href="/contact" className="mobile-nav-link">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}    
