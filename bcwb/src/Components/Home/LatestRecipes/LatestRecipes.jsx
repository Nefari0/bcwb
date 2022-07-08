import '../Home.css'
import axios from "axios";
import { useEffect,useState } from "react";
import Content from '../Content/Content';

const style = { // Styling for Content.js
    width:'100%',
    margin:'auto',

}

const LatestRecipes = () => {
    const [ items,setItems ] = useState([])
    useEffect(() => {
        getDB()
    }, [])


    const getDB = async () => {
        await axios.get('/api/photos/all').then(res => {
            setItems(res.data)
        })
    }

    const mappedItems = items.map(el => {
        return <Content key={el.id} img={el.img} text={el.title} style={style} />
    })

    return(
        <section>
            {mappedItems}
        </section>
    )
}

export default LatestRecipes