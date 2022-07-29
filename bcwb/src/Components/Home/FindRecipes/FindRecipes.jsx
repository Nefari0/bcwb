import '../Home.scss'
import { useState,useEffect } from 'react'
import { ThumbnailImage,ImageTag } from '../../StyledComponents.styles'
import axios from 'axios'
import { PHOTOS } from '../../../endpoints'

const FindRecipes = (props) => {

    const [ items,setItems ] = useState([])

    useEffect(() => { getDB() },[])

    const getDB = () => {
        axios.get(PHOTOS.GET_CATEGORY_IMAGES).then(res => {
            setItems(res.data)
        })
    }



    const mappedItems = items.map(el => {

        return <ThumbnailImage key={el.link_id} >
                    <img src={el.photo_link} />
                    <ImageTag>{el.category}</ImageTag>
                </ThumbnailImage>
    })    

    return(
        <section  >
            {mappedItems}
        </section>
    )
}

export default FindRecipes