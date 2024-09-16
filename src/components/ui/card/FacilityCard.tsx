import { Card } from "antd";
import { motion } from 'framer-motion';
import { IFacility } from "../../../types/Facility/facility.type";
import { StarOutlined } from "@ant-design/icons";
import ButtonLink from "../button/ButtonLink";

interface FacilityCardProps {
    facility: IFacility;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const { _id, name, images, location, pricePerHour, rating } = facility;

    return (
        <Card className="block rounded-lg p-4 shadow-sm shadow-indigo-100 cursor-pointer hover:scale-[1.02] transition-all">
            <motion.img
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                alt=""
                src={images[0]}
                className="h-56 w-full rounded-md object-cover"
            />
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="flex gap-2 w-[75px] absolute top-12 right-12 py-2 px-4 bg-indigo-50 rounded-lg">
                <StarOutlined className="size-4 text-amber-600 my-auto" />

                <div className="mt-1.5 sm:mt-0">
                    <p className="font-medium text-wrap w-[200px] my-auto">{rating}</p>
                </div>
            </motion.div>
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="mt-2">
                <dl className="flex justify-between">
                    <div>
                        <div className="flex justify-between">
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">${pricePerHour}/hr</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">{name} Facility</dd>
                        </div>
                    </div>
                </dl>

                <div className="mt-2 flex items-center gap-8 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                            className="size-5 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            />
                        </svg>

                        <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Location</p>

                            <p className="font-medium text-wrap w-[200px]">{location}</p>
                        </div>
                    </div>

                    <ButtonLink text="Details" link={`/facility/${_id}`} />
                </div>
            </motion.div>
        </Card>
    );
};

export default FacilityCard;