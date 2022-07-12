import './CreateRecipe.scss'
import { useState } from 'react'
import FormInput from '../../Form/FormInput'
import Button from '../../Form/Button'
import axios from 'axios'
import { FormInputLabel } from '../../Form/FormInput.styles'

const defaultState = {
    title:'',
    description:'',
    ingredient:'',
    step:'',
    category:'',
    steps:[]
}

const CreateRecipe = () => {
    const [ exists,setExists ] = useState(false)
    const [ state,setState ] = useState(defaultState)
    const [formFields, setFormFields] = useState(defaultState);
    const { title, description, ingredient, step, category } = formFields;
    const [ recipe,setRecipe ] = useState(null)

    const createRecipe = () => {
        // axios.post(new_recipe).then(res setRecipe(res.data))
        // then the next step should be available by changing value from null
    }

    const addInstructionStep = () => {
        // axios.post(number,text,recipe_id)
    }

    const addIngredient = () => {
        // axios.post(content,recipe_id)
    }

    const createPhotoAlbum = () => { // This photo album has to have the same name as the recipe
        // axios.post(url,title,album)
    }

    const addPhoto = () => {
        // axios.post()
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
      };

    return(
        <main className='CreateRecipe'>

            <h1>Create Recipe</h1>
        {recipe === null ? 
        <form onSubmit={() => {}}  >

            <FormInput 
             label={`Title`}
             name='title'
             type='text' 
             onChange={handleChange} 
             value={title} 
            />

            <FormInput
             label='Description'
             name='description'
             type='text' 
             onChange={handleChange} 
             value={description} 
            />

            <FormInput
             label='Category'
             name='category'
             type='text' 
             onChange={handleChange} 
             value={category} 
            />

            <Button type="submit" >Next</Button>
        </form>
        :
        <form>
            <label>Add Ingredient</label>
            <input type="text" name="ingredient" value={ingredient} onChange={handleChange} />
            <button>Add</button>

            <label>add instruction</label>
            <input type="text" name="step" value={step} onChange={handleChange} />
            <button type="submit" >Add</button>
            <button>Delete Recipe</button>
        </form>}
        </main>
     
    )
}

export default CreateRecipe