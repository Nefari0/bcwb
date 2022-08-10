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
import { PortraitImage, MainImage, ThumbnailImage } from '../../StyledComponents.styles'
import { getStorage,ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage'
import { PositionPhoto } from './PositionPhoto'
import { AddPhotoContainer,LargeThumbnail } from './Photos.styles'
import { BaseButton } from '../../Form/Button.styles'
import { connect } from 'react-redux'
import { setSpinner } from '../../../ducks/recipeReducer'
const storage = getStorage(app)
 
const Photos = (props) => {

    const { title,album,updateDB,label } = props

    const path = `bcwb/images` // Location of images on cloud
    const [ preview,setPreview ] = useState(null)
    const [ file,setFile ] = useState(null)
    const [ thumbnail,setThumbnail ] = useState(false)

    const [ position,setPosition ] = useState({
        x:0,
        y:0,
        z:300
    })

    const move = (e,value,direction) => {
        e.preventDefault()
        const { x,y,z } = position
        switch (direction) {
            case 'x':
                setPosition({
                    x:x+value,
                    y:y,
                    z:z
                })
                break;
            case 'y':
                setPosition({
                    x:x,
                    y:y+value,
                    z:z
                })
                break;
            
            case 'z':
                setPosition({
                    x:x,
                    y:y,
                    z:value+z
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

    const addPhoto = async (url,e) => {
        props.setSpinner(true)
        // get ref
        const storageRef = await ref(storage, `${path}/${title}`)

        // add to firebase
        await uploadBytesResumable(storageRef,url)

        // get download url
        const dlUrl = await getDownloadURL(storageRef)

        // add to DB
        await addToDb(dlUrl)

        // update cover photo if applicable
        if(updateDB != null){await updateDB(dlUrl,e)}
        props.setSpinner(false)
        await setPreview(null)
    }

    // --- This function will be phased out - api calls will come from parent component
    const addToDb = async (url) => {
        const { x,y,z } = position

        await axios.post('/api/photos/new',{url,title,album,x,y,z}).then(res => {
            console.log('added to db')
        })
    }

    const hiddenFileInput = React.useRef(null);
  

    return(
        <div>
            {preview === null ?

            <BaseButton>
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
            </BaseButton>
            :
            <AddPhotoContainer>

                <BaseButton onClick={() => setThumbnail(!thumbnail)}>Toggle{thumbnail ? 'Thumbnail' : 'Portrait'}</BaseButton>

                {thumbnail ? <MainImage style={{margin:'40px'}}>
                    <img
                        src={preview}
                        style={{
                            position:'absolute',
                            left:`${position.x}px`,
                            top:`${position.y}px`,
                            width:`${position.z}px`,
                            zIndex:'1'
                    }}/>
                </MainImage>
                :
                <LargeThumbnail>
                    <img
                        src={preview}
                        style={{
                            position:'absolute',
                            left:`${position.x}px`,
                            top:`${position.y}px`,
                            width:`${position.z}px`,
                    }}/>
                </LargeThumbnail>}
                
                <PositionPhoto move={move} style={{position:'absolute',bottom:'120px',right:'16%'}} />
                <div style={{position:'absolute',width:'100%',top:'490px'}} >
                    <BaseButton onClick={(e) => {addPhoto(file,e)}} >Add</BaseButton>
                    <BaseButton  onClick={clearPhoto} >cancel</BaseButton>
                </div>
            </AddPhotoContainer>
            }
        </div>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {setSpinner})(Photos)

// export default Photos