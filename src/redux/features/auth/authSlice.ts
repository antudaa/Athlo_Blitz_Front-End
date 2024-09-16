import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IUser {
    _id: string;
    email: string;
    password: string;
    passwrodChangedAt: string;
    role: string;
    status: string;
    isDeleted: boolean;
}

export type TUser = {
    _id: string;
    email: string;
    user: IUser;
    name: string;
    phone: string;
    profileImage: string;
    address: string;
};

type TAuthState = {
    user: null | TUser;
    token: null | string;
};

const initialState: TAuthState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});



export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;


export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;