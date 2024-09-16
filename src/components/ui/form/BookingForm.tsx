import { Button, Form, message } from 'antd';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import { useCreateBookingMutation } from '../../../redux/features/booking/bookingApi';
import { useSelector } from 'react-redux';
import { useCurrentToken } from '../../../redux/features/auth/authSlice';
import { TError } from '../../../types/Error/errorType';

interface IBookSlotTime {
    startTime: string;
    endTime: string;
}

interface IBookingData {
    date: string | null;
    facility: string;
}

const BookingForm = ({ date, facility }: IBookingData) => {
    const token = useSelector(useCurrentToken);
    const [createBooking] = useCreateBookingMutation();

    const handleSubmit = async (data: IBookSlotTime) => {
        const formattedData = {
            startTime: data.startTime ? dayjs(data.startTime).format('HH:mm') : '',
            endTime: data.endTime ? dayjs(data.endTime).format('HH:mm') : '',
        };
        const bookingData = {
            facility: facility,
            date: date,
            startTime: formattedData.startTime,
            endTime: formattedData.endTime,
        }
        try {
            const res = await createBooking({ bookingData, token }).unwrap();
            if (res.success) {
                window.location.href = res.data.payment_url;
                message.success(res.message);
            }
        } catch (err: unknown) {
            // Narrowing down the type of err
            if (err && typeof err === 'object' && 'data' in err) {
                const error = err as TError;
                message.error(`${error?.data?.message} Check slot availability.` || 'Booking failed.');
            } else {
                message.error('An unknown error occurred.');
            }
        }
    };

    return (
        <Form
            className='grid grid-cols-6 md:gap-4 px-6 pt-8 mb-10'
            onFinish={handleSubmit}
        >
            {/* Start Time Field with Label */}
            <Form.Item
                label="Start Time"
                className='col-span-6 md:col-span-3'
                name="startTime"
                rules={[{ required: true, message: 'Please Select Start Time.' }]}
                layout="vertical"
            >
                {/* TimePicker with 24-hour format */}
                <TimePicker use12Hours format="hh:mm A" className='w-full h-10' />
            </Form.Item>

            {/* End Time Field with Label */}
            <Form.Item
                label="End Time"
                className='col-span-6 md:col-span-3'
                name="endTime"
                rules={[{ required: true, message: 'Please Select End Time.' }]}
                layout="vertical"
            >
                {/* TimePicker with 24-hour format */}
                <TimePicker use12Hours format="hh:mm A" className='w-full h-10' />
            </Form.Item>

            <Button type="primary" htmlType='submit' className='h-[40px] col-span-6 w-full mt-8 md:mt-14'>
                Proceed To Pay
            </Button>
        </Form>
    );
};

export default BookingForm;
