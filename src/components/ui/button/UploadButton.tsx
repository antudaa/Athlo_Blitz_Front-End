import React from 'react';
import { Upload, Button, Form, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/es/upload/interface'; // Only import UploadFile
import { TError } from '../../../types/Error/errorType';

// Replace with your ImageBB API key
const IMAGEBB_API_KEY = import.meta.env.VITE_IMAGEBB_API_KEY;

interface UploadButtonProps {
    defaultFileList?: UploadFile[];
    name: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({ defaultFileList, name }) => {
    const [form] = Form.useForm();

    // Define the customRequest function
    const customRequest = async (options: any) => { // Use any here to avoid type conflicts
        const { file, onSuccess, onError } = options;

        // Ensure file is a valid type
        if (!(file instanceof File)) {
            onError?.(new Error('Invalid file type'));
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('key', IMAGEBB_API_KEY);

        try {
            const response = await fetch('https://api.imgbb.com/1/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (result.success) {
                const imageUrl = result.data.url;
                form.setFieldsValue({ [name]: imageUrl });
                onSuccess?.(result.data, undefined); // Pass undefined as the second argument
                message.success('Image uploaded successfully!');
            } else {
                throw new Error(result.error.message);
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
        <Form.Item
            label={<span className="text-gray-700">Profile Image</span>}
            name={name}
            className="w-full"
        >
            <Upload
                customRequest={customRequest}
                listType="picture"
                defaultFileList={defaultFileList}
                className="w-full"
            >
                <Button icon={<UploadOutlined />} className="w-full">
                    Upload Profile Image
                </Button>
            </Upload>
        </Form.Item>
    );
};

export default UploadButton;
