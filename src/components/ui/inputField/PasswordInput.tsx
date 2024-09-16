import React from 'react';
import { Form, Input } from 'antd';

interface PasswordInputProps {
  label: string;
  name: string;
  rules?: object[];
  placeholder?: string;
  error?: string; // Added error prop
  value?: string;  // Added value prop
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Added onChange prop
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(({
  label,
  name,
  rules,
  placeholder,
  error,
  value,
  onChange,
  ...rest
}) => (
  <Form.Item
    label={<span className="text-gray-700">{label}</span>}
    name={name}
    rules={rules}
    validateStatus={error ? 'error' : undefined}
    help={error}
    className="w-full"
  >
    <Input.Password
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border-gray-300 h-10 rounded-md focus:ring-green-500 focus:border-green-500 w-full ${
        error ? 'border-red-500' : ''
      }`}
      {...rest}
    />
  </Form.Item>
));

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
