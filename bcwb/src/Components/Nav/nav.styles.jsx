import styled, { css } from 'styled-components'
import { device } from '../Styles/queries'
import { colors } from '../Styles/colors'

// --- All the display widths in the Nav component --- //
export const navPixelObject = {
    XXS:250,
    XS:300,
    S:630,
    M:950,
    L:1280,
}
const { XXS,XS,S,M,L } = navPixelObject

const { tablet,desktopL,laptop,mobileS } = device
const { baseColor } = colors
const pxXl = css`width:${L}px;`
const pxL = css`width:${M}px;`
const pxM = css`width:${S}px;`
const pxS = css`width:${XS}px;`
const pxXS = css`width:${XXS}px;`

export const NavBox = styled.div` // --- Nav bar container
    position:relative;
    min-width:300px;
    display: flex;
	justify-content: center;
	align-items: center;
    width:100%;
`

export const NavOverlay = styled.main` // -- Carousel view port
    position:relative;
    height:110px;
    display: flex;
	justify-content: center;
	align-items: center;
    padding:16px 0px 20px 0px;
    margin-top:16px;
    overflow:hidden;
    
    ${pxXl}
    @media${desktopL} { ${pxL} }
    @media${laptop} { ${pxM} }
    @media${tablet} { ${pxS} }
    @media${mobileS} { ${pxXS} }

    section {
        width:${({carouselWidth})=>carouselWidth}px;
        height:100%;
        position:relative;
    }
`

export const SlideButton = styled.div`
    width:60px;
    height:100%;
    top:-10px;
    z-index:3;
    color:${baseColor};
    cursor: pointer;
    display:flex;
    pointer-events: auto;
`

// --- CREATING FADE IN/OUT FOG EFFECT --- //
const screen = css`
    rgba(255,255,255, 0),
    rgba(255,255,255, .2),
    rgba(255,255,255, .4),
    rgba(255,255,255, .6),
    rgba(255,255,255, .8),
    rgba(255,255,255, 1) 
`

export const LNavScreen = styled.div` // --- Left fade out
    width:20%;
    left:0;
    height:100%;
    background: linear-gradient(to left, ${screen} 100%); 
    z-index:3;
    position:absolute;
    pointer-events: none;
`

export const RNavScreen = styled.div` // --- Right fade out
    width:20%;
    right:0;
    height:100%;
    background: linear-gradient(to right, ${screen} 100%);
    z-index:3;
    position:absolute;
    pointer-events: none;
`
