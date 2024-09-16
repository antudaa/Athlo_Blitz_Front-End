import { useSelector } from "react-redux";
import { useCancelBookingMutation } from "../../../redux/features/booking/bookingApi";
import { useCurrentToken } from "../../../redux/features/auth/authSlice";
import { Button, message, Popconfirm } from "antd";
import { TError } from "../../../types/Error/errorType";

interface CancelBookingButtonProps {
    id: string;
}

const CancelBookingButton: React.FC<CancelBookingButtonProps> = ({ id }) => {
    const token = useSelector(useCurrentToken);
    // Mutation hook for canceling a booking
    const [cancelBooking] = useCancelBookingMutation();

    const handleCancelBooking = async () => {
        try {
            await cancelBooking({ token, bookingId: id }).unwrap();
            message.success('Booking canceled successfully.You we get a refund message soon!');
        } catch (err: unknown) {
            const error = err as TError;
            message.error(error?.data?.errorSources?.[0]?.message ||'Failed to cancel the booking.');
        }
    };

    return (
        <Popconfirm
            title="Are you sure you want to cancel this booking?"
            onConfirm={handleCancelBooking}
            okText="Yes"
            cancelText="No"
        >
            <Button
                danger
            >
                Cancel Booking
            </Button>
        </Popconfirm>
    );
};

export default CancelBookingButton;
