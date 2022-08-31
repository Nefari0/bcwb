import { ThumbnailImage,ImageTag } from "../../Styles/Images/images.styles"

const CatItem = (props) => {

    const { category,photo_url,selectFunction } = props


    // --- This is the default object for items in ThumbnailImage - Will be removing this requirement --- //
    const propObject = {
        category_id:null,
        selectedCategory:null,
        setSelectedCategory:selectFunction
    }

    return(
        <ThumbnailImage
            props={propObject}
            onClick={(e) => 
                {e.preventDefault()
                selectFunction(e,props)}
            }
        >

            <img src={photo_url}  />

            <ImageTag>{category}</ImageTag>
            
        </ThumbnailImage>
    )
}

export default CatItem