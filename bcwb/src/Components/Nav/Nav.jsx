import { NavBox,SlideButton, NavOverlay, LNavScreen, RNavScreen } from "./nav.styles"
import { useState,useEffect } from "react"
import { connect } from 'react-redux'
import { getCategories } from "../../ducks/recipeReducer"
import Content from "./content.component"
import { LeftArrow,RightArrow } from "../SVG"
import { navPixelObject } from './nav.styles'

const { XS,S,M,L } = navPixelObject

const Nav = (props) => {

    useEffect(() => {
        initializeNav()
    },[])

    const [state,setState] = useState({
        translate:0,
        increment:110, // increment for actual db photos/content
        carouselWidth:0,
        items:[],
        windowSize:0
    })
    const { translate,increment,items,carouselWidth,windowSize } = state

    // --- This will be used to flip mappedItems for continuous scrollinf effect --- //
    const setTranslation = (prop,val) => {
        var newVal = prop+val // THIS IS THE INCREMENTED ITEM
        var newArr = [...items]

        switch(val > 0) {
            case true:

                // console.log('is greater',windowSize.innerWidth*.8,carouselWidth,newVal)
                // const compensation = (Math.floor(innerWidth / 100) * 100);
                // console.log('rounded down',(carouselWidth)/2,translate, (carouselWidth/2)-(windowSize/2))
                // var lastEl = newArr[newArr.length-1]
                // newArr.pop()
                // newArr.unshift(lastEl)
            break;

            case false:
                // console.log('is smaller',windowSize.innerWidth*.8,carouselWidth,newVal)
                // console.log('rounded down',(carouselWidth/2),translate, (carouselWidth/2)-(windowSize/2))
                // var lastEl = newArr[0]
                // newArr.shift()
                // newArr.push(lastEl)
            break;
        default:

        }

        setState({
            ...state,
            translate:newVal,
            items:newArr,
        })
    }
    
    const initializeNav = async () => {
        const response = await props.getCategories()
        const { data } = response.value
        await setState({...state,
            items:data,
            carouselWidth:increment*data.length,
            windowSize:getWindowSize()
        })
    }

    const mappedItems = items.map((el,index) => {
        return <Content key={el.category_id} content={el} index={index}/>
    })

    return (
        <NavBox props={windowSize}>

            <NavOverlay translate={translate}>

                <LNavScreen>
                    {translate < (carouselWidth/2)-(windowSize/2) &&
                    <SlideButton
                        onClick={() => setTranslation(translate,increment)}
                        styles={{left:'0px'}}
                    >
                        {LeftArrow()}
                    </SlideButton>}
                </LNavScreen>

                {mappedItems}

                <RNavScreen>
                    {-translate < (carouselWidth/2)-(windowSize/2) &&
                    <SlideButton
                        onClick={() => setTranslation(translate,-increment)}
                        style={{right:'0px'}}
                    >     
                        {RightArrow()}
                    </SlideButton>}
                </RNavScreen>

            </NavOverlay>


        </NavBox>
    )
}

const getWindowSize = () => { // --- Carousel scroll constraints
    const {innerWidth } = window;
    
    var maxWidth = 0
    switch (innerWidth > XS) {
        case innerWidth > L:
            maxWidth = L
        break;

        case innerWidth > M:
            maxWidth = M
        break;

        case innerWidth > S:
            maxWidth = S
        break;

        case innerWidth > XS:
            maxWidth = XS
        break;

        default:
            return;
    }
    return maxWidth;
  }

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {getCategories})(Nav)