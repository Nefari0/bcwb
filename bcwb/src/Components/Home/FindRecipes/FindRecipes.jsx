import '../Home.scss'
import { useState,useEffect } from 'react'
import { ThumbnailImage,ImageTag } from '../../StyledComponents.styles'
import data from '../../../data'

const style = {
    main:{
        margin:'auto',
    },
    img:{
        height:'200px',
        width:'200px',
        borderRadius:'50%'
    }
}

const FindRecipes = (props) => {

    const [ items,setItems ] = useState([])

    useEffect(() => {
        getDB()
    },[])

    const getDB = () => {
        setItems([...data])
    }



    const mappedItems = items.slice(0,4).map(el => {

        return <ThumbnailImage key={el.id} ><img src={el.img} /><ImageTag>Image</ImageTag></ThumbnailImage>
    })    

    return(
        <section style={{height:'',backgroundColor:'blue'}} >
            {mappedItems}
        </section>
    )
}

export default FindRecipes