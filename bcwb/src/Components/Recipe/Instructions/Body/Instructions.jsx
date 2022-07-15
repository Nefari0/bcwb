import './Instructions.scss'

const Instructions = (props) => {
    const { recipe,step,content } = props
    return(
        <p className='Instruction' >{step}{content}</p>
    )
}

export default Instructions