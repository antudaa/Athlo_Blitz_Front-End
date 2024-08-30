// src/components/TextInput.tsx
import React from 'react';
import { Form, Input } from 'antd';

interface TextInputProps {
    label: string;
    name: string;
    rules?: object[];
    placeholder?: string;
    type?: 'text' | 'email'; // Added 'email' type support
}

const TextInput: React.FC<TextInputProps> = ({ label, name, rules, placeholder, type = 'text' }) => (
    <Form.Item
        label={<span className="text-gray-700">{label}</span>}
        name={name}
        rules={rules}
        className="w-full"
    >
        <Input
            type={type}
            placeholder={placeholder}
            className="border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 w-full"
        />
    </Form.Item>
);

export default TextInput;
