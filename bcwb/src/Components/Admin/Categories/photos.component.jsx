import AddPhotos from "../Photos/AddPhotos"
import axios from "axios"
import { CATEGORIES,PHOTOS } from "../../../endpoints"
import { ThumbnailImage,ThumbnailCoordinates } from "../../Styles/Images/images.styles"
import { repositionPhoto } from "../Photos/repositionPhoto"
import { PositionPhoto } from "../Photos/PositionPhoto"
import { useState,useEffect } from "react"
import { InvertedButton } from "../../Form/Button.styles"

const { GET_PHOTOS_WITH_URL} = PHOTOS
const { EDIT_CATEGORY } = CATEGORIES

// --- This is default object for items in ThumbnailImage - Will be removing this requirement --- //
const thumbnailImageObject = {
    category_id:null,
    selectedCategory:null,
    setSelectedCategory:null
}

const addPhotoStyle = {position:'absolute',right:'110px'}
const positionPhotoStyles = {right:'50px',top:'50px'}

export const PhotoManager = (props) => {

    const { putItem,category_id,photo_url,handleDelete,formFields } = props

    const [adjustPhoto,setAdjustPhoto] = useState(false)
    const  [photo,setPhoto] = useState({})
    const photoCoordinates = {
        position:'absolute',
        left:`${photo.x}px`,
        width:`${photo.z}px`,
        top:`${photo.y}px`,
    }

    const thumbnailStyles = (adjustPhoto ? {margin:'100px'} : {margin:'auto'})
    useEffect(() => {if (photo_url != null) {findPhotos()}},[])

    const positionHandler = (e,val,direction) => {
        e.preventDefault()
        repositionPhoto(e,val,direction,photo,setPhoto)
    }

    const updateCategoryImage = async (img,e) => {
        e.preventDefault()
        props.setSpinner(true)
        const { category,category_id } = formFields
        const updatedObject = {
            category:category,
            category_id:category_id,
            photo_url:img
        }
        await putItem(e,EDIT_CATEGORY,updatedObject)
        props.setSpinner(false)
    }

    const findPhotos = () => {
        const url = photo_url
        try {
            axios.post(GET_PHOTOS_WITH_URL,{url}).then(res => {

                setPhoto(...res.data)
            })
        } catch(err) {console.log('error message',err.response.data)}
    }


    return (
        <section>
            {!photo_url ? // -- Show AddPhotos if null - ELSE show image AND editing tools -- //
            <AddPhotos style={addPhotoStyle}
            photo_name={`category_name${category_id}/${category_id}`}
            label={"Add photo"}
            updateDB={updateCategoryImage}
            />
            :
            <>
                <ThumbnailImage
                propObject={thumbnailImageObject}
                style={thumbnailStyles}
                onClick={() => setAdjustPhoto(!adjustPhoto)}
                >
                    <img src={photo_url} style={photoCoordinates}/>
                </ThumbnailImage>

            {adjustPhoto ? 
             
                <PositionPhoto 
                move={positionHandler}
                style={positionPhotoStyles}
                />
                
            :
            null}

            </>
            }
                

            <InvertedButton onClick={handleDelete} >delete category</InvertedButton>
        </section>
    )
}