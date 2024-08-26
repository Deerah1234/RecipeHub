import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { heroimage } from "../assets";
import axios from "axios";
import {
    ClockIcon,
    BoltIcon,
    ArrowUpRightIcon,
} from "@heroicons/react/16/solid";

// Utility function to remove HTML tags from text
const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
};

const RecipeTabContent = () => {
    const { tab } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/get-api/"
                );
                const data = response.data;
                // Clean the summary from HTML tags
                const cleanedRecipes = data.recipes.map((recipe) => ({
                    ...recipe,
                    summary: stripHtml(recipe.summary),
                }));
                setRecipes(cleanedRecipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
                setError("Failed to load recipes. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchRecipes();
    }, [tab]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <svg
                    className="container"
                    x="0px"
                    y="0px"
                    viewBox="0 0 37 37"
                    height="37"
                    width="37"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path
                        className="track"
                        fill="none"
                        strokeWidth="5"
                        pathLength="100"
                        d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
                    ></path>
                    <path
                        className="car"
                        fill="none"
                        strokeWidth="5"
                        pathLength="100"
                        d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
                    ></path>
                </svg>
            </div>
        );
    }
    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="px-4 mt-6">
            <h2 className="text-xl font-bold sm:text-2xl">
                {tab
                    ? `${tab.charAt(0).toUpperCase() + tab.slice(1)} Recipes`
                    : "All Recipes"}
            </h2>
            <p className="text-gray-600">
                Displaying recipes for {tab || "all"} tab...
            </p>
            <section className="grid grid-cols-1 gap-6 mt-6 mb-10 sm:grid-cols-2 lg:grid-cols-3">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="flex flex-col bg-white rounded-lg shadow-md"
                        >
                            <img
                                src={recipe.image || heroimage}
                                alt={recipe.title}
                                className="object-cover w-full h-[200px] rounded-t-lg sm:h-[250px]"
                            />
                            <div className="flex flex-col flex-grow p-4 sm:p-6">
                                <h3 className="mb-2 text-lg font-bold text-dark sm:text-xl">
                                    {recipe.title}
                                </h3>
                                <p className="mb-4 text-sm text-gray-700">
                                    {recipe.summary.slice(0, 100)}...
                                </p>
                                <div className="flex flex-col items-center justify-between mt-auto space-y-5 sm:flex-row sm:space-y-0">
                                    <div className="flex items-center gap-2 text-gray-800">
                                        <ClockIcon className="w-5 h-5" />
                                        <span className="text-xs sm:text-sm">
                                            {recipe.readyInMinutes} mins
                                        </span>
                                        <BoltIcon className="w-5 h-5 ml-4" />
                                        <span className="text-xs sm:text-sm">
                                            {recipe.servings} servings
                                        </span>
                                    </div>
                                    <Link
                                        to={recipe.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full px-3 py-2 text-xs text-center text-white rounded-lg sm:w-auto bg-primary-color-2 hover:bg-primary-color-3 sm:px-4 sm:py-2 sm:text-sm"
                                    >
                                        View Recipe{" "}
                                        <ArrowUpRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">
                        No recipes found.
                    </div>
                )}
            </section>
        </div>
    );
};

export default RecipeTabContent;
