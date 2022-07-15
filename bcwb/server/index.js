require('dotenv').config();
const express = require('express')
const session = require('express-session')
const massive = require('massive');
const path = require('path')
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
app.post('/api/photos/new',photosController.addPhoto)

// --- Recipes --- //
app.get('/api/recipes/get/all', recipeController.getAllRecipes)
app.get('/api/recipes/get/recipe/:recipe_id', recipeController.getRecipeById)
app.post('/api/recipes/create', recipeController.createRecipe)
app.put('/api/recipes/edit', recipeController.updateRecipe)
app.delete('/api/recipes/delete/:recipe_id', recipeController.deleteRecipe)
// --- Recipe instructions --- //
app.get('/api/instructions/:recipe_id', recipeController.getInstructionsByRecipeId)

// --- Recipe ingredients --- //
app.get('/api/ingredients/:recipe_id', recipeController.getIngredientByRecipeId)
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


