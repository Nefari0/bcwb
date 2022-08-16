import { RecipeHeader } from "./RecipeHead.styles"
import { InvertedButton } from "../../Form/Button.styles"

const RecipeHead = (props) => {
    const { title,author,date_created } = props.items[0]

    const timeFormat = () => {
        var months = [ "January","February","March","April","May","June","July","August","September","October","November","December"];
        const timeSplit = date_created.split('-')

        const day = timeSplit[2].split('T')[0]

        const month = timeSplit[1].split('')
        const monthIndex = (month[0] === '0' ? parseInt(month[1]) : parseInt(month)) -1

        const year = timeSplit[0]

        return (<><i> on</i>{`${months[monthIndex]} ${day}, ${year}`}</>)
    }

    return (
        <RecipeHeader>
            <h1>{title}</h1>
            <section>
                <strong>
                    {author.length < 1 ? null : <><i>by </i>{author}</>}
                    {date_created ? timeFormat() : null}
                </strong>
            </section>
            <InvertedButton onClick={() => props.jump()} >jump to recipe</InvertedButton>
        </RecipeHeader>
    )
}

export default RecipeHead