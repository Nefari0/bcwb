
module.exports = {
    getAll: async (req,res) => {
        const db = req.app.get('db')
        const photos = await db.photos.get_photos()
        return res.status(200).send(photos)
    },

    getWithUrl: async (req,res) => {
        const db = req.app.get('db')
        const { url } = req.body
        const photo = await db.photos.get_with_url([url])

        if(photo[0] === undefined) {return res.status(404).send('not found')}

        return res.status(200).send(photo)
    },

    addPhoto: async (req,res) => {
        const db = req.app.get('db')
        const { url,title,album,style_left,style_top,style_width } = req.body
        const photo = await db.photos.add_photo([url,title,album,style_top,style_left,style_width])
        return res.status(200).send(photo)
    },

    // deletePhoto: async (req,res) => {
    //     const db = req.app.get('db')
    //     const { photo_id } = req.params
    //     const photo = await db.photos.delete_photo([photo_id])
    //     return res.status(200).send(photo)
    // },

    deleteWithUrl: async (req,res) => {
        const db = req.app.get('db')
        const { url } = req.body
        const existingPhoto = await db.photos.get_with_url([url])

        if (!existingPhoto[0]) {
            return res.status(404).send('not found')
        }

        const deletedPhoto = await db.photos.delete_with_url([url])

        return res.status(200).send(deletedPhoto)
    },

    updatePhoto: async (req,res) => {
        const db = req.app.get('db')
        const { url,album,title,photo_id } = req.body
        const photo = await db.photos.update_photo([url,title,album,photo_id])
        return res.status(200).send(photo)
    }
}