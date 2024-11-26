import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Navbar from './components/Navbar';

const webServices = [
  "Website Development",
  "E-commerce Solutions",
  "Custom Web Applications",
  "UI/UX Design",
  "Website Maintenance",
  "SEO Optimization",
  "Mobile-First Development",
  "Performance Optimization",
  "Security Implementation",
  "API Integration",
  "Content Management Systems",
  "Progressive Web Apps"
];

function Quote() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:udditalerts247@gmail.com?subject=Service Quote Request&body=Selected Services:%0D%0A${selectedServices.join('%0D%0A')}`;
    window.location.href = mailtoLink;
  };

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-lg shadow-xl p-8"
          >
            <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Request a Quote
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {webServices.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <label className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500 border-gray-500 bg-gray-600"
                      />
                      <span>{service}</span>
                    </label>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full p-4 bg-blue-600 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
                disabled={selectedServices.length === 0}
              >
                <Send className="w-5 h-5" />
                <span>Submit Quote Request</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Quote;