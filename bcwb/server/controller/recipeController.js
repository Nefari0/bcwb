
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

    getRecipeById: async (req,res) => {
        const { recipe_id } = req.params
        const db = req.app.get('db')
        const recipe = await db.recipe.get_recipe_by_id([recipe_id])
        return res.status(200).send(recipe)
    },

    createRecipe: async (req,res) => {
        const { title,description,category,servings,prep_time,author} = req.body
        const published = false
        const pinterest_url = null
        const cover_image_url = null
        const db = req.app.get('db')

        // -- Check if title already exists -- //
        const exists = await db.recipe.get_recipe_by_title([title])

        if (exists[0]){
            return res.status(409).send('This title already exists')
        }

        const recipe = await db.recipe.create_recipe([title,description,pinterest_url,category,published,servings,prep_time,author,cover_image_url])
        return res.status(200).send(recipe)
    },

    updateRecipe: async (req,res) => {
        const { title,description,pinterest_url,category,published,servings,prep_time,author,cover_image_url,recipe_id } = req.body 
        const db = req.app.get('db')

        const recipe = await db.recipe.update_recipe([title,description,pinterest_url,category,published,cover_image_url,servings,prep_time,author,recipe_id])
        return res.status(200).send(recipe)
    },

    deleteRecipe: async (req,res) => {
        const { recipe_id,cover_image_url } = req.body[0]
        const db = req.app.get('db')
        const url = cover_image_url
        console.log('hit controller',url,recipe_id)
        // delete recipe photos
        // await db.photos.delete_with_url([url])
        // delete recipe intructions
        await db.recipe.instructions.delete_instruction_by_recipe_id([recipe_id])
        // delete recipe ingredients
        await db.recipe.ingredients.delete_ingredients_by_recipe_id([recipe_id])
        const recipe = await db.recipe.delete_recipe([recipe_id])
        return res.status(200).send(recipe)
    },
    // --- Instrucions --- //

    getInstructionsByRecipeId: async (req,res) => {
        const recipe_id = parseInt(req.params.recipe_id)
        const db = req.app.get('db')
        const instructions = await db.recipe.instructions.get_instructions_by_recipe_id([recipe_id])
        return res.status(200).send(instructions)
    },

    editInstructionsByInstructionId: async (req,res) => {
        const { content, instruction_id, step } = req.body

        // check if step value already exist
        // if exist = true: return(over write current step value?)

        const db = req.app.get('db')
        const instruction = await db.recipe.instructions.update_instruction([ content,step,instruction_id ])
        return res.status(200).send(instruction)
    },

    deleteInstructionsByRecipeId: async (req,res) => {
        const { instruction_id } = req.params
        const db = req.app.get('db')
        const instruction = await db.recipe.instructions.delete_instruction([instruction_id])
        return res.status(200).send(instruction)
    },

    postInstructionsByRecipeId: async (req,res) => {
        const db = req.app.get('db')
        const { recipe_id,step,content } = req.body

                // check if step value already exist
        // if exist = true: return(over write current step value?)

        const instruction = await db.recipe.instructions.add_instruction(recipe_id,step,content)
        return res.status(200).send(instruction)
    },

    // --- Ingredients --- //
    getIngredientByRecipeId: async (req,res) => {
        const db = req.app.get('db')
        const { recipe_id } = req.params
        const ingredients = await db.recipe.ingredients.get_ingredients_by_recipe_id([recipe_id])
        return res.status(200).send(ingredients)
    },

    addNewIngredtient: async (req,res) => {
        const db = req.app.get('db')
        const { recipe_id,content } = req.body
        const ingredient = await db.recipe.ingredients.add_ingredient([recipe_id,content])
        return res.status(200).send(ingredient)
    },

    editIngredient: async (req,res) => {
        const db = req.app.get('db')
        const { content,ingredient_id } = req.body 
        const ingredient = await db.recipe.ingredients.update_ingredient([content,ingredient_id])
        return res.status(200).send(ingredient)
    },

    deleteIngredient: async (req,res) => {
        const db = req.app.get('db')
        const { ingredient_id } = req.params
        const ingredient = await db.recipe.ingredients.delete_ingredient([ingredient_id])
        return res.status(200).send(ingredient)
    }
} 