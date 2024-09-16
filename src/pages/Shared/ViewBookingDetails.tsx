import { useParams, useNavigate } from "react-router-dom";
import { useGetBookingByIdQuery } from "../../redux/features/booking/bookingApi";
import { useSelector } from "react-redux";
import { selectCurrentUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useLazyGetUserFullDetailQuery } from "../../redux/features/user/userApi";
import { useEffect } from "react";
import Loading from "../../components/Global/Loading";
import { FaFastBackward } from "react-icons/fa";
import ErrorComponent from "../../components/ui/error/ErrorComponent";


const ViewBookingDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize navigate function
    const token = useSelector(useCurrentToken);
    const currentUser = useSelector(selectCurrentUser);

    // Booking data query
    const { data: { data: booking = {} } = {}, error } = useGetBookingByIdQuery({ id, token });

    // Lazy query for user details
    const [triggerGetUserFullDetail, { data: userDetails, isLoading }] = useLazyGetUserFullDetailQuery();

    useEffect(() => {
        // Trigger the lazy query when booking data is available
        if (booking.user) {
            triggerGetUserFullDetail({ id: booking.user, token });
        }
    }, [booking.user, token, triggerGetUserFullDetail]);

    // Loading and error handling
    if (isLoading) return <Loading />;
    if (error) return <ErrorComponent message="Error loading booking details." />;

    // Function to handle back navigation
    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <section className="py-44 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                {/* Back button */}
                <button
                    onClick={handleBackClick}
                    className="mb-10 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300 flex gap-4"
                >
                    <FaFastBackward className="my-auto" /> Back
                </button>

                {currentUser?.user?.role === 'admin' ? (
                    <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-11">
                        This Order Has been <span className="capitalize">{booking?.isBooked}</span>
                    </h2>
                ) : (
                    <>
                        <h6 className="font-medium text-4xl leading-8 text-black mb-3">
                            Hello, <span className="text-indigo-500">{userDetails?.data?.name}</span>
                        </h6>
                        {booking?.isBooked === 'canceled' ? (
                            <p className="font-normal text-lg leading-8 text-gray-500 mb-11">
                                Your order has been Canceled.
                            </p>
                        ) : (
                            <p className="font-normal text-lg leading-8 text-gray-500 mb-11">
                                Your order has been completed now just come and experience your facility.
                            </p>
                        )}
                    </>
                )}

                {/* Rest of the component */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 py-6 border-y border-gray-100 mb-6">
                    <div className="box group">
                        <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">Booking Date</p>
                        <h6 className="font-semibold font-manrope text-2xl leading-9 text-black">{booking?.date}</h6>
                    </div>
                    <div className="box group">
                        <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">Order Transaction ID</p>
                        <h6 className="font-semibold font-manrope text-2xl leading-9 text-black">{booking?.transactionId}</h6>
                    </div>
                    <div className="box group">
                        <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">Address</p>
                        <h6 className="font-semibold font-manrope text-2xl leading-9 text-black">{booking?.facility?.location}</h6>
                    </div>
                </div>

                <div className="grid grid-cols-7 w-full pb-6 border-b border-gray-100">
                    <div className="col-span-7 min-[500px]:col-span-2 md:col-span-1">
                        <img src={booking?.facility?.images[0]} className="w-full rounded-xl object-cover" />
                    </div>
                    <div
                        className="col-span-7 min-[500px]:col-span-5 md:col-span-6 min-[500px]:pl-5 max-sm:mt-5 flex flex-col justify-center">
                        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center justify-between">
                            <div className="">
                                <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-6">{booking?.facility?.name} Facility
                                </h5>
                            </div>

                            <h5 className="font-manrope font-semibold text-3xl leading-10 text-black sm:text-right mt-3">
                                {booking?.facility?.pricePerHour} TK / hr
                            </h5>
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-center sm:justify-end w-full my-6">
                    <div className=" w-full">
                        <div className="flex items-center justify-between mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-500">Start Time</p>
                            <p className="font-semibold text-xl leading-8 text-gray-900">{booking?.startTime}</p>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-500">End Time</p>
                            <p className="font-semibold text-xl leading-8 text-gray-900">{booking?.endTime}</p>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-500">Subtotal</p>
                            <p className="font-semibold text-xl leading-8 text-gray-900">{booking?.payableAmount} TK</p>
                        </div>
                        <div className="flex items-center justify-between py-6 border-y border-gray-100">
                            <p className="font-manrope font-semibold text-2xl leading-9 text-gray-900">Total</p>
                            <p className="font-manrope font-bold text-2xl leading-9 text-indigo-600">{booking?.payableAmount} TK</p>
                        </div>
                    </div>
                </div>
                <div className="data ">
                    <h6 className="font-manrope font-bold text-2xl leading-9 text-black mb-3">Thank you for being
                        with us!</h6>
                    <p className="font-medium text-xl leading-8 text-indigo-600">Team Athlo Blitz</p>
                </div>
            </div>
        </section>
    );
};

export default ViewBookingDetails;
