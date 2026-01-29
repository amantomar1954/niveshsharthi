'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const properties = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Modern luxury property'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Contemporary residential building'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Premium commercial property'
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative min-h-screen sm:h-screen w-full overflow-hidden mt-10">
      <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {properties.map((property) => (
          <div
            key={property.id}
            className="min-w-full h-full relative"
          >
            <img
              src={property.image}
              alt={property.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 sm:from-black/80 via-black/70 sm:via-black/60 to-transparent" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center py-8 sm:py-0">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 w-full">
          <div className="max-w-2xl sm:max-w-3xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#1e293b] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#fbbf24] rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium tracking-wide">WELCOME TO NIVESH SARTHI</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-6 leading-tight">
              <span className="text-white">Real Estate in</span>
              <br />
              <span className="text-[#fbbf24]">Real Sense..</span>
            </h1>

            <p className="text-white text-sm xs:text-base sm:text-lg lg:text-xl mb-4 sm:mb-8 leading-relaxed">
              Your trusted partner for premium residential, commercial,<br className="hidden sm:block" />
              and industrial properties across Faridabad.
            </p>

            <div className="flex flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-16">
              <Link href="/properties">
              <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                Explore Properties
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              </Link>
              <Link href="/contact">
              <button className="border-2 border-white text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-white hover:text-[#1e293b] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call Now
              </button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#fbbf24] mb-1">15+</div>
                <div className="text-white text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#fbbf24] mb-1">998+</div>
                <div className="text-white text-xs sm:text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#fbbf24] mb-1">1000+</div>
                <div className="text-white text-xs sm:text-sm">Properties</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 sm:w-12 bg-[#fbbf24]'
                : 'w-6 sm:w-8 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

 <div className="absolute bottom-3 sm:bottom-8 right-3 sm:right-8 flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm">
  <span className="text-white font-medium">Need Help?</span>

  <a
    href="tel:+919560031319"
    className="text-white font-bold hover:text-[#fbbf24] transition-colors flex items-center gap-2"
  >
    <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
    <span>+91 95600 31319</span>
  </a>
</div>

    </section>
  );
}
