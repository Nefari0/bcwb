import { createContext,useState,useEffect } from "react";

import { addCollectionAndDocuments } from "../../base";

import RECIPE_DATA from "./recipe-data.js";

export const RecipeContext = createContext({
    recipes:[],
});

export const RecipeProvider = ({ children }) => {
    const [recipes,setRecipes] = useState([]);
    // useEffect(() => {
    //     addCollectionAndDocuments('recipes',RECIPE_DATA)
    // },[])
    const value = { recipes };
    return (
        <RecipeContext.Provider value={value}>
            {children}
        </RecipeContext.Provider>
    );
};