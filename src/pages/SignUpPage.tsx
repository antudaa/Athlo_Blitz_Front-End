
// Reusable Input Component
const FormInput = ({ label, id, type = 'text', required = false }) => (
    <div className="w-full relative mb-6">
        <label htmlFor={id} className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            {label}
            <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
            </svg>
        </label>
        <input
            type={type}
            id={id}
            className="block w-full h-10 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            required={required}
        />
    </div>
);

const SignUpPage = () => {
    return (
        <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
            <img
                src="https://images.pexels.com/photos/7130543/pexels-photo-7130543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 mx-6 max-w-screen-lg w-full my-16">
                <form className="lg:p-11 p-7 mx-auto">
                    <div className="flex gap-x-6">
                        <FormInput label="First Name" id="first-name" required />
                        <FormInput label="Last Name" id="last-name" required />
                    </div>
                    <FormInput label="Email Address" id="email-address" type="email" required />
                    <div className="flex gap-x-6">
                        <FormInput label="Password" id="password" type="password" required />
                        <FormInput label="Confirm Password" id="confirm-password" type="password" required />
                    </div>
                    <div className="flex gap-x-6">
                        <FormInput label="City" id="city" required />
                        <FormInput label="Country" id="country" required />
                    </div>
                    <FormInput label="Street Address" id="street-address" required />
                    <button type="submit" className="w-full py-3 mt-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
