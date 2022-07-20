import { InstructionHeader,MainImage,Row,Keys } from "./InstructionHead.styles"
import { useState,useEffect } from "react"
import DeletePhoto from "../../../Admin/Photos/DeletePhoto"
import AddPhoto from "../../../Admin/Photos/AddPhotos"
import { RECIPES,PHOTOS } from "../../../../endpoints"
import axios from "axios"

export const InstructionHead = (props) => {
    const { cover_image_url,title,description,pinterest_url,category,published,recipe_id } = props.items[0]
    // --- FOR TESING ONLY --- //
    const [ isAdmin,setIsAdmin ] = useState(true)
    // ----------------------- //
    const [ formFields,setFormFields ] = useState({
        title:title,
        description:description,
        published:published,
        recipe_id:recipe_id,
        category:category,
        pinterest_url:pinterest_url,
        cover_image_url:cover_image_url
    })

    const [ photoPositions,setPhotoPositions ] = useState({
        left:'0px',
        top:'0px',
        // width:'300px'
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
            pinterest_url
        } = formFields

        await putItem(RECIPES.EDIT_RECIPE,{title,description,published,recipe_id,category,pinterest_url,cover_image_url,styling})

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

            <MainImage>
                <img src={cover_image_url} style={photoPositions} />
            </MainImage>

            {isAdmin ?
            <Row style={{marginTop:'100px'}} >

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
                {/* --- adjust photo dimensions function here --- */}
                </>
                }

            </Row> : null}

            { !isAdmin ?
            <h2 style={{marginTop:'100px',color:'#fff',marginBottom:'0px'}}>{title}</h2>
            :
            <form>
                <input
                type="text"
                name="title"
                text="text"
                value={formFields.title}
                onChange={handleChange}
                />

                <button>update title</button>
            </form>
            }


            <Row></Row>
              
            <Row></Row>
            
        </InstructionHeader>
    )
}