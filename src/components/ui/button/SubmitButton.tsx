// src/components/PrimaryButton.tsx
import React from 'react';
import { Button } from 'antd';

interface PrimaryButtonProps {
    text: string;
    htmlType?: 'button' | 'submit' | 'reset';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, htmlType = 'button' }) => (
    <Button type="primary" htmlType={htmlType} className="w-full">
        {text}
    </Button>
);

export default PrimaryButton;
