import { useEffect, useState } from "react";
import { CatView } from "./Categories.styles";
import { CATEGORIES } from "../../../endpoints";
import axios from "axios";
import { BaseButton } from "../../Form/Button.styles";
import CreateCategory from "./CreateCategory.component";
import CatItem from "./CatItem.component";
import { ErrorMessage } from "../../dialogues/errorMessage.component";

const defaultState = {
    category:'',
    photo_url:null,
    category_id:null,
}

const { GET_ALL_CATEGORIES } = CATEGORIES

const ViewCategories = () => {

    const [ items,setItems ] = useState([])
    const [formFields, setFormFields] = useState(null);
    const [ error,setError ] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
      };

    const selectCat = (e,cat) => {
        e.preventDefault()

        if(cat != null){

            const { category,category_id,photo_url } = cat

            setFormFields({
                category:category,
                category_id:category_id,
                photo_url:photo_url,
            })

        } else setFormFields(null)
    }

    useEffect(() => {
        axios.get(GET_ALL_CATEGORIES).then(res => setItems(res.data))
    },[])

    const mappedItems = items.map(el => {
        return(
            <CatItem key={el.category_id} photo_url={el.photo_url} category={el.category} category_id={el.category_id} selectFunction={selectCat} />
        )
    })

    return(
        <CatView>

            <BaseButton onClick={() => setFormFields(defaultState)} >add new</BaseButton>
            {error ? <ErrorMessage error={error} setError={setError} /> : null}
            {formFields ?

            <CreateCategory
                handleChange={handleChange}
                formFields={formFields}
                setFormFields={setFormFields}
                selectCat={selectCat}
                error={error}
                setError={setError}
            />

            : null}

            {mappedItems}

        </CatView>
    )
}

export default ViewCategories