import shortid from "shortid";
import { SAVE_ITEM, DELETE_ITEM } from "../actions";

const initialState = [
    { id: shortid.generate(), name: 'Change glass', price: 500 },
    { id: shortid.generate(), name: 'Change display', price: 3000 },
  ];

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ITEM: {
            const {id, name, price} = action.payload;
            if(id === "") {
                return [...state, {id: shortid.generate(), name: name, price: Number(price)}]
            } return state.map(i => i.id === id ? {...i, name: name, price: Number(price)} : i)
        }
        case DELETE_ITEM: {
            const id = action.payload;
            return state.filter(i => i.id !== id)
        }
        default:
          return state;
      }
}

export default listReducer;