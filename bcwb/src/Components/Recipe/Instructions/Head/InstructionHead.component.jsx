import axios from "axios"

import { connect } from "react-redux"
import { setSpinner } from "../../../../ducks/recipeReducer"
import { getCategories,getCategoryNames } from "../../../../ducks/recipeReducer"
import { repositionPhoto } from "../../../Admin/Photos/repositionPhoto"

import { RECIPES,PHOTOS } from "../../../../endpoints"

import { ShortRow,LongRow,MainImage } from '../../../StyledComponents.styles'
import { DescriptionText } from "../../../StyledComponents.styles"
import { useState,useEffect } from "react"
import { deleteFromFB } from '../../../Admin/Photos/deleteFromFB'
import { TextEditor } from "../../../Form/TextEditor"
import { DetailGrid } from "./DetailGrid"
import { PositionPhoto } from "../../../Admin/Photos/PositionPhoto"
import { ErrorMessage } from "../../../dialogues/errorMessage.component"
import AddPhoto from "../../../Admin/Photos/AddPhotos"
import Button from "../../../Form/Button"
import FormInput from "../../../Form/FormInput"
import Pinterest from "../../../Pinterest/Pinterest"
import { BaseButton,InvertedButton } from "../../../Form/Button.styles"
import Confirmation from "../../../dialogues/confirmation.component"
import Cats from "../../../Admin/CreateRecipe/cats.component"
import NewCatTextField from "./NewCatTextField.component"
// import ViewCategoriesComponent from "../../../Admin/Categories/ViewCategories.component"

const InstructionHead = (props) => {
    const {
        cover_image_url,
        title,
        description,
        pinterest_url,
        category,
        published,
        recipe_id,
        servings,
        hours,
        author,
        minutes
    } = props.items[0]
    
    const { isAdmin } = props

    const [error,setError] = useState(null)
    const confirmDeletePhoto = "Do you want to permantently delete this photo?"

    const [confirmDelete,setConfirmDelete] = useState(null)
    const [openCategories,setOpenCategories] = useState(false)
    const [createCat,setCreateCat] = useState(false)

    const [ formFields,setFormFields ] = useState({
        title:title,
        description:description,
        published:published,
        recipe_id:recipe_id,
        category:category,
        pinterest_url:pinterest_url,
        cover_image_url:cover_image_url,
        servings:servings,
        hours,
        author:author,
        minutes:minutes,
    })

    const [ photoPositions,setPhotoPositions ] = useState({})

    useEffect(() => {
        getPosititions(cover_image_url)
        props.getCategoryNames()
    },[])
    
    // --- Get styling/position parameters of photo by url --- //
    const getPosititions = async (url) => {
        if (url != null) {await axios.post(PHOTOS.GET_PHOTOS_WITH_URL,{url}).then(res => {
            const { x,y,z,photo_id,url,title,album } = res.data[0]
            setPhotoPositions({
                x:x,
                y:y,
                z:z,
                title:title,
                album:album,
                photo_id:photo_id,
                url:url
            })
        }).catch(err => console.log(err,'styling not found not found'))}
    }

    // --- Adjust styling/position of photo - Utilized in props in PositionPhoto.jsx --- //
    const positionHandler = (e,val,direction) => {
        repositionPhoto(e,val,direction,photoPositions,setPhotoPositions)
    }

    // --- Open / display new category text feild --- //
    const newCategory = () => {setCreateCat(!createCat)}

    // -- Handles text input -- //
    const handleChange = (e) => {
        e.preventDefault()
        const { name,value } = e.target
        setFormFields({ ...formFields, [name]:value})
    }

    const handleClick = (name,val) => {
        setFormFields({ ...formFields, [name]:val})
    }

    // -- Updates the cover_photo_url according to the AddPhotos.jsx update function requirements -- //
    const updateCoverImage = async (cover_image_url) => {

        const { title,description,pinterest_url,category,published,recipe_id,servings,hours,author } = formFields

        await putItem(RECIPES.EDIT_RECIPE,{title,description,pinterest_url,category,published,recipe_id,servings,hours,cover_image_url,author})

        return
    }

    // -- General use PUT request function -- //
    const putItem = async (url,items) => {
        await axios.put(url,items).then(res =>{
            props.getItems()
        }).catch(err => {
            setError(err.response.data)
        })
        return
    }
    // -- General use POST request function -- //
    const postItem = async (url,items) => {
        await axios.post(url,items).then(() => {
            props.getItems()
        })
    }

    // -- Copy page URL when "share" button is clicked -- //
    const copy = () => {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Link copied to clipboard')
    }

    // --- Delete photo from Firebase - then PG database --- //
    const handleDeletePhoto = async () => {
        props.setSpinner(true)
        await deleteFromFB(cover_image_url,null)
        await updateCoverImage(null)
        props.setSpinner(false)
    }

    return(
        <>
            {confirmDelete ?
            <Confirmation 
                functionToExecute={handleDeletePhoto}
                url={cover_image_url}
                closeMessage={setConfirmDelete}
                message={confirmDelete}
            />
            : null}

            <MainImage>
                <img
                src={cover_image_url}
                
                style={{
                    position:'absolute',
                    left:`${photoPositions.x}px`,
                    top:`${photoPositions.y}px`,
                    width:`${photoPositions.z}px`
                }}
                />
            </MainImage>

            {/* -- ADMINS CAN ADD / DELETE PHOTOS -- */}
            {isAdmin ?
            <ShortRow>

                {cover_image_url === null ?

                <AddPhoto
                label={'add photo'}
                title={`recipe${recipe_id}/${recipe_id}`}
                album={title}
                updateDB={updateCoverImage}
                />

                :

                <>
                    <button onClick={() => setConfirmDelete(confirmDeletePhoto)} >
                        delete photo
                    </button>
              
                    <button onClick={(e) => putItem(PHOTOS.EDIT_PHOTO,photoPositions)} >Submit Photo Updates</button>
                    <PositionPhoto move={positionHandler} style={{position:'relative'}} />
                </>
                }

            </ShortRow> : null}

            {/* -- DISPLAY OR EDIT TITLE -- */}
            { !isAdmin ?
            <>
                <h3 style={{width:'65%'}}>{title}</h3>
                <h5 style={{width:'65%',marginBottom:'40px'}} >{formFields.author}</h5>
            </>
            :
            <>
            <form>

                <button onClick={(e) => {
                        e.preventDefault()
                        handleClick('published',!formFields.published)
                    }
                }>click to {formFields.published ? 'un-publish' : 'publish'}</button>

                {error === null ? null : <ErrorMessage error={error} setError={setError} /> }

                <FormInput
                    type="text"
                    name="title"
                    text="text"
                    label="Title"
                    value={formFields.title}
                    onChange={handleChange}
                />

                <FormInput
                    type="text"
                    name="author"
                    text="text"
                    label="Author"
                    value={formFields.author}
                    onChange={handleChange}
                />

                {openCategories ?
                <Cats
                    categories={props.recipes.categoryNames}
                    handleClick={handleClick}
                    closeMenu={setOpenCategories}
                    changeView={newCategory}
                />
                :
                    (!createCat ?
                    <InvertedButton onClick={() => setOpenCategories(!openCategories)} >
                        {formFields.category === "" ? "select category" : formFields.category}
                    </InvertedButton>
                    :
                    <NewCatTextField
                        postItem={postItem}
                        formFields={formFields}
                        handleChange={handleChange}
                        cancel={newCategory}
                    />)
                }

                

                <>
                    <FormInput
                        type="number"
                        name="hours"
                        label="Bake time hours"
                        value={formFields.hours}
                        onChange={handleChange}
                    />

                    <FormInput
                        type="number"
                        name="minutes"
                        label="Bake time minutes"
                        value={formFields.minutes}
                        onChange={handleChange}
                    />
                </>

                <FormInput
                    type="number"
                    name="servings"
                    label="Servings"
                    value={formFields.servings}
                    onChange={handleChange}
                />

            </form>
            </>
            }

            {!isAdmin ? 
            <>

                <DetailGrid formFields={formFields} setFormFields={setFormFields} handleChange={handleChange} isAdmin={isAdmin} />
                <DescriptionText style={{marginTop:'20px',marginBotton:'20px'}}>{formFields.description}</DescriptionText>

            </>
            :
            <>
            
                <TextEditor
                textVal={formFields.description}
                handler={handleChange} 
                label={"Description"}
                />

                <Button onClick={(e) => putItem(RECIPES.EDIT_RECIPE,formFields)}>
                    submit updates
                </Button>
            </>
            
            }
            
            <LongRow >
                <BaseButton onClick={copy} >share</BaseButton>
                <Pinterest/>
                <BaseButton>save</BaseButton>
            </LongRow>
        </>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {setSpinner,getCategories,getCategoryNames})(InstructionHead)