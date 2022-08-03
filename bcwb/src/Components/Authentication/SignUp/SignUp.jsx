import FormInput from "../../Form/FormInput";
import { useState } from "react";
import { BaseButton, GoogleSignInButton, InvertedButton } from "../../Form/Button.styles";
import { Form } from "../../Form/FormInput.styles";
// import { SectionText } from "../../StyledComponents.styles";
import { signInWithGooglePopup,createUserDocumentFromAuth,createAuthUserWithEmailAndPassword } from "../../../base"
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom' 
// import { createAuthUserWithEmailAndPassword } from "../../base";

const defaultState = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUp = (props) => {

    const [ formFields,setFormFields ] = useState(defaultState)
    const { email,password,displayName,confirmPassword } = formFields

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        props.history.push(`/home/${userDocRef.id}`)
    }

    const handleChange = (event) => {
        event.preventDefault()
        const  { name,value } = event.target
        setFormFields({...formFields, [name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        if(password != confirmPassword) {
            alert("Passwords do not match")
            return
        }
        
        
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email,password);

            props.history.push(`/home/${user.uid}`)

            await createUserDocumentFromAuth(user,{ displayName })
            
            resetForm()

        } catch(error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    alert('This email is already being used. Please choose another email')
                    break;
                case "auth/invalid-email":
                    alert("Invalid email address")
                default:
                    console.log('user creation encountered an error',error);
            }
        }
    }

    const resetForm = () => {
        setFormFields(defaultState)
    }

    return(
        <>
            <Form onSubmit={handleSubmit} >

                <h4>Dont have an account</h4>
                
                <FormInput
                label='Email'
                name='email'
                type='text'
                required
                onChange={handleChange} 
                value={email}
                />

                <FormInput
                label='Display Name'
                name='displayName'
                type='text'
                required
                onChange={handleChange} 
                value={displayName}
                />


                <FormInput
                label='Password'
                name='password'
                type='password'
                required
                onChange={handleChange} 
                value={password}
                />

                <FormInput
                label='Confirm Password'
                name='confirmPassword'
                type='password'
                required
                onChange={handleChange} 
                value={confirmPassword}
                />

                <BaseButton type="submit" >Sign Up</BaseButton>


            </Form>

            <Form>
                <GoogleSignInButton onClick={() => logGoogleUser()}>sign in with google</GoogleSignInButton>

                <Link to="/signin" style={{textDecoration:'none'}} ><InvertedButton>already have an account?</InvertedButton></Link>
            </Form>
        </>
        
    )
}

export default withRouter(SignUp)

// export default SignIn