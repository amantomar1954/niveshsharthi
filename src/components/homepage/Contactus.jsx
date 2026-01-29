'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 bg-gradient-to-r from-purple-600 via-purple-600 to-purple-700 mt-8 sm:mt-0 mb-8 sm:mb-10 md:mb-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
          Can't Find What You're Looking For?
        </h2>

        {/* Subheading */}
        <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-7 max-w-2xl mx-auto leading-relaxed opacity-95">
          Let our experts help you find the perfect property that matches your requirements and budget.
        </p>

        {/* CTA Button */}
        <Link href="/contact">
          <button
            className="inline-flex cursor-pointer items-center gap-2 bg-white text-purple-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            aria-label="Contact our experts"
          >
            Contact Our Experts
            <ArrowRight size={18} />
          </button>
        </Link>
      </div>
    </section>
  );
}
