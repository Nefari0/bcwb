import styled from 'styled-components'
import { colors } from '../Styles/colors'
import { fonts } from '../Styles/fonts'
import { device,size } from '../Styles/queries'

const { tablet,xDesktopL } = device
const { desktopL } = size
const { darkText } = colors
const { cursive } = fonts

export const CategoriesContainer = styled.main`
    min-width: 300px;
    max-width:80vw;
    min-height: 400px;
    margin: auto;
    margin-top:32px;
    // background-color:pink;

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

        @media ${tablet} {
            font-size:24px;
        }

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
        min-height:300px;
        min-width:300px;
        // background-color:blue;
        display: flex;
        // flex-direction: column;
        align-items: baseline;
        // justify-content:flex-start;
        justify-content:space-around;
        flex-wrap:wrap;
        text-align: left;
        // padding-left:15px;

    }
`