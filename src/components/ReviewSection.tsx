// src/components/ReviewSection.tsx - Modernes Design, Aggregierte Bewertung & Google CTA
'use client';

import { StarIcon, ArrowTopRightOnSquareIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface Review {
    name: string;
    city: string;
    text: string;
    rating: number;
}

// ----------------------------------------------------------------------
// Mock Daten
// ----------------------------------------------------------------------
const reviews: Review[] = [
    {
        name: 'Anna S.',
        city: 'München',
        text: 'Sehr schnelle Hilfe! Innerhalb von 20 Minuten war der Techniker da und hat meine Tür beschädigungsfrei geöffnet. Ich bin sehr zufrieden.',
        rating: 5,
    },
    {
        name: 'Markus T.',
        city: 'Dachau',
        text: 'Transparente Preise und super freundlich. Ich musste nachts Hilfe rufen und es hat alles perfekt geklappt. Absolut empfehlenswert.',
        rating: 5,
    },
    {
        name: 'Ismail K.',
        city: 'Augsburg',
        text: 'Mein Autoschlüssel war verloren. Schlüsselmann hat direkt vor Ort einen neuen programmiert. Top Service und faire Preise! Gerne wieder.',
        rating: 5,
    },
];

// Simulierte aggregierte Bewertung
const aggregateRating = {
    score: 4.9,
    count: 135,
    platform: 'Google & Co.',
    link: 'https://xn--autoschlsselmann-qzb.de/', // HIER IHR ECHTER GOOGLE REVIEWS LINK
};
// ----------------------------------------------------------------------

export default function ReviewSection() { // cityColorClass entfernt
    const StarRating = ({ rating }: { rating: number }) => (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <StarIcon 
                    key={i} 
                    // Sterne sind nun immer Amber/Gelb für Vertrauen
                    className={`h-5 w-5 ${i < rating ? 'text-amber-500' : 'text-gray-300'}`} 
                />
            ))}
        </div>
    );

    return (
        <section className="container mx-auto px-4 mt-20 mb-24">
            <header className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    Über 130 Fünf-Sterne-Bewertungen
                </h2>
                <p className="text-lg text-gray-600">
                    Ihre Sicherheit ist unser Versprechen. Sehen Sie, was unsere Kunden über unseren 24/7 Service sagen.
                </p>
            </header>

            <div className="grid md:grid-cols-4 gap-8">
                
                {/* 1. Aggregierte Bewertung (SEO und Vertrauen) */}
                <div 
                    className="p-6 md:p-8 bg-blue-600 rounded-xl shadow-2xl flex flex-col justify-between text-white md:col-span-1 min-h-[250px]"
                >
                    <div className="mb-6">
                        <p className="text-sm font-semibold mb-1 opacity-80">Gesamtbewertung</p>
                        <div className="text-6xl font-black leading-none">{aggregateRating.score}</div>
                        <StarRating rating={5} />
                    </div>
                    
                    <div>
                        <p className="text-sm font-medium mb-3">
                            Basierend auf {aggregateRating.count}+ Bewertungen auf {aggregateRating.platform}.
                        </p>
                        <a 
                            href={aggregateRating.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-bold bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition"
                        >
                            Alle Rezensionen ansehen
                            <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                        </a>
                    </div>
                </div>

                {/* 2. Einzelne Reviews (Flexbox für gleiche Höhe) */}
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            // Flexbox für gleiche Höhe und Footer-Hintergrund
                            className="p-6 border rounded-xl shadow-lg bg-gray-50 flex flex-col min-h-[250px]" 
                        >
                            <div className="mb-3">
                                <StarRating rating={review.rating} />
                            </div>
                            
                            {/* Review Text (flex-grow ile dikey hiza) */}
                            <p className="text-gray-700 italic mb-4 flex-grow">
                                "{review.text}"
                            </p>
                            
                            {/* Author (mt-auto ile en alta hiza) */}
                            <p className="text-sm font-bold text-gray-900 mt-auto pt-2 border-t border-gray-200">
                                {review.name}
                            </p>
                            <p className="text-xs text-gray-500">{review.city}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}