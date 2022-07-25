// ***************** Using deleteFromFB.js  ****************** //
// The updateDB parameter is used to update any datebase an uploaded file might be associated with
// An example would be adding the new image url to a database element
// example:
// axios.call(updateEndPoint,{items + url (from AddPhotos)})()

// Any parameters with no data must be declared as null
// ********************************************************* //

import { app } from '../../../base'
import { getStorage,ref,deleteObject } from 'firebase/storage'
import axios from 'axios'
const storage = getStorage(app)

export const deleteFromFB = async (url,updateDB) => {

    // --- Get ref --- //
    const storageRef = await ref(storage, `${url}`)

    // --- Delete from cloud --- //
    await deleteObject(storageRef).then(() => {
        console.log('file deleted from db')
    }).catch((error) => {
        console.log('there was an error',error)
    })

    // --- Remove from photo DB --- //
    await axios.post(`/api/photos/delete/url`,{url}).then(() => {

        // --- Remove from foreign DB --- //
        if (updateDB != null){updateDB(null)}
    })

    return ('deleted')

}
