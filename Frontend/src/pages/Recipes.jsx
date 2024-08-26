import { useParams } from "react-router-dom";
import RecipeTabs from "../components/RecipeTabs";
import RecipeTabContent from "../components/RecipeTabContent";
import { Heading, PageTitle } from "../components";

const Recipes = () => {
    const { tab } = useParams();

    return (
        <section className="w-full">
            <div className="flex flex-col items-center justify-center px-10 space-y-2">
                <PageTitle title="Recipes" subtitle="All recipes" />
                <Heading
                    title="Embark on a journey"
                    subtitle="With our diverse collection of recipes we have something to satisfy every palate."
                    className="mt-10"
                />
                <section>
                    <RecipeTabs activeTab={tab || "all"} />
                </section>
            </div>
            <RecipeTabContent />
        </section>
    );
};

export default Recipes;
