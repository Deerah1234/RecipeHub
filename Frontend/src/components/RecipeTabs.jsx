import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const tabs = [
    { name: "All", route: "all" },
    { name: "Vegan", route: "vegan" },
    { name: "Breakfast", route: "breakfast" },
    { name: "GlutenFree", route: "glutenFree" },
    { name: "DairyFree", route: "dairyFree" },
];

const RecipeTabs = ({ activeTab }) => {
    return (
        <section className="mt-10">
            <ul className="flex flex-wrap gap-3 sm:flex-row sm:space-x-5 sm:justify-center sm:items-center">
                {tabs.map((tab) => (
                    <li
                        key={tab.route}
                        className={`px-5 py-1 border rounded-full cursor-pointer ${
                            activeTab === tab.route
                                ? "bg-primary-color-1 text-dark border-dark"
                                : "border-gray text-gray hover:text-dark hover:border-dark"
                        }`}
                    >
                        <Link to={`/recipes/${tab.route}`}>{tab.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

RecipeTabs.propTypes = {
    activeTab: PropTypes.string.isRequired,
};

export default RecipeTabs;
