import { FILTER_FIELD } from "../actions";

const initialState = {
    value: ''
}
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_FIELD:
            return {
                ...state,
                value: action.payload
            }
        default:
            return state
    }
}

export default filterReducer;