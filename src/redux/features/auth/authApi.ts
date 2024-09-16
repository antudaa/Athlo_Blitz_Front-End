import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                body: userInfo,
            }),
        }),
        signup: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/register-user",
                method: "POST",
                body: userInfo,
            }),
        }),
        signupAdmin: builder.mutation({
            query: ({ adminInfo, token }) => ({
                url: "/auth/register-admin",
                method: "POST",
                body: adminInfo,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        })
    }),
});

export const { useLoginMutation, useSignupMutation, useSignupAdminMutation } = authApi;