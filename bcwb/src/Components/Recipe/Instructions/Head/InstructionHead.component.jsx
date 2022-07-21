import { InstructionHeader,MainImage,Row } from "./InstructionHead.styles"
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

export const InstructionHead = (props) => {
    const { cover_image_url,title,description,pinterest_url,category,published,recipe_id,servings } = props.items[0]
    const { isAdmin } = props

    const [ formFields,setFormFields ] = useState({
        title:title,
        description:description,
        published:published,
        recipe_id:recipe_id,
        category:category,
        pinterest_url:pinterest_url,
        cover_image_url:cover_image_url,
        servings:servings
    })

    const [ photoPositions,setPhotoPositions ] = useState({
        left:'0px',
        top:'0px',
    })

    useEffect(() => {
        getPosititions(cover_image_url)
    },[])
    
    // --- Get styling parameters of photo by url --- //
    const getPosititions = async (url) => {
        if (url != null) {await axios.post(PHOTOS.GET_PHOTOS_WITH_URL,{url}).then(res => {
            const { style_left,style_top,style_width } = res.data[0]
            setPhotoPositions({
                position:'absolute',
                left:`${style_left}px`,
                top:`${style_top}px`,
                width:`${style_width}px`
            })
        }).catch(err => console.log(err,'styling not found not found'))}
    }

    const handleChange = (e) => {
        e.preventDefault()
        const { name,value } = e.target
        setFormFields({ ...formFields, [name]:value})
    }

    const updateCoverImage = async (cover_image_url,styling) => {
        const {
            title,
            description,
            published,
            recipe_id,
            category,
            prep_time,
            servings,
            pinterest_url
        } = formFields

        await putItem(RECIPES.EDIT_RECIPE,{title,description,published,recipe_id,category,pinterest_url,cover_image_url,servings,prep_time,styling})

        return
    }

    const putItem = async (url,items) => {
        await axios.put(url,items).then(() =>{
            props.getItems()
        })
        return
    }

    return(
        <InstructionHeader>

            {isAdmin ?
            <Row >

                {cover_image_url === null ? <AddPhoto
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
                {/* --- adjust photo dimensions function here - not currently set up --- */}
                {isAdmin ? <PositionPhoto /> : null}
                </>
                }

            </Row> : null}

            <Row style={{}} >
            { !isAdmin ?
            <h3 style={{color:'',margin:'auto',fontWeight:'600'}}>{title}</h3>
            :
            <form onSubmit={(e) => putItem(RECIPES.EDIT_RECIPE,formFields)}>
                <FormInput
                type="text"
                name="title"
                text="text"
                label="Title"
                value={formFields.title}
                onChange={handleChange}
                />

                <Button type="">update title</Button>
            </form>
            }
            </Row>

            <Row><h4 style={{color:'#555',margin:'auto',fontWeight:''}}>Brittany deMontigny</h4></Row>

            <DetailGrid formFields={formFields} setFormFields={setFormFields} handleChange={handleChange} isAdmin={isAdmin} />

            <Row>
                <DescriptionText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </DescriptionText>
            </Row>

            <Row style={{width:'95%',backgroundColor:'',display:'flex',justifyContent:'space-between'}} >
                <Button>print</Button>
                <Button>pin</Button>
                <Button>follow</Button>
            </Row>

            <MainImage>
                <img src={cover_image_url} style={photoPositions} />
            </MainImage>

            
        </InstructionHeader>
    )
}