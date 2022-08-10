import { AdminPrototype } from "./prototype.styles";
import { RecipeContext,RecipeProvider } from "../../Context/recipe.context";
import { useContext, useEffect } from "react";

const RecipeContextTesting = () => {

    const { recipeContext } = useContext(RecipeContext)
    const recipe = useContext(RecipeContext)
    console.log(recipe)

    useEffect(() => {},[])

    return (
        <AdminPrototype>

        </AdminPrototype>
    )
}

export default RecipeContextTesting