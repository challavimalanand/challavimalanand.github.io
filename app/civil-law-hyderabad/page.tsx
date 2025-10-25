import type { Metadata } from 'next'
import { Scale, Phone, Mail, MapPin, Award, CheckCircle, FileText, Users, Home, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Civil Law Services in Hyderabad | Expert Civil Litigation Advocate | Challa Vimalanand',
  description: 'Expert civil law services in Hyderabad. Specialized in property disputes, contract matters, civil rights cases. Licensed advocate with 15+ years experience. Free consultation available.',
  keywords: 'civil law Hyderabad, civil litigation Hyderabad, property disputes Hyderabad, contract law Hyderabad, civil rights Hyderabad, civil lawyer Hyderabad',
  openGraph: {
    title: 'Civil Law Services in Hyderabad | Expert Civil Litigation Advocate',
    description: 'Expert civil law services in Hyderabad. Specialized in property disputes, contract matters, civil rights cases.',
    url: 'https://challavimalanand.github.io/civil-law-hyderabad',
    type: 'website',
  },
}

export default function CivilLawPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Civil Law Services in Hyderabad
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional civil litigation services in Hyderabad, Telangana. Specialized in property disputes, 
              contract matters, and civil rights cases with 15+ years of legal expertise.
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
              Civil Law Services in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive civil litigation services for individuals and businesses in Hyderabad, Telangana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: 'Property Disputes',
                description: 'Resolve property disputes, title verification, and real estate legal matters with expert legal representation.',
                features: ['Title Disputes', 'Property Registration', 'Land Acquisition', 'Boundary Disputes']
              },
              {
                icon: FileText,
                title: 'Contract Law',
                description: 'Comprehensive contract drafting, review, and dispute resolution for business and personal matters.',
                features: ['Contract Drafting', 'Contract Review', 'Breach of Contract', 'Contract Disputes']
              },
              {
                icon: Users,
                title: 'Civil Rights',
                description: 'Protect your civil rights with expert legal representation in civil rights violations and discrimination cases.',
                features: ['Civil Rights Violations', 'Discrimination Cases', 'Human Rights', 'Constitutional Rights']
              },
              {
                icon: Scale,
                title: 'Tort Claims',
                description: 'Seek compensation for personal injury, negligence, and other tort claims with professional legal support.',
                features: ['Personal Injury', 'Negligence Claims', 'Defamation', 'Tort Litigation']
              },
              {
                icon: Award,
                title: 'Commercial Disputes',
                description: 'Resolve commercial disputes and business litigation matters with experienced legal representation.',
                features: ['Business Disputes', 'Commercial Litigation', 'Partnership Disputes', 'Corporate Law']
              },
              {
                icon: Heart,
                title: 'Consumer Rights',
                description: 'Protect consumer rights and seek justice in consumer protection and product liability cases.',
                features: ['Consumer Protection', 'Product Liability', 'Consumer Rights', 'Consumer Disputes']
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
              Why Choose Advocate Challa Vimalanand for Civil Law?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: '15+ Years Experience',
                    description: 'Extensive experience in civil law with successful case outcomes across Hyderabad and Telangana.'
                  },
                  {
                    title: 'Licensed Patent Agent',
                    description: 'Unique combination of legal expertise and technical knowledge for complex civil matters.'
                  },
                  {
                    title: 'Local Expertise',
                    description: 'Deep understanding of local laws, courts, and legal procedures in Hyderabad.'
                  },
                  {
                    title: 'Personalized Service',
                    description: 'Dedicated attention to each case with regular updates and transparent communication.'
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
                  alt="Advocate Challa Vimalanand - Civil Law Expert in Hyderabad"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Expert Civil Law Consultation in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact Advocate Challa Vimalanand for professional civil law services in Hyderabad, Telangana
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Initial Consultation</h3>
              <p className="text-gray-600 mb-4">
                Get a free initial consultation to discuss your civil law matter and understand your legal options.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Case evaluation and legal advice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Strategy discussion and next steps</span>
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
      <section className="py-8 bg-gray-50">
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
