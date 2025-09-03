import React from 'react';
import { Calculator, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="inline-block h-8 w-8 mr-1 align-middle">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="#01411C" />
                  <rect x="2" y="2" width="6" height="28" rx="2" fill="#fff" />
                  {/* Large star moved slightly to the right */}
                  <polygon points="18,10 19.76,14.47 24.62,14.47 20.93,17.06 22.69,21.53 18,18.94 13.31,21.53 15.07,17.06 11.38,14.47 16.24,14.47" fill="#fff" />
                </svg>
              </span>
              <span className="text-xl font-bold">Khan Tax Consultancy</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional tax consultancy services ensuring you legally pay the least tax possible 
              with 100% guaranteed affordable solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Calculator', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Income Tax Filing</li>
              <li>Tax Planning & Strategy</li>
              <li>Legal Consultation</li>
              <li>Business Advisory</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Khan Tax Consultancy. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;