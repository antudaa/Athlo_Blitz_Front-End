import Background from '../../assets/Auth_Background.png';
import { message, Form, Input } from 'antd';
import 'antd/dist/reset.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../redux/features/auth/authApi';
import siteLogo from '../../assets/Site_Logo.png';
import UploadButton from '../../components/ui/button/UploadButton';
import LoadingButton from '../../components/ui/button/LoadingButton';
import PrimaryButton from '../../components/ui/button/SubmitButton';
import { TRegister } from '../../types/Auth/register';
import { TError } from '../../types/Error/errorType';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [signup, { isLoading }] = useSignupMutation();
    const [form] = Form.useForm();

    const onFinish = async (values: TRegister) => {
        const profileImageUrl = values.profileImage?.fileList.length > 0 ? values.profileImage.fileList[0].response.url : '';
        const userInfo = {
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
            const res = await signup(userInfo).unwrap();
            if (res.statusCode === 200) {
                navigate('/login');
                message.success('Signup Successful');
            }
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'data' in err) {
                const error = err as TError;
                message.error(`${error?.data?.message}` || 'Signup failed! Please try again.');
            } else {
                message.error('An unknown error occurred.');
            }
        }
    };

    return (
        <section className="flex justify-center relative">
            <img
                src={Background}
                className="w-full h-full object-cover fixed opacity-90"
                alt="Background"
            />
            <div className="mx-auto max-w-lg px-6 lg:px-8 absolute bg-white my-10 rounded-2xl shadow-xl">
                <img
                    src={siteLogo}
                    alt="pagedone logo"
                    className="mx-auto w-[250px] pt-10"
                />
                <div className="rounded-2xl bg-white w-full">
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        className="p-7 mx-auto"
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name!' }]}
                        >
                            <Input placeholder="Name" />
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
                                <Input placeholder="email@gmail.com" type="email" />
                            </Form.Item>
                            <Form.Item
                                className='flex-1'
                                label="Contact No"
                                name="phone"
                                rules={[{ required: true, message: 'Please enter your contact number!' }]}
                            >
                                <Input placeholder="Contact Number" />
                            </Form.Item>
                        </div>
                        <div className='flex md:gap-4 flex-col md:flex-row'>
                            <Form.Item
                                className='flex-1'
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please enter your password!' }]}
                            >
                                <Input.Password placeholder="Enter your password" />
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
                                <Input.Password placeholder="Confirm your password" />
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
                                <PrimaryButton text="Sign Up" htmlType="submit" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Link
                                to="/login"
                                className="flex justify-center text-gray-900 font-medium leading-6 text-xs hover:text-gray-900"
                            >
                                Already have an account?
                                <span className="text-blue-600 font-semibold text-xs pl-3 my-auto">Login</span>
                            </Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;