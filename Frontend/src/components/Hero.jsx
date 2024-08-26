import { heroimage } from "../assets";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

const Hero = () => {
    return (
        <section className="relative mx-5">
            <img
                src={heroimage}
                alt="Cooking image"
                className="object-cover w-full h-[80vh] rounded-3xl"
            />

            <div className="absolute left-0 right-0 top-1/3">
                <div className="text-center text-white transform -translate-y-1/2">
                    <h1 className="head_text">FIND YOUR PERFECT RECIPE</h1>
                </div>
                <div className="px-6 text-left sm:text-center">
                    <p className="text-white">
                        Dive into a treasure trove of recipes, where every dish
                        is a new adventure waiting to be savored.
                    </p>
                </div>
            </div>

            <div className="absolute w-full px-6 transform -translate-x-1/2 left-1/2 sm:left-1/2 sm:bottom-1/3 bottom-8 sm:w-auto">
                <button type="button" className="w-full sm:w-auto">
                    <a
                        href="/recipes"
                        className="flex items-center justify-center px-8 py-3 text-sm text-center text-white rounded-lg font-inter button"
                    >
                        Explore Recipes{" "}
                        <ArrowRightIcon className="inline-block w-5 h-5 ml-1" />
                    </a>
                </button>
            </div>
        </section>
    );
};

export default Hero;
