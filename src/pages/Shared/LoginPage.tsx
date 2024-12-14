import { Form, Typography, message } from 'antd';
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
import loginImage from "../.../../../assets/loginImage.png";

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
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center items-center flex">
                        <h1 className="font-bold text-2xl lg:text-3xl my-6">Wellcome To</h1>

                        <img
                        src={siteLogo}
                        alt="pagedone logo"
                        className="mx-auto w-[150px] h-[40px]"
                    />
                    </div>
                    <Form
                        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                        form={form}
                        onFinish={onSubmit}
                        layout="vertical"
                    >
                        <div className="flex justify-between mb-4">
                            <button
                                type="button"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-full"
                                onClick={() => handleAutofill('user')}
                            >
                                User Credential
                            </button>
                            <button
                                type="button"
                                className="bg-green-500 text-white px-4 py-2 rounded-full"
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

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 bg-indigo-50">
                    <img
                        alt=""
                        src={loginImage}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>
    );
};

export default LoginPage;
