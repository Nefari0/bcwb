import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import breakingBadReducer from './breakingBadReducer'
import recipeReducer from './recipeReducer'

const rootReducer = combineReducers({
    characters: breakingBadReducer,
    recipes:recipeReducer
})

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxPromiseMiddleware))
)