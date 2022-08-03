// import Hamburgar from './Hamburger'
import { useState,useContext } from 'react'
import { UserContext } from '../Context/user.context'
import { signOutUser } from '../../base'
import access from '../../access'
import { Link } from 'react-router-dom'
import { styles } from '../Styles/customStyles'
import { BaseButton,DecoButtonWrapper } from '../Form/Button.styles'
import { NavLink,DesktopMenu,MobileMenu,NavBar,LogoBox } from './NavStyles.styles'
import Logo from '../Assets/Brittanys-Culinary-Creations-v1.png'

const { decoButton } = styles

const Nav = () => {

    const [ isMenuClosed,setMenu ] = useState(true)
    const menuItems = ['Home','About','Recipes']
        
    const signOutHandler = async () => {
        await signOutUser()
        await setCurrentUser(null)
    }

    const { currentUser,setCurrentUser } = useContext(UserContext)

    const  mappedItems = menuItems.map((el,i) => {
        return <NavLink onClick={() => setMenu(!isMenuClosed)} key={i}>{el}</NavLink>
    })

    return(
        <NavBar>

            {currentUser != null && access.getAccess(currentUser.uid) === "ACCESS_GRANTED" ? 

            <i><Link to="/admin">Admin</Link></i>
            : 
            null

            }

            <Link to={`/`} ><LogoBox src={Logo} /></Link>

            <DecoButtonWrapper>
                {currentUser ? 

                <BaseButton style={decoButton} onClick={signOutHandler} >sign out</BaseButton>
                :
                <Link to="/signin">
                    <BaseButton style={decoButton}>sign in</BaseButton>
                </Link>

                }
            </DecoButtonWrapper>

            {/* *** THESE FEATURES ARE TEMPORARILY DISABLED UNTIL DESIGN IS UPDATED *** */}

            {/* <DesktopMenu>{mappedItems}</DesktopMenu> */}

            {/* <Hamburgar setMenu={setMenu} menu={isMenuClosed} />  */}

            {/* <MobileMenu isMenuClosed={isMenuClosed} >{!isMenuClosed ? mappedItems : null}</MobileMenu> */}
        </NavBar>
    )
}

export default Nav