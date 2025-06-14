
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

export default function AdvocatePortfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
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
                  Professional Legal Services in Hyderabad, Telangana
                </p>
                <div className="flex items-center space-x-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Experienced advocate specializing in civil law, land litigations, and marriage dispute cases. 
                  Licensed Patent Agent with a unique background combining legal expertise and engineering knowledge.
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
                  className="object-cover"
                  priority
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

    </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated legal professional with a unique blend of legal expertise and technical knowledge
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
                  alt="Advocate Challa Vimalanand"
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
                With 3 years of experience as an advocate and 9 years as a mechanical engineer, I bring a unique 
                perspective to legal practice that combines technical expertise with legal acumen.
              </p>
              <p>
                As a Licensed Patent Agent, I have the specialized knowledge to handle intellectual property 
                matters alongside my core practice areas. My engineering background provides me with valuable 
                insights when dealing with technical legal matters and complex litigation cases.
              </p>
              <p>
                I am committed to providing personalized, effective legal solutions to my clients, ensuring 
                that their rights are protected and their legal objectives are achieved with the highest 
                standards of professional service.
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal solutions tailored to meet your specific needs with professional expertise
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
      description: 'Practicing advocate specializing in civil law, land litigations, and marriage dispute cases in Hyderabad.',
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience & Qualifications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive background combining legal expertise with technical knowledge
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch for professional legal consultation and services in Hyderabad
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                I am available for legal consultations and case discussions. Feel free to reach out 
                to discuss your legal requirements and how I can assist you.
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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Legal Matter Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select legal matter type</option>
                  <option value="civil">Civil Law</option>
                  <option value="land">Land Litigation</option>
                  <option value="marriage">Marriage Dispute</option>
                  <option value="patent">Patent/IP Matter</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your legal matter or question..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}