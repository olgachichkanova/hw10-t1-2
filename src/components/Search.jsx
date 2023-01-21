import { useDispatch, useSelector } from "react-redux";
import { FILTER_FIELD } from "../redux/actions";

const Search = () => {
    const dispatch = useDispatch();
    const {filterValue} = useSelector(state => state.filter);

    const handleInput = (e) => {
        const query = e.target.value;
        dispatch({
            type: FILTER_FIELD,
            payload: query
        })
    }

    return (
        <div className="search__box">
            <input 
                type="text" 
                placeholder="To filter data start typing something..." 
                value={filterValue} 
                onChange={(e) => handleInput(e)} 
            />
        </div>
    )
}

export default Search;