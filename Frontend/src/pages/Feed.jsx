import { useEffect, useState } from "react";
import Heading from "../components/common/Heading";

const Feed = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("/api/recipes");
                if (!response.ok) {
                    throw new Error("Failed to fetch recipes");
                }
                const data = await response.json();
                setRecipes(data.results || []);
            } catch (error) {
                console.error("Error fetching recipes:", error);
                setError("Failed to load recipes. Please try again later.");
            }
        };
        fetchRecipes();
    }, []);

    return (
        <section className="py-8">
            <div className="max-w-4xl px-4 mx-auto">
                <Heading
                    title="Your Feed"
                    subtitle="Your recipes you've shared so far"
                />
                {error && (
                    <div className="p-4 text-white bg-red-500 rounded-lg">
                        {error}
                    </div>
                )}
                {recipes.length === 0 ? (
                    <p className="mt-4 text-center">No recipes posted yet.</p>
                ) : (
                    <div className="my-10 prompt_card">
                        {recipes.map((recipe, index) => (
                            <div key={index} className="">
                                <h2>{recipe.title}</h2>
                                {/* Adjust to show the recipe summary or title */}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Feed;
