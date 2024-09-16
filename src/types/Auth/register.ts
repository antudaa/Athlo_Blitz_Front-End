export type TRegister = {
    name: string;
    email: string;
    phone: string;
    password: string;
    profileImage: {
        fileList: Array<{
            response: {
                url: string;
            };
        }>;
    };
    address: string;
};