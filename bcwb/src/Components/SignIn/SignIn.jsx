import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../Utils/firebase/firebase.utils"

const SignIn = (prop) => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(user)
    }

    return(
        <div style={{height:'400px',width:'400px',backgroundColor:'blue'}} >
            <h2 style={{color:'#555'}} >sign in</h2>
            <button onClick={() => logGoogleUser()}>sign in with google popup</button>
        </div>
    )
}

export default SignIn