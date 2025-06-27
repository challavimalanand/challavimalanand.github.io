'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

interface BreadcrumbNavProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const sectionLabels: Record<string, string> = {
  home: 'Home',
  about: 'About',
  services: 'Services',
  contact: 'Contact',
};

export default function BreadcrumbNav({ activeSection, onSectionClick }: BreadcrumbNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Show breadcrumb after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200); // Show after 200px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={() => onSectionClick('home')}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {activeSection !== 'home' && (
              <>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-900 font-medium">
                    {sectionLabels[activeSection] || activeSection}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </motion.div>
  );
} 