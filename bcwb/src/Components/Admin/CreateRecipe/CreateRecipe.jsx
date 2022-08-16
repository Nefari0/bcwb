import './CreateRecipe.scss'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getCategories } from '../../../ducks/recipeReducer'
import FormInput from '../../Form/FormInput'
import { ErrorMessage } from '../../dialogues/errorMessage.component'
import { BaseButton,InvertedButton } from '../../Form/Button.styles'
import { Form } from '../../Form/FormInput.styles'
import Cats from './cats.component'

const defaultState = {
    title:'',
    description:'',
    category:'',
    hours:0,
    servings:0,
    author:'',
    minutes:0,
}

const CreateRecipe = (props) => {

    const { changeView } = props

    const [formFields, setFormFields] = useState(defaultState);
    const { title, description, category } = formFields;
    const [error,setError] = useState(null)
    
    // -- Open category list -- //
    const [categoryList,setCategoryList] = useState(false)

    useEffect(() => {props.getCategories()},[])

    const createRecipe = async (event) => {
        event.preventDefault();
        await axios.post('/api/recipes/create',formFields).then(res => {
            props.history.push(`/recipe/${res.data[0].recipe_id}`)
        }).catch(err => {
            setError(err.response.data)
        })
    };


    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
    };

    const selectCategory = (name,value) => {
        setFormFields({...formFields, [name]: value})
    };

    const initRecipe = () => { // Initialize new recipe form
        return(
            <Form onSubmit={createRecipe}>

                <FormInput 
                label={`Title`}
                name='title'
                type='text'
                required
                onChange={handleChange} 
                value={title} 
                />

                <FormInput
                label='Description'
                name='description'
                type='text' 
                required
                onChange={handleChange} 
                value={description} 
                />

                <InvertedButton
                    onClick={(e) => {
                        e.preventDefault()
                        setCategoryList(!categoryList)
                    }}
                    style={{width:'98%',marginLeft:''}}
                >
                    {category.length < 1 ?'Select Category' : category}
                </InvertedButton>

                <BaseButton type="submit" >Next</BaseButton>
            </Form>
        )
    }

    return(
        <main className='CreateRecipe'>
            
                <h1>Create Recipe</h1>
            
                {error ? <ErrorMessage error={error} setError={setError} /> : null}

                {categoryList ?
                <Cats
                    categories={props.recipes.categories}
                    handleClick={selectCategory}
                    closeMenu={setCategoryList}
                    changeView={changeView}
                />
                : null}

                {initRecipe()}
            
        </main>
     
    )
}
function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {getCategories})(withRouter(CreateRecipe))