import { Button, message, Popconfirm } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useCurrentToken } from "../../../redux/features/auth/authSlice";
import { useBlockUserMutation } from "../../../redux/features/user/userApi";
import { TError } from "../../../types/Error/errorType";

interface TBlockUserButtonProps {
    id: string;
}

const BlockUserButton: React.FC<TBlockUserButtonProps> = ({ id }) => {
    const token = useSelector(useCurrentToken);

    const [blockUser] = useBlockUserMutation();

    const handleDelete = async () => {
        try {
            const res = await blockUser({ id, token }).unwrap();
            if (res.success) {
                message.success(res.message);
            }
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'data' in err) {
                const error = err as TError;
                message.error(`${error?.data?.message}` || 'Something went wrong! Please try again.');
            } else {
                message.error('An unknown error occurred.');
            }
        }
    };

    const confirm = async () => {
        await handleDelete();
    };

    const cancel = () => {
        message.error('Action cancelled');
    };

    return (
        <Popconfirm
            title="Are you sure you want to block this user?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
        >
            <Button danger>Block</Button>
        </Popconfirm>
    );
};

export default BlockUserButton;