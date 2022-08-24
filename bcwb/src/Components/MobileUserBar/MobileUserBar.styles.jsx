import styled from 'styled-components';
import { queries } from '@testing-library/react';

const { mobileL } = queries

export const UserHeader = styled.header`
    min-width:300px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    
    @media (min-width:550px) {
        display:none;
    }

    span {
        @media ${mobileL} {
            position:absolute
            margin-right:200px;
            
        }
    }
`