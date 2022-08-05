import { ThumbnailImage,ImageTag } from "../../StyledComponents.styles"

const CatItem = (props) => {

    const { category,photo_url,selectFunction } = props

    return(
        <ThumbnailImage onClick={(e) => selectFunction(e,props)} >
            <img src={photo_url} />
            <ImageTag>{category}</ImageTag>
        </ThumbnailImage>
    )
}

export default CatItem