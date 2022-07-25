import { PortraitImage,ImageTag } from "../../StyledComponents.styles"

export const LatestRecipeItem = ({img,title,id}) => {

    return(<PortraitImage><img src={img} /><ImageTag>{title}</ImageTag></PortraitImage>)
}