import axios from "axios"
import { deleteFromFB } from "../Photos/deleteFromFB"
import { CATEGORIES } from "../../../endpoints"
import { CreateCat } from "./Categories.styles"
import { BaseButton,InvertedButton } from "../../Form/Button.styles"
import { ThumbnailImage } from "../../StyledComponents.styles"
import FormInput from "../../Form/FormInput"
import AddPhotos from '../Photos/AddPhotos'
import { connect } from 'react-redux'
import { setSpinner } from "../../../ducks/recipeReducer"

// -- End points -- //
const { ADD_CATEGORY,EDIT_CATEGORY,DELETE_CATEGORY } = CATEGORIES

const CreateCategory = (props) => {

    const { 
        handleChange,
        formFields,
        setFormFields,
        selectCat,
        setError
        } = props
    const { category,category_id,photo_url } = formFields

    const putItem = async (e,url,object) => {
        e.preventDefault()
        props.setSpinner(true)

        await axios.put(url,object).then(res => {
            const { category,category_id,photo_url } = res.data[0]
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

    const updateImage = async (img,e) => {
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

    const deleteCategory = async () => {
        props.setSpinner(true)
        try {
            await deleteFromFB(photo_url)
        } catch (err) {
            console.log('There was an error',err.message)
            props.setSpinner(false)
        }


        await axios.post('/api/photos/delete/url',photo_url)
 


        await axios.delete(`${DELETE_CATEGORY}/${category_id}`)

        props.setSpinner(false)
        setError('Category has been deleted')
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
            
            <>
                {!photo_url ?
                    <AddPhotos style={{position:'absolute',right:'100px'}} title={`category_name${category_id}/${category_id}`} label={"Add photo"} updateDB={updateImage} />
                :
                    <ThumbnailImage style={{margin:'auto'}}><img src={photo_url} /></ThumbnailImage>
                }

                <InvertedButton onClick={handleDelete} >delete category</InvertedButton>
            </>
            
            : null}

            <InvertedButton onClick={(e) => selectCat(e,null)} >cancel</InvertedButton>

        </CreateCat>
        
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {setSpinner})(CreateCategory)