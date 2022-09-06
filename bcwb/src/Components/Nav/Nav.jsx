import { NavBox,SlideButton, NavOverlay, LNavScreen, RNavScreen } from "./nav.styles"
import { useState,useEffect } from "react"
import { connect } from 'react-redux'
import { getCategories } from "../../ducks/recipeReducer"
import Content from "./content.component"
import { LeftArrow,RightArrow } from "../SVG"
import { navPixelObject } from './nav.styles'

const { XS,S,M,L } = navPixelObject

const Nav = (props) => {

    
    const [state,setState] = useState({
        carouselWidth:0, // -- Sum of thumbnail containers * dimensions
        items:[],
        screenWidth:0, // -- Client screen width
        locations:[], // -- Absolute value locations are computed in node.js
        dimensions:0 // -- Width of thumbnail containers
    })
    const {
        translate,
        items,
        carouselWidth,
        screenWidth,
        locations,
        dimensions
    } = state

    useEffect(() => {
        initializeNav()
    },[])

// --- Scroll effect --- //
    const setTranslation = (val) => {

        const updatedArray = [...locations];
        const newLocations = [];

        switch(val) {
            case 'right':          
                updatedArray.forEach((el) => {
                    if (el < dimensions) {
                    newLocations.push(el + dimensions * locations.length - dimensions);
                    } else {
                    newLocations.push(el - dimensions);
                    }
                });
                setState({...state,locations:newLocations})
            break;

            case 'left':
                updatedArray.forEach((el) => {
                    if (el < locations.length*dimensions-dimensions){
                    newLocations.push(el+dimensions)
                    } else {newLocations.push(0)}
                });
                setState({...state,locations:newLocations});
                break;
        default:

        }
    }
    
    const initializeNav = async () => {
        const response = await props.getCategories(getWindowSize())
        const { categories,locations,dimensions } = response.value.data
        await setState({...state,
            items:categories,
            carouselWidth:dimensions*categories.length,
            screenWidth:getWindowSize(),
            locations:locations,
            dimensions:dimensions
        })
    }

    const mappedItems = items.map((el,index) => {
        return (
        <Content 
            key={el.category_id}
            content={el}
            index={index}
            location={locations[index]}
            screenWidth={screenWidth} 
            carouselWidth={carouselWidth}
            dimensions={dimensions}
        />
        )
    })

    return (
        <NavBox props={screenWidth}>

            <SlideButton onClick={() => setTranslation('right')}>
                {LeftArrow()}
            </SlideButton>

            <NavOverlay carouselWidth={carouselWidth}>
                <LNavScreen></LNavScreen>
                <section>{mappedItems}</section>
                <RNavScreen></RNavScreen>
            </NavOverlay>

            <SlideButton onClick={() => setTranslation('left')}>     
                {RightArrow()}
            </SlideButton>

        </NavBox>
    )
}

const getWindowSize = () => { // --- Screen width constraints --- //
    const {innerWidth } = window;
    
    var limit = 300
 
    switch (innerWidth >= 300) {
        case innerWidth > L:
            limit = L
        break;

        case innerWidth > M:
            limit = M
        break;

        case innerWidth > S:
            limit = S
        break;

        case innerWidth > XS:
            limit = XS
        break;
    }

    return limit;
  }

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {getCategories})(Nav)