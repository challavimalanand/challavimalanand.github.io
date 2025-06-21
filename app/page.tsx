
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
import DisagreementPage from '../components/disagreement-page';

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

  // Show disagreement page
  if (showDisagreement) {
    return <DisagreementPage onBack={handleBackToDisclaimer} />;
  }

  // Show disclaimer if not accepted
  if (!disclaimerAccepted) {
    return (
      <DisclaimerPage 
        onAgree={handleAgree} 
        onDisagree={handleDisagree} 
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
                { id: 'experience', label: 'Experience' },
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Advocate
                  <span className="block text-blue-600">Challa Vimalanand</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Expert Legal Services in Hyderabad, Telangana - Civil Law, Land Litigation & Patent Agent
                </p>
                <div className="flex items-center space-x-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Experienced advocate in Hyderabad specializing in civil law, land litigation, property disputes, and marriage dispute cases. 
                  Licensed Patent Agent with 3+ years legal practice and 9+ years engineering expertise serving clients across Telangana.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Scale className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">3+ Years Legal Practice</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">Licensed Patent Agent</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Get Legal Consultation
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  View Services
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Vimal_headshot.jpg"
                  alt="Advocate Challa Vimalanand - Professional Legal Services"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">12+</div>
                  <div className="text-sm text-gray-600">Years Total Experience</div>
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

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Scale className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">Advocate Challa Vimalanand</span>
            </div>
            <p className="text-gray-400 text-sm">
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Advocate Challa Vimalanand</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leading legal professional in Hyderabad, Telangana with expertise in civil law, land litigation, marriage disputes, and patent services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Professional Photo for About Section */}
            <div className="flex items-start space-x-6 mb-8">
              <div className="relative w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src="/images/vimalanand.jpg"
                  alt="Advocate Challa Vimalanand - Licensed Patent Agent and Legal Practitioner in Hyderabad, Telangana"
                  fill
                  className="object-cover object-center"
                  sizes="96px"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advocate Challa Vimalanand</h3>
                <p className="text-blue-600 font-medium">Licensed Patent Agent & Legal Practitioner</p>
                <p className="text-gray-600 text-sm mt-1">Hyderabad, Telangana</p>
              </div>
            </div>

            <div className="prose prose-lg text-gray-700">
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
                I am committed to providing personalized, effective legal solutions to clients in Hyderabad and Telangana, 
                ensuring their rights are protected with the highest standards of professional legal service and ethical practice.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Scale className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-blue-600">3+</div>
                    <div className="text-sm text-gray-600">Years as Advocate</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Building className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-green-600">9+</div>
                    <div className="text-sm text-gray-600">Years Engineering</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl sm:col-span-2">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-purple-600" />
                  <div>
                    <div className="text-lg font-bold text-purple-600">Licensed Patent Agent</div>
                    <div className="text-sm text-gray-600">Specialized IP Legal Services</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Values</h3>
              <div className="space-y-3">
                {[
                  'Integrity and Professional Ethics',
                  'Client-Focused Legal Solutions',
                  'Technical Expertise in Legal Practice',
                  'Commitment to Justice and Fair Representation'
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{value}</span>
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
      features: ['Patent Filing', 'IP Protection', 'Trademark Services', 'Copyright Matters']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Services in Hyderabad, Telangana</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal solutions in Hyderabad for civil law, land litigation, marriage disputes, and patent services with professional expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Areas:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
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
          <div className="bg-blue-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Need Legal Consultation?</h3>
            <p className="text-blue-100 mb-6">
              Get professional legal advice tailored to your specific situation. Contact me for a consultation.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: '2021 - Present',
      title: 'Advocate',
      organization: 'Legal Practice',
      description: 'Practicing advocate in Hyderabad specializing in civil law, land litigation, property disputes, and marriage dispute cases across Telangana.',
      icon: Scale
    },
    {
      year: '2020',
      title: 'Licensed Patent Agent',
      organization: 'Patent Office, India',
      description: 'Obtained license to practice as Patent Agent, enabling specialized intellectual property services.',
      icon: Award
    },
    {
      year: '2012 - 2021',
      title: 'Mechanical Engineer',
      organization: 'Engineering Industry',
      description: '9 years of engineering experience providing technical expertise and problem-solving skills.',
      icon: Building
    }
  ];

  const qualifications = [
    {
      title: 'Law Degree',
      description: 'Bachelor of Laws (LL.B)',
      icon: BookOpen
    },
    {
      title: 'Engineering Degree',
      description: 'Mechanical Engineering',
      icon: Building
    },
    {
      title: 'Patent Agent License',
      description: 'Registered Patent Agent',
      icon: Award
    },
    {
      title: 'Bar Council Registration',
      description: 'Enrolled Advocate',
      icon: Scale
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience & Qualifications in Hyderabad</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal and technical background serving clients in Hyderabad, Telangana with 12+ years combined experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Timeline</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-sm text-blue-600 font-medium mb-1">{item.year}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <div className="text-sm text-gray-600 mb-3">{item.organization}</div>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Qualifications & Certifications</h3>
            <div className="space-y-6">
              {qualifications.map((qual, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <qual.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{qual.title}</h4>
                      <p className="text-gray-600">{qual.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Areas of Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Civil Litigation',
                  'Property Law',
                  'Family Law',
                  'Patent Law',
                  'Contract Law',
                  'Real Estate',
                  'IP Rights',
                  'Legal Consultation'
                ].map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">{area}</span>
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
      const SERVICE_ID = 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Advocate Challa Vimalanand - Hyderabad</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get professional legal consultation for civil law, land litigation, marriage disputes, and patent services in Hyderabad, Telangana
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Legal Consultation in Hyderabad</h3>
              <p className="text-gray-600 mb-8">
                Available for legal consultations and case discussions in Hyderabad, Telangana. Specializing in civil law, 
                land litigation, property disputes, marriage disputes, and patent services. Contact for professional legal advice.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Watsapp</h4>
                  <a
                    href="https://wa.me/919492030822"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                  >
                    Click to Chat on Watsapp
                  </a>
                  <p className="text-sm text-gray-500">Available Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <a
                    href="mailto:challavimalanand@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                  >
                    challavimalanand@gmail.com
                  </a>
                  
                  <p className="text-sm text-blue-600 mt-1">Click to send email</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Office Address</h4>
                  <p className="text-gray-600">
                  G1, VIJAY TEJA RESIDENCY, EAST ANANDBAGH, MALKAJGIRI<br />
                    Hyderabad, Telangana<br />
                    India - 500047
                  </p>
                  <p className="text-sm text-gray-500">By appointment only</p>
                </div>
              </div>
            </div>

            {/* Google Maps Widget */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Find Us on Map</h4>
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5!2d78.5!3d17.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sG1%2C%20VIJAY%20TEJA%20RESIDENCY%2C%20EAST%20ANANDBAGH%2C%20MALKAJGIRI%2C%20Hyderabad%2C%20Telangana%20500047%2C%20India!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
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
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm">
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
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            {/* Success Message */}
            {formStatus.isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-green-800 font-medium">Message sent successfully!</p>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Thank you for contacting me. I will respond within 24 hours.
                </p>
              </div>
            )}

            {/* Error Message */}
            {formStatus.isError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-red-600" />
                  <p className="text-red-800 font-medium">Failed to send message</p>
                </div>
                <p className="text-red-700 text-sm mt-1">
                  {formStatus.errorMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                    disabled={formStatus.isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Your phone number"
                    disabled={formStatus.isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                  disabled={formStatus.isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Legal Matter Type
                </label>
                <select 
                  name="legalMatter"
                  value={formData.legalMatter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Please describe your legal matter and how I can assist you..."
                  disabled={formStatus.isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  formStatus.isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                }`}
              >
                {formStatus.isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
