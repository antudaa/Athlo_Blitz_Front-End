import { Link } from "react-router-dom";

interface ButtonLinkProps {
    width?: string;
    text: string;
    link: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ text, link, width }) => {
    return (
        <Link to={link} className={`px-4 py-2 text-center bg-indigo-500 text-white rounded-md font-semibold hover:bg-indigo-600 hover:text-white ${width ? width : ''}`}>
            {text}
        </Link>
    );
};

export default ButtonLink;
