import { motion } from 'framer-motion';

const Map = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative max-w-7xl mx-auto rounded-2xl h-96 bg-slate-50 border border-indigo-300">
            <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.636643936599!2d91.81138777574488!3d22.50222933069251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd771fa20ed4f%3A0x7ad345561d1a170c!2sSunflower%20Preparatory%20School!5e0!3m2!1sen!2sbd!4v1694718884883!5m2!1sen!2sbd"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
            >

            </iframe>
        </motion.div>
    );
};

export default Map;