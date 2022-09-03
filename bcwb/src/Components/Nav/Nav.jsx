import { NavBox,SlideButton, NavOverlay, LNavScreen, RNavScreen } from "./nav.styles"
import { useState,useEffect } from "react"
import { connect } from 'react-redux'
import { getCategories } from "../../ducks/recipeReducer"
import Content from "./content.component"
import { arrow,LeftArrow,RightArrow } from "../SVG"

const Nav = (props) => {

    useEffect(() => { getDB() },[])

    const [state,setState] = useState({
        translate:0,
        increment:110,
        carouselWidth:0,
        maxWidth:300,
        items:[]
    })
    const { translate,increment,items,carouselWidth,maxWidth } = state

    const setTranslation = (prop,val) => {
        var newVal = prop+val // THIS IS THE INCREMENTED ITEM
        var newArr = [...items]

        // switch(val > 0) {
        //     case true:

        //         console.log('is greater',maxWidth,newVal)
        //         // var lastEl = newArr[newArr.length-1]
        //         // newArr.pop()
        //         // newArr.unshift(lastEl)
        //     break;

        //     case false:
        //         console.log('is smaller',-maxWidth,newVal)
        //         // var lastEl = newArr[0]
        //         // newArr.shift()
        //         // newArr.push(lastEl)
        //     break;
        // default:

        // }

        setState({
            ...state,
            translate:newVal,
            items:newArr,
            // firstElement:
        })
    }

    // **************** TESTING ************************ //
    // **************************************************//

    // **************************************************//
    // **************************************************//

    const getDB = async () => {
        const response = await props.getCategories()
        const { data } = response.value
        await setState({...state,
            items:data,
            carouselWidth:increment*data.length
        })
    }

    const mappedItems = items.map((el,index) => {
        return <Content key={el.category_id} content={el} index={index}/>
    })

    return (
        <NavBox>

            <SlideButton
            onClick={() => setTranslation(translate,increment)}
            style={{right:'0px'}}
            >
                {RightArrow()}
            </SlideButton>

            <NavOverlay props={{translate,carouselWidth}}>

                <LNavScreen></LNavScreen>

                        {mappedItems}
                
                <RNavScreen></RNavScreen>

            </NavOverlay>

            <SlideButton
            onClick={() => setTranslation(translate,-increment)}
            style={{left:'0px'}}
            >
                {LeftArrow()}
            </SlideButton>

        </NavBox>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {getCategories})(Nav)