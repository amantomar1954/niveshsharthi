import React from 'react';
import { Home, Users, TrendingUp, Award } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { number: '998+', label: 'Happy Clients', icon: Users },
    { number: '467', label: 'Properties Sold', icon: Home },
    { number: '285', label: 'Ongoing Projects', icon: TrendingUp },
    { number: '246', label: 'Satisfied Customers', icon: Award },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-3">
                  <IconComponent size={64} className="opacity-80" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold mb-1">{stat.number}</h3>
                <p className="text-lg sm:text-xl text-purple-100">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
