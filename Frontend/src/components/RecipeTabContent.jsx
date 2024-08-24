import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { heroimage } from "../assets";

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
                const response = await fetch(
                    `http://127.0.0.1:8000/api/recipes/?tab=${tab}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setRecipes(data.recipes || []);
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
                Loading...
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="mx-5 mt-6">
            <h2 className="text-2xl font-bold">
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
                                className="object-cover w-full h-[300px] rounded-t-lg"
                            />
                            <div className="flex flex-col flex-grow p-6">
                                <h3 className="mb-2 text-xl font-bold text-dark">
                                    {recipe.title}
                                </h3>
                                <p className="mb-4 text-base text-gray-700">
                                    {recipe.description}
                                </p>
                                <div className="flex flex-col gap-5 mt-auto sm:flex-row sm:justify-between sm:items-center">
                                    <p className="text-sm font-semibold text-gray-800">
                                        {recipe.time} - {recipe.prep} -{" "}
                                        {recipe.serves}
                                    </p>
                                    <Link
                                        to={`/recipes/${tab}/${recipe.id}`}
                                        className="px-4 py-2 text-center text-white rounded-full bg-primary-color-2 hover:bg-primary-color-3"
                                    >
                                        View Recipe
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
