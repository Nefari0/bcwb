import axios from "axios";
import { CATEGORIES,RECIPES } from "../endpoints";

const { GET_ALL_CATEGORIES } = CATEGORIES
const { GET_RECIPES } = RECIPES

const initialState = {
  recipes: {},
  categories: {},
  errorMessage:'',
  isLoading:false,
};

const FETCH_RECIPES = "FETCH_RECIPES";
const FETCH_CATEGORIES = "FETCH_CATEGORIES";
const SET_SPINNER = "SET_SPINNER";

export function getRecipes() {
  return {
    type: FETCH_RECIPES,
    payload: axios.get(GET_RECIPES)

  };
};

export function getCategories() {
  return {
    type: FETCH_CATEGORIES,
    payload: axios.get(GET_ALL_CATEGORIES)
  }
}

export function setSpinner(val) {
  return {
    type: SET_SPINNER,
    payload:val
  }
}

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {

    //  --- Get all categories --- //
    case FETCH_CATEGORIES + '_PENDING':
      return {
        ...state,
        isLoading:true,
      };
      case FETCH_CATEGORIES + '_FULFILLED':
        return {
          ...state,
          categories: action.payload.data,
          isLoading:false
        }
      case FETCH_CATEGORIES + '_REJECTED':
        return {
          ...state,
          isLoading:false,
          errorMessage:'not found'
        };

    // --- Get Recipes --- //
    case FETCH_RECIPES + "_PENDING":
      return {
        ...state,
        isLoading:true
      };
    case FETCH_RECIPES + "_FULFILLED":
        return {
            ...state,
            recipes: action.payload,
            isLoading:false
        };
    case FETCH_RECIPES + "_REJECTED":
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