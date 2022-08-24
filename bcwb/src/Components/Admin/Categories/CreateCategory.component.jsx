import axios from "axios"
import { PHOTOS,CATEGORIES } from "../../../endpoints"
import { deleteFromFB } from "../Photos/deleteFromFB"
import { CreateCat } from "./Categories.styles"
import { BaseButton,InvertedButton } from "../../Form/Button.styles"
import { ThumbnailImage } from "../../Styles/Images/images.styles"
import FormInput from "../../Form/FormInput"
import AddPhotos from '../Photos/AddPhotos'
import { connect } from 'react-redux'
import { setSpinner,getCategories } from "../../../ducks/recipeReducer"
import { useState,useEffect } from "react"
import { PhotoManager } from "./photos.component" // under construction


import { repositionPhoto } from "../Photos/repositionPhoto"
import { PositionPhoto } from "../Photos/PositionPhoto"


// --- This is default object for items in ThumbnailImage - Will be removing this requirement --- //
// const thumbnailImageObject = {
//     category_id:null,
//     selectedCategory:null,
//     setSelectedCategory:null
// }

// -- End points -- //
const { ADD_CATEGORY,EDIT_CATEGORY,DELETE_CATEGORY } = CATEGORIES
const { GET_PHOTOS_WITH_URL } = PHOTOS

const CreateCategory = (props) => {

    const { 
        handleChange,
        formFields,
        setFormFields,
        selectCat,
        setError,
        udpateList
        } = props

    const { category,category_id,photo_url } = formFields
    // const [adjustPhoto,setAdjustPhoto] = useState(false)
    // const  [photo,setPhoto] = useState({})
    // const { x,y,z } = photo
    
    // useEffect(() => {findPhotos()},[])

    const putItem = async (e,url,object) => {
        e.preventDefault()
        props.setSpinner(true)

        await axios.put(url,object).then(res => {
            const { category,category_id,photo_url } = res.data[0]
            props.getCategories()
            setFormFields({
                category:category,
                category_id:category_id,
                photo_url:photo_url
            })
            
        }).catch(err => {
            props.setSpinner(false)
            setError(err.response.data)
        })
    }

    const postItem = async (e) => {
        e.preventDefault()

        props.setSpinner(true)
        await axios.post(ADD_CATEGORY,formFields).then(res => {
            const { category,category_id,photo_url } = res.data[0]
            props.getCategories()
            setFormFields({
                category:category,
                category_id:category_id,
                photo_url:photo_url
            })
        }).catch(err => {
            setError(err.response.data)
            props.setSpinner(false)
        })

        props.setSpinner(false)
    }

    // const findPhotos = () => {
    //     const url = photo_url
    //     try {
    //         axios.post(GET_PHOTOS_WITH_URL,{url}).then(res => {
    //             setPhoto(...res.data)
    //         })
    //     } catch(err) {console.log(err)}
    // }

    // const updateImage = async (img,e) => {
    //     e.preventDefault()

    //     props.setSpinner(true)
    //     const { category,category_id } = formFields
    //     const updatedObject = {
    //         category:category,
    //         category_id:category_id,
    //         photo_url:img
    //     }
    //     await putItem(e,EDIT_CATEGORY,updatedObject)
    //     props.setSpinner(false)
    // }

    const deleteCategory = async () => {
        props.setSpinner(true)
        try {
            await deleteFromFB(photo_url)
        } catch (err) {
            console.log('There was an error',err.message)
            props.setSpinner(false)
        }

        await axios.post('/api/photos/delete/url',photo_url)

        await axios.delete(`${DELETE_CATEGORY}/${category_id}`).then(res => {
        })

        props.setSpinner(false)
        setError('Category has been deleted')
        props.getCategories()
        udpateList()
    }

    const handleDelete = async (e) => {
        e.preventDefault()

        await deleteCategory()
        selectCat(e,null)
    }

    return(
        
        <CreateCat >

            <form>

                <FormInput
                    label={'Category'}
                    name='category'
                    type='text'
                    onChange={handleChange}
                    value={category}
                />
                
                {category_id ?
                    <BaseButton onClick={(e) => putItem(e,EDIT_CATEGORY,formFields)} >update category</BaseButton>
                :
                    <BaseButton onClick={(e) => postItem(e,formFields)} >save category</BaseButton>
                }

            </form>

 
                {category_id ? 
                    <PhotoManager
                        putItem={putItem}
                        category_id={category_id}
                        photo_url={photo_url}
                        handleDelete={handleDelete}
                        formFields={formFields}
                        setSpinner={props.setSpinner}
                    />
                : null}

            <InvertedButton onClick={(e) => selectCat(e,null)} >cancel</InvertedButton>

        </CreateCat>
        
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {setSpinner,getCategories})(CreateCategory)