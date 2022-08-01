import './CreateRecipe.scss'
import { useState } from 'react'
import FormInput from '../../Form/FormInput'
import Button from '../../Form/Button'
import axios from 'axios'
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage'
import { withRouter } from 'react-router'

const defaultState = {
    title:'',
    description:'',
    category:'',
    prep_time:0,
    servings:0,
    author:'',
}

const CreateRecipe = (props) => {

    const [formFields, setFormFields] = useState(defaultState);
    const { title, description, category } = formFields;
    const [ error,setError ] = useState(null)

    const createRecipe = (event) => {
        event.preventDefault();
        axios.post('/api/recipes/create',formFields).then(res => {
            props.history.push(`/recipe/${res.data[0].recipe_id}`)
        }).catch(err => {
            setError(err,'This title is already being used. Please choose another title')
        })
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
      };

    const initRecipe = () => { // Initialize new recipe form
        return(
            <form onSubmit={createRecipe}>

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

            <FormInput
             label='Category'
             name='category'
             type='text'
             required
             onChange={handleChange} 
             value={category} 
            />
            <Button type="submit" >Next</Button>
        </form>
        )
    }

    return(
        <main className='CreateRecipe'>
            
                <h1>Create Recipe</h1>
            
                {error ? <ErrorMessage error={error} setError={setError} /> : null}

                {initRecipe()}
            
        </main>
     
    )
}

export default withRouter(CreateRecipe)