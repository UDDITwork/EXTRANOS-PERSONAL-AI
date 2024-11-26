import React, { useState } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';

function Contact() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
              Contact Interface
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h2 className="text-xl font-semibold mb-4">Email Contact</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:udditalerts247@gmail.com"
                    className="flex items-center space-x-3 p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>udditalerts247@gmail.com</span>
                  </a>
                  <a
                    href="mailto:2021UMT1791@mnit.ac.in"
                    className="flex items-center space-x-3 p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>2021UMT1791@mnit.ac.in</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h2 className="text-xl font-semibold mb-4">Phone Contact</h2>
                <div className="space-y-4">
                  <a
                    href="tel:+917456884877"
                    className="flex items-center space-x-3 p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91-7456884877</span>
                  </a>
                  <a
                    href="https://wa.me/919672538062"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp: +91-9672538062</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;