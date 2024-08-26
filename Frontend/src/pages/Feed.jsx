import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../components/common/Heading";
import { Button, PageTitle, SearchBar } from "../components";
import axios from "axios";
import {
    ClockIcon,
    UserGroupIcon,
    TrashIcon,
    ArrowLeftIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";

const Feed = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/recipes/"
                );
                setRecipes(response.data);
                setFilteredRecipes(response.data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
                setError("Failed to load recipes. Please try again later.");
            }
        };
        fetchRecipes();
    }, []);

    const handleSearch = (query) => {
        const filtered = recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredRecipes(filtered);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/recipes/${id}/`);
            setRecipes((prevRecipes) =>
                prevRecipes.filter((recipe) => recipe.id !== id)
            );
            setFilteredRecipes((prevRecipes) =>
                prevRecipes.filter((recipe) => recipe.id !== id)
            );
        } catch (error) {
            console.error("Error deleting recipe:", error);
            setError("Failed to delete recipe. Please try again later.");
        }
    };

    const handleView = (id) => {
        navigate(`/recipes/all/${id}`);
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <section className="py-8">
            <div className="max-w-4xl px-4 mx-auto">
                <PageTitle
                    title="Feed"
                    subtitle="Your Culinary Creations So Far"
                />
                <button
                    onClick={handleBack}
                    className="flex items-center mb-6 font-medium text-gray-700 hover:text-gray-900 font-montserrat"
                >
                    <ArrowLeftIcon className="w-5 h-5 mr-2" />
                    Back
                </button>
                <Heading
                    title="Feed"
                    subtitle="Your Culinary Creations So Far"
                />
                <div className="relative my-10">
                    <SearchBar onSearch={handleSearch} />
                    <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-500 transform -translate-y-1/2 right-4 top-1/2" />
                </div>

                {error && (
                    <div className="p-4 text-white bg-red-500 rounded-lg">
                        {error}
                    </div>
                )}
                {filteredRecipes.length === 0 ? (
                    <p className="mt-4 text-center">No recipes found.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredRecipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className="overflow-hidden bg-white rounded-lg shadow-md"
                            >
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="object-cover w-full h-[200px] sm:h-[250px] lg:h-[300px]"
                                />
                                <div className="p-4">
                                    <h2 className="mb-2 text-xl font-bold text-gray-900">
                                        {recipe.title}
                                    </h2>
                                    <p className="mb-4 text-gray-700 truncate">
                                        {recipe.summary}
                                    </p>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center">
                                            <ClockIcon className="w-5 h-5 mr-1 text-gray-500" />
                                            <span className="text-sm font-semibold text-gray-800">
                                                {recipe.ready_in_minutes} mins
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <UserGroupIcon className="w-5 h-5 mr-1 text-gray-500" />
                                            <span className="text-sm font-semibold text-gray-800">
                                                Serves: {recipe.servings}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {recipe.diets.map((diet, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full"
                                            >
                                                {diet}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between mt-10">
                                        <Button
                                            onClick={() =>
                                                handleView(recipe.id)
                                            }
                                            icon="arrow-up-right"
                                        >
                                            View Details
                                        </Button>
                                        <TrashIcon
                                            onClick={() =>
                                                handleDelete(recipe.id)
                                            }
                                            className="w-5 h-5 text-red-500 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Feed;
