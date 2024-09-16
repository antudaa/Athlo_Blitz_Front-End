import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: `https://athlo-blitz.vercel.app/api/`,
        baseUrl: `http://localhost:4000/api/`,
        credentials: 'include',
    }),
    tagTypes: ['facilities', 'bookings', 'users'],
    endpoints: () => ({}),
});