import axios from "axios";

const initialState = {
  recipes: {},
  isLoading:false,
};

const GET_RECIPES = "GET_RECIPES";

export function getRecipes() {
  return {
    type: GET_RECIPES,
    payload: axios.get('/api/recipes/get/all')

  };
}

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES + "_PENDING":
      return {
        ...state,
        isLoading:true
      };
    case GET_RECIPES + "_FULFILLED":
        return {
            ...state,
            recipes: action.payload
        };
    case GET_RECIPES + "_REJECTED":
        return {
            ...state,
            isLoading:false
        }
    default:
      return state;
  }
}