
'use client';

import { motion } from 'framer-motion';
import { Scale, AlertTriangle, FileText, CheckCircle } from 'lucide-react';

interface DisclaimerPageProps {
  onAgree: () => void;
  onDisagree: () => void;
}

export default function DisclaimerPage({ onAgree, onDisagree }: DisclaimerPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            <Scale className="h-10 w-10" />
            <h1 className="text-3xl font-bold">Advocate Challa Vimalanand</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-blue-100 text-lg"
          >
            Legal Services Disclaimer
          </motion.p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-yellow-800 mb-2">Important Legal Notice</h2>
                  <p className="text-yellow-700 leading-relaxed">
                    Please read this disclaimer carefully before accessing this website. By continuing to use this website, 
                    you acknowledge that you have read, understood, and agree to be bound by the terms of this disclaimer.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Disclaimer Content */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Website Information Disclaimer</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This website is maintained by Advocate Challa Vimalanand for informational purposes only. 
                    The content on this website does not constitute legal advice and should not be relied upon as such. 
                    The information provided is general in nature and may not apply to your specific legal situation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Scale className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">No Attorney-Client Relationship</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Viewing this website or contacting us through this website does not create an attorney-client relationship.</strong> 
                    An attorney-client relationship is only established after a formal retainer agreement is signed and 
                    legal representation is formally undertaken. Until such time, any information you provide may not be 
                    protected by attorney-client privilege.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Representation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Advocate Challa Vimalanand is licensed to practice law in the state of Telangana, India, 
                    and is registered with the Bar Council. Legal representation is provided in accordance with 
                    the rules and regulations of the Bar Council of India and applicable legal ethics.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points to Remember:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>This website is for informational purposes only and does not constitute legal advice</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>No attorney-client relationship is created by viewing this website or submitting information</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Legal advice should be sought for specific legal matters and situations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Information provided may not be protected by attorney-client privilege until formal representation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Legal representation is subject to formal retainer agreement and terms of engagement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Professional Contact Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Professional Legal Consultation</h3>
              <p className="text-blue-800 leading-relaxed">
                For specific legal advice and representation, please contact Advocate Challa Vimalanand directly 
                to schedule a consultation. Professional legal advice will be provided after understanding your 
                specific legal requirements and entering into a formal attorney-client relationship.
              </p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200"
            >
              <button
                onClick={onAgree}
                className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <CheckCircle className="h-5 w-5" />
                <span>I Agree - Continue to Website</span>
              </button>
              <button
                onClick={onDisagree}
                className="flex-1 bg-gray-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-700 transition-colors shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <AlertTriangle className="h-5 w-5" />
                <span>I Do Not Agree</span>
              </button>
            </motion.div>

            {/* Footer Note */}
            <div className="text-center text-sm text-gray-500 pt-4">
              <p>
                By clicking "I Agree", you acknowledge that you have read and understood this disclaimer.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
