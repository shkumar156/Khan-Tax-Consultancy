import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Clock, label: 'Years Experience', value: '10+' },
    { icon: CheckCircle, label: 'Success Rate', value: '100%' },
    { icon: Award, label: 'Legal Compliance', value: '100%' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-emerald-600">Khan Tax Consultancy</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Led by <strong className="text-gray-900">Advocate Muqsit Umar Khan</strong>, 
                a distinguished High Court Advocate, Khan Tax Consultancy has been serving 
                clients across Pakistan with unparalleled expertise in tax law and planning.
              </p>
              <p>
                Our mission is simple yet powerful: to ensure our clients legally pay the 
                least amount of tax possible while maintaining full compliance with Pakistani 
                tax regulations. We combine deep legal knowledge with practical solutions 
                to maximize your savings.
              </p>
              <p>
                With our 100% guaranteed affordable services, we've helped hundreds of 
                individuals and businesses optimize their tax strategies, ensuring they 
                keep more of their hard-earned money while staying completely within the law.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <img 
                  src="/Muqsit Umar profile picture.jpg" 
                  alt="Advocate Muqsit Umar Khan" 
                  className="w-full max-w-xs h-auto rounded-full mx-auto mb-4 object-contain border-4 border-emerald-100"
                />
                <h3 className="text-xl font-bold text-gray-900">Advocate Muqsit Umar Khan</h3>
                <p className="text-emerald-600 font-medium">High Court Advocate</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;