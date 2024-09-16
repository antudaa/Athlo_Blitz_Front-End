import React, { useState } from 'react';
import { Button, Form, Modal, Input, InputNumber, message, UploadFile } from 'antd';
import toast from 'react-hot-toast';
import { IFacility } from '../../../types/Facility/facility.type';
import { useCreateFacilityMutation } from '../../../redux/features/facility/facilityApi';
import { EditOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectCurrentUser, useCurrentToken } from '../../../redux/features/auth/authSlice';
import MultipleUploadButton from './MultipleUploadButton';
import { TError } from '../../../types/Error/errorType';
import { IUser, TUser } from '../../../types/user/user.type';

const transformUser = (tUser: TUser): IUser => {
    return {
        _id: tUser._id,
        email: tUser.email,
        isDeleted: false,
        passwordChangedAt: '',
        role: 'user',
        status: 'active',
    };
};

const AddFacilityButton: React.FC = () => {
    const token = useSelector(useCurrentToken);
    const tUser = useSelector(selectCurrentUser);
    const user = tUser ? transformUser(tUser) : undefined;
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [createFacility] = useCreateFacilityMutation();
    const [imageList, setImageList] = useState<UploadFile[]>([]);

    const handleAdd = () => {
        setOpen(true);
    };

    const onFinish = async (values: Partial<IFacility>) => {
        const images = imageList.map(file => file.response?.url).filter((url): url is string => !!url);

        const facilityData: Partial<IFacility> = {
            ...values,
            images,
            user: user, // Use transformed IUser
        };

        try {
            const res = await createFacility({ facilityInfo: facilityData, token }).unwrap();
            if (res.success) {
                toast.success(res.message);
                setOpen(false);
                form.resetFields();
                setImageList([]);
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

    return (
        <div>
            <Button icon={<EditOutlined />} onClick={handleAdd} style={{ backgroundColor: '#3b82f6', color: 'white' }}>
                Add Facility
            </Button>

            <Modal
                footer={null}
                open={open}
                onCancel={() => setOpen(false)}
                centered
            >
                <h2 className='my-6 text-2xl text-center font-semibold text-blue-600'>Add Facility</h2>
                <Form
                    form={form}
                    name="addFacility"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input the name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Location"
                        name="location"
                        rules={[{ required: true, message: 'Please input the location!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: false }]}
                    >
                        <Input.TextArea showCount maxLength={1000} />
                    </Form.Item>

                    <Form.Item
                        label="Price Per Hour"
                        name="pricePerHour"
                        rules={[{ required: true, message: 'Please input the price per hour!' }]}
                    >
                        <InputNumber className="w-full" />
                    </Form.Item>

                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[{ required: false }]}
                    >
                        <InputNumber className="w-full" />
                    </Form.Item>

                    <Form.Item
                        label="Images"
                        name="images"
                        valuePropName="fileList"
                        getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                    >
                        <MultipleUploadButton name="images" onChange={setImageList} defaultFileList={imageList} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 24 }}>
                        <Button className="w-full" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AddFacilityButton;
