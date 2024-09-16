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

export interface IFacility {
    _id: string;
    name: string;
    location: string;
    description?: string;
    pricePerHour: number;
    rating?: number;
    images: string[];
    user: IUser; // Change from string to IUser
}
 
export type TUser = {
    _id: string; // Unique identifier for the user
    email: string; // Email address of the user
    // Other properties that may exist in TUser but not in IUser
    name?: string; // Optional name field
    phone?: string; // Optional phone number field
    profileImage?: string; // Optional URL for the profile image
    address?: string; // Optional address field
    // Note: Missing properties that are in IUser such as isDeleted, passwordChangedAt, role, status
};