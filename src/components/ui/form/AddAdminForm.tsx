import { message, Form, Input, Typography } from 'antd';
import 'antd/dist/reset.css';
import { TRegister } from '../../../types/Auth/register';
import UploadButton from '../button/UploadButton';
import { useSignupAdminMutation } from '../../../redux/features/auth/authApi';
import { useSelector } from 'react-redux';
import { useCurrentToken } from '../../../redux/features/auth/authSlice';
import LoadingButton from '../button/LoadingButton';
import PrimaryButton from '../button/SubmitButton';
import { TError } from '../../../types/Error/errorType';

const { Title } = Typography;

const AddAdminForm = () => {
    const [signupAdmin, { isLoading }] = useSignupAdminMutation();
    const [form] = Form.useForm();
    const token = useSelector(useCurrentToken);

    const onFinish = async (values: TRegister) => {
        const profileImageUrl = values.profileImage?.fileList.length > 0
            ? values.profileImage.fileList[0].response?.url
            : '';
        const adminInfo = {
            password: values.password,
            body: {
                name: values.name,
                email: values.email,
                phone: values.phone,
                profileImage: profileImageUrl,
                address: values.address,
            },
        };

        try {
            const res = await signupAdmin({ adminInfo, token }).unwrap();
            if (res.statusCode === 200) {
                message.success('Admin profile created successfully.');
                form.resetFields();
            }
        } catch (err: unknown) {
            const error = err as TError;
            message.error(error?.data?.errorSources?.[0]?.message || 'Admin Creation failed! Please try again.');
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="lg:p-11 p-7 mx-auto max-w-7xl border border-indigo-500 rounded-2xl bg-white shadow-xl my-10"
        >
            <div className="mb-11 text-center">
                <Title level={2} className="text-gray-900 font-manrope mb-2">
                    Admin Information
                </Title>
            </div>
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name!' }]}
            >
                <Input placeholder="Name" className='h-10' />
            </Form.Item>
            <div className='flex md:gap-4 flex-col md:flex-row'>
                <Form.Item
                    className='flex-1'
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please enter your email address!' },
                        { type: 'email', message: 'Please enter a valid email address!' },
                    ]}
                >
                    <Input placeholder="email@gmail.com" type="email" className='h-10' />
                </Form.Item>
                <Form.Item
                    className='flex-1'
                    label="Contact No"
                    name="phone"
                    rules={[{ required: true, message: 'Please enter your contact number!' }]}
                >
                    <Input placeholder="Contact Number" className='h-10' />
                </Form.Item>
            </div>
            <div className='flex md:gap-4 flex-col md:flex-row'>
                <Form.Item
                    className='flex-1'
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                    <Input.Password placeholder="Enter your password" className='h-10' />
                </Form.Item>
                <Form.Item
                    className='flex-1'
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirm your password" className='h-10' />
                </Form.Item>
            </div>
            <Form.Item
                name="profileImage"
                valuePropName="fileList"
                getValueFromEvent={e => (Array.isArray(e) ? e : e?.fileList)}
            >
                <UploadButton name="profileImage" />
            </Form.Item>
            <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please enter your street address!' }]}
            >
                <Input.TextArea
                    placeholder="Enter your address here ..."
                    className="border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 w-full"
                />
            </Form.Item>
            <Form.Item>
                {isLoading ? (
                    <LoadingButton />
                ) : (
                    <PrimaryButton text="Submit" htmlType="submit" />
                )}
            </Form.Item>
        </Form>
    );
};

export default AddAdminForm;
