import { Link } from "react-router-dom";

const EmptyState = ({message, address, label}) => {
    return (
        <div className="min-h-[calc(100vh-122px)] flex flex-col justify-center items-center gap-5 pb-16">
            <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
            <Link
              to={address}
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-warning absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                {label}
              </span>
            </Link>
        </div>
    );
};

export default EmptyState;