import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: ({ page, limit, token }) => ({
                url: "/users/",
                method: "GET",
                params: { page, limit },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: ['users'],
        }),
        getUserFullDetail: builder.query({
            query: ({ id, token }) => {
                return {
                    url: `/users/get-user/${id}`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            providesTags: ['users'],
        }),
        getUserFullDetailLazy: builder.query({
            query: ({ id, token }) => ({
                url: `/users/get-user/${id}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: ['users'],
        }),
        blockUser: builder.mutation({
            query: ({ id, token }) => ({
                url: `/users/block/${id}`,
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ['users'],
        }),
    }),
});

// Export the correct hooks for the endpoints
export const { useGetAllUsersQuery, useLazyGetUserFullDetailQuery, useBlockUserMutation } = userApi;