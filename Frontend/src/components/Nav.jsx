import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="relative w-full">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <Link
                    to="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="self-center text-3xl font-black font-gulax whitespace-nowrap">
                        RecipeHub
                    </span>
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <div className="relative w-5 h-5">
                        <div
                            className={`absolute w-full h-0.5 bg-current transition-transform duration-300 ${
                                isMenuOpen ? "rotate-45 top-2.5" : "top-0"
                            }`}
                        />
                        <div
                            className={`absolute w-full h-0.5 bg-current transition-opacity duration-300 ${
                                isMenuOpen ? "opacity-0" : "opacity-100"
                            } top-2.5`}
                        />
                        <div
                            className={`absolute w-full h-0.5 bg-current transition-transform duration-300 ${
                                isMenuOpen
                                    ? "-rotate-45 bottom-2.5"
                                    : "bottom-0"
                            }`}
                        />
                    </div>
                </button>

                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } absolute top-3/4 left-0 right-0 z-10 md:relative md:top-0 md:block md:w-auto `}
                    id="navbar-default"
                >
                    <ul
                        className={`flex flex-col p-4 mt-4 font-medium md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ${
                            isMenuOpen
                                ? "card"
                                : "bg-transparent backdrop-blur-md border-gray-100"
                        }`}
                    >
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    to={link.route}
                                    onClick={closeMenu}
                                    className={`block py-2 px-3 rounded ${
                                        location.pathname === link.route
                                            ? "text-white bg-[#EE6352] md:bg-transparent md:text-[#EE6352]"
                                            : "text-[#ccc8c0] hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-[#EE6352] hover:text-white"
                                    }`}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
