
export const RECIPES = {
    // -- Recipe -- //
    EDIT_RECIPE:'/api/recipes/edit',
    GET_RECIPES:'/api/recipes/get/all',
    GET_PUBLISHED_RECIPES:'/api/recipes/get/published',
    DELETE_RECIPE:'/api/recipes/delete',
    // -- Instruction End Points -- //
    POST_INSTRUCTION:'/api/instructions/add',
    DELETE_INSTRUCTION:'/api/instructions/delete/',
    PUT_INSTRUCTION:'/api/instructions/put',
    // -- Ingredient End Points -- //
    POST_INGREDIENT:'/api/ingredient/new',
    PUT_INGREDIENT:'/api/ingredient/put',
    DELETE_INGREDIENT:'/api/ingredient/delete/',
    // -- Notes -- //
    GET_NOTES:'/api/notes/get/',
    DELETE_NOTE:'/api/notes/delete/one/',
    PUT_NOTE:'/api/notes/edit',
    CREATE_NOTE:'/api/notes/create',

}

export const PHOTOS = {
    GET_PHOTOS_WITH_URL:'/api/photos/get/url/',
    EDIT_PHOTO:'/api/photos/update'
}