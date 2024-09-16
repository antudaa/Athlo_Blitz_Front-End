import React from "react";

interface DashbaordHeadeProps {
    text1: string;
    text2: string;
}

const DashboardHeader: React.FC<DashbaordHeadeProps> = ({ text1, text2 }) => {
    return (
        <>
            <h1 className="text-4xl my-6 lg:my-10 font-semibold">{text1} <span className="text-indigo-500 underline underline-offset-8">{text2}</span></h1>
        </>
    );
};

export default DashboardHeader;