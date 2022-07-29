import '../Home.scss'
import { useState,useEffect } from 'react'
import { ThumbnailImage,ImageTag } from '../../StyledComponents.styles'
import axios from 'axios'

const FindRecipes = (props) => {

    const [ items,setItems ] = useState([])

    useEffect(() => { getDB() },[])

    const getDB = () => {
        axios.get('/api/category/images/get/all').then(res => {
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