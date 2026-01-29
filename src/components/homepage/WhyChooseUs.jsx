'use client';

import { TrendingUp, Building2, Zap, MessageSquare, BarChart3, Heart, Network, Shield } from 'lucide-react';

const benefits = [
  {
    id: 'expertise',
    icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Expertise & Experience',
    description: '15+ years in real estate'
  },
  {
    id: 'wide-range',
    icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Wide Range of Properties',
    description: '1000+ listings'
  },
  {
    id: 'market',
    icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Market Knowledge',
    description: 'Best price guarantee'
  },
  {
    id: 'client-centric',
    icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Client-Centric Approach',
    description: 'Your needs first'
  },
  {
    id: 'technology',
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Technology Driven',
    description: 'Smart property solutions'
  },
  {
    id: 'network',
    icon: <Network className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Strong Network',
    description: 'Industry connections'
  },
  {
    id: 'transparent',
    icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Transparent Process',
    description: 'No hidden charges'
  },
  {
    id: 'legal',
    icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Legal Verified',
    description: '100% safe deals'
  }
];

const stats = [
  { number: '998+', label: 'Happy Clients' },
  { number: '1000+', label: 'Properties Sold' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Expert Advisors' }
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-white">
      {/* Main Content Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 lg:items-stretch">
            {/* Left Side - Features */}
            <div className="flex flex-col">
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <p className="text-purple-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
                  Why Choose Us
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                  <span className="text-gray-900 block">Our Competitive</span>
                  <span className="text-purple-600 block">Advantage</span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
                Conquer the market with unbeatable dominance in property. We combine expertise, technology, and personalized service to deliver exceptional results for every client.
              </p>

              {/* Benefits Grid - Adjusted for equal height */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-grow">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="p-3 sm:p-4 md:p-5 bg-gray-50 border border-gray-100 rounded-lg sm:rounded-xl hover:border-purple-200 hover:bg-purple-50 transition-all duration-300 cursor-pointer group flex flex-col h-full"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-purple-100 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-purple-200 transition-colors flex-shrink-0">
                      <div className="text-purple-600 w-5 h-5 sm:w-5 sm:h-5">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-gray-900 mb-1 line-clamp-2 min-h-[40px]">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-auto">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image Section */}
            <div className="relative h-full">
              <div className="relative w-full h-full min-h-[400px] lg:min-h-full rounded-2xl sm:rounded-3xl overflow-visible shadow-2xl bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 group">
                {/* Main Image Container */}
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden w-full h-full relative">
                  <img
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Real Estate Property"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />

                  {/* Play Button - Center */}
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:shadow-2xl group/btn active:scale-95 z-20"
                    aria-label="Play video"
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 fill-white ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>

                  {/* Satisfaction Badge - Top Right */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 md:right-8 bg-white rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-3 sm:py-4 md:py-5 shadow-xl backdrop-blur-sm z-20">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">100%</p>
                    <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-tight whitespace-nowrap">Client Satisfaction</p>
                    <div className="flex -space-x-2 mt-2 sm:mt-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">B</div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">D</div>
                    </div>
                  </div>
                </div>

                {/* Experience Badge - Bottom Left (Overlapping Outside) */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-yellow-400 hover:bg-yellow-500 active:scale-95 rounded-2xl sm:rounded-3xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 z-30 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-none">15</p>
                    <p className="text-xs sm:text-sm text-white font-bold leading-tight mt-1 text-center">
                      Years of<br />Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 max-w-7xl mx-auto rounded-lg px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-white/90 text-xs sm:text-sm md:text-base font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}