import { useState, useEffect } from "react";

interface PricingPackage {
  name: string;
  description: string;
  features: string[];
  price: number;
  popular?: boolean;
}

const packages: PricingPackage[] = [
  {
    name: "Starter Package",
    description: "Ideal for individuals and small teams beginning their digital journey.",
    features: [
      "Basic API Access",
      "Standard Analytics Dashboard", 
      "Community Support",
      "Up to 5 Users"
    ],
    price: 199.00
  },
  {
    name: "Business Package", 
    description: "Comprehensive tools for growing businesses and advanced operations.",
    features: [
      "Advanced API Access",
      "Premium Analytics & Reporting",
      "Dedicated Priority Support", 
      "Unlimited Users",
      "Custom Data Integrations"
    ],
    price: 499.00,
    popular: true
  },
  {
    name: "Enterprise Package",
    description: "Full-scale solutions for large organizations and custom needs.",
    features: [
      "All Business Package Features",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "Enhanced Custom Integrations", 
      "On-site Training & Setup"
    ],
    price: 1200.00
  }
];

const conversionRates = {
  'ZAR': { symbol: 'R', rate: 1 },
  'USD': { symbol: '$', rate: 0.055 },
  'EUR': { symbol: '€', rate: 0.051 },
  'GBP': { symbol: '£', rate: 0.043 }
};

export default function ProductsPricing() {
  const [selectedCurrency, setSelectedCurrency] = useState<keyof typeof conversionRates>('ZAR');

  const formatPrice = (price: number) => {
    const { symbol, rate } = conversionRates[selectedCurrency];
    const convertedPrice = (price * rate).toFixed(2);
    return `${symbol} ${convertedPrice}`;
  };

  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-5xl">🦍</span>
            <h2 className="text-4xl font-black text-gray-900">FAA.ZONE™</h2>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Explore Our <span className="text-blue-600">Products</span>
          </h3>
          <p className="text-xl text-gray-700 mb-8">
            Choose the package that best fits your needs and proceed to secure checkout.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 inline-flex items-center space-x-4 mb-12">
            <label htmlFor="currency-select" className="text-gray-700 font-medium">Display prices in:</label>
            <select 
              id="currency-select" 
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value as keyof typeof conversionRates)}
              className="p-3 border border-gray-300 rounded-lg bg-white text-gray-800 font-medium"
            >
              <option value="ZAR">ZAR (R)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`price-card bg-white p-8 rounded-2xl shadow-lg border ${
                pkg.popular ? 'border-2 border-blue-500 relative' : 'border border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <i className="fas fa-check text-green-500"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-3xl font-black text-gray-900 mb-6">
                {formatPrice(pkg.price)} <span className="text-lg font-normal text-gray-600">/ month</span>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
