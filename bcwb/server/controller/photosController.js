
module.exports = {
    getCategoryPhotos: async (req,res) => {
        const db = req.app.get('db')
        const photos = await db.photos.get_category_photos()
        return res.status(200).send(photos)
    },

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
        const { url,photo_name,album,x,y,z } = req.body
        
        const photo = await db.photos.add_photo([url,photo_name,album,x,y,z])

        return res.status(200).send(photo)
    },

    // deleteById: async (req,res) => {
    //     const db = req.app.get('db')
    //     const { photo_id } = req.params
    //     const photo = await db.photos.delete_photo([photo_id])
    //     return res.status(200).send(photo)
    // },

    deleteWithUrl: async (req,res) => {
        const db = req.app.get('db')
        const { url } = req.body

        await db.photos.delete_with_url([url])

        return res.status(200).send('Photo has been deleted')
    },

    updatePhoto: async (req,res) => {
        const db = req.app.get('db')
        const { url,album,photo_name,photo_id,x,y,z } = req.body
        const photo = await db.photos.update_photo([url,photo_name,album,x,y,z,photo_id])
        return res.status(200).send(photo)
    }
}