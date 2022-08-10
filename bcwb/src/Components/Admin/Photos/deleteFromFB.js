// ***************** Using deleteFromFB.js  ****************** //
// -- Pass url of file to be deleted into function. This will automatically
// -- delete from Firebase and Photos PG database
// ********************************************************* //

import { app } from '../../../base'
import { getStorage,ref,deleteObject } from 'firebase/storage'
import axios from 'axios'
const storage = getStorage(app)

export const deleteFromFB = async (url) => {

    // --- Get ref --- //
    const storageRef = await ref(storage, `${url}`)

    // --- Delete from PG database -- //
    const deleteFromDB = async (url) => {
        await axios.post(`/api/photos/delete/url`,{url})
    }


    // --- Delete from cloud - then delete from db using "deleteFromDB()" --- //
    await deleteObject(storageRef).then(() => {
        deleteFromDB(url)
        return ('deleted from firebase')
    }).catch(() => {
        deleteFromDB(url)
    })

    return ('deleted')

}
