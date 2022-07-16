import { InstructionHeader,MainImage,Row,Keys } from "./InstructionHead.styles"
import { useState } from "react"
import DeletePhoto from "../../../Admin/Photos/DeletePhoto"

export const InstructionHead = (props) => {

    // --- FOR TESING ONLY --- //
    const [ isAdmin,setIsAdmin ] = useState(false)
    // ----------------------- //

    const { cover_image_url,title } = props.items[0]

    return(
        <InstructionHeader>
            <MainImage>
                <img src={cover_image_url} />
            </MainImage>
            {!isAdmin ? <DeletePhoto url={cover_image_url} /> : null}

            <h2 style={{marginTop:'100px',color:'#fff',marginBottom:'0px'}}>{title}</h2>

            <Row></Row>
              
            <Row></Row>
            
        </InstructionHeader>
    )
}