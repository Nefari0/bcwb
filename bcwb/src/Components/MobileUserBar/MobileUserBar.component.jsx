import { UserHeader } from "./MobileUserBar.styles"
import { BaseButton,DecoButtonWrapper } from "../Form/Button.styles"
import { Link } from 'react-router-dom' 
import { useContext } from "react"
import { UserContext } from "../Context/user.context"
import { signOutUser } from '../../base'
import { styles } from "../Styles/customStyles"
import access from "../../access"

const { decoButton } = styles

export const MobileUserBar = (props) => {

    const { currentUser,setCurrentUser } = useContext(UserContext)

    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

    return(
        <UserHeader>

            {/*** ACCESS TO ADMIN LINK IF APPLICABLE ***/}
            {currentUser != null && access.getAccess(currentUser.uid) === "ACCESS_GRANTED" ? 

            <DecoButtonWrapper >
                <Link to="/admin">
                    <BaseButton style={decoButton} >Admin</BaseButton>
                </Link>
            </DecoButtonWrapper>
            : 
            null

            }
            {/* ************************************** */}
 
            <DecoButtonWrapper>
                {currentUser ?
                <BaseButton style={decoButton} onClick={signOutHandler} >sign out</BaseButton>
                :
                <Link to="/signin" >
                    <BaseButton style={decoButton} >sign in</BaseButton>
                </Link>
                }
            </DecoButtonWrapper>
 
        </UserHeader>
    )
}