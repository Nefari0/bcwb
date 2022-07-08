import '../Home.css'
import data from '../../../data'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Content from '../Content/Content'
// const style = {
//     width:'120px'
// }

const style = {
    height:'50px',
    width:'50px',
    borderRadius:'50%'
}

const FindRecipes = (props) => {

    const [ items,setItems ] = useState([])
    const displayed = items.splice(0,7)

    useEffect(() => {
        getDB()
    })

    const getDB = () => {
            axios.get("https://www.breakingbadapi.com/api/characters"
    ).then(res => {
        setItems(res.data)
    })
    }



    const mappedItems = displayed.map(el => {
        // return <img key={el.car_id} src={el.img} style={style} />
        return <Content key={el.char_id} img={el.img} text={el.portrayed} style={style} />
    })    

    return(
        <section>
            {mappedItems}
        </section>
    )
}

export default FindRecipes