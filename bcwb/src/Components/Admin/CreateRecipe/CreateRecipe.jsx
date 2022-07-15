import './CreateRecipe.scss'
import { useState } from 'react'
import FormInput from '../../Form/FormInput'
import Button from '../../Form/Button'
import AddPhotos from '../Photos/AddPhotos'
import axios from 'axios'
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage'

const defaultState = {
    title:'',
    description:'',
    category:'',
    ingredient:'',
    step:'',
    steps:[]
}

const CreateRecipe = () => {
    const [ exists,setExists ] = useState(false)
    const [formFields, setFormFields] = useState(defaultState);
    const { title, description, ingredient, step, category } = formFields;
    const [ newRecipe,setNewRecipe ] = useState(null)
    const [ recipe,setRecipe ] = useState(null)
    const [ error,setError ] = useState(null)

    const createRecipe = (event) => {
        event.preventDefault();
        axios.post('/api/recipes/create',formFields).then(res => {
            setNewRecipe(res.data)
        }).catch(err => {
            setError('This title is already being used. Please choose another title')
        })
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

    const addRecipePhoto = async (cover_image_url) => {
        const { description,title,category,published,recipe_id,pintereste_url } = newRecipe[0]
        await axios.put('/api/recipes/edit',{description,title,category,published,cover_image_url,recipe_id,pintereste_url}).then(res => {
            setRecipe(res.data)
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

    const options = () => { // Adding new contents and info after recipe is initialized

        return (
            <>
                <Button>Photos</Button>
                <Button>Instructions</Button>
                <Button>Ingredients</Button>
            </>
        )
    }

    return(
        <main className='CreateRecipe'>

            <h1>Create Recipe</h1>
        
            {error ? <ErrorMessage error={error} setError={setError} /> : null}
            {newRecipe === null ? initRecipe() : <AddPhotos updateDB={addRecipePhoto} />}        
        {/* <form>
            <label>Add Ingredient</label>
            <input type="text" name="ingredient" value={ingredient} onChange={handleChange} />
            <button>Add</button>

            <label>add instruction</label>
            <input type="text" name="step" value={step} onChange={handleChange} />
            <button type="submit" >Add</button>
            <button>Delete Recipe</button>
        </form> */}
        
        </main>
     
    )
}

export default CreateRecipe