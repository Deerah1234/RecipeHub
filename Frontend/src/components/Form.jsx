import PropTypes from "prop-types";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

const Form = ({
    handleSubmit,
    recipe,
    handleChange,
    dietOptions,
    handleDietChange,
}) => {
    return (
        <>
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
                <div className="flex flex-col mb-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/3">
                        <label className="block text-base font-semibold text-dark font-inter">
                            Ready in Minutes
                        </label>
                        <input
                            type="number"
                            name="ready_in_minutes"
                            value={recipe.ready_in_minutes}
                            onChange={handleChange}
                            required
                            className="form_textarea"
                        />
                    </div>
                    <div className="w-full md:w-1/3">
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
                <div className="flex flex-col sm:gap-5 md:flex-row">
                    <button
                        type="submit"
                        className="flex items-center justify-center w-full py-3 mt-6 text-base font-medium border rounded-lg text-dark border-dark hover:bg-primary-color-2 font-inter hover:scale-110 hover:border-none hover:text-white hover:ease-in hover:duration-300"
                    >
                        Submit Recipe
                        <ArrowUpRightIcon className="inline-block w-5 h-5 ml-2" />
                    </button>

                    <button
                        type="reset"
                        className="w-full py-3 mt-6 text-base font-medium text-white border rounded-lg bg-primary-color-3 font-inter hover:scale-110 hover:ease-in hover:duration-300"
                    >
                        Clear
                    </button>
                </div>
            </form>
        </>
    );
};

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    dietOptions: PropTypes.array.isRequired,
    handleDietChange: PropTypes.func.isRequired,
};

export default Form;
