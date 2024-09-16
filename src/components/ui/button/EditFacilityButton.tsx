import React, { useEffect, useState } from 'react';
import { Button, Form, Modal, Input, InputNumber, message, UploadFile } from 'antd';
import toast from 'react-hot-toast';
import { IFacility } from '../../../types/Facility/facility.type';
import { useUpdateFacilityMutation } from '../../../redux/features/facility/facilityApi';
import { EditOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useCurrentToken } from '../../../redux/features/auth/authSlice';
import MultipleUploadButton from './MultipleUploadButton';
import { TError } from '../../../types/Error/errorType';

interface TFacilityEditButtonProps {
    record: IFacility;
}

const EditFacilityButton: React.FC<TFacilityEditButtonProps> = ({ record }) => {
    const token = useSelector(useCurrentToken);
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [updateFacility] = useUpdateFacilityMutation();
    const [imageList, setImageList] = useState<UploadFile[]>([]);

    useEffect(() => {
        form.setFieldsValue({
            name: record.name,
            description: record.description,
            pricePerHour: record.pricePerHour,
            rating: record.rating,
            location: record.location,
            images: record.images,
        });

        // Map images to the UploadFile type
        setImageList(record.images.map((url, index) => ({
            uid: `${index}`,  // Unique identifier
            name: `image-${index}`,  // Filename (optional)
            url,  // The image URL
            status: 'done',  // Status of the file
        })));
    }, [record, form]);

    const handleEdit = () => {
        setOpen(true);
    };

    const onFinish = async (values: Partial<IFacility>) => {
        const changedData: Partial<IFacility> = {};

        (Object.keys(values) as Array<keyof Partial<IFacility>>).forEach((key) => {
            if (values[key] !== record[key]) {
                changedData[key] = values[key] as undefined;
            }
        });

        // Safely map imageList to extract URLs from response
        changedData.images = imageList.map(file => file.response?.url).filter((url): url is string => !!url);

        if (Object.keys(changedData).length === 0) {
            toast.error('No changes detected.');
            return;
        }

        try {
            const res = await updateFacility({ id: record._id, payload: changedData, token }).unwrap();
            if (res.success) {
                toast.success(res.message);
                setOpen(false);
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
            <Button icon={<EditOutlined />} onClick={handleEdit} style={{ backgroundColor: '#3b82f6', color: 'white' }}>
                Edit
            </Button>

            <Modal
                footer={null}
                open={open}
                onCancel={() => setOpen(false)}
                centered
            >
                <h2 className='my-6 text-2xl text-center font-semibold text-blue-600'>Edit Facility</h2>
                <Form
                    form={form}
                    name={`editFacility-${record._id}`}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: false, message: 'Please input the name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Location"
                        name="location"
                        rules={[{ required: false, message: 'Please input the location!' }]}
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
                        rules={[{ required: false, message: 'Please input the price per hour!' }]}
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

export default EditFacilityButton;
