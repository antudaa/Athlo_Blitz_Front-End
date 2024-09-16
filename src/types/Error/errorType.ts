export type ErrorSource = {
    message: string;
    code?: string;
    details?: string;
};
 
// Defines the structure for error responses including multiple error sources
export type TError = {
    data?: {
        errorSources?: ErrorSource[];
        success?: boolean;
        message: string;
    };
    status: number;
};