import { colors } from "../../Styles/colors"

const { baseColor,yellowPaper } = colors

const catStyles = {
    position:'absolute',
    maxWidth:'550px',
    minHeight:'300px',
    backgroundColor:yellowPaper,
    zIndex:'1'
}

const Cats = (props) => {

    const { categories,changeView,closeMenu,handleClick } = props

    const selectCatHandler = (prop,val) => {
        handleClick(prop,val)
        closeMenu(false)
    }

    const goToCreateNewCategory = (e) => {
        e.preventDefault()
        changeView('VIEW_CATEGORIES')
        closeMenu(false)
    }

    const mappedCategories = categories.map(el =>{
        return <h4 key={el.category_id} onClick={() => selectCatHandler('category',el.category)}>{el.category}</h4>
    })

    return(
        <div style={catStyles}>
            {mappedCategories}
            <h3 onClick={goToCreateNewCategory}>create new</h3>
        </div>
    )
}

export default Cats
