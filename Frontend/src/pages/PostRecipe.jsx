import { useState } from "react";
import Heading from "../components/common/Heading";
import { Form, PageTitle } from "../components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostRecipe = () => {
    const [recipe, setRecipe] = useState({
        title: "",
        summary: "",
        ready_in_minutes: 0,
        servings: 0,
        diets: [],
        ingredients: "",
        image: "",
    });

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

    console.log(recipe);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/recipes/",
                recipe
            );
            console.log(response.status, response.data);
            if (response.status === 201) {
                toast.success("Recipe submitted successfully!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setRecipe({
                    title: "",
                    summary: "",
                    ready_in_minutes: 0,
                    servings: 0,
                    diets: [],
                    ingredients: "",
                    image: "",
                });
            } else {
                toast.error("Failed to submit recipe. Please try again.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error("Error submitting recipe:", error);
            toast.error("Failed to submit recipe. Please try again.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <section className="py-8">
            <div className="max-w-4xl px-4 mx-auto">
                <PageTitle
                    title="Post Recipe"
                    subtitle="Create and share your amazing recipes"
                />
                <Heading
                    title="Post Your Recipe"
                    subtitle="Create and share your amazing recipes"
                />
                <ToastContainer />
                <Form
                    handleSubmit={handleSubmit}
                    recipe={recipe}
                    handleChange={handleChange}
                    dietOptions={dietOptions}
                    handleDietChange={handleDietChange}
                    imageType={imageType}
                    setImageType={setImageType}
                    handleImageChange={handleImageChange}
                />
            </div>
        </section>
    );
};

export default PostRecipe;
