import {combineReducers} from "redux";
import authReducers from "./authReducer"

const rootReducers = combineReducers({
    auth : authReducers
})

export default rootReducers;