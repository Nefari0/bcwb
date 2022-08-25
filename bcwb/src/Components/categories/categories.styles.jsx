import styled, { css } from 'styled-components'
import { colors } from '../Styles/colors'
import { fonts } from '../Styles/fonts'
import { device } from '../Styles/queries'
const { tablet,desktopL,laptop,mobileM } = device
const { darkText } = colors
const { cursive } = fonts

// ---- COMPONENT WIDTHS ----- //
const xl = css`width:1250px;`;
const x = css`width:950px;`
const m = css`width:630px`
const s = css`width:330px`
const xs = css`width:100%`

export const CategoriesContainer = styled.main`

// --- Media Queries --- //
    ${xl}
    @media${desktopL} {${x}}
    @media${laptop} {${m}}
    @media${tablet} {${s}}
    @media${mobileM} {${xs}}

    min-width: 300px;
    min-height: 400px;
    margin: auto;
    margin-top:32px;

    header {
        position:relative;
        width:100%;
        text-align:left;
        color:${darkText};
        overflow:hidden;
        display:flex;
        font-size:36px;
        margin:0px;
        
        ${cursive}

        @media ${tablet} {font-size:24px;}

        span {
            border-bottom: solid 1px ${darkText};
            min-width:90%;
            margin-left:20px;
            margin-bottom:20px;

            @media ${tablet} {
                margin-bottom:12px;
            }
        }
    }

    section {
        margin-top:32px;
        flex-wrap:wrap;
        text-align: left;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: flex-start;
    }
`