import { baseApi } from "../../api/baseApi";

// Define the API slice
const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: ({ bookingData, token }) => {
                return {
                    url: '/bookings',
                    method: 'POST',
                    body: bookingData,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            invalidatesTags: ['bookings'],
        }),
        getAllBookingsByAdmin: builder.query({
            query: ({ searchTerm, sort, pricePerHour, page, limit, token }) => {
                return {
                    url: '/bookings/admin',
                    method: 'GET',
                    params: { searchTerm, sort, pricePerHour, page, limit },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            providesTags: ["bookings"],
        }),
        getBookingsByUser: builder.query({
            query: ({ searchTerm, sort, pricePerHour, page, limit, token }) => {
                return {
                    url: '/bookings/user',
                    method: 'GET',
                    params: { searchTerm, sort, pricePerHour, page, limit },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            providesTags: ["bookings"],
        }),
        getBookingById: builder.query({
            query: ({ id, token }) => {
                return {
                    url: `/bookings/details/${id}`,
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
        }),
        cancelBooking: builder.mutation({
            query: ({ bookingId, token }) => {
                return {
                    url: `/bookings/${bookingId}`,
                    method: 'PATCH',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            invalidatesTags: ['bookings'],
        }),
    }),
});

// Export hooks for using these endpoints in components
export const {
    useCreateBookingMutation,
    useGetAllBookingsByAdminQuery,
    useGetBookingsByUserQuery,
    useGetBookingByIdQuery,
    useCancelBookingMutation,
} = bookingApi;