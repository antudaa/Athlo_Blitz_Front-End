import React from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadFile, RcFile, UploadProps } from 'antd/es/upload/interface';
import { TError } from '../../../types/Error/errorType';

const IMAGEBB_API_KEY = import.meta.env.VITE_IMAGEBB_API_KEY;

interface UploadButtonProps {
    defaultFileList?: UploadFile[];
    name: string;
    onChange: (fileList: UploadFile[]) => void;
}

const MultipleUploadButton: React.FC<UploadButtonProps> = ({ defaultFileList, onChange }) => {
    const customRequest: UploadProps['customRequest'] = async (options) => {
        const { file, onSuccess, onError } = options;

        if (!(file instanceof Blob)) {
            onError?.(new Error('Invalid file type'));
            return;
        }

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
                onChange([
                    ...(defaultFileList || []),
                    { uid: file.uid || `${Date.now()}`, name: file.name, status: 'done', url: imageUrl }, // Assign a unique uid
                ]);
                onSuccess?.(result.data, file);
                message.success('Image uploaded successfully!');
            } else {
                throw new Error(result.error.message);
            }
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'data' in err) {
                const error = err as TError;
                message.error(`${error?.data?.message}` || 'Image Upload failed!');
            } else {
                message.error('An unknown error occurred.');
            }
        }
    };

    return (
        <Upload
            customRequest={customRequest}
            listType="picture"
            defaultFileList={defaultFileList}
            onChange={(info) => {
                const fileList = info.fileList.map(file => ({
                    ...file,
                    url: file.response?.data?.url || file.url,
                    uid: file.uid || `${Date.now()}`,
                }));
                onChange(fileList);
            }}
            className="w-full"
        >
            <Button icon={<UploadOutlined />} className="w-full">
                Upload Images
            </Button>
        </Upload>
    );
};

export default MultipleUploadButton;
