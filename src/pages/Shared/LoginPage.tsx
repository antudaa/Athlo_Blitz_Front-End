import { Form, Typography, message } from 'antd';
import Background from '../../assets/Auth_Background.png';
import siteLogo from '../../assets/Site_Logo.png';
import PrimaryButton from '../../components/ui/button/SubmitButton';
import PasswordInput from '../../components/ui/inputField/PasswordInput';
import TextInput from '../../components/ui/inputField/TextInput';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TLogin } from '../../types/Auth/login';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import LoadingButton from '../../components/ui/button/LoadingButton';
import { setUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import { verifyToken } from '../../utils/verifyToken';
import { useLazyGetUserFullDetailQuery } from '../../redux/features/user/userApi';
import { TError } from '../../types/Error/errorType';

const { Text } = Typography;

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();

    // Use the login mutation hook
    const [login, { isLoading }] = useLoginMutation();

    // Use the lazy query hook for fetching user details
    const [triggerGetUserFullDetail] = useLazyGetUserFullDetailQuery();

    const onSubmit = async (values: TLogin) => {
        const userInfo = {
            email: values?.email,
            password: values?.password,
        };

        try {
            // Attempt login and get access token
            const res = await login(userInfo).unwrap();

            // Decode the token to get user ID
            const userData = verifyToken(res.data.accessToken);
            const id = userData.userId;
            const token = res.data.accessToken;

            // Fetch the full user details using the lazy query
            const user = await triggerGetUserFullDetail({ id, token }).unwrap();
            // Dispatch the user and token to Redux
            dispatch(setUser({ user: user?.data, token: res?.data?.accessToken }));

            // Navigate to home page
            const redirectPath = location.state?.from || "/";
            navigate(redirectPath);

            // Show success message
            message.success('Login Successful.');
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'data' in err) {
                const error = err as TError;
                message.error(`${error?.data?.message}` || 'Login failed! Please try again.');
            } else {
                message.error('An unknown error occurred.');
            }
        }
    };

    // Function to autofill credentials
    const handleAutofill = (type: 'user' | 'admin') => {
        const credentials = {
            user: { email: 'antudaa@gmail.com', password: 'antu' },
            admin: { email: 'antu@gmail.com', password: 'piudas' },
        };
        form.setFieldsValue(credentials[type]);
    };

    return (
        <section className="flex justify-center relative">
            <img
                src={Background}
                className="w-full h-full object-cover fixed opacity-90"
                alt="Background"
            />
            <div className="mx-auto max-w-5xl w-[320px] md:w-[500px] px-6 absolute pt-10 my-10 md:my-24 lg:my-40 rounded-2xl bg-white shadow-2xl">
                <img
                    src={siteLogo}
                    alt="pagedone logo"
                    className="mx-auto w-[250px] "
                />
                <div className="rounded-2xl bg-white">
                    <Form
                        form={form}
                        className="p-7 mx-auto"
                        onFinish={onSubmit}
                        layout="vertical"
                    >
                        <div className="flex justify-between mb-4">
                            <button
                                type="button"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                onClick={() => handleAutofill('user')}
                            >
                                User Credential
                            </button>
                            <button
                                type="button"
                                className="bg-green-500 text-white px-4 py-2 rounded-md"
                                onClick={() => handleAutofill('admin')}
                            >
                                Admin Credential
                            </button>
                        </div>
                        <TextInput
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please enter your username' }]}
                            placeholder="Username"
                        />
                        <PasswordInput
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password' }]}
                            placeholder="Password"
                        />
                        <Form.Item>
                            <a href="#" className="flex justify-end">
                                <Text className="text-blue-600 text-base font-normal">
                                    Forgot Password?
                                </Text>
                            </a>
                        </Form.Item>
                        <Form.Item>
                            {
                                isLoading ? (
                                    <LoadingButton />
                                ) : (
                                    <PrimaryButton
                                        text="Sign In"
                                        htmlType="submit"
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            <Link to="/register" className="flex justify-center text-gray-900 text-sm font-medium leading-6 hover:text-gray-900">
                                Don’t have an account?
                                <span className="text-blue-600 font-semibold pl-3">Sign Up</span>
                            </Link>
                            <Link to="/" className="flex justify-center text-gray-900 text-sm font-medium leading-6 hover:text-gray-900">
                                Back to
                                <span className="text-blue-600 font-semibold pl-3">Home</span>
                            </Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
