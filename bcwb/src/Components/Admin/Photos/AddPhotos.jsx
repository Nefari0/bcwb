// ***************** Using AddPhotos.jsx  ****************** //
// The updateDB function from props is used to update any datebase an uploaded file might be associated with
// An example would be adding the new image url to a database element
// example:
// axios.call(updateEndPoint,{items + url (from AddPhotos)})()

// Any parameters with no data must be declared as null
// ********************************************************* //

import React, { useState } from 'react'
import Resizer from 'react-image-file-resizer'
import axios from 'axios'
import { app } from '../../../base'
import { PortraitImage, MainImage } from '../../StyledComponents.styles'
import { getStorage,ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage'
import Button from '../../Form/Button'
import { PositionPhoto } from './PositionPhoto'
import { AddPhotoContainer } from './Photos.styles'
const storage = getStorage(app)
 
const Photos = (props) => {

    const { title,album,updateDB,label } = props

    const path = `bcwb/images` // Location of images on cloud
    const [ preview,setPreview ] = useState(null)
    const [ file,setFile ] = useState(null)

    const [ position,setPosition ] = useState({
        left:0,
        top:0,
        width:300
    })

    const move = (e,value,direction) => {
        e.preventDefault()
        const { left,top,width } = position
        switch (direction) {
            case 'left':
                console.log('hit left',value,position)
                // return 
                setPosition({
                    left:left+value,
                    top:top,
                    width:width
                })
                break;
            case 'top':
                console.log('hit top',value,position)
                setPosition({
                    left:left,
                    top:top+value,
                    width:width
                })
                break;
            
            case 'zoom':
                console.log('hit zoom',value,position)
                setPosition({
                    left:left,
                    top:top,
                    width:value+width
                })
        }
        return
    }

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

    const clearPhoto = () => {
        setPreview(null)
        setFile(null)
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
        await setPreview(null)
    }

    // --- This function will be phased out - api calls will come from parent component
    const addToDb = async (url) => {
        const { top,left,width } = position
        const style_left = left
        const style_top = top
        const style_width = width

        await axios.post('/api/photos/new',{url,title,album,style_left,style_top,style_width}).then(res => {
            console.log('added to db')
        })
    }

    const hiddenFileInput = React.useRef(null);
  

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
            {label}
            </Button>
            :
            <AddPhotoContainer>
                <MainImage>
                    <img src={preview} style={{position:'absolute',left:`${position.left}px`,top:`${position.top}px`,width:`${position.width}px`}} />
                </MainImage>
                <Button onClick={() => {addPhoto(file)}} style={{position:'absolute',top:'90px'}} >Add</Button>
                <Button style={{position:'absolute',top:'160px',left:'0px'}} onClick={clearPhoto} >cancel</Button>
                <PositionPhoto move={move}/>
            </AddPhotoContainer>
            }
        </>
    )
}

export default Photos