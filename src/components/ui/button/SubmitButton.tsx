import React from 'react';

interface PrimaryButtonProps {
    text: string;
    htmlType?: 'button' | 'submit' | 'reset';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => (
    <button type="submit" className="w-full h-10 rounded-full font-semibold border border-indigo-600 bg-indigo-600 text-white transition-all duration-500">
        {text}
    </button>
);

export default PrimaryButton;
