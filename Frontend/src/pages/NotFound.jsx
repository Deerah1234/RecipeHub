import { Link } from "react-router-dom";
import { ExclamationTriangleIcon, HomeIcon } from "@heroicons/react/24/solid";
import { notfoundimage } from "../assets";
import { PageTitle } from "../components";

const NotFound = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen text-center bg-center bg-cover"
            style={{ backgroundImage: `url(${notfoundimage})` }}
        >
            <div className="p-6 bg-white bg-opacity-75 rounded-lg shadow-lg notfoundcard">
                <PageTitle title="404" />
                <div className="flex flex-col items-center justify-center">
                    <ExclamationTriangleIcon className="w-20 h-20 text-center text-red-500" />
                    <h1 className="mt-4 text-5xl font-extrabold text-gray-800 font-montserrat">
                        404
                    </h1>
                </div>
                <p className="mt-2 text-lg text-gray-600 font-inter">
                    Oops! The page you’re looking for doesn’t exist.
                </p>
                <Link
                    to="/"
                    className="flex items-center px-6 py-3 mt-6 text-base font-semibold text-white rounded-lg bg-primary-color-2 hover:bg-primary-color-3 font-inter"
                >
                    <HomeIcon className="w-6 h-6 mr-2" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
