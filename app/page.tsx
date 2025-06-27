'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  BookOpen, 
  Users, 
  Briefcase,
  Home,
  Heart,
  FileText,
  CheckCircle,
  Calendar,
  Building
} from 'lucide-react';
import WhatsAppButton from '../components/whatsapp-button';
import DisclaimerPage from '../components/disclaimer-page';
import BreadcrumbNav from '../components/breadcrumb-nav';
import MobileNav from '../components/mobile-nav';
import StructuredData from '../components/structured-data';

export default function AdvocatePortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [showDisagreement, setShowDisagreement] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check sessionStorage for existing disclaimer agreement
  useEffect(() => {
    const checkDisclaimerStatus = () => {
      try {
        // Ensure sessionStorage is available (client-side only)
        if (typeof window !== 'undefined' && window.sessionStorage) {
          const disclaimerStatus = sessionStorage.getItem('disclaimerAccepted');
          if (disclaimerStatus === 'true') {
            setDisclaimerAccepted(true);
          }
        }
      } catch (error) {
        console.error('Error checking disclaimer status:', error);
      } finally {
        // Always set loading to false after check
        setIsLoading(false);
      }
    };

    // Add a small delay to ensure proper hydration
    const timer = setTimeout(checkDisclaimerStatus, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle disclaimer agreement
  const handleAgree = () => {
    try {
      sessionStorage.setItem('disclaimerAccepted', 'true');
      setDisclaimerAccepted(true);
      setShowDisagreement(false);
    } catch (error) {
      console.error('Error saving disclaimer agreement:', error);
      // Fallback: still allow access even if sessionStorage fails
      setDisclaimerAccepted(true);
      setShowDisagreement(false);
    }
  };

  // Handle disclaimer disagreement
  const handleDisagree = () => {
    setShowDisagreement(true);
  };

  // Handle going back from disagreement page
  const handleBackToDisclaimer = () => {
    setShowDisagreement(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show loading state briefly
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <Scale className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading...</p>
        </motion.div>
      </div>
    );
  }

  // Show disclaimer if not accepted
  if (!disclaimerAccepted) {
    return (
      <DisclaimerPage 
        onAgree={handleAgree} 
      />
    );
  }

  // Show main website content with smooth transition
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white"
    >
      {/* Structured Data for SEO */}
      <StructuredData type="Person" />
      <StructuredData type="LegalService" />
      <StructuredData type="Organization" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Advocate Challa Vimalanand</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Navigation */}
            <MobileNav 
              activeSection={activeSection} 
              onSectionClick={scrollToSection} 
            />
          </div>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <BreadcrumbNav 
        activeSection={activeSection} 
        onSectionClick={scrollToSection} 
      />

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Advocate
                  <span className="block text-blue-600">Challa Vimalanand</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Expert Legal Services in Hyderabad, Telangana - Civil Law, Land Litigation & Patent Agent
                </p>
                <div className="flex items-center space-x-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Hyderabad, Telangana, India</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Experienced advocate in Hyderabad specializing in civil law, land litigation, property disputes, and marriage dispute cases. 
                  Licensed Patent Agent with 3+ years legal practice and 9+ years engineering expertise serving clients across Telangana.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2 bg-white px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                    <Scale className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">3+ Years Legal Practice</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">Licensed Patent Agent</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg text-sm sm:text-base"
                >
                  Get Legal Consultation
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm sm:text-base"
                >
                  View Services
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-[4/5] bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="/images/Vimal_headshot.jpg"
                  alt="Advocate Challa Vimalanand - Professional Legal Services"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">12+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Total Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
              <span className="text-base sm:text-lg font-semibold">Advocate Challa Vimalanand</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Professional Legal Services | Hyderabad, Telangana, India
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2025 Advocate Challa Vimalanand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber="+919492030822"
        message="Hello Advocate Challa Vimalanand! I would like to inquire about your legal services and schedule a consultation."
      />
    </motion.div>
  );
}

function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Advocate Challa Vimalanand</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          leading Advocate and Registered Patent Agent in Hyderabad, Telangana with expertise in civil law, land litigation, marriage disputes, and patent services & Trademarks
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Professional Photo for About Section */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl overflow-hidden shadow-lg flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src="/images/vimalanand.jpg"
                  alt="Advocate Challa Vimalanand - Licensed Patent Agent and Legal Practitioner in Hyderabad, Telangana"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 80px, 96px"
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Advocate Challa Vimalanand</h3>
                <p className="text-blue-600 font-medium text-sm sm:text-base">Licensed Patent Agent & Legal Practitioner</p>
                <p className="text-gray-600 text-sm mt-1">Hyderabad, Telangana</p>
              </div>
            </div>

            <div className="prose prose-sm sm:prose-lg text-gray-700">
              <p>
                I am Advocate Challa Vimalanand, a dedicated legal professional based in Hyderabad, Telangana. 
                With 3+ years of experience as an advocate and 9+ years as a mechanical engineer, I bring a unique 
                perspective to legal practice serving clients across Hyderabad, Secunderabad, and greater Telangana region.
              </p>
              <p>
                As a Licensed Patent Agent in Hyderabad, I specialize in intellectual property matters, civil law cases, 
                land litigation disputes, property law, and marriage dispute resolution. My engineering background provides 
                valuable technical insights for complex litigation and patent-related legal matters.
              </p>
              <p>
              Whether you are seeking patent filing, trademark registration, design protection, or strategic IP advice in Hyderabad, our experienced legal team delivers exceptional service tailored to your business needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">3+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years as Advocate</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 sm:p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Building className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600">9+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years Engineering</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 sm:p-6 rounded-xl sm:col-span-2">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                  <div>
                    <div className="text-sm sm:text-lg font-bold text-purple-600">Licensed Patent Agent (IN/PA 6235) </div>
                    <div className="text-xs sm:text-sm text-gray-600">Specialized IP Legal Services</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Core Values</h3>
              <div className="space-y-3">
                {[
                  'Integrity and Professional Ethics',
                  'Client-Focused Legal Solutions',
                  'Technical Expertise in Legal Practice',
                  'Commitment to Justice and Fair Representation'
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Home,
      title: 'Civil Law',
      description: 'Comprehensive civil litigation services including property disputes, contract matters, and civil rights cases.',
      features: ['Property Disputes', 'Contract Law', 'Civil Rights', 'Tort Claims']
    },
    {
      icon: FileText,
      title: 'Land Litigations',
      description: 'Specialized expertise in land and property disputes, title verification, and real estate legal matters.',
      features: ['Title Disputes', 'Property Registration', 'Land Acquisition', 'Boundary Disputes']
    },
    {
      icon: Heart,
      title: 'Marriage Dispute Cases',
      description: 'Sensitive handling of family law matters including divorce, custody, and matrimonial disputes.',
      features: ['Divorce Proceedings', 'Child Custody', 'Alimony Cases', 'Domestic Violence']
    },
    {
      icon: Award,
      title: 'Patent & IP Services',
      description: 'Licensed Patent Agent services for intellectual property protection and patent applications.',
      features: [
                         'Patent Drafting & Filing in India'
                        ,'Patent Prosecution & Examination'
                        ,'Patent Search & Prior Art Analysis'
                        ,'Patent Portfolio Management'
                        ,'Patent Opposition & Revocation'
                        ,'Patent Litigation Support'
                        ,'Patent Advisory & Consultation'
                        ,'International Patent Filing (PCT)'
                        ,'Patent Enforcement Services'
      ]
    },
    {
      icon: Award,
      title: 'Trademarks',
      description: 'Our deep understanding of trademark law ensures smooth registration and lasting protection.We handle each step from search to renewal with precision and foresight.We proactively monitor deadlines and risks to keep your brand secure.',
      features: [
                        'Trademark Search & Clearance'
                        ,'Trademark Registration & Filing'
                        ,'Trademark Prosecution & Response'
                        ,'Trademark Opposition & Rectification'
                        ,'Trademark Portfolio Management'
                        ,'Trademark Licensing & Assignment'
                        ,'Trademark Enforcement & Protection'
                        ,'Brand Strategy & Advisory'
      ]
    },
    {
      icon: FileText,
      title: 'Banking and Contracts',
      description: 'Support in Banking and Contract Disputes',
      features: ['SARFAESI Act', 'Company Act', 'Contract Disputes', 'Banking Disputes']
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Services in Hyderabad, Telangana</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal solutions in Hyderabad for civil law, land litigation, marriage disputes, and patent services with professional expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Key Areas:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    legalMatter: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Form validation
  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };

    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      errorMessage: ''
    });

    try {
      // EmailJS configuration - These values need to be set up in EmailJS dashboard
      const emailjs = (await import('@emailjs/browser')).default;
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        legal_matter: formData.legalMatter || 'Not specified',
        message: formData.message,
        to_email: 'challavimalanand@gmail.com'
      };

      // Replace these with your actual EmailJS credentials
      const SERVICE_ID = 'service_fs38t4i';
      const TEMPLATE_ID = 'template_7ifxjlc';
      const PUBLIC_KEY = 'CwoE-yxp7kaZCun0Q';

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        errorMessage: ''
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        legalMatter: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Failed to send message. Please try again or contact directly via phone/email.'
      });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Advocate Challa Vimalanand - Hyderabad</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Get professional legal consultation for civil law, land litigation, marriage disputes, and patent services in Hyderabad, Telangana
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Legal Consultation in Hyderabad</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Available for legal consultations and case discussions in Hyderabad, Telangana. Specializing in civil law, 
                land litigation, property disputes, marriage disputes, and patent services. Contact for professional legal advice.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">WhatsApp</h4>
                  <a
                    href="https://wa.me/919492030822"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium text-sm sm:text-base"
                  >
                    Click to Chat on WhatsApp
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500">Available Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Email</h4>
                  <a
                    href="mailto:challavimalanand@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium text-sm sm:text-base"
                  >
                    challavimalanand@gmail.com
                  </a>
                  
                  <p className="text-xs sm:text-sm text-blue-600 mt-1">Click to send email</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Office Address</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                  G1, VIJAY TEJA RESIDENCY, EAST ANANDBAGH, MALKAJGIRI<br />
                    Hyderabad, Telangana<br />
                    India - 500047
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">By appointment only</p>
                </div>
              </div>
            </div>

            {/* Google Maps Widget */}
            <div className="mt-6">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Find Us on Map</h4>
              <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.5769124492285!2d78.54444844465046!3d17.457320098057096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b95739c5981%3A0x429986de8ee97499!2sVijay%20Teja%20Residency%2C%20ANR%20Nagar%20Colony%2C%20East%20Anandbagh%2C%20Anandbagh%2C%20Moula%20Ali%2C%20Secunderabad%2C%20Telangana%20500047!5e1!3m2!1sen!2sin!4v1750694441210!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location - G1, VIJAY TEJA RESIDENCY, EAST ANANDBAGH, MALKAJGIRI, Hyderabad"
              ></iframe>
              </div>
              <div className="mt-2 text-center">
                <a
                  href="https://maps.app.goo.gl/AvJHPFfC9dqMFKCG6?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-xs sm:text-sm font-medium"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Office Hours</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send a Message</h3>
            
            {/* Success Message */}
            {formStatus.isSuccess && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  <p className="text-green-800 font-medium text-sm sm:text-base">Message sent successfully!</p>
                </div>
                <p className="text-green-700 text-xs sm:text-sm mt-1">
                  Thank you for contacting me. I will respond within 24 hours.
                </p>
              </div>
            )}

            {/* Error Message */}
            {formStatus.isError && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                  <p className="text-red-800 font-medium text-sm sm:text-base">Failed to send message</p>
                </div>
                <p className="text-red-700 text-xs sm:text-sm mt-1">
                  {formStatus.errorMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                    disabled={formStatus.isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-xs sm:text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                      errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Your phone number"
                    disabled={formStatus.isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-xs sm:text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                  disabled={formStatus.isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs sm:text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Legal Matter Type
                </label>
                <select 
                  name="legalMatter"
                  value={formData.legalMatter}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  disabled={formStatus.isSubmitting}
                >
                  <option value="">Select legal matter type</option>
                  <option value="civil-law">Civil Law</option>
                  <option value="land-litigation">Land Litigation</option>
                  <option value="marriage-dispute">Marriage Dispute</option>
                  <option value="patent-ip">Patent & IP Services</option>
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                    errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Please describe your legal matter and how I can assist you..."
                  disabled={formStatus.isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 text-xs sm:text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                  formStatus.isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                }`}
              >
                {formStatus.isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Required fields. Your information will be kept confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
