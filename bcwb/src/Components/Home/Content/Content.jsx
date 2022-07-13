
const Content = (props) => {

    const { img,text,style } = props

    return(<div style={style.main} >
        <img src={img} style={style.img} />
        <p>{text}</p>
    </div>)
}

export default Content