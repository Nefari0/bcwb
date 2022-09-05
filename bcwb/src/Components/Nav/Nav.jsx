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
        scrollLimit:0
    })
    const { translate,increment,items,carouselWidth,scrollLimit } = state

    // --- This will be used to flip mappedItems for continuous scrollinf effect --- //
    const setTranslation = (prop,val) => {
        var newVal = prop+val // THIS IS THE INCREMENTED ITEM
        // var newArr = [...items]

        switch(val > 0) {
            case true:

                if (translate < (carouselWidth/2)-(scrollLimit/2)) {
                    setState({
                        ...state,
                        translate:newVal
                        // items:newArr,
                    })
                }

                // const scrollLeft = async () => {
                //     const updatedArray = [...locations];
                //     const newLocations = [];
                //     updatedArray.forEach((el) => {
                //       if (el < locations.length*100-100){
                //         newLocations.push(el+100)
                //       } else {newLocations.push(0)}
                //       setLocations(newLocations);
                //     });
                //   };

            break;

            case false:

                if (-translate < (carouselWidth/2)-(scrollLimit/2)) {
                    setState({
                        ...state,
                        translate:newVal
                        // items:newArr,
                    })
                }
                
                // const scrollRight = async () => {
                //     const updatedArray = [...locations];
                //     const newLocations = [];
                //     updatedArray.forEach((el) => {
                //       if (el < 100) {
                //         newLocations.push(el + 100 * locations.length - 100);
                //       } else {
                //         newLocations.push(el - 100);
                //       }
                //       console.log(newLocations);
                //       setLocations(newLocations);
                //     });
                //   };

            break;
        default:

        }

        // setState({
        //     ...state,
        //     translate:newVal
        //     // items:newArr,
        // })
    }
    
    const initializeNav = async () => {
        const response = await props.getCategories()
        const { data } = response.value
        await setState({...state,
            items:data,
            carouselWidth:increment*data.length,
            scrollLimit:getWindowSize()
        })
    }

    const mappedItems = items.map((el,index) => {
        return <Content key={el.category_id} content={el} index={index}/>
    })

    return (
        <NavBox props={scrollLimit}>

            <SlideButton onClick={() => setTranslation(translate,increment)}>
                {LeftArrow()}
            </SlideButton>

            <NavOverlay translate={translate}>
                <LNavScreen></LNavScreen>
                {mappedItems}
                <RNavScreen></RNavScreen>
            </NavOverlay>

            <SlideButton onClick={() => setTranslation(translate,-increment)}>     
                {RightArrow()}
            </SlideButton>

        </NavBox>
    )
}

const getWindowSize = () => { // --- Carousel scroll constraints
    const {innerWidth } = window;
    
    var scrollLimit = 0
    switch (innerWidth > XS) {
        case innerWidth > L:
            scrollLimit = L
        break;

        case innerWidth > M:
            scrollLimit = M
        break;

        case innerWidth > S:
            scrollLimit = S
        break;

        case innerWidth > XS:
            scrollLimit = XS
        break;

        default:
            return;
    }
    return scrollLimit;
  }

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {getCategories})(Nav)