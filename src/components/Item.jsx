import { useDispatch, useSelector } from "react-redux"
import { DELETE_ITEM, EDIT_FIELD } from "../redux/actions";

const Item = ({item}) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const field = useSelector(state => state.item);

    const handleRemove = (id) => {
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    }

    const handleEdit = (iId) => {
        const [{id, name, price}] = data.filter(i => i.id === iId);

        dispatch({
            type: EDIT_FIELD,
            payload: {...field, id, name, price}
        })
    }
    
    return (
        <li>
            <span>{item.name}  {item.price} </span>
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleRemove(item.id)}>Delete</button>
        </li>
    )
}

export default Item;