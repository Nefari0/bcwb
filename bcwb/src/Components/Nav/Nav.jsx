import './Nav.css'

const Nav = (props) => {

    return(
        <nav>
            <ul className='desktop-nav' >
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ul>

            <ul className='mobile-nav' >
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ul>
        </nav>
    )
}

export default Nav