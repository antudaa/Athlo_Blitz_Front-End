export interface IUser {
    _id: string;
    email: string;
    isDeleted: boolean;
    passwordChangedAt: string;
    role: string;
    status: string;
}

export type TFullUser = {
    _id: string;
    user: IUser;
    name: string;
    email: string;
    phone: string;
    profileImage: string;
    address: string;
}