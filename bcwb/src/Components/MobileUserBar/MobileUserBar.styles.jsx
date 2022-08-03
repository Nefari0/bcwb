import styled, { css } from 'styled-components';
import { styles } from '../Styles/customStyles';
import { colors } from '../Styles/colors'
import { queries } from '@testing-library/react';

const { tablet,mobileL } = queries
const { baseColor,secondaryColor,mobileLMin,yellowPaper,lightPaper } = colors

export const UserHeader = styled.header`

    // max-width:300px;
    height:50px;
    // background-color:${baseColor}
    // opacity:.75;
    display:flex;
    // justify-content:center;
    align-items:center;
    margin:0px 0px 10px 0px;
    
    @media (min-width:550px) {
        display:none;
    }

    span {
        @media ${mobileL} {
            // margin-left:50px;
            // left
        }
    }
`