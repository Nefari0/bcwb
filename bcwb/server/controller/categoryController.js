module.exports = {
    getCategoriesAndPhotos: async (req,res) => {
        const db = req.app.get('db')
        const categories = await db.recipe.categories.get_categories_and_coordinates()
        return res.status(200).send(categories)
    },

    getCategoryNames: async (req,res) => {
        const db = req.app.get('db')
        const categories = await db.recipe.categories.get_categories()
        return res.status(200).send(categories)
    },

    addCategory: async (req,res) => {
        const db = req.app.get('db')
        const {category,photo_url} = req.body

        // -- Ensure category text field contains valid information -- //
        if (category.split('').length < 1) {
            return res.status(400).send('Please fill in the required text field')
        }

        // -- Check for existing name in categories
        const existingCategory = await db.recipe.categories.get_category_by_name([category])
        if (existingCategory[0]) {
            return res.status(400).send(`${category} already exists`)
        }

        const newCategory = await db.recipe.categories.add_category([category,photo_url])
        return res.status(200).send(newCategory)
    },

    editCategory: async (req,res) => {
        const db = req.app.get('db')
        const { photo_url,category,category_id } = req.body

        // -- Ensure category text field contains valid information -- //
        if (category.split('').length < 1) {
            return res.status(400).send('Please fill in the required text field')
        }

        const newCategory = await db.recipe.categories.edit_category([category,photo_url,category_id])
        return res.status(200).send(newCategory)
    },

    deleteCategories: async (req,res) => {
        const db = req.app.get('db')
        const { category_id } = req.params
        const category = await db.recipe.categories.delete_category([category_id])
        return res.status(200).send(category)
    },
}