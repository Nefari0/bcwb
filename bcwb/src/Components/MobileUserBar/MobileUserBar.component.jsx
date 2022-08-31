import { changeView } from "../../ducks/navReducer"
import { connect } from 'react-redux'
import { UserHeader } from "./MobileUserBar.styles"
import { CustomLink,InvertedButton } from "../Form/Button.styles"
import { Link } from 'react-router-dom' 
import { useContext } from "react"
import { UserContext } from "../Context/user.context"
import { signOutUser } from '../../base'
import access from "../../access"

const MobileUserBar = (props) => {

    const { currentUser,setCurrentUser } = useContext(UserContext)

    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
        props.changeView(null)
    }

    const handler = () => {
        props.changeView(null)
    }

    return(
        <UserHeader>

            {/*** ACCESS TO ADMIN LINK IF APPLICABLE ***/}
            {currentUser != null && access.getAccess(currentUser.uid) === "ACCESS_GRANTED" ? 

            <CustomLink >
                <Link to="/admin" onClick={handler}>
                    <InvertedButton >Admin</InvertedButton>
                </Link>
            </CustomLink>
            : 
            null

            }
            {/* ************************************** */}
 
            <CustomLink>
                {currentUser ?
                <InvertedButton onClick={signOutHandler} >sign out</InvertedButton>
                :
                <Link to="/signin" onClick={handler} >
                    <InvertedButton  >sign in</InvertedButton>
                </Link>
                }
            </CustomLink>
 
        </UserHeader>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {changeView})(MobileUserBar)