import axios from "axios";
import { CATEGORIES,RECIPES } from "../endpoints";

const { GET_ALL_CATEGORIES,GET_CATEGORY_NAMES } = CATEGORIES
const { GET_RECIPES } = RECIPES

const initialState = {
  recipes: {},
  categories: {},
  categoryNames:{},
  errorMessage:'',
  isLoading:false,
};

// RECIPES
const FETCH_RECIPES = "FETCH_RECIPES";

// CATEGORIES
const FETCH_CATEGORIES = "FETCH_CATEGORIES";
const FETCH_CATEGORY_NAMES = 'FETCH_CATEGORY_NAMES'

// LOAD SCREEN
const SET_SPINNER = "SET_SPINNER";

export function getRecipes() {
  return {
    type: FETCH_RECIPES,
    payload: axios.get(GET_RECIPES)

  };
};

// --- Get all categories and photo coordinates - This is for published recipes --- //
export function getCategories() {
  return {
    type: FETCH_CATEGORIES,
    payload: axios.get(GET_ALL_CATEGORIES)
  }
}

// --- Fetch All categories - This should only be used by admin --- // 
export function getCategoryNames() {
  return {
    type: FETCH_CATEGORY_NAMES,
    payload: axios.get(GET_CATEGORY_NAMES)
  }
}

// --- Setting load screen remotely --- //
export function setSpinner(val) {
  return {
    type: SET_SPINNER,
    payload:val
  }
}

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {

    //  --- Get all categories anc coordinates --- //
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

    // --- Get category names --- //
    case FETCH_CATEGORY_NAMES + '_PENDING':
      return {
        ...state,
        isLoading:true,
      };
    case FETCH_CATEGORY_NAMES + '_FULFILLED':
      return {
        ...state,
        categoryNames: action.payload.data,
        isLoading:false
      }
    case FETCH_CATEGORY_NAMES + '_REJECTED':
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