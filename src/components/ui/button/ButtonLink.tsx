import { Link } from "react-router-dom";

interface ButtonLinkProps {
    width?: string;
    text: string;
    link: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ text, link, width }) => {
    return (
        <Link to={link} className={`px-4 py-2 text-center bg-white border border-indigo-600 text-gray-800 rounded-full font-semibold hover:bg-indigo-600 hover:text-white ${width ? width : ''} transition-all duration-500`}>
            {text}
        </Link>
    );
};

export default ButtonLink;
