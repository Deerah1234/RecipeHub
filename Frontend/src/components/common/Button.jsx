import PropTypes from "prop-types";
import { ArrowUpRightIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

const Button = ({
    onClick,
    href,
    children,
    icon,
    variant = "default",
    fullWidth = false,
    type = "button",
}) => {
    const buttonClasses = `flex items-center justify-center px-4 py-2 text-sm text-center  rounded-lg font-inter font-medium text-base ${
        fullWidth ? "w-full" : "w-auto"
    } ${
        variant === "primary"
            ? "bg-primary-color-2 text-white hover:bg-primary-color-3"
            : "border border-gray-2 text-dark hover:bg-primary-color-2 hover:border-none hover:text-white hover:scale-110 hover:ease-out hover:duration-300"
    }`;

    return (
        <button onClick={onClick} type={type} className={buttonClasses}>
            {href ? (
                <a
                    href={href}
                    className="flex items-center justify-center w-full h-full"
                >
                    {children}
                    {icon === "arrow-right" && (
                        <ArrowRightIcon className="inline-block w-5 h-5 ml-1" />
                    )}
                    {icon === "arrow-up-right" && (
                        <ArrowUpRightIcon className="inline-block w-5 h-5 ml-2" />
                    )}
                </a>
            ) : (
                <>
                    {children}
                    {icon === "arrow-right" && (
                        <ArrowRightIcon className="inline-block w-5 h-5 ml-1" />
                    )}
                    {icon === "arrow-up-right" && (
                        <ArrowUpRightIcon className="inline-block w-5 h-5 ml-2" />
                    )}
                </>
            )}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    icon: PropTypes.oneOf(["arrow-right", "arrow-up-right"]),
    variant: PropTypes.oneOf(["default", "primary"]),
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
};

export default Button;
