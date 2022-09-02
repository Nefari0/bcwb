import styled, { css } from 'styled-components'
import { device,size } from '../Styles/queries'
import { colors } from '../Styles/colors'
import { arrow } from '../SVG'

const { tablet,desktopL,laptop,mobileM } = device
const {mobileMPx} = size
const { baseColor,white } = colors
const pxXl = css`width:1280px;`
const pxL = css`width:950px;`
const pxM = css`width:630px;`
const pxS = css`width:300px;`

// --- Changing location of span elements for carousel effect --- //
const returnLocation = (val) => {
    var style = css`
        left:${0+val}px;
        transition:all 500ms;
    `
    return(style)
}

export const NavOverlay = styled.div`
    position:relative;
    min-width:300px;
    max-width:80%;
    height:110px;
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
    padding:16px 0px 20px 0px;
    margin: auto;
    margin-top:16px;

    // --- The span contains the images. They move with onclick events. Used in the carousel effect --- //
    span {
        ${({props}) => returnLocation(props)}
        transition:all 500ms;
        width:110px;
        height:110px;
        position:relative;
    }

    ${pxXl}
    @media${desktopL} {${pxL}}
    @media${laptop} {${pxM}}
    @media${tablet} {${pxS}}
    overflow:hidden;
    `

export const SlideButton = styled.div`
    width:60px;
    height:60px;
    border-radius:50%;
    position:absolute;
    z-index:3;
    color:${baseColor};
    top:40px;
`

export const NavBox = styled.div`
    position:relative;
    min-width:300px;
    max-width:80%;
    margin:auto;
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

export const LNavScreen = styled.div`
    width:20%;
    left:0;
    height:100%;
    background: linear-gradient(to left, ${screen} 100%); 
    z-index:3;
    position:absolute;
    pointer-events: none; 
`

export const RNavScreen = styled.div`
    width:20%;
    right:0;
    height:100%;
    background: linear-gradient(to right, ${screen}100%);
    z-index:2;
    position:absolute;
    pointer-events: none; 
`
