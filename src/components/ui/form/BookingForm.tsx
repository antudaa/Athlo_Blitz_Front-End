import { Form, message, TimePicker } from 'antd';
import dayjs from 'dayjs';
import { useCreateBookingMutation } from '../../../redux/features/booking/bookingApi';
import { useSelector } from 'react-redux';
import { useCurrentToken } from '../../../redux/features/auth/authSlice';
import { TError } from '../../../types/Error/errorType';

interface IBookingData {
    date: string;
    facility: string;
    startTime: string;
    endTime: string;
}

const BookingForm = ({ date, facility, startTime, endTime }: IBookingData) => {
    const token = useSelector(useCurrentToken);
    const [createBooking] = useCreateBookingMutation();

    const handleSubmit = async () => {
        const bookingData = {
            facility,
            date,
            startTime,
            endTime,
        };

        try {
            const res = await createBooking({ bookingData, token }).unwrap();
            if (res.success) {
                message.success(res.message);
                window.location.href = res.data.payment_url;
            }
        } catch (err) {
            const error = err as TError;
            message.error(error?.data?.message || 'Booking failed.');
        }
    };

    return (
        <Form
            className="grid grid-cols-6 md:gap-4 px-6 pt-8 mb-10"
            onFinish={handleSubmit}
            initialValues={{
                startTime: dayjs(startTime, 'HH:mm'),
                endTime: dayjs(endTime, 'HH:mm'),
            }}
        >
            <Form.Item
                label="Start Time"
                className="col-span-6 md:col-span-3"
                name="startTime"
            >
                {/* Pre-filled and disabled TimePicker */}
                <TimePicker
                    use12Hours
                    format="hh:mm A"
                    className="w-full h-10"
                    disabled
                    value={dayjs(startTime, 'HH:mm')}
                />
            </Form.Item>

            <Form.Item
                label="End Time"
                className="col-span-6 md:col-span-3"
                name="endTime"
            >
                {/* Pre-filled and disabled TimePicker */}
                <TimePicker
                    use12Hours
                    format="hh:mm A"
                    className="w-full h-10"
                    disabled
                    value={dayjs(endTime, 'HH:mm')}
                />
            </Form.Item>

            <button type="submit" className="h-[40px] col-span-6 w-full mt-8 md:mt-14 rounded-full bg-white text-gray-800 font-semibold border border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-500">
                Proceed To Pay
            </button>
        </Form>
    );
};

export default BookingForm;
