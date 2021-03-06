import { FormInputLabel, Group, TextArea } from './FormInput.styles';
// -- Using TextEditor.jsx --
// The textVal is passed in from parent. It is a formField item.
// The handler, also passed from parent, updates the textVal value.
// The optional dimensions parameter is a styling object that taylors TextEditor to it's parent,

export const TextEditor = ({ textVal, dimensions, handler, label }) => {

    return(
        <Group>
            <TextArea
            style={dimensions}
            type="text"
            name="description"
            value={textVal}
            onChange={handler}
            />
            <FormInputLabel shrink={textVal.length}>
                {label}
            </FormInputLabel>
        </Group>
    )
}