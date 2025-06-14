
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber = "+919492030822", // Placeholder number
  message = "Hello! I would like to inquire about your legal services." 
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleWhatsAppClick();
    }
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1 
        }}
      >
        <motion.button
          onClick={handleWhatsAppClick}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => {
            setIsHovered(true);
            setShowTooltip(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setShowTooltip(false);
          }}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contact via WhatsApp"
          title="Contact via WhatsApp"
        >
          <motion.div
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <MessageCircle className="h-6 w-6" />
          </motion.div>
          
          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 bg-green-400 rounded-full -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: -10, scale: 0.8 }}
          animate={{ 
            opacity: showTooltip ? 1 : 0, 
            x: showTooltip ? 0 : -10,
            scale: showTooltip ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
          className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg pointer-events-none"
          style={{ display: showTooltip ? 'block' : 'none' }}
        >
          Chat with us on WhatsApp
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
        </motion.div>
      </motion.div>

      {/* Floating message preview (appears on hover) */}
      <motion.div
        className="fixed bottom-24 left-6 z-40 max-w-xs"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? 0 : 20,
          scale: isHovered ? 1 : 0.8
        }}
        transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
        style={{ display: isHovered ? 'block' : 'none' }}
      >
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 relative">
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
              <MessageCircle className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-grow">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                Advocate Challa Vimalanand
              </div>
              <div className="text-xs text-gray-600 mb-2">
                Legal Consultation Available
              </div>
              <div className="text-sm text-gray-700">
                Get professional legal advice via WhatsApp
              </div>
            </div>
          </div>
          
          {/* Arrow pointing to button */}
          <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
        </div>
      </motion.div>
    </>
  );
}
