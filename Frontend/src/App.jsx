import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Feed, Home, PostRecipe, RecipeDetails, Recipes } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/postrecipe" element={<PostRecipe />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/recipes" element={<Recipes />}>
                        <Route path=":tab" element={<Recipes />} />
                    </Route>
                    <Route
                        path="/recipes/:tab/:id"
                        element={<RecipeDetails />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
