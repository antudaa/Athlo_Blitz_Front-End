import React from 'react';
import { Button, Popconfirm, message } from 'antd';
import { IFacility } from '../../../types/Facility/facility.type';
import { useDeleteFacilityMutation } from '../../../redux/features/facility/facilityApi';
import { useSelector } from 'react-redux';
import { useCurrentToken } from '../../../redux/features/auth/authSlice';
import { TError } from '../../../types/Error/errorType';

interface TFacilityDeleteButtonProps {
    record: IFacility;
}

const DeleteFacilityButton: React.FC<TFacilityDeleteButtonProps> = ({ record }) => {
    const token = useSelector(useCurrentToken);

    const [deleteFacility] = useDeleteFacilityMutation();

    const handleDelete = async () => {
        try {
            const id = record._id as string;
            const res = await deleteFacility({ id, token }).unwrap();
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
            title="Are you sure you want to delete this facility?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
        >
            <Button style={{ backgroundColor: '#ef4444', color: 'white' }} danger>Delete</Button>
        </Popconfirm>
    );
};

export default DeleteFacilityButton;
