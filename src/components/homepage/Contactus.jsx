'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';



export default function CallToAction( onOpenModal ) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-purple-600 to-purple-700 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Container with rounded background */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl  text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Can't Find What You're Looking For?
          </h2>

          {/* Subheading */}
          <p className="text-white text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed opacity-95">
            Let our experts help you find the perfect property that matches your requirements and budget.
          </p>

          {/* CTA Button */}
          <Link href="/contact">
          <button
            onClick={onOpenModal}
            className="inline-flex cursor-pointer items-center gap-2 bg-white text-purple-600 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Contact our experts"
          >
            Contact Our Experts
            <ArrowRight size={20} className="sm:w-5 sm:h-5" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
