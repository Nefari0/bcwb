import styled from 'styled-components'
import { colors } from '../Styles/colors'

const { baseColor } = colors

export const NavBox = styled.div`
    // min-width: 300px;
    // background-color:blue;
    // min-height: 50px;
    // min-width:500px;
    min-width:300px;
    max-width:80%;
    display:flex;
    flex-direction:row;
    // justify-content: space-around;
    justify-content:center;
    padding:20px 0px 20px 0px;
    flex-wrap:wrap;
    // background-color:yellow;
    margin: auto;
    border-bottom: solid 1px ${baseColor};
`