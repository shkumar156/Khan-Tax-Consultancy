import React from 'react';
import { ArrowRight, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-white overflow-hidden">
      {/* Tax Return Warning Section */}
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23059669%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-emerald-600">Khan Tax</span>
                <br />
                Consultancy
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Trusted consultancy ensuring clients legally pay the least tax possible, 
                with 100% guaranteed affordable services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToCalculator}
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Calculate Tax
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Get Consultation
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">100% Legal</p>
                  <p className="text-sm text-gray-600">Compliant Solutions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Maximize Savings</p>
                  <p className="text-sm text-gray-600">Minimize Tax Burden</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/Benefits.jpg" 
                alt="Tax Benefits Illustration" 
                className="w-full h-auto object-contain rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900">Professional Tax Services</h3>
                <p className="text-gray-600 mt-2">Expert guidance for optimal tax planning</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl transform rotate-6 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;