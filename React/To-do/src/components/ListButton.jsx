import DeleteIcon from '@mui/icons-material/Delete';

function ListButton(props){
    return(
        <button onClick={() => {
            props.onChecked(props.id)}}><DeleteIcon className='trashIcon'/></button>
    )
}
export default ListButton
