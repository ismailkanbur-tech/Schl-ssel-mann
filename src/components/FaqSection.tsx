// src/components/FaqSection.tsx
'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Script from 'next/script';

// FAQ Bileşenine gönderilecek veri tipi
interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    title: string;
    faqs: FaqItem[];
    cityColorClass: string; // Tailwind renk sınıfı (e.g., 'text-red-600')
}

// Tek bir FAQ öğesi
const FaqAccordionItem: React.FC<{ item: FaqItem, index: number, color: string }> = ({ item, index, color }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-4 text-left font-semibold text-lg text-gray-800 transition duration-300 hover:text-blue-700"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
            >
                {item.question}
                <ChevronDownIcon 
                    className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? `rotate-180 ${color}` : ''}`} 
                />
            </button>
            <div 
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-heading-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}`}
            >
                <p className="pb-4 text-gray-600 whitespace-pre-line">{item.answer}</p>
            </div>
        </div>
    );
};

// Ana FAQ Bölümü
const FaqSection: React.FC<FaqSectionProps> = ({ title, faqs, cityColorClass }) => {
    // Schema Markup için JSON-LD yapısı oluşturma
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            }
        }))
    };

    const colorClass = cityColorClass.split('-')[1] ? `text-${cityColorClass.split('-')[1]}` : 'text-blue-600';

    return (
        <section className="py-12 bg-gray-50 rounded-xl shadow-inner my-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
                    <span className={cityColorClass}>{title}</span>
                </h2>

                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
                    {faqs.map((item, index) => (
                        <FaqAccordionItem key={index} item={item} index={index} color={colorClass} />
                    ))}
                </div>
            </div>
            
            {/* Schema Markup'ı Head'e yerleştirir */}
            <Script
                id="faq-schema-script"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </section>
    );
};

export default FaqSection;