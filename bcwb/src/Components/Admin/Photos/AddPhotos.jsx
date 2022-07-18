// ***************** Using AddPhotos.jsx  ****************** //
// The updateDB function from props is used to update any datebase an uploaded file might be associated with
// An example would be adding the new image url to a database element
// example:
// axios.call(updateEndPoint,{items + url (from AddPhotos)})()
// ********************************************************* //

import React, { useState } from 'react'
import './Photos.css'
import Resizer from 'react-image-file-resizer'
import axios from 'axios'
import { app } from '../../../base'
import { PortraitImage } from '../../StyledComponents.styles'
import { getStorage,ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage'
import Button from '../../Form/Button'
const storage = getStorage(app)
 
const Photos = (props) => {

    const { title,album,updateDB } = props

    const path = `bcwb/images` // Location of images on cloud
    const [ preview,setPreview ] = useState(null)
    const [ file,setFile ] = useState([])
    const [ photos,setPhotos ] = useState([])

    const [ state,setState ] = useState({
        title:'',
        album:'',
        file:[],
        photos:[],
        preview:null,

        
    })

    const resize = async (e) => {
        var fileInput = false;

        if (e.target.files[0]) {
            fileInput = true
        }

        if (fileInput) {
            try {
                Resizer.imageFileResizer(
                    e.target.files[0],
                    400,
                    267,
                    "JPEG",
                    50,
                    0,
                    (uri) => {
                        console.log(uri,'uri')
                        const objUrl = URL.createObjectURL(uri)
                        setPreview(objUrl)
                        setFile(uri)
                    },
                    "file",
                    298,
                    191
                );
            } catch (err) {
                console.log(err)
            }
        }
    }

    const addPhoto = async (url) => {

        // get ref
        const storageRef = await ref(storage, `${path}/${url.name}`)

        // add to firebase
        await uploadBytesResumable(storageRef,url)

        // get download url
        const dlUrl = await getDownloadURL(storageRef)

        // add to DB
        await addToDb(dlUrl)

        // update cover photo if applicable
        if(updateDB != null){await updateDB(dlUrl)}

    }

    // --- This function will be phased out - api calls will come from parent component
    const addToDb = async (url) => {
        const title = 'title' // for testing
        const album = 'album' // for testing
        await axios.post('/api/photos/new',{url,title,album}).then(res => {
            console.log('added to db')
        })
    }

    const hiddenFileInput = React.useRef(null);
  
    const handleClick = event => {
      hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
    };

    return(
        <>
            {preview === null ?

            <Button>
            <input type="file"
            ref={hiddenFileInput}
            style={{
                opacity:'0',
                position:'absolute',
                height:'50px',
                width:'320px',
            }}
            onChange={e => resize(e)}
            />
            add photo
            </Button>
            :
            <PortraitImage>
                <img src={preview} />
                <Button onClick={() => {addPhoto(file)}} >Add</Button>
                
            </PortraitImage>}
        </>
    )
}

export default Photos