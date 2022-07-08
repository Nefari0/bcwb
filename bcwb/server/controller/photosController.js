
module.exports = {
    getAll: async (req,res) => {
        console.log('hit controller')
        const db = req.app.get('db')
        const photos = await db.photos.get_photos()
        return res.status(200).send(photos)
    }
}