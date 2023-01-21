import { SAVE_FORM, EDIT_FIELD, CANCEL_ACTION } from "../actions";
const initialState = {
    id: '',
    name: '',
    price: ''
}

const addItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_FORM: {
            const { name, value } = action.payload;
            return { ...state, [name]: value }
        }
        case EDIT_FIELD: {
            const { id, name, price } = action.payload;
            return { ...state, id, name, price }
        }
        case CANCEL_ACTION: {
            return { ...initialState }
        }
        default:
          return state;
      }
}

export default addItemReducer;