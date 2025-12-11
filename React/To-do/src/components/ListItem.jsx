function ListItem(props){
    return(
        <li onClick={() => props.onClick(props.id)} style={props.style}>{props.element}</li>
    )
}
export default ListItem