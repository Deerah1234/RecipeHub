import PropTypes from "prop-types";

const Heading = ({ title, subtitle, className }) => {
    return (
        <div className={`text-center ${className}`}>
            <h1 className="text-3xl font-extrabold uppercase text-dark sm:text-4xl md:text-5xl font-montserrat orange_gradient">
                {title}
            </h1>
            <p className="mt-4 text-base text-gray-2 sm:text-lg md:text-xl">
                {subtitle}
            </p>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Heading;
