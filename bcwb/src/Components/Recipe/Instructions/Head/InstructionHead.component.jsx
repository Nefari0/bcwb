import { InstructionHeader,MainImage,Row,Keys } from "./InstructionHead.styles"

export const InstructionHead = (props) => {

    const { cover_image_url,title } = props.items[0]

    return(
        <InstructionHeader>
            <MainImage>
                <img src={cover_image_url} />
            </MainImage>

            <h2 style={{marginTop:'100px',color:'#fff',marginBottom:'0px'}}>{title}</h2>

            <Row></Row>
              
            <Row></Row>
            
        </InstructionHeader>
    )
}