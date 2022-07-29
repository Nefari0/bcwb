import styled, { css } from 'styled-components';
import { colors } from '../Styles/colors';

const { baseColor } = colors


const menuClosed = css`
height: 0px;
width: 0px;
transition: 300ms ease all;
`

export const NavBar = styled.nav`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  min-width:400px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  margin-bottom:20px;

  @media (max-width:800px){ height:200px; }

  @media (max-width:400px) { height:100px; }
`

export const NavLink = styled.a`
  font-size:36px;
  font-style:italic;
  z-index: 4;
  color:${baseColor};
`
export const DesktopMenu = styled.div`
  width:100%;
  display:flex;
  justify-content:space-around;
  @media (max-width:1250px) { display:none; }
`

export const MobileMenu = styled.div`
  background-color:blue;
  opacity:.5;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 300px;
  width: 300px;
  transition: 300ms ease all;
  z-index: 3;
  ${( {isMenuClosed } ) => isMenuClosed && menuClosed}
`

export const LogoBox = styled.img`
  max-width:1000px;
  @media (max-width:800px){
    max-width:600px;
  }
`