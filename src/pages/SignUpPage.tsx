import React from 'react';
import { Form } from 'antd';
import 'antd/dist/reset.css';
import TextArea from 'antd/es/input/TextArea';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import TextInput from '../components/ui/inputField/TextInput';
import PasswordInput from '../components/ui/inputField/PasswordInput';
import { UploadFile } from 'antd/es/upload/interface';
import { RuleObject } from 'antd/es/form';
import PrimaryButton from '../components/ui/button/SubmitButton';
import UploadButton from '../components/ui/inputField/FileUploadInput';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    streetAddress: string;
}

const fileList: UploadFile[] = [];

const SignUpPage: React.FC = () => {
    const onFinish = (values: FormValues) => {
        console.log('Form Values:', values);
    };

    const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
        console.error('Failed:', errorInfo);
    };

    return (
        <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
            <img
                src="https://images.pexels.com/photos/7130543/pexels-photo-7130543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative bg-white p-8 rounded-lg shadow-md max-w-xl w-full z-10">
                <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
                <Form
                    name="signup"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col md:flex-row gap-4'>
                            <TextInput
                                label="First Name"
                                name="firstName"
                                rules={[{ required: true, message: 'Please enter your first name!' }]}
                                placeholder="First Name"
                            />
                            <TextInput
                                label="Last Name"
                                name="lastName"
                                rules={[{ required: true, message: 'Please enter your last name!' }]}
                                placeholder="Last Name"
                            />
                        </div>
                        <TextInput
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter your email address!' },
                                { type: 'email', message: 'Please enter a valid email address!' },
                            ]}
                            placeholder="email@gmail.com"
                            type="email"
                        />
                        <div className='flex flex-col md:flex-row gap-4'>
                            <PasswordInput
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please enter your password!' }]}
                                placeholder="Enter your password"
                            />
                            <PasswordInput
                                label="Confirm Password"
                                name="confirmPassword"
                                rules={[
                                    { required: true, message: 'Please confirm your password!' },
                                    ({ getFieldValue }: { getFieldValue: (field: string) => string }) => ({
                                        validator(_: RuleObject, value: string) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Passwords do not match!'));
                                        },
                                    }),
                                ]}
                                placeholder="Confirm your password"
                            />
                        </div>
                        <UploadButton
                            defaultFileList={fileList}
                            name="profileImage"
                        />
                        <Form.Item
                            label={<span className="text-gray-700">Street Address</span>}
                            name="streetAddress"
                            rules={[{ required: true, message: 'Please enter your street address!' }]}
                        >
                            <TextArea
                                placeholder="Enter your address here ..."
                                className="border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 w-full"
                            />
                        </Form.Item>
                    </div>

                    <Form.Item>
                        <PrimaryButton htmlType="submit" text="Sign Up" />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default SignUpPage;
