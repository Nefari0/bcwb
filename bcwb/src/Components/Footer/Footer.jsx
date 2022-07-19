import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import access from '../../access'
import FormInput from '../Form/FormInput'

export const Footer = (props) => {

    const text = localStorage['text']
    const setLocal = (name,value) => {
        access.getAccess(localStorage.setItem(name,value))
        
    }

    const setFormItems = (e) => {
        const { name,value } = e.target
        e.preventDefault()
        setLocal(name,value)
    }

    const style={
        display:'flex',
        justifyContent:'space-evenly'

    }

    return(
        <footer style={style} >
            {access.getAccess(text) === "ACCESS_GRANTED" ? 
            <Link to="/admin" ><h1>admin</h1></Link>
            :
            <>
                <input  type="text" name="text" onChange={setFormItems} />
                <button onClick={() => setLocal()} >submit</button>
            </>}
        </footer>
    )
}