const { send } = require("process")

module.exports = {
    createRecipe: (req,res) => {
        const { title,description,category } = req.body
        const published = false
        const pinterest_url = null
        const db = req.app.get('db')
        const recipe = await db.recipe.create_recipe([title,description,pinterest_url,category,published])
        return res.status(200).send(recipe)
    },

    updateRecipe: (req,res) => {
        const { title,description,pinterest_url,category,published,recipe_id } = req.body 
        const db = req.app.get('db')
        const recipe = await db.recipe.update_recipe([title,description,pinterest_url,category,published,recipe_id])
        return res.status(200).send(recipe)
    },

    deleteRecipe: (req,res) => {
        const { recipe_id } = req.params
        const db = req.app.get('db')
        const recipe = await db.recipe.delete_recipe([recipe_id])
        return res.status(200).send(recipe)
    }
} 