require('dotenv').config();
const express = require('express')
const session = require('express-session')
const massive = require('massive');
const path = require('path');
const { deletePhoto } = require('./controller/photosController');
const photosController = require('./controller/photosController');
const recipeController = require('./controller/recipeController');

const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

app.use(
    session({
            resave: false,
            saveUninitialized: true,
            secret: SESSION_SECRET,
            cookie: { maxAge: 1000 * 60 * 60 * 24 },
        }),
    )

// --- Endpoints --- //
// --- Photos --- //
app.get('/api/photos/all',photosController.getAll)
app.post('/api/photos/get/url/',photosController.getWithUrl)
app.post('/api/photos/new',photosController.addPhoto)
// app.delete('/api/photos/delete/:photo_id',photosController.deletePhoto)
app.post('/api/photos/delete/url',photosController.deleteWithUrl)
app.put('/api/photos/update',photosController.updatePhoto)

// --- Recipes --- //
app.get('/api/recipes/get/all', recipeController.getAllRecipes)
app.get('/api/recipes/get/recipe/:recipe_id', recipeController.getRecipeById)
app.get('/api/recipes/get/published',recipeController.getPublishedRecipes)
app.post('/api/recipes/create', recipeController.createRecipe)
app.put('/api/recipes/edit', recipeController.updateRecipe)
app.post('/api/recipes/delete', recipeController.deleteRecipe)
// --- Recipe instructions --- //
app.get('/api/instructions/:recipe_id', recipeController.getInstructionsByRecipeId)
app.post('/api/instructions/add',recipeController.postInstructionsByRecipeId)
app.put('/api/instructions/put', recipeController.editInstructionsByInstructionId)
app.delete('/api/instructions/delete/:instruction_id',recipeController.deleteInstructionsByRecipeId)
// --- Recipe ingredients --- //
app.get('/api/ingredients/:recipe_id', recipeController.getIngredientByRecipeId)
app.post('/api/ingredient/new', recipeController.addNewIngredtient)
app.put('/api/ingredient/put',recipeController.editIngredient)
app.delete('/api/ingredient/delete/:ingredient_id', recipeController.deleteIngredient)
// --- Notes --- //
app.get('/api/notes/get/:recipe_id',recipeController.getRecipeNotes)
app.delete('/api/notes/delete/one/:note_id',recipeController.deleteNote)
app.delete('/api/notes/delete/all/:recipe_id',recipeController.deleteRecipeNotes)
app.put('/api/notes/edit',recipeController.editNote)
app.post('/api/notes/create',recipeController.createNote)
// --- Category Images --- //
app.get('/api/category/images/get/all/',photosController.getCategoryPhotos)
// --------------------------------------------------- //

// --- Server --- //
app.use( express.static( __dirname + '/../build'));
app.get('*', (req,res) => {
res.send(path.join(__dirname, '../build/index.html'))
})

    massive({
        connectionString: CONNECTION_STRING,
        ssl: {
            rejectUnauthorized: false,
        }
    }).then((dbInstance) => {
        app.set('db',dbInstance);
        console.log('db connected');
        app.listen(SERVER_PORT, () => console.log(`server ready on ${SERVER_PORT}`))
    });


