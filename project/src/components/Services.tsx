import React from 'react';
import { FileText, Calculator, Users, ClipboardCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Annual Income Tax Filing',
      description: 'Complete tax return preparation and filing services with guaranteed accuracy and compliance.',
      features: ['Professional filing', 'Document preparation', 'Compliance assurance']
    },
    {
      icon: Calculator,
      title: 'Tax Deductions',
      description: 'Maximize your tax savings through expert identification of all eligible deductions and exemptions.',
      features: ['Deduction optimization', 'Legal compliance', 'Maximum savings']
    },
    {
      icon: Users,
      title: 'In-Person Filing Support',
      description: 'Personal assistance and guidance throughout the entire tax filing process with expert consultation.',
      features: ['Face-to-face consultation', 'Step-by-step guidance', 'Expert support']
    },
    {
      icon: ClipboardCheck,
      title: 'Tax Review & Planning',
      description: 'Comprehensive tax strategy development and review to minimize future tax liabilities legally.',
      features: ['Strategic planning', 'Future optimization', 'Legal compliance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Professional Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tax solutions designed to minimize your tax burden while ensuring 
            complete legal compliance with Pakistani tax laws.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Tax Return Warning Section */}
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose Khan Tax Consultancy?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-emerald-100">Legal Compliance</div>
              </div>
              <div>
                <div className="text-3xl font-bold">Affordable</div>
                <div className="text-emerald-100">Guaranteed Pricing</div>
              </div>
              <div>
                <div className="text-3xl font-bold">Expert</div>
                <div className="text-emerald-100">High Court Advocate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tax Return Warning Section */}
      <div className="w-full max-w-3xl mx-auto bg-yellow-200 border-l-8 border-yellow-600 text-yellow-900 p-10 mt-12 mb-12 rounded-2xl shadow-2xl flex flex-col items-center animate-pulse-slow">
        <strong className="text-2xl font-extrabold mb-4">Last date to file your income tax return (2025) is <span className="underline decoration-yellow-600">30 September, 2025</span></strong>
        <span className="mt-2 text-xl font-semibold">File your income tax return (2025) today to:</span>
        <ul className="list-disc list-inside mt-4 text-lg font-bold space-y-2">
          <li>Maintain active filer status</li>
          <li>Avoid heavy penalties &amp; notices</li>
          <li>Protect yourself from higher withholding deductions</li>
        </ul>
      </div>
    </section>
  );
};

export default Services;