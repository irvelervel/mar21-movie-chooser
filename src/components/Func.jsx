const Func = (props) => {
    let name = 'kostas'
    const showName = () => {
        return name
    }
    return (
        <h1>{showName()}</h1>
    )
}

export default Func