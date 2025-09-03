import React from 'react';
import { MessageCircle, Phone, Facebook, MapPin, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick consultation via WhatsApp',
      actions: [
        { label: '03211822358', link: 'https://wa.me/923211822358', primary: true },
        { label: '03134387413', link: 'https://wa.me/923134387413', primary: false }
      ]
    },
    {
      icon: Phone,
      title: 'Phone Call',
      description: 'Direct phone consultation',
      actions: [
        { label: '0333640977', link: 'tel:+92333640977', primary: true }
      ]
    },
    {
      icon: Facebook,
      title: 'Social Media',
      description: 'Follow us for tax updates',
      actions: [
        { label: 'Facebook Page', link: 'https://www.facebook.com/share/163cwYFjZC/', primary: true, external: true }
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to optimize your tax strategy? Contact Khan Tax Consultancy today 
            for expert advice and guaranteed affordable services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-600 rounded-lg p-3">
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-gray-400 mb-3">{method.description}</p>
                      <div className="space-y-2">
                        {method.actions.map((action, actionIndex) => (
                          <a
                            key={actionIndex}
                            href={action.link}
                            target={action.external ? '_blank' : '_self'}
                            rel={action.external ? 'noopener noreferrer' : ''}
                            className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                              action.primary
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700 transform hover:scale-105'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                            }`}
                          >
                            {action.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
              <div className="flex items-start space-x-4">
                
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Ready to Save on Taxes?</h4>
              <p className="text-emerald-100 mb-4">
                Get expert consultation and start paying the least tax legally possible.
              </p>
              <a
                href="https://wa.me/923211822358"
                className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Start WhatsApp Chat
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;