'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Building2, Award } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Anil Bansal',
      role: 'Happy Client',
      text: 'I was impressed by Nivesh Sarthi\'s extensive knowledge of the local market. They guided me through every step of the selling process and got me a great price for my property.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anil',
    },
    {
      name: 'Deepak Mishra',
      role: 'Happy Client',
      text: 'Outstanding service and support! The team made the entire property buying process incredibly smooth. Highly impressed with their professionalism.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak',
    },
    {
      name: 'Priya Sharma',
      role: 'Happy Client',
      text: 'Best property consultants I have worked with. They understood my needs perfectly and found exactly what I was looking for.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const stats = [
    { label: '997+', value: 'Happy Clients', icon: Users },
    { label: '1000+', value: 'Properties Sold', icon: Building2 },
    { label: '15+', value: 'Years Experience', icon: Award },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <p className="text-purple-600 text-xs sm:text-sm font-semibold tracking-wide mb-3 sm:mb-4">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            What Our
            <br className="hidden sm:block" />
            <span className="text-purple-600">Happy Clients Say!</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl leading-relaxed">
            With over a decade of experience, we have successfully delivered smiles with highest ROI at lowest investment.
          </p>
        </div>

        {/* Stats and Testimonial Grid */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {/* Left side - Stats cards - Aligned to bottom */}
          <div className="lg:w-1/3">
            <div className="h-full flex flex-col">
              {/* Spacer to push cards to bottom on large screens */}
              <div className="hidden lg:block flex-grow"></div>
              
              {/* Stats cards container */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 lg:p-6 flex flex-col h-full"
                    >
                      {/* Icon and Content Container */}
                      <div className="flex items-start gap-4 sm:gap-5 mb-3 sm:mb-4">
                        <div className="bg-purple-100 rounded-lg p-3 sm:p-4 flex-shrink-0">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                        </div>
                        
                        <div className="flex-grow">
                          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 leading-tight">
                            {stat.label}
                          </p>
                          <p className="text-gray-700 text-sm sm:text-base font-medium">
                            {stat.value}
                          </p>
                        </div>
                      </div>
                      
                      {/* Auto-scroll indicator */}
                      {/* <div className="mt-2 pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <p className="text-xs text-gray-500">
                            Testimonials auto-scroll every 5s
                          </p>
                        </div>
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side - Testimonial card */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 lg:p-10 relative h-full">
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl sm:text-4xl text-purple-600 font-serif">
                  "
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 sm:mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 italic leading-relaxed font-light pr-12 sm:pr-16">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 mb-8 sm:mb-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-purple-200 to-purple-100 overflow-hidden flex-shrink-0 border-2 border-purple-100">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg lg:text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-purple-600 text-sm sm:text-base lg:text-lg font-semibold">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                {/* Pagination dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentIndex
                          ? 'w-8 sm:w-10 h-2 bg-purple-600'
                          : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation arrows */}
                <div className="flex gap-3 sm:gap-4">
                  <button
                    onClick={prevSlide}
                    className="p-2 sm:p-3 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors duration-300"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 sm:p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-300"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}