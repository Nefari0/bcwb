import './Nav.css'
import Hamburgar from './Hamburger'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes'

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
            <Link to='/' ><h1>logo</h1></Link>
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