
const Content = (props) => {

    const { img,text,style } = props

    return(<div style={style} >
        <img src={img}/>
        <p>{text}</p>
    </div>)
}

export default Content