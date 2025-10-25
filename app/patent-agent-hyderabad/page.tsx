import type { Metadata } from 'next'
import { Scale, Phone, Mail, MapPin, Award, CheckCircle, FileText, Users, Home, Heart, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patent Agent Services in Hyderabad | Licensed Patent Agent | Challa Vimalanand',
  description: 'Licensed Patent Agent in Hyderabad (IN/PA 6235). Expert patent filing, trademark registration, IP services. 15+ years experience. Free consultation available.',
  keywords: 'patent agent Hyderabad, patent filing Hyderabad, trademark registration Hyderabad, intellectual property Hyderabad, IP lawyer Hyderabad, patent attorney Hyderabad',
  openGraph: {
    title: 'Patent Agent Services in Hyderabad | Licensed Patent Agent',
    description: 'Licensed Patent Agent in Hyderabad (IN/PA 6235). Expert patent filing, trademark registration, IP services.',
    url: 'https://challavimalanand.github.io/patent-agent-hyderabad',
    type: 'website',
  },
}

export default function PatentAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Licensed Patent Agent Services in Hyderabad
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Licensed Patent Agent (IN/PA 6235) in Hyderabad, Telangana. Expert patent filing, trademark registration, 
              and intellectual property services with 15+ years of technical and legal expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919492030822"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Call Now: +91-9492030822
              </a>
              <a
                href="https://wa.me/919492030822"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Patent & Intellectual Property Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive intellectual property services for individuals and businesses in Hyderabad, Telangana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Patent Filing & Prosecution',
                description: 'Complete patent filing services from application to grant with expert prosecution support.',
                features: ['Patent Drafting', 'Patent Filing', 'Patent Prosecution', 'Patent Search']
              },
              {
                icon: Award,
                title: 'Trademark Registration',
                description: 'Comprehensive trademark registration and protection services for your brand identity.',
                features: ['Trademark Search', 'Trademark Filing', 'Trademark Prosecution', 'Brand Protection']
              },
              {
                icon: Lightbulb,
                title: 'Design Registration',
                description: 'Protect your innovative designs with professional design registration services.',
                features: ['Design Filing', 'Design Prosecution', 'Design Search', 'Design Protection']
              },
              {
                icon: Scale,
                title: 'IP Portfolio Management',
                description: 'Strategic management of your intellectual property portfolio for maximum protection.',
                features: ['Portfolio Analysis', 'Renewal Management', 'IP Strategy', 'Portfolio Optimization']
              },
              {
                icon: Users,
                title: 'IP Litigation Support',
                description: 'Expert support for intellectual property disputes and enforcement matters.',
                features: ['IP Disputes', 'Enforcement', 'Litigation Support', 'IP Defense']
              },
              {
                icon: Heart,
                title: 'IP Advisory Services',
                description: 'Strategic intellectual property advice and consultation for business growth.',
                features: ['IP Strategy', 'IP Consultation', 'IP Audits', 'IP Planning']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Advocate Challa Vimalanand for Patent Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: 'Licensed Patent Agent (IN/PA 6235)',
                    description: 'Officially licensed patent agent with credentials from the Indian Patent Office.'
                  },
                  {
                    title: '15+ Years Technical Experience',
                    description: 'Unique combination of legal expertise and technical engineering background.'
                  },
                  {
                    title: 'Local Hyderabad Expertise',
                    description: 'Deep understanding of local IP landscape and patent office procedures in Hyderabad.'
                  },
                  {
                    title: 'End-to-End IP Services',
                    description: 'Complete intellectual property services from filing to enforcement and protection.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Vimal_headshot.jpg"
                  alt="Advocate Challa Vimalanand - Licensed Patent Agent in Hyderabad"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Patent Filing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Step-by-step process for successful patent filing and intellectual property protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Free consultation to understand your invention and IP requirements.'
              },
              {
                step: '02',
                title: 'Prior Art Search',
                description: 'Comprehensive search to identify existing patents and prior art.'
              },
              {
                step: '03',
                title: 'Patent Drafting',
                description: 'Professional patent specification drafting and claim preparation.'
              },
              {
                step: '04',
                title: 'Filing & Prosecution',
                description: 'Patent filing and prosecution until grant or final decision.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Expert Patent Agent Services in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact Licensed Patent Agent Challa Vimalanand for professional IP services in Hyderabad, Telangana
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone Consultation</h3>
                  <a href="tel:+919492030822" className="text-blue-600 hover:text-blue-800 font-medium">
                    +91-9492030822
                  </a>
                  <p className="text-gray-600 text-sm">Available Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Consultation</h3>
                  <a href="mailto:challavimalanand@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                    challavimalanand@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Office Location</h3>
                  <p className="text-gray-600">
                    G1, VIJAY TEJA RESIDENCY, EAST ANANDBAGH, MALKAJGIRI<br />
                    Hyderabad, Telangana - 500047
                  </p>
                  <p className="text-gray-500 text-sm">By appointment only</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free IP Consultation</h3>
              <p className="text-gray-600 mb-4">
                Get a free initial consultation to discuss your intellectual property needs and protection strategy.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>IP strategy and protection advice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Patentability assessment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Fee structure and timeline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
