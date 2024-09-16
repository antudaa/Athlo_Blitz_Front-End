import React, { useState } from 'react';
import { motion } from "framer-motion";

interface FAQ {
    question: string;
    answer: string;
}

const FAQSection: React.FC = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs: FAQ[] = [
        {
            question: 'Why should I choose Athlo Blitz for booking sports facilities?',
            answer: 'Athlo Blitz offers a user-friendly platform designed to simplify the process of booking sports facilities. We provide access to a diverse range of sports facilities, including gyms, courts, fields, and pools, ensuring you find exactly what you need.',
        },
        {
            question: 'Can I make a booking without creating an account?',
            answer: 'Yes, you can browse facilities and check availability without an account, but creating an account allows you to manage your bookings, receive updates, and enjoy a more personalized experience.',
        },
        {
            question: 'How far in advance can I book a facility?',
            answer: 'You can book a facility up to 3 months in advance. However, availability may vary based on the specific facility and location, so we recommend booking early to secure your preferred time slot.',
        },
        {
            question: 'Are the facilities maintained and clean?',
            answer: 'Yes, all the facilities listed on our platform are regularly maintained and cleaned to ensure a safe and enjoyable experience for all users. We work closely with facility managers to uphold high standards of cleanliness and safety.',
        },
        {
            question: 'Can I see photos and reviews of the facilities?',
            answer: 'Absolutely! Each facility listing includes photos, detailed descriptions, and reviews from other users. This information helps you make an informed decision before booking.',
        },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-600 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="text-center mb-10">
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    </div>
                </motion.div>
                <div className="accordion-group">
                    {faqs.map((faq, index) => (
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            key={index}
                            className={`accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4 transition-all duration-500 ${openIndex === index ? 'bg-indigo-50 border-indigo-600' : ''
                                }`}
                        >
                            <button
                                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h5>{faq.question}</h5>
                                <svg
                                    className={`w-6 h-6 text-gray-900 transition-transform duration-500 ${openIndex === index ? 'rotate-45' : ''
                                        }`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 12H18M12 18V6"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                className={`accordion-content overflow-hidden pr-4 transition-all duration-1000 ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                aria-labelledby={`accordion-heading-${index}`}
                            >
                                <p className="text-base text-gray-900 font-normal leading-6">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
