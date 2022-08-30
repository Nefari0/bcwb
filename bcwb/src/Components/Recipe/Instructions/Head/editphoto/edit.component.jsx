import { EditContainer } from "./edit.styles"
import { BaseButton } from "../../../../Form/Button.styles"
import { PositionPhoto } from "../../../../Admin/Photos/PhotoEditing/PositionPhoto"
import { PHOTOS } from "../../../../../endpoints"

const { EDIT_PHOTO } = PHOTOS

const keypadStyle = {
    position:'relative',
    marginBottom:'20px',
    marginTop:'20px'
}

export const EditPhoto = ({confirmDelete,setConfirmDelete,confirmDeletePhoto,photoPositions,positionHandler,putItem}) => {

    return (
        <EditContainer>
            <PositionPhoto move={positionHandler} styles={keypadStyle} />
            <BaseButton onClick={(e) => putItem(EDIT_PHOTO,photoPositions)}>Submit Photo Updates</BaseButton>
            <BaseButton onClick={() => setConfirmDelete(confirmDeletePhoto)} >delete photo</BaseButton>
        </EditContainer>
    )
}