import { InstructionHeader,MainImage,ShortRow,LongRow } from "./InstructionHead.styles"
import { DescriptionText } from "../../../StyledComponents.styles"
import { useState,useEffect } from "react"
import DeletePhoto from "../../../Admin/Photos/DeletePhoto"
import AddPhoto from "../../../Admin/Photos/AddPhotos"
import { DetailGrid } from "./DetailGrid"
import { PositionPhoto } from "../../../Admin/Photos/PositionPhoto"
import { RECIPES,PHOTOS } from "../../../../endpoints"
import axios from "axios"
import Button from "../../../Form/Button"
import FormInput from "../../../Form/FormInput"
import { TextEditor } from "../../../Form/TextEditor"

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
            const { style_left,style_top,style_width,photo_id,url,title,album } = res.data[0]
            setPhotoPositions({
                style_left:style_left,
                style_top:style_top,
                style_width:style_width,
                title:title,
                album:album,
                photo_id:photo_id,
                url:url
            })
        }).catch(err => console.log(err,'styling not found not found'))}
    }

    // --- Adjust styling/position of photo --- //
    const repositionPhoto = (e,value,direction) => {
        e.preventDefault()
        switch (direction) {
            case 'left':
                var newValue = photoPositions.style_left + value
                setPhotoPositions({...photoPositions,['style_left']:newValue,})
                break;

            case 'top':
                var newValue = photoPositions.style_top + value
                setPhotoPositions({...photoPositions,['style_top']:newValue})
                break;
            
            case 'zoom':
                var newValue = photoPositions.style_width + value
                setPhotoPositions({...photoPositions, ['style_width']:newValue})
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

    return(
        <InstructionHeader>

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
                    <DeletePhoto
                    url={cover_image_url}
                    updateDB={updateCoverImage}
                    />
              
                        <button onClick={(e) => putItem(PHOTOS.EDIT_PHOTO,photoPositions)} >Submit Photo Updates</button>
                        <PositionPhoto move={repositionPhoto} />
      
                </>
                }

            </ShortRow> : null}

            {/* -- DISPPLAY OR EDIT TITLE -- */}
            <ShortRow>
                { !isAdmin ?
                <h3 style={{color:'',margin:'auto',fontWeight:'600'}}>{title}</h3>
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

                </form>
                }
            </ShortRow>

            
            <ShortRow>
                {!isAdmin ? <h4 style={{color:'#555',margin:'auto',fontWeight:''}}>{formFields.author}</h4>:
                <form>
                    <FormInput
                    type="text"
                    name="author"
                    text="text"
                    label="Author"
                    value={formFields.author}
                    onChange={handleChange}
                    />
                </form>}
            </ShortRow>

            <DetailGrid formFields={formFields} setFormFields={setFormFields} handleChange={handleChange} isAdmin={isAdmin} />

            {!isAdmin ? 
            <LongRow>
                <DescriptionText>{formFields.description}</DescriptionText>
            </LongRow>
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
                <Button>print</Button>
                <Button>pin</Button>
                <Button>follow</Button>
            </LongRow>

            <MainImage>
                <img
                src={cover_image_url}
                style={{
                    position:'absolute',
                    left:`${photoPositions.style_left}px`,
                    top:`${photoPositions.style_top}px`,
                    width:`${photoPositions.style_width}px`
                }}
                />
            </MainImage>

            
        </InstructionHeader>
    )
}