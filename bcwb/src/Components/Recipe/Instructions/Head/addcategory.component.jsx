import { BaseButton, InvertedButton } from "../../../Form/Button.styles"
import FormInput from "../../../Form/FormInput"
import { CATEGORIES } from "../../../../endpoints"

const { ADD_CATEGORY } = CATEGORIES

const NewCatTextField = ({formFields,handleChange,postItem,cancel}) => {
    const photo_url = null
    const { category } = formFields
    return(
        <div>

            <FormInput
                type="text"
                name="category"
                label="Category"
                value={category}
                onChange={handleChange}
            />

            <BaseButton onClick={(e) => {
                e.preventDefault()
                postItem(ADD_CATEGORY,{category,photo_url})
                cancel()
            }}>
                submit new category
            </BaseButton>

            <InvertedButton
                onClick={(e) => {
                    e.preventDefault()
                    cancel()
                }}
            >
                Cancel
            </InvertedButton>
        </div>
    )
}

export default NewCatTextField