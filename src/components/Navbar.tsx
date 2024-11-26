import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}

function Navbar({ isNavOpen, setIsNavOpen }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 z-50">
      <button 
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="p-4 hover:bg-gray-800 transition-colors"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button onClick={() => setIsNavOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <Link to="/" className="block hover:bg-gray-700 p-2 rounded text-white">Home</Link>
              <Link to="/contact" className="block hover:bg-gray-700 p-2 rounded text-white">Contact</Link>
              <Link to="/quote" className="block hover:bg-gray-700 p-2 rounded text-white">Quote</Link>
              <Link to="/shree-ai" className="block hover:bg-gray-700 p-2 rounded text-white">Shree AI</Link>
              <Link to="/" className="block hover:bg-gray-700 p-2 rounded text-white">Services</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;