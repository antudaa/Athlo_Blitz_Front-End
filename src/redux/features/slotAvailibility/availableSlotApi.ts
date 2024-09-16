import { baseApi } from "../../api/baseApi";

// Define the API slice
const availableSlotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAvailableTimeSlot: builder.query({
            query: ({ token, id, date }) => {
                return {
                    url: `/check-availability`,
                    params: { date, facility: id },
                    method: 'GET', 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
        }),
    }),
});

// Export hooks for using these endpoints in components
export const {
    useGetAvailableTimeSlotQuery,
} = availableSlotApi;