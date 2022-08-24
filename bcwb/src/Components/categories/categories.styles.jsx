import styled from 'styled-components'
import { colors } from '../Styles/colors'
import { fonts } from '../Styles/fonts'
import { device } from '../Styles/queries'

const { tablet } = device
const { darkText } = colors
const { cursive } = fonts

export const CategoriesContainer = styled.main`
    min-width: 300px;
    max-width:80vw;
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

        @media ${tablet} {
            font-size:24px;
        }

        h2 {
            font-weight:100;
        }

        span {
            border-bottom: solid 3px ${darkText};
            min-width:90%;
            margin-left:20px;
            margin-bottom:20px;

            @media ${tablet} {
                margin-bottom:12px;
            }
        }
    }

    section {
        padding-left:15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }
`