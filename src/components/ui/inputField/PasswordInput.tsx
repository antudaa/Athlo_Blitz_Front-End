// src/components/PasswordInput.tsx
import React from 'react';
import { Form, Input } from 'antd';

interface PasswordInputProps {
    label: string;
    name: string;
    rules?: object[];
    placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, name, rules, placeholder }) => (
    <Form.Item
        label={<span className="text-gray-700">{label}</span>}
        name={name}
        rules={rules}
        className="w-full"
    >
        <Input.Password
            placeholder={placeholder}
            className="border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 w-full"
        />
    </Form.Item>
);

export default PasswordInput;
