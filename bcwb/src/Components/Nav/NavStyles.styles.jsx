import styled, { css } from 'styled-components';

const baseColor = '#003300;'


const menuClosed = css`
height: 0px;
width: 0px;
transition: 300ms ease all;
// display:none;
`

export const NavBar = styled.nav`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100vw;
  border-bottom: solid 1px ${baseColor}
`

export const NavLink = styled.a`
  font-size:40px;
  font-style:italic;
  z-index: 4;
  color:${baseColor};
`
export const DesktopMenu = styled.div`
  width:100%;
  display:flex;
  justify-content:space-around;
  @media (max-width:1000px) {
    display:none;
  }
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