'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      id: 1,
      title: 'Mission',
      description: 'To provide exceptional real estate services that exceed expectations',
      icon: '🎯'
    },
    {
      id: 2,
      title: 'Excellence',
      description: 'We strive for excellence in every transaction we undertake',
      icon: '🏆'
    },
    {
      id: 3,
      title: 'Client Focus',
      description: "Our clients' success is our ultimate measure of achievement",
      icon: '👥'
    },
    {
      id: 4,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards',
      icon: '📊'
    }
  ];

  const team = [
    {
      id: 1,
      name: 'Rahul Kushwaha',
      role: 'Founder & CEO',
      initials: 'RK'
    },
    {
      id: 2,
      name: 'Rakesh Kushwaha',
      role: 'Co-Founder',
      initials: 'RK'
    },
    {
      id: 3,
      name: 'Satpal Sorout',
      role: 'Co-Founder & IT HEAD',
      initials: 'SS'
    }
  ];

  return (
    <div className="w-full font-[--font-poppins]">
     

      {/* Hero Section */}
      <section className="w-full mt-24 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-yellow-400 text-purple-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4">
            ABOUT US
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 text-balance">
            Who We Are
          </h2>
          <p className="text-sm md:text-lg text-purple-100 max-w-3xl mx-auto text-balance">
            Your trusted partner in real estate, helping you find the perfect property since 2010.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-purple-600 text-xs md:text-2xl font-bold mb-2 md:mb-4 text-center">
      OUR STORY
    </div>

    <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
      Real Estate in Real Sense
    </h2>

    <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-10 max-w-4xl mx-auto">
      <div className="text-center">
        <p className="text-gray-700 text-xs md:text-base leading-relaxed mb-4">
          Nivesh Sarthi was founded with a vision to transform the real estate experience in Faridabad. We believe in transparency, integrity, and putting our clients' needs first.
        </p>
        <p className="text-gray-700 text-xs md:text-base leading-relaxed">
          With over 15 years of experience, we have successfully helped more than 1000 families and businesses find their perfect properties. Our deep market knowledge and client-centric approach set us apart from the competition.
        </p>
      </div>

      <div className="space-y-3 md:space-y-4">
        {[
          'Expert Market Knowledge',
          'Wide Property Range',
          'Transparent Dealings',
          'End-to-End Support',
        ].map((item, index) => (
          <div key={index} className="flex gap-3 items-start justify-center">
            <div className="text-purple-600 mt-0.5 flex-shrink-0">
              <Check className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <p className="text-gray-700 font-semibold text-xs md:text-sm">{item}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ✅ CENTER ALIGNED BUTTON */}
    <div className="flex justify-center">
      <button className="cursor-pointer bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-xs md:text-base transition-all inline-flex items-center gap-2">
        Get in Touch
        <span>→</span>
      </button>
    </div>

  </div>
</section>


      {/* Values Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <div className="text-purple-600 text-xs md:text-sm font-bold mb-2 md:mb-3">OUR VALUES</div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-balance">
              What Drives Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value) => (
              <div key={value.id} className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl md:text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center text-xs md:text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
          <div className="text-center mb-10 md:mb-14">
            <div className="text-purple-600 text-xs md:text-sm font-bold mb-2 md:mb-3">OUR TEAM</div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-balance">
              Meet the Experts
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {team.map((member) => (
              <div 
                key={member.id} 
                className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-100 rounded-full flex items-center justify-center mb-4 md:mb-5 mx-auto">
                  <span className="text-2xl md:text-3xl font-bold text-purple-600">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1.5">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium text-xs md:text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="tel:+919560031319" className="text-white font-semibold flex items-center gap-2 hover:text-yellow-300 transition">
              📞 +91 - 9560031319
            </a>
            <a href="mailto:info.niveshsarthi@gmail.com" className="text-white font-semibold flex items-center gap-2 hover:text-yellow-300 transition">
              📧 info.niveshsarthi@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-yellow-300 font-bold text-sm md:text-base">Growth Utsav</span>
            <div className="flex gap-3">
              <a href="#" className="text-white hover:text-yellow-300 transition">f</a>
              <a href="#" className="text-white hover:text-yellow-300 transition">𝕏</a>
              <a href="#" className="text-white hover:text-yellow-300 transition">in</a>
              <a href="#" className="text-white hover:text-yellow-300 transition">▶</a>
              <a href="#" className="text-white hover:text-yellow-300 transition">📷</a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
