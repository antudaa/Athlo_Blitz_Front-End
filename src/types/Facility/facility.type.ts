import { IUser } from "../user/user.type";

export interface IFacility {
    _id: string;
    user: IUser;
    description: string;
    images: string[];
    isDeleted: boolean;
    location: string;
    name: string;
    rating: number;
    pricePerHour: number;
}