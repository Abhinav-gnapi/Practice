function ListButton(props){
    return(
        <button onClick={() => {
            props.onChecked(props.id)}}>Delete</button>
    )
}
export default ListButton
