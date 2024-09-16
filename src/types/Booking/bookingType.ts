import { IFacility } from "../Facility/facility.type";

export type TBooking = {
    _id: string;
    facility: IFacility;
    date: string;
    startTime: string;
    endTime: string;
    user: string;
    paymentStatus: string;
    transactionId: string;
    payableAmount: number;
    isBooked: string;
    isDeleted: boolean;
};