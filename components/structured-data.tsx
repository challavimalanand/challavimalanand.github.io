'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Person' | 'LegalService' | 'Organization';
}

export default function StructuredData({ type }: StructuredDataProps) {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...(type === 'Person' && {
        name: 'Advocate Challa Vimalanand',
        jobTitle: 'Advocate & Licensed Patent Agent',
        description: 'Professional legal services in Hyderabad, Telangana. Specializing in Civil law, land litigations, marriage disputes, and patent services.',
        url: 'https://challavimalanand.github.io',
        image: 'https://challavimalanand.github.io/images/Vimal_headshot.jpg',
        sameAs: [
          'https://wa.me/919492030822'
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'G1, VIJAY TEJA RESIDENCY, EAST ANANDBAGH, MALKAJGIRI',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500047',
          addressCountry: 'IN'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-9492030822',
          contactType: 'customer service',
          availableLanguage: 'English, Telugu, Hindi',
          areaServed: 'IN',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00'
          }
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Advocate Challa Vimalanand Legal Practice',
          url: 'https://challavimalanand.github.io'
        },
        knowsAbout: [
          'Civil Law',
          'Land Litigation',
          'Marriage Disputes',
          'Patent Law',
          'Intellectual Property',
          'Property Disputes',
          'Family Law',
          'Trademark Registration'
        ],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Legal Education Institution'
        },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Licensed Patent Agent',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Indian Patent Office'
          },
          credentialNumber: 'IN/PA 6235'
        }
      }),
      ...(type === 'LegalService' && {
        name: 'Advocate Challa Vimalanand Legal Services',
        description: 'Professional legal services in Hyderabad, Telangana. Specializing in Civil law, land litigations, marriage disputes, and patent services.',
        url: 'https://challavimalanand.github.io',
        logo: 'https://challavimalanand.github.io/images/Vimal_headshot.jpg',
        image: 'https://challavimalanand.github.io/images/Vimal_headshot.jpg',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'G1, VIJAY TEJA RESIDENCY, EAST ANANDBAGH, MALKAJGIRI',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500047',
          addressCountry: 'IN'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-9492030822',
          contactType: 'customer service',
          availableLanguage: 'English, Telugu, Hindi',
          areaServed: 'IN',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00'
          }
        },
        areaServed: {
          '@type': 'City',
          name: 'Hyderabad',
          addressRegion: 'Telangana',
          addressCountry: 'IN'
        },
        serviceType: [
          'Civil Law Services',
          'Land Litigation Services',
          'Marriage Dispute Resolution',
          'Patent Agent Services',
          'Intellectual Property Services',
          'Trademark Registration',
          'Legal Consultation'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Legal Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Civil Law Services',
                description: 'Comprehensive civil litigation services including property disputes, contract matters, and civil rights cases.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Land Litigation Services',
                description: 'Specialized expertise in land and property disputes, title verification, and real estate legal matters.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Marriage Dispute Resolution',
                description: 'Sensitive handling of family law matters including divorce, custody, and matrimonial disputes.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Patent & IP Services',
                description: 'Licensed Patent Agent services for intellectual property protection and patent applications.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Trademark Services',
                description: 'Comprehensive trademark registration, protection, and enforcement services.'
              }
            }
          ]
        },
        founder: {
          '@type': 'Person',
          name: 'Advocate Challa Vimalanand'
        },
        foundingDate: '2022',
        numberOfEmployees: '1',
        priceRange: '$$',
        paymentAccepted: 'Cash, Bank Transfer, Digital Payments'
      }),
      ...(type === 'Organization' && {
        name: 'Advocate Challa Vimalanand Legal Practice',
        alternateName: 'Advocate Challa Vimalanand',
        description: 'Professional legal services in Hyderabad, Telangana. Specializing in Civil law, land litigations, marriage disputes, and patent services.',
        url: 'https://challavimalanand.github.io',
        logo: 'https://challavimalanand.github.io/images/Vimal_headshot.jpg',
        image: 'https://challavimalanand.github.io/images/Vimal_headshot.jpg',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'G1, VIJAY TEJA RESIDENCY, EAST ANANDBAGH, MALKAJGIRI',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500047',
          addressCountry: 'IN'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-9492030822',
          contactType: 'customer service',
          availableLanguage: 'English, Telugu, Hindi',
          areaServed: 'IN'
        },
        founder: {
          '@type': 'Person',
          name: 'Advocate Challa Vimalanand'
        },
        foundingDate: '2022',
        numberOfEmployees: '1',
        industry: 'Legal Services',
        legalName: 'Advocate Challa Vimalanand Legal Practice',
        taxID: 'N/A',
        vatID: 'N/A',
        duns: 'N/A',
        leiCode: 'N/A',
        knowsAbout: [
          'Civil Law',
          'Land Litigation',
          'Marriage Disputes',
          'Patent Law',
          'Intellectual Property',
          'Property Disputes',
          'Family Law',
          'Trademark Registration'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Legal Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Civil Law Services',
                description: 'Comprehensive civil litigation services including property disputes, contract matters, and civil rights cases.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Land Litigation Services',
                description: 'Specialized expertise in land and property disputes, title verification, and real estate legal matters.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Marriage Dispute Resolution',
                description: 'Sensitive handling of family law matters including divorce, custody, and matrimonial disputes.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Patent & IP Services',
                description: 'Licensed Patent Agent services for intellectual property protection and patent applications.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Trademark Services',
                description: 'Comprehensive trademark registration, protection, and enforcement services.'
              }
            }
          ]
        }
      })
    };

    // Remove the existing script tag if it exists
    const existingScript = document.querySelector('script[data-structured-data]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append the new script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-structured-data', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-structured-data]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type]);

  return null;
} 