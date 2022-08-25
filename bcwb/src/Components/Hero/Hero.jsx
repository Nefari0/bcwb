// import Hamburgar from './Hamburger'
import { useState,useContext } from 'react'
import { UserContext } from '../Context/user.context'
import { signOutUser } from '../../base'
import access from '../../access'
import { Link } from 'react-router-dom'
import { styles } from '../Styles/customStyles'
import { BaseButton,DecoButtonWrapper } from '../Form/Button.styles'
import { DecoButton } from '../Form/DecoButton'
import { NavLink,DesktopMenu,MobileMenu,NavBar,LogoBox } from './Hero.styles'
import Logo from '../Assets/Brittanys-Culinary-Creations-v3.png'

const { decoButton } = styles

const Hero = () => {

    // *** REMOVED PENDING DESIGN UPDATES *** //
    // const [ isMenuClosed,setMenu ] = useState(true)
    // const menuItems = ['Home','About','Recipes']
        
    const signOutHandler = async () => {
        await signOutUser()
        await setCurrentUser(null)
    }

    const { currentUser,setCurrentUser } = useContext(UserContext)

    // *** REMOVED PENDING DESIGN UPDATES *** //
    // const  mappedItems = menuItems.map((el,i) => {
    //     return <NavLink onClick={() => setMenu(!isMenuClosed)} key={i}>{el}</NavLink>
    // })

    return(
        <NavBar>

            <Link style={{maxWidth:'500px'}} to={`/`} >
                <LogoBox src={Logo} />
            </Link>

            {currentUser != null && access.getAccess(currentUser.uid) === "ACCESS_GRANTED" ? 
            <i><Link to="/admin">Admin</Link></i>
            : 
            null
            }

            {currentUser ?
            <DecoButton clickFunc={signOutHandler} label={'sign out'} />
            :
            <DecoButton label={'sign in'} path={'/signin'} />
            }

            {/* *** THESE FEATURES ARE TEMPORARILY DISABLED UNTIL DESIGN IS UPDATED *** */}

            {/* <DesktopMenu>{mappedItems}</DesktopMenu> */}

            {/* <Hamburgar setMenu={setMenu} menu={isMenuClosed} />  */}

            {/* <MobileMenu isMenuClosed={isMenuClosed} >{!isMenuClosed ? mappedItems : null}</MobileMenu> */}
        </NavBar>
    )
}

export default Hero