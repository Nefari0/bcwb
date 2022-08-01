import Hamburgar from './Hamburger'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink,DesktopMenu,MobileMenu,NavBar,LogoBox } from './NavStyles.styles'
import Logo from '../Assets/Brittanys-Culinary-Creations-v1.png'

const Nav = (props) => {

    const [ isMenuClosed,setMenu ] = useState(true)
    const menuItems = ['Home','About','Recipes']

    const  mappedItems = menuItems.map((el,i) => {
        return <NavLink onClick={() => setMenu(!isMenuClosed)} key={i}>{el}</NavLink>
    })

    return(
        <NavBar>
            <Link to='/' ><LogoBox src={Logo} /></Link>
            {/* *** THESE FEATURES ARE TEMPORARILY DISABLED UNTIL DESIGN IS UPDATED *** */}

            {/* <DesktopMenu>{mappedItems}</DesktopMenu> */}

            {/* <Hamburgar setMenu={setMenu} menu={isMenuClosed} />  */}

            {/* <MobileMenu isMenuClosed={isMenuClosed} >{!isMenuClosed ? mappedItems : null}</MobileMenu> */}
        </NavBar>
    )
}

export default Nav