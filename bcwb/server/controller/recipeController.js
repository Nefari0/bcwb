
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
        const { cover_image_url } = recipe[0]
        const checkPhoto = await db.photos.get_with_url(cover_image_url)
        const existingPhoto = checkPhoto[0]
        if (existingPhoto === undefined) {
            await db.photos.reset_photo_url([cover_image_url])
        }
        return res.status(200).send(recipe)
    },

    getPublishedRecipes: async (req,res) => {
        const db = req.app.get('db')
        const recipes = await db.recipe.get_published_recipes()
        return res.status(200).send(recipes)
    },

    createRecipe: async (req,res) => {
        const { title,description,category,servings,hours,author,minutes} = req.body
        const published = false
        const pinterest_url = null
        const cover_image_url = null
        const db = req.app.get('db')
        const date_created = new Date

        // --- Ensure the information provided is valid --- //
        if (category.split('').length < 1) {
            return res.status(400).send('Please select a category')
        }

        // --- Check if title already exists --- //
        const exists = await db.recipe.get_recipe_by_title([title])

        if (exists[0]){
            return res.status(409).send('This title already exists')
        }

        const recipe = await db.recipe.create_recipe([title,description,pinterest_url,category,published,servings,hours,author,cover_image_url,date_created,minutes])
        return res.status(200).send(recipe)
    },

    updateRecipe: async (req,res) => {
        const { title,description,pinterest_url,category,published,servings,hours,author,cover_image_url,recipe_id,minutes } = req.body 
        const db = req.app.get('db')

        if (hours === '' || hours < 0) {
            return res.status(400).send('Number of hours must be at least 0')
        }

        if (minutes === '' || minutes < 0) {
            return res.status(400).send('Number of minutes must be at least 0')
        }

        const recipe = await db.recipe.update_recipe([title,description,pinterest_url,category,published,cover_image_url,servings,hours,author,minutes,recipe_id])
        return res.status(200).send(recipe)
    },

    deleteRecipe: async (req,res) => {
        const { recipe_id,cover_image_url } = req.body
        const db = req.app.get('db')
        // delete recipe intructions
        await db.recipe.instructions.delete_instruction_by_recipe_id([recipe_id])
        // delete recipe ingredients
        await db.recipe.ingredients.delete_ingredients_by_recipe_id([recipe_id])
        // delete recipe notes
        await db.recipe.notes.delete_recipe_notes([recipe_id])

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
        const db = req.app.get('db')
        const { content, instruction_id, recipe_id } = req.body
        var step = req.body.step
        
        // --- Is step a valid integer? --- //
        if (typeof(step) != 'number'){
            if(step.split('').length <= 0) {
                return res.status(400).send('Please choose a valid number to indicate the current step for this item')
            }
            if(parseInt(step) < 1) {
                return res.status(400).send('The step must be a number greater than 0')
            }
        }     

        // --- Check if step value already exist --- //
        const existingStep = await db.recipe.instructions.existing_step([recipe_id,step])

        if(existingStep[0]) {
            // --- If the existing step does not have the same id as the step being edited --- //
            if(existingStep[0].instruction_id != instruction_id) {                
                return res.status(409).send(`Instruction with step ${step} already exists. Please edit or delete the instruction in step ${step} instead`)
            }
        }

        // --- Is content blank? --- //
        if (content.split('').length <= 0) {
            return res.status(411).send('Please fill the required text field')
        }

        const instruction = await db.recipe.instructions.update_instruction([ content,parseInt(step),instruction_id ])
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

        // --- Is step greater than zero? --- //
        if(parseInt(step) < 1) {
            return res.status(400).send('The step must be a number greater than 0')
        }

        // --- Is step a valid integer? --- //
        if (typeof(step) != 'number'){
            if(step.split('').length <= 0) {
                return res.status(400).send('Please choose a valid number to indicate the current step for this item')
            }
        }     

        // --- Check if step value already exist --- //
        const existingStep = await db.recipe.instructions.existing_step([recipe_id,step])

        if(existingStep[0]) {
            return res.status(409).send(`Instruction with step ${step} already exists. Please edit or delete the instruction in step ${step} instead`)
        }

        // --- Is content blank? --- //
        if (content.split('').length <= 0) {
            return res.status(411).send('Please fill the required text field')
        }

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
    },

    // --- NOTES --- //
    getRecipeNotes: async (req,res) => {
        const db = req.app.get('db')
        const { recipe_id } = req.params
        const notes = await db.recipe.notes.get_notes_by_recipe_id([recipe_id])
        return res.status(200).send(notes)
    },

    createNote: async (req,res) => {
        const db = req.app.get('db')
        const { recipe_id,note_body } = req.body
        if(note_body.split('').length < 1) {
            return res.status(400).send('Please fill out the required text field')
        }
        const note = await db.recipe.notes.create_note([recipe_id,note_body])
        return res.status(200).send(note)
    },

    editNote: async (req,res) => {
        const db = req.app.get('db')
        const { note_id,note_body } = req.body
        const note = await db.recipe.notes.edit_note([note_body,note_id])
        return res.status(200).send(note)
    },

    deleteNote: async (req,res) => {
        const db = req.app.get('db')
        const { note_id } = req.params
        const note = await db.recipe.notes.delete_note([note_id])
        return res.status(200).send(note)
    },

    deleteRecipeNotes: async (req,res) => {
        const db = req.app.get('db')
        const { recipe_id } = req.params
        const notes = await db.recipe.notes.delete_recipe_notes([recipe_id])
        return res.status(200).send(notes)
    }
} 