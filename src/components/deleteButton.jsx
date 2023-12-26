

const DeleteButton = ({id, click}) => {
    return (
        <div>
            <button onClick={click(id)}> Delete </button>
        </div>
    )
}

export default DeleteButton