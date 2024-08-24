import { useState } from "react";
import Heading from "../components/common/Heading";

const PostRecipe = () => {
    const [recipe, setRecipe] = useState({
        title: "",
        summary: "",
        readyInMinutes: "",
        servings: "",
        diets: [],
        ingredients: "",
        image: "",
    });
    const [notification, setNotification] = useState("");
    const [dietOptions] = useState([
        "Vegan",
        "Vegetarian",
        "Gluten-Free",
        "Paleo",
        "Keto",
    ]);
    const [imageType, setImageType] = useState("url");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    };

    const handleDietChange = (e) => {
        const { value } = e.target;
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            diets: prevRecipe.diets.includes(value)
                ? prevRecipe.diets.filter((diet) => diet !== value)
                : [...prevRecipe.diets, value],
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setRecipe((prevRecipe) => ({
                    ...prevRecipe,
                    image: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/recipes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(recipe),
            });
            if (response.ok) {
                setNotification("Recipe submitted successfully!");
                setRecipe({
                    title: "",
                    summary: "",
                    readyInMinutes: "",
                    servings: "",
                    diets: [],
                    ingredients: "",
                    image: "",
                });
            } else {
                throw new Error("Failed to submit recipe");
            }
        } catch (error) {
            console.error("Error submitting recipe:", error);
            setNotification("Failed to submit recipe. Please try again.");
        }
    };

    return (
        <section className="py-8">
            <div className="max-w-4xl px-4 mx-auto">
                <Heading
                    title="Post Your Recipe"
                    subtitle="Create and share your amazing recipes"
                />
                {notification && (
                    <div className="p-4 mt-4 text-white bg-green-500 rounded-lg">
                        {notification}
                    </div>
                )}
                <form className="mt-8" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-base font-semibold text-dark font-inter">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={recipe.title}
                            onChange={handleChange}
                            required
                            className="form_textarea"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-base font-semibold text-dark font-inter">
                            Summary
                        </label>
                        <textarea
                            name="summary"
                            value={recipe.summary}
                            onChange={handleChange}
                            required
                            rows="3"
                            className="form_textarea"
                        />
                    </div>
                    <div className="flex mb-4 space-x-4">
                        <div className="w-1/3">
                            <label className="block text-base font-semibold text-dark font-inter">
                                Ready in Minutes
                            </label>
                            <input
                                type="number"
                                name="readyInMinutes"
                                value={recipe.readyInMinutes}
                                onChange={handleChange}
                                required
                                className="form_textarea"
                            />
                        </div>
                        <div className="w-1/3">
                            <label className="block text-base font-semibold text-dark font-inter">
                                Servings
                            </label>
                            <input
                                type="number"
                                name="servings"
                                value={recipe.servings}
                                onChange={handleChange}
                                required
                                className="form_textarea"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-base font-semibold text-dark font-inter">
                            Diet Types
                        </label>
                        <div className="flex flex-wrap gap-3 mt-2">
                            {dietOptions.map((diet) => (
                                <label
                                    key={diet}
                                    className="flex items-center text-base font-semibold text-dark font-inter"
                                >
                                    <input
                                        type="checkbox"
                                        value={diet}
                                        checked={recipe.diets.includes(diet)}
                                        onChange={handleDietChange}
                                        className="mr-2"
                                    />
                                    {diet}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-base font-semibold text-dark font-inter">
                            Ingredients (Separate with commas)
                        </label>
                        <textarea
                            name="ingredients"
                            value={recipe.ingredients}
                            onChange={handleChange}
                            required
                            rows="3"
                            className="form_textarea"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-base font-semibold text-dark font-inter">
                            Image Source
                        </label>
                        <div className="flex space-x-4">
                            <label className="flex items-center text-base font-semibold text-dark font-inter">
                                <input
                                    type="radio"
                                    name="imageType"
                                    value="url"
                                    checked={imageType === "url"}
                                    onChange={() => setImageType("url")}
                                    className="mr-2"
                                />
                                URL
                            </label>
                            <label className="flex items-center text-base font-semibold text-dark font-inter">
                                <input
                                    type="radio"
                                    name="imageType"
                                    value="upload"
                                    checked={imageType === "upload"}
                                    onChange={() => setImageType("upload")}
                                    className="mr-2"
                                />
                                Upload
                            </label>
                        </div>
                    </div>
                    {imageType === "url" ? (
                        <div className="mb-4">
                            <label className="block text-base font-semibold text-dark font-inter">
                                Image URL
                            </label>
                            <input
                                type="text"
                                name="image"
                                value={recipe.image}
                                onChange={handleChange}
                                required
                                className="form_textarea"
                            />
                        </div>
                    ) : (
                        <div className="mb-4">
                            <label className="block text-base font-semibold text-dark font-inter">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                name="imageUpload"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="form_textarea"
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-3 mt-6 text-base font-medium text-white rounded-lg bg-primary-color-3 hover:bg-primary-color-2 font-inter"
                    >
                        Submit Recipe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default PostRecipe;
