'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';



const contactInfo = [
  {
    id: 'call',
    icon: <Phone className="w-6 h-6 md:w-7 md:h-7" />,
    label: 'Call Us',
    value: '+91 9560031319'
  },
  {
    id: 'email',
    icon: <Mail className="w-6 h-6 md:w-7 md:h-7" />,
    label: 'Email Us',
    value: 'info@niveshsarthi.com'
  },
  {
    id: 'hours',
    icon: <Clock className="w-6 h-6 md:w-7 md:h-7" />,
    label: 'Working Hours',
    value: 'Mon - Sat: 9AM - 7PM'
  },
  {
    id: 'location',
    icon: <MapPin className="w-6 h-6 md:w-7 md:h-7" />,
    label: 'Location',
    value: 'Faridabad, India'
  }
];

 function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', mobile: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800" />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-block mb-2 sm:mb-3">
                <p className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/50 text-yellow-300 font-bold text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  GET IN TOUCH
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-3">
                <span className="text-white block">Get Expert Advice From</span>
                <span className="text-yellow-400 block">Our Experienced Team</span>
              </h2>

              <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                Fill out the form and our team will get back to you within 24 hours to discuss your property needs and help you find the perfect investment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.id}
                    className="bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-purple-600/60 group"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-300 group-hover:bg-yellow-500/30 transition-colors flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-white/70 text-xs font-medium mb-0.5">
                          {info.label}
                        </p>
                        <p className="text-white font-bold text-xs sm:text-sm">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 lg:mt-0 flex items-center justify-center lg:justify-end">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 w-full max-w-md shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-1.5 sm:mb-2">
                  Request a Callback
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5">
                  Fill in your details and we'll call you back
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mb-6">
                    <p className="text-green-700 font-semibold text-sm sm:text-base">
                      Thank you! We'll call you soon.
                    </p>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Your Mobile *"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-xs sm:text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 active:scale-95 text-white font-bold py-2.5 sm:py-3 px-5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm disabled:opacity-75 shadow-lg hover:shadow-xl"
                  >
                    {loading ? (
                      <>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Callback</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-gray-600 text-xs text-center mt-3 sm:mt-4">
                  By submitting, you agree to our{' '}
                  <button className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
                    Privacy Policy
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouchSection;