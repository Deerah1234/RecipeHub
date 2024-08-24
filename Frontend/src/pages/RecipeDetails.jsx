import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heading } from "../components";
import { ClockIcon, BoltIcon, UsersIcon } from "@heroicons/react/16/solid";

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/recipes/${id}/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch recipe");
                }
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error("Error fetching recipe:", error);
                setError("Failed to load recipe. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

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

    if (!recipe) {
        return <div className="text-center">Recipe not found</div>;
    }

    return (
        <section className="py-8 bg-gray-50">
            <div className="max-w-4xl px-4 mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <Heading
                        title={recipe.title}
                        subtitle={recipe.summary.replace(/(<([^>]+)>)/gi, "")}
                        className="mt-10"
                    />
                    <div className="flex flex-col items-center mt-10 mb-8 sm:items-start">
                        <ul className="flex space-x-6 text-sm text-gray-700">
                            <li className="flex items-center space-x-2">
                                <ClockIcon className="w-5 h-5 text-gray-600" />
                                <span>{recipe.ready_in_minutes} MINUTES</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <BoltIcon className="w-5 h-5 text-gray-600" />
                                <span>
                                    {recipe.diets.includes("vegan")
                                        ? "EASY PREP"
                                        : "HARD PREP"}
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <UsersIcon className="w-5 h-5 text-gray-600" />
                                <span>{recipe.servings} SERVINGS</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full mb-8 h-96">
                    <img
                        src={recipe.image_url}
                        alt={recipe.title}
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>

                <div className="p-6 mt-6 bg-white border border-opacity-25 rounded-lg shadow-lg bg-opacity-70 backdrop-blur-md border-gray">
                    <h3 className="text-2xl font-semibold uppercase font-montserrat text-primary-color-3">
                        Ingredients
                    </h3>
                    <ul className="p-6 mt-4 space-y-2 list-disc">
                        {recipe.ingredients
                            .split(", ")
                            .map((ingredient, index) => (
                                <li key={index} className="text-gray-700">
                                    {ingredient}
                                </li>
                            ))}
                    </ul>
                </div>

                <div className="mt-10">
                    <a
                        href={recipe.sourceUrl}
                        className="block w-full py-3 text-center text-white rounded-lg bg-primary-color-3 hover:bg-primary-color-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Full Recipe
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RecipeDetails;
