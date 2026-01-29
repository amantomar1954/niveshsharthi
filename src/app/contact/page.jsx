'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  return (
    <main className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative mt-20 bg-gradient-to-r from-purple-700 to-purple-900 pt-20 pb-40 px-4 sm:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-yellow-400 font-semibold mb-4">
            CONTACT US
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
            Have questions about a property? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* ================= OVERLAPPED INFO CARDS ================= */}
      <section className="relative z-10 -mt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="mx-auto mb-5 w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Phone className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-purple-600 font-semibold">
                +91 9560031319
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="mx-auto mb-5 w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Mail className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-700 break-all">
                info.niveshsarthi@gmail.com
              </p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="mx-auto mb-5 w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center">
                <MapPin className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                628–630, 6th Floor<br />
                Puri 81 Business Hub<br />
                Sector 81, Faridabad
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="mx-auto mb-5 w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Clock className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-700 text-sm">
                Mon – Sat<br />
                9:00 AM – 7:00 PM
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FORM & MAP SECTION ================= */}
       <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <p className="text-purple-600 font-semibold text-sm sm:text-base mb-3">
                SEND MESSAGE
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                We'd Love to Hear From You
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-sm sm:text-base"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-sm sm:text-base"
                  />
                </div>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Your Mobile *"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-sm sm:text-base"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-sm sm:text-base resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Social Section */}
            <div className="flex flex-col gap-8">
              {/* Google Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-80 sm:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1234567890123!2d77.2789!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce95c5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2s628-630%20Puri%2081%20Business%20Hub%2C%20Sector%2081%2C%20Faridabad!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-lg transition-colors flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                  <a
                    href="#"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 sm:p-4 rounded-lg transition-colors flex items-center justify-center"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-700 hover:bg-blue-800 text-white p-3 sm:p-4 rounded-lg transition-colors flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 hover:bg-pink-700 text-white p-3 sm:p-4 rounded-lg transition-colors flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                  <a
                    href="#"
                    className="bg-red-600 hover:bg-red-700 text-white p-3 sm:p-4 rounded-lg transition-colors flex items-center justify-center"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
