import Hamburgar from './Hamburger'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink,DesktopMenu,MobileMenu,NavBar } from './NavStyles.styles'
import Logo from '../Assets/Brittanys-Culinary-Creations-v1.png'

const Nav = (props) => {

    const [ isMenuClosed,setMenu ] = useState(true)
    const menuItems = ['Home','About','Recipes']

    const  mappedItems = menuItems.map((el,i) => {
        return <NavLink onClick={() => setMenu(!isMenuClosed)} key={i}>{el}</NavLink>
    })

    return(
        <NavBar>
            <Link to='/' ><img src={Logo} style={{height:'150px',marginLeft:'40px'}} /></Link>

            <DesktopMenu>{mappedItems}</DesktopMenu>

            <Hamburgar setMenu={setMenu} menu={isMenuClosed} /> 

            <MobileMenu isMenuClosed={isMenuClosed} >{!isMenuClosed ? mappedItems : null}</MobileMenu>
        </NavBar>
    )
}

export default Nav