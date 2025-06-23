
'use client';

import { motion } from 'framer-motion';
import { Scale, CheckCircle } from 'lucide-react';

interface DisclaimerPageProps {
  onAgree: () => void;
}

export default function DisclaimerPage({ onAgree }: DisclaimerPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
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
            {/* Bar Council Compliance */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Bar Council of India Compliance</h2>
              <p className="text-blue-800 leading-relaxed mb-4">
                This website is in compliance with the Bar Council of India rules. The information provided on this website is solely for informational purposes and does not constitute legal advice.
              </p>
              <p className="text-blue-800 leading-relaxed">
                Advocate Challa Vimalanand is a practicing advocate enrolled with the Bar Council and is authorized to practice law in India.
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>No Solicitation:</strong> The information on this website is not intended as solicitation of clients. The contents of this website are for informational purposes only and do not constitute legal advice.
              </p>

              <p>
                <strong>User Initiated Visit:</strong> By accessing this website, you acknowledge that you are seeking information about Advocate Challa Vimalanand's legal services of your own accord and that there has been no form of solicitation, advertisement, or inducement by or on behalf of the advocate.
              </p>

              <p>
                <strong>No Lawyer-Client Relationship:</strong> The transmission and receipt of information contained on this website does not form or constitute a lawyer-client relationship between you and Advocate Challa Vimalanand.
              </p>

              <p>
                <strong>Confidentiality:</strong> Any information transmitted through this website may not be secure and may not be protected by attorney-client privilege. Please do not include confidential information until a formal attorney-client relationship has been established.
              </p>

              <p>
                <strong>Legal Advice:</strong> For specific legal advice pertaining to your situation, please contact our office directly to schedule a consultation.
              </p>
            </div>

            {/* Agreement Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-800 font-medium mb-4">
                By clicking "I AGREE" below, you acknowledge that:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>You have read and understood the above disclaimer</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>You understand that this website is for informational purposes only</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Your visit to this website is self-initiated and not solicited</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>No attorney-client relationship is formed by accessing this website</span>
                </li>
              </ul>
            </div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center pt-8 border-t border-gray-200"
            >
              <button
                onClick={onAgree}
                className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <CheckCircle className="h-6 w-6" />
                <span className="text-lg">I AGREE</span>
              </button>
            </motion.div>

            {/* Footer Note */}
            <div className="text-center text-sm text-gray-500 pt-4">
              <p>
                Professional legal consultation available upon request.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}