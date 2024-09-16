import { baseApi } from "../../api/baseApi";

// Define the API slice
const facilityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createFacility: builder.mutation({
            query: ({ facilityInfo, token }) => {
                console.log(facilityInfo);
                return {
                    url: "/facility",
                    method: "POST",
                    body: facilityInfo,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            invalidatesTags: ['facilities'],
        }),
        updateFacility: builder.mutation({
            query: ({ id, payload, token }) => {
                return {
                    url: `/facility/${id}`,
                    method: 'PATCH',
                    body: payload,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            },
            invalidatesTags: ['facilities'],
        }),
        getAllFacilities: builder.query({
            query: ({ searchTerm, sort, pricePerHour, page, limit }) => ({
                url: "/facility",
                method: "GET",
                params: { searchTerm, sort, pricePerHour, page, limit },
            }),
            providesTags: ["facilities"],
        }),
        getFacilityById: builder.query({
            query: (id) => ({
                url: `/facility/${id}`,
                method: "GET",
            }),
        }),
        deleteFacility: builder.mutation({
            query: ({ id, token }) => ({
                url: `/facility/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ['facilities']
        }),
    }),
});

// Export hooks for using these endpoints in components
export const {
    useCreateFacilityMutation,
    useUpdateFacilityMutation,
    useGetAllFacilitiesQuery,
    useGetFacilityByIdQuery,
    useDeleteFacilityMutation,
} = facilityApi;
