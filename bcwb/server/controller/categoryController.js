module.exports = {
    getAllCategories: async (req,res) => {
        const db = req.app.get('db')
        const categories = await db.recipe.categories.get_categories()
        return res.status(200).send(categories)
    },

    addCategory: async (req,res) => {
        const db = req.app.get('db')
        const {category,photo_url} = req.body
        const newCategory = await db.recipe.categories.add_category([category,photo_url])
        return res.status(200).send(newCategory)
    },

    editCategory: async (req,res) => {
        const db = req.app.get('db')
        const { photo_url,category,category_id } = req.body
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