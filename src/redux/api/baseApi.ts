import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://green-nest-nursery-backend.vercel.app/api` }),
    tagTypes: ["products", "categories"],
    endpoints: () => ({}),
});