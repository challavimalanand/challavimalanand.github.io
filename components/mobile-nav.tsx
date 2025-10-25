'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scale } from 'lucide-react';

interface MobileNavProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' }
];

export default function MobileNav({ activeSection, onSectionClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  <span className="text-sm sm:text-lg font-bold text-gray-900">Advocate Challa Vimalanand</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="p-4 sm:p-6">
                <ul className="space-y-3 sm:space-y-4">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleSectionClick(item.id)}
                        className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 ${
                          activeSection === item.id
                            ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-base sm:text-lg font-medium">{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Contact Info */}
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Quick Contact</h3>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <a
                      href="https://wa.me/919492030822"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-800"
                    >
                      WhatsApp: +91 9492030822
                    </a>
                    <a
                      href="mailto:challavimalanand@gmail.com"
                      className="block text-blue-600 hover:text-blue-800"
                    >
                      Email: challavimalanand@gmail.com
                    </a>
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 