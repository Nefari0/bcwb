import '../Home.scss'
import { useState,useEffect } from 'react'
import Content from '../Content/Content'
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



    const mappedItems = items.map(el => {

        return <Content key={el.id} img={el.img} text={null} style={style} />
    })    

    return(
        <section style={{hieght:'500px'}} >
            {mappedItems}
        </section>
    )
}

export default FindRecipes