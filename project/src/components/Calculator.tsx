import React, { useState } from 'react';
import { Calculator as CalculatorIcon, DollarSign, TrendingDown } from 'lucide-react';

const Calculator = () => {
  const [formData, setFormData] = useState({
    monthlyIncome: '',
    category: 'salaried',
    taxYear: '2025-26'
  });
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateTax = (annualIncome, category, taxYear) => {
    let tax = 0;
    
    if (category === 'salaried') {
      if (taxYear === '2024-25') {
        // Salaried 2024-25 slabs
        if (annualIncome <= 600000) tax = 0;
        else if (annualIncome <= 1200000) tax = (annualIncome - 600000) * 0.05;
        else if (annualIncome <= 2200000) tax = 30000 + (annualIncome - 1200000) * 0.15;
        else if (annualIncome <= 3200000) tax = 180000 + (annualIncome - 2200000) * 0.25;
        else if (annualIncome <= 4100000) tax = 430000 + (annualIncome - 3200000) * 0.30;
        else tax = 700000 + (annualIncome - 4100000) * 0.35;
      } else {
        // Salaried 2025-26 slabs
        if (annualIncome <= 600000) tax = 0;
        else if (annualIncome <= 1200000) tax = (annualIncome - 600000) * 0.01;
        else if (annualIncome <= 2200000) tax = 6000 + (annualIncome - 1200000) * 0.11;
        else if (annualIncome <= 3200000) tax = 116000 + (annualIncome - 2200000) * 0.23;
        else if (annualIncome <= 4100000) tax = 346000 + (annualIncome - 3200000) * 0.30;
        else tax = 616000 + (annualIncome - 4100000) * 0.35;
      }
    } else {
      // Non-salaried and AOP (same for both years)
      if (annualIncome <= 600000) tax = 0;
      else if (annualIncome <= 1200000) tax = (annualIncome - 600000) * 0.15;
      else if (annualIncome <= 1600000) tax = 90000 + (annualIncome - 1200000) * 0.20;
      else if (annualIncome <= 3200000) tax = 170000 + (annualIncome - 1600000) * 0.30;
      else if (annualIncome <= 5600000) tax = 650000 + (annualIncome - 3200000) * 0.40;
      else tax = 1610000 + (annualIncome - 5600000) * 0.45;
    }
    
    // Apply surcharge if income > 10,000,000
    if (annualIncome > 10000000) {
      tax += tax * 0.10;
    }
    
    return Math.round(tax);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCalculating(true);
    
    setTimeout(() => {
      const monthlyIncome = parseFloat(formData.monthlyIncome);
      const annualIncome = monthlyIncome * 12;
      const annualTax = calculateTax(annualIncome, formData.category, formData.taxYear);
      const monthlyTax = Math.round(annualTax / 12);
      
      setResults({
        monthlyIncome: monthlyIncome,
        monthlyTax: monthlyTax,
        monthlyAfterTax: monthlyIncome - monthlyTax,
        yearlyIncome: annualIncome,
        yearlyTax: annualTax,
        yearlyAfterTax: annualIncome - annualTax
      });
      setIsCalculating(false);
    }, 1000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <CalculatorIcon className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pakistani <span className="text-emerald-600">Income Tax Calculator</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your exact tax liability according to official Pakistani tax laws. 
            Get instant, accurate results for both tax years.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CalculatorIcon className="h-6 w-6 text-emerald-600 mr-2" />
              Tax Calculator
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Income (PKR)
                </label>
                <input
                  type="number"
                  value={formData.monthlyIncome}
                  onChange={(e) => setFormData({...formData, monthlyIncome: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  placeholder="Enter your monthly income"
                  required
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                >
                  <option value="salaried">Salaried Individual</option>
                  <option value="non-salaried">Non-Salaried Individual</option>
                  <option value="aop">Association of Persons (AOP)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tax Year
                </label>
                <select
                  value={formData.taxYear}
                  onChange={(e) => setFormData({...formData, taxYear: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                >
                  <option value="2025-26">2025-26 (Current)</option>
                  <option value="2024-25">2024-25</option>
                </select>
              </div>
              
              <button
                type="submit"
                disabled={!formData.monthlyIncome || isCalculating}
                className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isCalculating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Calculating...
                  </div>
                ) : (
                  'Calculate Tax'
                )}
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
              Tax Calculation Results
            </h3>
            
            {results ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <div className="text-sm text-emerald-600 font-medium">Monthly Income</div>
                    <div className="text-2xl font-bold text-emerald-700">
                      {formatCurrency(results.monthlyIncome)}
                    </div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-sm text-red-600 font-medium">Monthly Tax</div>
                    <div className="text-2xl font-bold text-red-700">
                      {formatCurrency(results.monthlyTax)}
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-600 font-medium">Income After Tax (Monthly)</div>
                  <div className="text-3xl font-bold text-blue-700">
                    {formatCurrency(results.monthlyAfterTax)}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Annual Summary</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Yearly Income:</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(results.yearlyIncome)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Yearly Tax:</span>
                      <span className="font-semibold text-red-600">{formatCurrency(results.yearlyTax)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-gray-200">
                      <span className="text-gray-600">Income After Tax (Yearly):</span>
                      <span className="font-bold text-blue-600">{formatCurrency(results.yearlyAfterTax)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg p-4 text-white text-center">
                  <TrendingDown className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm">
                    Want to reduce your tax burden legally? Contact us for personalized tax planning!
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <CalculatorIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  Enter your income details to calculate your tax liability
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Results will appear here after calculation
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Important Notes:</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              Calculations are based on official Pakistani Income Tax Ordinance 2001
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              Surcharge of 10% applies on income exceeding PKR 10,000,000
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              Results are estimates - consult our experts for personalized tax planning
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Calculator;