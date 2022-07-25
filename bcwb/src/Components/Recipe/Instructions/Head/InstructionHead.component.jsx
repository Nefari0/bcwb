import axios from "axios"
import { ShortRow,LongRow,MainImage } from '../../../StyledComponents.styles'
import { DescriptionText } from "../../../StyledComponents.styles"
import { useState,useEffect } from "react"
import { deleteFromFB } from '../../../Admin/Photos/deleteFromFB'
import { TextEditor } from "../../../Form/TextEditor"
import { DetailGrid } from "./DetailGrid"
import { PositionPhoto } from "../../../Admin/Photos/PositionPhoto"
import { RECIPES,PHOTOS } from "../../../../endpoints"
import AddPhoto from "../../../Admin/Photos/AddPhotos"
import Button from "../../../Form/Button"
import FormInput from "../../../Form/FormInput"
import Pinterest from "../../../Pinterest/Pinterest"

export const InstructionHead = (props) => {
    const { cover_image_url,title,description,pinterest_url,category,published,recipe_id,servings,prep_time,author } = props.items[0]
    const { isAdmin } = props

    const [ formFields,setFormFields ] = useState({
        title:title,
        description:description,
        published:published,
        recipe_id:recipe_id,
        category:category,
        pinterest_url:pinterest_url,
        cover_image_url:cover_image_url,
        servings:servings,
        prep_time,
        author:author
    })

    const [ photoPositions,setPhotoPositions ] = useState({})

    useEffect(() => {
        getPosititions(cover_image_url)
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

    // --- Adjust styling/position of photo - Utilized as props in PositionPhoto.jsx --- //
    const repositionPhoto = (e,value,direction) => {
        e.preventDefault()
        switch (direction) {
            case 'x':
                var newValue = photoPositions.x + value
                setPhotoPositions({...photoPositions,['x']:newValue,})
                break;

            case 'y':
                var newValue = photoPositions.y + value
                setPhotoPositions({...photoPositions,['y']:newValue})
                break;
            
            case 'z':
                var newValue = photoPositions.z + value
                setPhotoPositions({...photoPositions, ['z']:newValue})
                break;
        }
        return
    }

    // -- Handles text input -- //
    const handleChange = (e) => {
        e.preventDefault()
        const { name,value } = e.target
        setFormFields({ ...formFields, [name]:value})
    }

    // -- Updates the cover_photo_url according to the AddPhotos.jsx update function requirements -- //
    const updateCoverImage = async (cover_image_url,styling) => {

        const { title,description,pinterest_url,category,published,recipe_id,servings,prep_time,author } = formFields

        await putItem(RECIPES.EDIT_RECIPE,{title,description,pinterest_url,category,published,recipe_id,servings,prep_time,cover_image_url,styling,author})

        return
    }

    // -- General use PUT request function -- //
    const putItem = async (url,items) => {
        await axios.put(url,items).then(() =>{
            props.getItems()
        })
        return
    }

    const copy = () => {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Link copied to clipboard')
    }

    return(
        <>

            {/* -- ADMINS CAN ADD / DELETE PHOTOS -- */}
            {isAdmin ?
            <ShortRow>

                {cover_image_url === null ?

                <AddPhoto
                label={'add photo'}
                title={title}
                album={title}
                updateDB={updateCoverImage}
                />

                :

                <>
                    <button onClick={() => deleteFromFB(cover_image_url,updateCoverImage(null,null))} >
                        delete photo
                    </button>
              
                    <button onClick={(e) => putItem(PHOTOS.EDIT_PHOTO,photoPositions)} >Submit Photo Updates</button>
                    <PositionPhoto move={repositionPhoto} />
                </>
                }

            </ShortRow> : null}

            {/* -- DISPPLAY OR EDIT TITLE -- */}
            {/* <ShortRow> */}
            { !isAdmin ?
            <>
                <h3 style={{width:'65%'}}>{title}</h3>
                <h4 >{formFields.author}</h4>
            </>
            :
            <form>

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

                <FormInput
                    type="text"
                    name="category"
                    label="Category"
                    value={formFields.category}
                    onChange={handleChange}
                />
                <FormInput
                    type="number"
                    name="prep_time"
                    label="Prep time"
                    value={formFields.prep_time}
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
            {/* </ShortRow> */}

            
            {/* <ShortRow> */}
                {/* {!isAdmin ? null:
                <form>
                    <FormInput
                    type="text"
                    name="author"
                    text="text"
                    label="Author"
                    value={formFields.author}
                    onChange={handleChange}
                    />
                </form>
                } */}
            {/* </ShortRow> */}


            {!isAdmin ? 
            <>
                <DetailGrid formFields={formFields} setFormFields={setFormFields} handleChange={handleChange} isAdmin={isAdmin} />
                <DescriptionText>{formFields.description}</DescriptionText>
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
                <Button onClick={copy} >share</Button>
                <Pinterest />
                <Button>save recipe</Button>
            </LongRow>

            <MainImage>
                <img
                src={cover_image_url}

                // style={photoPositions}
                
                style={{
                    position:'absolute',
                    left:`${photoPositions.x}px`,
                    top:`${photoPositions.y}px`,
                    width:`${photoPositions.z}px`
                }}
                />
            </MainImage>

            
        </>
    )
}