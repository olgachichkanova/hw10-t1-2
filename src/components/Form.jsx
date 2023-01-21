import { useDispatch, useSelector } from "react-redux";
import { CANCEL_ACTION, SAVE_FORM, SAVE_ITEM } from "../redux/actions";

const Form = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.item)
    
    const handleAdd = (e) => {
        e.preventDefault()
        dispatch({
            type: SAVE_ITEM,
            payload: {...item, name: item.name, price: item.price}
        })
        dispatch({type: CANCEL_ACTION})
    }
    const handleInput = (e) => {
        const {name, value} = e.target
        dispatch({
            type: SAVE_FORM,
            payload: {name, value}
        })
    }
    const handleCancel = (e) => {
        e.preventDefault()
        dispatch({type: CANCEL_ACTION})
    }

    return (
        <form>
            <input name="name" type="text" value={item.name} onChange={(e) => handleInput(e)}/>
            <input name="price" type="text" value={item.price} onChange={(e) => handleInput(e)}/>
            <button onClick={(e) => handleAdd(e)}>Add</button>
            <button onClick={(e) => handleCancel(e)}>Cancel</button>
        </form>
    )
}

export default Form;