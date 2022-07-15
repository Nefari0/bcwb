
module.exports = {
    getAll: async (req,res) => {
        const db = req.app.get('db')
        const photos = await db.photos.get_photos()
        return res.status(200).send(photos)
    },

    addPhoto: async (req,res) => {
        const db = req.app.get('db')
        const { url,title,album } = req.body
        const photo = await db.photos.add_photo([url,title,album])
        return res.status(200).send(photo)
    },

    deletePhoto: async (req,res) => {
        const db = req.app.get('db')
        const { photo_id } = req.params
        const photo = await db.photos.delete_photo([photo_id])
        return res.status(200).send(photo)
    },

    updatePhoto: async (req,res) => {
        const db = req.app.get('db')
        const { url,album,title,photo_id } = req.body
        const photo = await db.photos.update_photo([url,title,album,photo_id])
        return res.status(200).send(photo)
    }
}