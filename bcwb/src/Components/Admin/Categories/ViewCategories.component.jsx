import { useEffect, useState } from "react";
import { CatView } from "./Categories.styles";
import { BaseButton } from "../../Form/Button.styles";
import CreateCategory from "./CreateCategory.component";
import CatItem from "./CatItem.component";
import { ErrorMessage } from "../../Dialogues/errorMessage.component";
import { connect } from 'react-redux'
import { getCategories,getCategoryNames } from "../../../ducks/recipeReducer";

const defaultState = {
    category:'',
    photo_url:null,
    category_id:null,
}

const ViewCategories = (props) => {

    const [ items,setItems ] = useState([])
    const [formFields, setFormFields] = useState(null);
    const [ error,setError ] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
      };

    // --- Selecting a category item renders it in CreateCategory --- //
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

    // --- Fetch categories --- //
    const setCategories = async () => {
        const response = await props.getCategoryNames()
        const { data } = response.value
        await setItems(data)
    }

    useEffect(() => {
        setCategories()
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
                udpateList={setCategories}
            />

            : null}

            {mappedItems}

        </CatView>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps,{getCategories,getCategoryNames})(ViewCategories)