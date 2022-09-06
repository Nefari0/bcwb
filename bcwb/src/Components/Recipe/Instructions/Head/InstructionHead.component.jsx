import axios from "axios"
import styled, { css } from 'styled-components'
import { connect } from "react-redux"
import { setSpinner } from "../../../../ducks/recipeReducer"
import { getCategories,getCategoryNames } from "../../../../ducks/recipeReducer"
import { repositionPhoto } from "../../../Admin/Photos/PhotoEditing/repositionPhoto"

import { RECIPES,PHOTOS } from "../../../../endpoints"

import { LongRow,MainImage,DescriptionText,PortraitImage } from '../../../Styles/Images/images.styles'
import { useState,useEffect } from "react"
import { deleteFromFB } from '../../../Admin/Photos/deleteFromFB'
import { TextEditor } from "../../../Form/TextEditor"
import { DetailGrid } from "./grid"
import { ErrorMessage } from "../../../Dialogues/errorMessage.component"
import { EditPhoto } from "./editphoto/edit.component"
import AddPhoto from "../../../Admin/Photos/AddPhotos"
import FormInput from "../../../Form/FormInput"
import Pinterest from "../../../Pinterest/Pinterest"
import { BaseButton,InvertedButton } from "../../../Form/Button.styles"
import Confirmation from "../../../Dialogues/confirmation.component"
import Cats from "../../../Admin/CreateRecipe/cats.component"
import NewCatTextField from "./addcategory.component"
import { device } from "../../../Styles/queries"

const mainHItems = css`
    width:65%;
    @media ${device.mobileL}{width:100%}
`
const Author = styled.h4`${mainHItems}`
const Title = styled.h3`${mainHItems}`

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
        minutes,
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
        if (url != null) {
            await axios.post(PHOTOS.GET_PHOTOS_WITH_URL,{url}).then(res => {
            const { x,y,z,photo_id,url,title,album,angle } = res.data[0]
            setPhotoPositions({
                x:x,
                y:y,
                z:z,
                angle:angle,
                title:title,
                album:album,
                photo_id:photo_id,
                url:url
            })
        }).catch(err => console.log(err,'styling not found not found'))
    }
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

        // const { title,description,pinterest_url,category,published,recipe_id,servings,hours,author,minutes } = formFields
        formFields.cover_image_url = cover_image_url
        // --- Update DB --- //
        // await putItem(RECIPES.EDIT_RECIPE,{title,description,pinterest_url,category,published,recipe_id,servings,hours,cover_image_url,author,minutes})
        await putItem(RECIPES.EDIT_RECIPE,formFields)
        //  --- Update formFields --- //
        await setFormFields({ ...formFields, [cover_image_url]:cover_image_url})

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
        <main>
            {confirmDelete && (
            <Confirmation 
                functionToExecute={handleDeletePhoto}
                url={cover_image_url}
                closeMessage={setConfirmDelete}
                message={confirmDelete}
            />)}

            
            <MainImage>
                <img
                src={cover_image_url}
                
                style={{
                    position:'absolute',
                    left:`${photoPositions.x}px`,
                    top:`${photoPositions.y-1}px`,
                    width:`${photoPositions.z * .583}px`,
                    transform: `rotate(${photoPositions.angle}deg)`,
                }}
                />
            </MainImage>


            {/* -- ADMINS CAN ADD / DELETE PHOTOS -- */}
            {isAdmin && (
            <div>

                {!cover_image_url ?

                <AddPhoto
                    styles={{position:'absolute',top:'0'}}
                    label={'add photo'}
                    photo_name={`recipe${recipe_id}/${recipe_id}`}
                    album={`recipe${recipe_id}`}
                    updateDB={updateCoverImage}
                />

                :
                
                <EditPhoto
                confirmDeletePhoto={confirmDeletePhoto}
                confirmDelete={confirmDelete}
                setConfirmDelete={setConfirmDelete}
                photoPositions={photoPositions}
                positionHandler={positionHandler}
                putItem={putItem}
                />
                }

            </div>)}

            {/* -- DISPLAY OR EDIT TITLE -- */}
            { !isAdmin ?
            <>
                <Title>{formFields.title}</Title>
                <Author>{formFields.author}</Author>
            </>
            :
            
            <form>

                <button onClick={(e) => {
                    e.preventDefault()
                    handleClick('published',!formFields.published)
                }
                }>
                    click to {formFields.published ? 'un-publish' : 'publish'}
                </button>

                {error && (<ErrorMessage error={error} setError={setError} />)}

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

                <FormInput
                    type="number"
                    name="servings"
                    label="Servings"
                    value={formFields.servings}
                    onChange={handleChange}
                />

            </form>
            
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
                    name={'description'}
                />

                <BaseButton onClick={(e) => putItem(RECIPES.EDIT_RECIPE,formFields)}>
                    submit updates
                </BaseButton>
            </>
            
            }
            
            <LongRow >
                <BaseButton onClick={copy} >share</BaseButton>
                <Pinterest/>
                <BaseButton>save</BaseButton>
            </LongRow>
        </main>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {setSpinner,getCategories,getCategoryNames})(InstructionHead)