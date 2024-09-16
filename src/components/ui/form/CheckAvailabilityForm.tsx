import { Button, Form, Spin } from 'antd';
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import { useGetAvailableTimeSlotQuery } from '../../../redux/features/slotAvailibility/availableSlotApi';
import { useSelector } from 'react-redux';
import { useCurrentToken } from '../../../redux/features/auth/authSlice';
import { useState } from 'react';
import ErrorComponent from '../error/ErrorComponent';
import AvailableSlots, { TAvailableSlot } from '../../Section/Booking/AvailableSlots';
import BookingForm from './BookingForm';
import { motion } from 'framer-motion';

interface FormValues {
    date: Dayjs | null;
}

interface CheckAvailabilityFormProps {
    id: string;
}

const CheckAvailabilityForm = ({ id }: CheckAvailabilityFormProps) => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    const [form] = Form.useForm<FormValues>();
    const [date, setDate] = useState<string | null>(null);
    const [dateError, setDateError] = useState<string | null>('Please select a date'); // State to track date error
    const token = useSelector(useCurrentToken);

    // Call the API only when date is set, using skip option
    const { data, error, isLoading } = useGetAvailableTimeSlotQuery(
        { token, id, date: date || '' },
        { skip: !date }
    );

    // Handle form submission
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

    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-10">
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="border border-indigo-500 rounded-xl shadow-xl h-full">
                <Form
                    form={form}
                    className='grid grid-cols-6 md:gap-4 px-6 pt-8'
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        className='col-span-6 md:col-span-4'
                        name="date"
                        rules={[{ required: true, message: 'Please select a date' }]}
                    >
                        <DatePicker className='h-[40px] text-center' style={{ width: '100%' }} />
                    </Form.Item>

                    <Button type="primary" htmlType='submit' className='h-[40px] col-span-6 md:col-span-2 w-full'>
                        Check Available Slots
                    </Button>
                </Form>

                {/* Show error message if dateError is set */}
                {dateError && (
                    <div className="text-red-500 text-center mt-2">
                        {dateError}
                    </div>
                )}

                {isLoading && <Spin className='flex justify-center' size="large" />}

                {error && <ErrorComponent message='Something went wrong! Please try again.' />}

                <div className='grid grid-cols-4 p-6 gap-4'>
                    {data?.data?.map((slot: TAvailableSlot, i: number) => (
                        <AvailableSlots key={i} {...slot} />
                    ))}
                </div>

                <BookingForm date={date} facility={id} />
            </motion.div>
        </section>
    );
};

export default CheckAvailabilityForm;
