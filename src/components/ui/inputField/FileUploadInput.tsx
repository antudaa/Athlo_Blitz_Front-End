import React from 'react';
import { Upload, Button, Form, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadFile, RcFile } from 'antd/es/upload/interface';

// Replace with your ImageBB API key
const IMAGEBB_API_KEY = import.meta.env.VITE_IMAGEBB_API_KEY;

interface UploadButtonProps {
    defaultFileList?: UploadFile[];
    name: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({ defaultFileList, name }) => {
    const [form] = Form.useForm();

    // Function to handle file upload to ImageBB
    const customRequest = async (options: any) => {
        const { file, onSuccess, onError } = options;

        const formData = new FormData();
        formData.append('image', file as RcFile);
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
                onSuccess(result.data, file);
                message.success('Image uploaded successfully!');
            } else {
                throw new Error(result.error.message);
            }
        } catch (error) {
            onError(error);
            message.error('Image upload failed.');
        }
    };

    console.log(form);

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
                <Button icon={<UploadOutlined />} className="w-full md:px-44">
                    Upload Profile Image
                </Button>
            </Upload>
        </Form.Item>
    );
};

export default UploadButton;
