import FormInput from "../../Form/FormInput"
import { Form } from "../../Form/FormInput.styles"
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { useState,useContext } from "react"
import { BaseButton,GoogleSignInButton,InvertedButton } from "../../Form/Button.styles"

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../../base"

import { UserContext } from "../../Context/user.context"

const defaultState = {
    email:'',
    password:'',
}

const SignIn = (props) => {

    const [ formFields,setFormFields ] = useState(defaultState)
    const { password,email } = formFields
    const  { setCurrentUser } = useContext(UserContext)

    const resetForm = () => {
        setFormFields(defaultState)
    }

    const logGoogleUser = async (event) => {
        event.preventDefault()
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)

        await props.history.push(`/home/${userDocRef.id}`)
        setCurrentUser(user)

    }

    const handleChange = (event) => {
        event.preventDefault()
        const  { name,value } = event.target
        setFormFields({...formFields, [name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        try {

            const { user } = await signInAuthUserWithEmailAndPassword(email,password)

            await setCurrentUser(user)
            await resetForm()
            await props.history.push(`/home/${user.uid}`)
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password": 
                    alert('Incorrect password')
                    break;
                case "auth/user-not-found":
                    alert(`User with email address ${email} does not exist`)
                    break;
                case "auth/too-many-requests":
                    alert('Too many login attempts. Please reset your password or try again later.')
                default:
                    console.log(error)
            }
        }


    }

    return(
        <>
        {/* --- SIGN IN WITH EMAIL --- */}
        <Form onSubmit={handleSubmit}>

            <h4>Have an account?</h4>

            <FormInput
                label='Email'
                name='email'
                type='text'
                 required
                onChange={handleChange} 
                value={email}
            />

            <FormInput
                label='Password'
                name='password'
                type='password'
                 required
                onChange={handleChange} 
                value={password}
            />

            <BaseButton type="submit" >Sign In</BaseButton>


        </Form>

        {/* --- SIGN IN WITH GOOGLE / CREATE NEW ACCOUNT */}
        <Form>
            <GoogleSignInButton onClick={logGoogleUser}>sign in with google</GoogleSignInButton>
            <Link to="/signup" style={{textDecoration:'none'}} ><InvertedButton>Dont have an account?</InvertedButton></Link>
        </Form>
        </>
    )
}

export default withRouter(SignIn)