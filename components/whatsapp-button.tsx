
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Official WhatsApp Icon Component with exact branding
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Official WhatsApp logo with speech bubble design */}
    <path d="M12.012 2C6.486 2 2.013 6.474 2.013 12c0 1.99.525 3.862 1.438 5.479L2.013 22l4.729-1.396C8.36 21.44 10.154 22 12.012 22c5.525 0 9.998-4.474 9.998-10S17.537 2 12.012 2zm5.92 14.184c-.252.708-1.26 1.296-2.076 1.464-.563.116-1.297.21-3.772-.808-2.66-1.094-4.388-3.78-4.52-3.956-.132-.176-.996-1.32-.996-2.52 0-1.2.63-1.788.852-2.034.222-.246.486-.308.648-.308.162 0 .324.002.468.01.15.008.35-.058.546.416.198.474.672 1.638.732 1.758.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.252.312-.36.42-.12.12-.246.25-.106.49.14.24.622 1.026 1.334 1.66 1.158 1.032 2.134 1.35 2.436 1.502.302.152.478.128.652-.08.174-.208.744-.868.942-1.166.198-.298.396-.248.668-.148.272.1 1.726.814 2.022.962.296.148.494.222.566.346.072.124.072.718-.18 1.426z"/>
  </svg>
);

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber = "+919492030822",
  message = "Hello Advocate Challa Vimalanand! I would like to inquire about your legal services." 
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
          onMouseEnter={(e) => {
            setIsHovered(true);
            setShowTooltip(true);
            e.currentTarget.style.backgroundColor = '#128C7E';
            e.currentTarget.style.boxShadow = '0 6px 20px 0 rgba(37, 211, 102, 0.5)';
          }}
          onMouseLeave={(e) => {
            setIsHovered(false);
            setShowTooltip(false);
            e.currentTarget.style.backgroundColor = '#25D366';
            e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(37, 211, 102, 0.39)';
          }}
          onFocus={(e) => {
            setShowTooltip(true);
            e.currentTarget.style.boxShadow = '0 0 0 4px rgba(37, 211, 102, 0.3)';
          }}
          onBlur={(e) => {
            setShowTooltip(false);
            e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(37, 211, 102, 0.39)';
          }}
          className="group relative text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50"
          style={{ 
            backgroundColor: '#25D366',
            boxShadow: '0 4px 14px 0 rgba(37, 211, 102, 0.39)'
          }}
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
            <WhatsAppIcon className="h-6 w-6" />
          </motion.div>
          
          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 rounded-full -z-10"
            style={{ backgroundColor: '#25D366' }}
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
            <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)' }}>
              <div className="h-4 w-4" style={{ color: '#25D366' }}>
                <WhatsAppIcon className="h-4 w-4" />
              </div>
            </div>
            <div className="flex-grow">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                Advocate Challa Vimalanand
              </div>
              <div className="text-xs text-gray-600 mb-2">
                Legal Consultation Available
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