import { Form, Spin, DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import { useGetAvailableTimeSlotQuery } from '../../../redux/features/slotAvailibility/availableSlotApi';
import { useSelector } from 'react-redux';
import { useCurrentToken } from '../../../redux/features/auth/authSlice';
import { useState } from 'react';
import ErrorComponent from '../error/ErrorComponent';
import AvailableSlots, { TAvailableSlot } from '../../Section/Booking/AvailableSlots';
import { motion } from 'framer-motion';
import BookingForm from './BookingForm';

interface FormValues {
    date: Dayjs | null;
}

interface CheckAvailabilityFormProps {
    id: string;
}

const CheckAvailabilityForm = ({ id }: CheckAvailabilityFormProps) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const [form] = Form.useForm<FormValues>();
    const [date, setDate] = useState<string | null>(null);
    const [dateError, setDateError] = useState<string | null>('Please select a date');
    const [selectedSlot, setSelectedSlot] = useState<TAvailableSlot | null>(null);

    const token = useSelector(useCurrentToken);

    const { data, error, isLoading } = useGetAvailableTimeSlotQuery(
        { token, id, date: date || '' },
        { skip: !date }
    );

    const handleSelectSlot = (slot: TAvailableSlot) => {
        setSelectedSlot(slot);
    };

    const isSlotSelected = (slot: TAvailableSlot) =>
        selectedSlot?.startTime === slot.startTime &&
        selectedSlot?.endTime === slot.endTime &&
        selectedSlot?.date === slot.date &&
        selectedSlot?.facility === slot.facility;

    const handleSubmit = () => {
        const formData = form.getFieldsValue();
        const dateString = formData.date?.format('YYYY-MM-DD');

        if (dateString) {
            setDate(dateString);
            setDateError(null);
        } else {
            setDateError('Please select a date');
        }
    };

    console.log(data)


    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-10">
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="h-full"
            >
                <Form
                    form={form}
                    className="grid grid-cols-6 md:gap-4 px-6 pt-8"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        className="col-span-6 md:col-span-4 rounded-full text-lg"
                        name="date"
                        rules={[{ required: true, message: 'Please select a date' }]}
                    >
                        <DatePicker className="h-[40px] text-center rounded-full" style={{ width: '100%' }} />
                    </Form.Item>
                    <button type="submit" className="h-[40px] col-span-6 md:col-span-2 w-full rounded-full bg-white text-gray-800 font-semibold border border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-500">
                        Check Available Slots
                    </button>
                </Form>

                {dateError && <div className="text-red-500 text-center mt-2">{dateError}</div>}
                {isLoading && <Spin className="flex justify-center" size="large" />}
                {error && <ErrorComponent message="Something went wrong! Please try again." />}

                {/* One Hour Slots */}
                {data?.data?.oneHourSlots && (
                    <div>
                        <h2 className="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-gray-700 mb-4 px-6">
                            Slots Available For 1 Hour
                        </h2>
                        <div className="grid grid-cols-12 p-6 gap-4 mb-6">
                            {data.data.oneHourSlots.map((slot: TAvailableSlot, i: number) => (
                                <AvailableSlots
                                    key={i}
                                    {...slot}
                                    onSelectSlot={handleSelectSlot}
                                    isSelected={isSlotSelected(slot)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Two Hour Slots */}
                {data?.data?.twoHourSlots && (
                    <div>
                        <h2 className="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-gray-700 mb-4 px-6">
                            Slots Available For 2 Hour
                        </h2>
                        <div className="grid grid-cols-12 p-6 gap-4">
                            {data.data.twoHourSlots.map((slot: TAvailableSlot, i: number) => (
                                <AvailableSlots
                                    key={i}
                                    {...slot}
                                    onSelectSlot={handleSelectSlot}
                                    isSelected={isSlotSelected(slot)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Booking Form */}
                {selectedSlot && (
                    <div className="mt-10">
                        <h3 className="font-manrope font-bold text-xl text-gray-700 mb-4 px-6">
                            Proceed with the selected slot:
                        </h3>
                        <BookingForm
                            date={date as string}
                            facility={id}
                            startTime={selectedSlot.startTime}
                            endTime={selectedSlot.endTime}
                        />
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default CheckAvailabilityForm;
