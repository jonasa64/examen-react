import {combineReducers} from "redux";
import authReducer from "./authReducer";
import inviteReducer from "./inviteReducers";


const rootReducer =  combineReducers({
    auth: authReducer,
    invite: inviteReducer
})

export default rootReducer;