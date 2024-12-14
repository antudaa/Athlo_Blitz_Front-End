import { motion } from 'framer-motion';

interface PageTitleProps {
    title: string;
    highlight?: string;
    description?: string;
}

const PageHeader = ({ title, highlight, description }: PageTitleProps) => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <motion.section
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="pt-24 pb-6 lg:pt-32 relative z-0 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                <div className="text-center max-w-3xl mx-auto">
                    <h1
                        className="max-w-3xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-600 mb-5 md:text-5xl md:leading-normal">
                        {title}<span className="text-indigo-600">{highlight}</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">{description}</p>
                    <div className="text-center mb-10">
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default PageHeader;