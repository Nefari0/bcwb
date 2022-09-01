// import Hamburgar from './Hamburger'
import { Link } from 'react-router-dom'
import { changeView } from '../../ducks/navReducer'
import { connect } from 'react-redux'
import { NavLink,DesktopMenu,MobileMenu,HeroBar } from './hero.styles'
import Logo from '../Assets/Brittanys-Culinary-Creations-v3.png'

const HeroView = (props) => {

    // *** REMOVED PENDING DESIGN UPDATES *** //
    // const [ isMenuClosed,setMenu ] = useState(true)
    // const menuItems = ['Home','About','Recipes']

    // *** REMOVED PENDING DESIGN UPDATES *** //
    // const  mappedItems = menuItems.map((el,i) => {
    //     return <NavLink onClick={() => setMenu(!isMenuClosed)} key={i}>{el}</NavLink>
    // })

    return(
        <HeroBar>

            <Link to={`/`} onClick={() => props.changeView(null)} >
                <img src={Logo} />
            </Link>

            {/* *** THESE FEATURES ARE TEMPORARILY DISABLED UNTIL DESIGN IS UPDATED *** */}

            {/* <DesktopMenu>{mappedItems}</DesktopMenu> */}

            {/* <Hamburgar setMenu={setMenu} menu={isMenuClosed} />  */}

            {/* <MobileMenu isMenuClosed={isMenuClosed} >{!isMenuClosed ? mappedItems : null}</MobileMenu> */}
        </HeroBar>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps,{changeView})(HeroView)