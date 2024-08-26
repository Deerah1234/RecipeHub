import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heading, PageTitle } from "../components";
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
                const response = await fetch(
                    `http://127.0.0.1:8000/api/recipes/${id}/`
                );
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
                <div className="text-lg text-gray-700 animate-pulse">
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
        <section className="py-12">
            <div className="max-w-4xl px-4 mx-auto">
                <PageTitle title="Recipe Details" />
                <div className="flex flex-col items-center justify-center">
                    <Heading
                        title={recipe.title}
                        subtitle={recipe.summary.replace(/(<([^>]+)>)/gi, "")}
                        className="text-center"
                    />
                    <div className="flex flex-col items-center mt-8 mb-10 sm:flex-row sm:items-start sm:space-x-10">
                        <ul className="flex space-x-6 text-sm text-gray-700">
                            <li className="flex items-center space-x-2">
                                <ClockIcon className="w-5 h-5 text-primary-color-3" />
                                <span>{recipe.ready_in_minutes} MINUTES</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <BoltIcon className="w-5 h-5 text-primary-color-3" />
                                <span>
                                    {recipe.diets.includes("vegan")
                                        ? "EASY PREP"
                                        : "HARD PREP"}
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <UsersIcon className="w-5 h-5 text-primary-color-3" />
                                <span>{recipe.servings} SERVINGS</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full mb-8 h-96">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="object-cover w-full h-full rounded-lg shadow-lg"
                    />
                </div>

                <div className="p-6 mt-6 bg-white border rounded-lg shadow-lg bg-opacity-90 backdrop-blur-md">
                    <h3 className="text-2xl font-semibold uppercase font-montserrat text-primary-color-3">
                        Ingredients
                    </h3>
                    <ul className="p-6 mt-4 space-y-2 list-disc list-inside">
                        {recipe.ingredients
                            .split(", ")
                            .map((ingredient, index) => (
                                <li key={index} className="text-gray-700">
                                    {ingredient}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default RecipeDetails;
