import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import breakingBadReducer from './breakingBadReducer'
import recipeReducer from './recipeReducer'
import navReducer from './navReducer'

const rootReducer = combineReducers({
    characters: breakingBadReducer,
    recipes:recipeReducer,
    currentCategory:navReducer
});

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxPromiseMiddleware))
);