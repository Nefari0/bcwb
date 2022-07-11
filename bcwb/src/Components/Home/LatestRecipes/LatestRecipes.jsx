import '../Home.css'
import axios from "axios";
import { useEffect,useState } from "react";
import Content from '../Content/Content';

const style = { // Styling for Content.js
    width:'50px',
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
        return <Content key={el.photo_id} img={el.url} text={null} style={style} />
    })

    return(
        <section>
            {mappedItems}
        </section>
    )
}

export default LatestRecipes