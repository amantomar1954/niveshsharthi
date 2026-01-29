'use client';

// components/Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, FaUserFriends, FaBuilding, FaBriefcase, FaPhoneAlt } from 'react-icons/fa';
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Nivesh Sarthi</h1>
              <p className="text-gray-300 mt-1">Real Estate in Real Sense</p>
            </div>
            <div className="h-px w-16 bg-blue-500"></div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in real estate solutions
            </p>
          </div>

          {/* Quick Links Section */}
         

<div>
  <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
    <span className="h-px w-8 bg-blue-500 mr-3"></span>
    Quick Links
  </h3>

  <ul className="space-y-3">
    {[
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Properties", href: "/properties" },
      { label: "Contact Us", href: "/contact" },
    ].map((item) => (
      <li key={item.label}>
        <Link
          href={item.href}
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
        >
          <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></span>
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>


          {/* Property Types Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <span className="h-px w-8 bg-blue-500 mr-3"></span>
              Property Types
            </h3>
            <ul className="space-y-3">
              {['Residential', 'Commercial', 'Industrial', 'Plots'].map((type) => (
                <li key={type}>
                  <a 
                    href="/properties" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-blue-500"></span>
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <span className="h-px w-8 bg-blue-500 mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="tel:+919560031319" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  +91 - 9560031319
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info.niveshsarthi@gmail.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  info.niveshsarthi@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  628-630, 6th Floor, Puri 81 Business Hub, Sector 81, Faridabad
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2026 Nivesh Sarthi. All Rights Reserved.
          </div>
          
          {/* <div className="flex items-center space-x-4">
            <span className="text-gray-500 text-sm">Edit with Base44</span>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Type here to search"
                className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                🔍
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;