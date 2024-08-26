import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const PageTitle = ({ title, subtitle }) => {
    return (
        <Helmet>
            <title>{title ? `${title} - Recipe Hub` : "Recipe Hub"}</title>
            {subtitle && <meta name="description" content={subtitle} />}
        </Helmet>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default PageTitle;
