import React, { useState } from 'react';

interface FAQ {
    question: string;
    answer: string;
}

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs: FAQ[] = [
        {
            question: 'How can I reset my password?',
            answer: 'To reset your password, go to the login page and click on "Forgot password." Follow the instructions to reset it via email.',
        },
        {
            question: 'How do I update my billing information?',
            answer: 'To update your billing information, log in to your account and go to the "Billing" section in your profile settings.',
        },
        {
            question: 'How can I contact customer support?',
            answer: 'You can contact customer support by clicking on the "Contact Us" link in the footer or by emailing support@example.com.',
        },
        {
            question: 'How do I delete my account?',
            answer: 'To delete your account, go to your account settings and click on "Delete Account." Follow the instructions to confirm your request.',
        },
    ];

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="accordion-group">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4 transition-all duration-500 ${
                                openIndex === index ? 'bg-indigo-50 border-indigo-600' : ''
                            }`}
                        >
                            <button
                                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h5>{faq.question}</h5>
                                <svg
                                    className={`w-6 h-6 text-gray-900 transition-transform duration-500 ${
                                        openIndex === index ? 'rotate-45' : ''
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
                                className={`accordion-content overflow-hidden pr-4 transition-all duration-1000 ${
                                    openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                }`}
                                aria-labelledby={`accordion-heading-${index}`}
                            >
                                <p className="text-base text-gray-900 font-normal leading-6">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
