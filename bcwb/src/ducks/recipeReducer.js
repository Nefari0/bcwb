import axios from "axios";

const initialState = {
  recipes: {},
  isLoading:false,
};

const GET_RECIPES = "GET_RECIPES";
const SET_SPINNER = "SET_SPINNER";

export function getRecipes() {
  return {
    type: GET_RECIPES,
    payload: axios.get('/api/recipes/get/all')

  };
}

export function setSpinner(val) {
  return {
    type: SET_SPINNER,
    payload:val
  }
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
            recipes: action.payload,
            isLoading:false
        };
    case GET_RECIPES + "_REJECTED":
        return {
            ...state,
            isLoading:false
        }
    // -- Spinner / load screen controller -- //
    case SET_SPINNER:
        return {
            ...state,
            isLoading:action.payload
        }
    default:
        return state;
  }
}