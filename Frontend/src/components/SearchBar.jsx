import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-color-2 placeholder:font-inter"
                placeholder="Search recipes..."
            />
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
