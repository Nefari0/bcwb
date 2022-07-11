import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../base"

const SignIn = (props) => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return(
        <form>
            <h2 style={{color:'#555'}} >sign in</h2>
            <button onClick={() => logGoogleUser()}>sign in with google popup</button>
        </form>
    )
}

export default SignIn