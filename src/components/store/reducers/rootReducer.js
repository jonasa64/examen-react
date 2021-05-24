import {combineReducers} from "redux";
import authReducer from "./authReducer";
import inviteReducer from "./inviteReducers";
import friendshipReducer  from  "./friendshipReducer";
import messageReducer from './messageReducer'
const rootReducer =  combineReducers({
    auth: authReducer,
    invite: inviteReducer,
    friend: friendshipReducer,
    message: messageReducer
})

export default rootReducer;