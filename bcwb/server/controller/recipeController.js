
module.exports = {
    getAllRecipes: async (req,res) => {
        const db = req.app.get('db')
        const recipes = await db.recipe.get_all()
        return res.status(200).send(recipes)
    },

    getRecipeByTitle: async (req,res) => {
        const { title } = req.body
        const db = req.app.get('db')
        const recipe = await db.recipe.get_recipe_by_title([title])
        return res.status(200).send(recipe)
    },

    createRecipe: async (req,res) => {
        const { title,description,category } = req.body

        
        const published = false
        const pinterest_url = null
        const db = req.app.get('db')

        // -- check if title already exists -- //
        const exists = await db.recipe.get_recipe_by_title([title])

        console.log('exists',exists[0])
        if (exists[0]){
            return res.status(409).send('This title already exists')
        }

        const recipe = await db.recipe.create_recipe([title,description,pinterest_url,category,published])
        return res.status(200).send(recipe)
    },

    updateRecipe: async (req,res) => {
        const { title,description,pinterest_url,category,published,recipe_id,cover_image_url } = req.body 
        const db = req.app.get('db')
        const recipe = await db.recipe.update_recipe([title,description,pinterest_url,category,published,cover_image_url,recipe_id])
        return res.status(200).send(recipe)
    },

    deleteRecipe: async (req,res) => {
        const { recipe_id } = req.params
        const db = req.app.get('db')
        const recipe = await db.recipe.delete_recipe([recipe_id])
        return res.status(200).send(recipe)
    }
} 