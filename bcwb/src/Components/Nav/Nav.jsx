import './Nav.css'
import Hamburgar from './Hamburger'
import { useState } from 'react'

const Nav = (props) => {

    const [ menu,setMenu ] = useState(false)

    return(
        <nav>
            <ul className='desktop-nav' >
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ul>
            <Hamburgar setMenu={setMenu} menu={menu} /> 
            <h1>logo</h1>
            <h1>search</h1>
            <ul className={`mobile-nav ${menu ? true : 'closed'}`} >
                {menu ? <div>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <p onClick={() => setMenu(false)} >X</p>
                </div> : null}
            </ul>
        </nav>
    )
}

export default Nav