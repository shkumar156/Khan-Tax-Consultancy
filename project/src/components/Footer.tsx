import React from 'react';
import { Calculator, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Calculator className="h-8 w-8 text-emerald-400" />
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