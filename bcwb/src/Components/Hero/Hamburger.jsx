import './Hamburger.css'

function Hamburgar(props){

    const { setMenu,menu } = props

    return(
        <svg className="hamburger" onClick={() => setMenu(!menu)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
}

export default Hamburgar