
'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, ArrowLeft, Scale, Phone, Mail } from 'lucide-react';

interface DisagreementPageProps {
  onBack: () => void;
}

export default function DisagreementPage({ onBack }: DisagreementPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            <AlertTriangle className="h-10 w-10" />
            <h1 className="text-2xl font-bold">Access Declined</h1>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                We Understand Your Decision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                You have chosen not to agree to the terms of our website disclaimer. 
                We respect your decision and cannot provide access to the website content at this time.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Direct Legal Consultation Available
              </h3>
              <p className="text-blue-800 leading-relaxed mb-4">
                If you require legal assistance, you can still contact Advocate Challa Vimalanand directly 
                for a professional consultation regarding your legal needs.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3 text-blue-800">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">+91-9876543210</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-blue-800">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">challavimalanand@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Scale className="h-6 w-6 text-gray-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Professional Legal Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Advocate Challa Vimalanand provides expert legal services in Civil Law, 
                    Land Litigation, Marriage Disputes, and Patent Services throughout Hyderabad, Telangana.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-8 border-t border-gray-200">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                onClick={onBack}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Disclaimer</span>
              </motion.button>
            </div>

            {/* Footer Note */}
            <div className="text-center text-sm text-gray-500 pt-4">
              <p>
                Thank you for your understanding. We appreciate your consideration of our legal services.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
