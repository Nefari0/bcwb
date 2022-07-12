import './Instructions.scss'

const Instruction = (props) => {
    const { recipe,step,content } = props
    return(
        <p className='Instruction' >{step}{content}</p>
    )
}

export default Instruction