import { combineReducers, legacy_createStore, compose } from "redux";
import listReducer from "./reducers/listReducer";
import addItemReducer from "./reducers/addItemReducer";
import filterReducer from "./reducers/filterReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    return legacy_createStore(
        combineReducers({
            data: listReducer,
            item: addItemReducer,
            filter: filterReducer
        }),
        undefined,
        compose(
        ReactReduxDevTools,
        )
    )
}

export default configureStore;