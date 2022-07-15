import { useState,useEffect } from "react";
import { PortraitImage } from "../../StyledComponents.styles";
import { Link } from 'react-router-dom'

export const RecipeListItem = (props) => {
    const { items } = props
    const { title } = props.items
    console.log(props)
    return (
        <>
            <PortraitImage><img src={items.cover_image_url} /></PortraitImage>
            <h4>{items.title}</h4>
        </>
    )
}