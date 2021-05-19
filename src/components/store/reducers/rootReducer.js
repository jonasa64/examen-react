import {combineReducers} from "redux";
import authReducer from "./authReducer";
import inviteReducer from "./inviteReducers";
import friendshipReducer  from  "./friendshipReducer";

const rootReducer =  combineReducers({
    auth: authReducer,
    invite: inviteReducer,
    friend: friendshipReducer
})

export default rootReducer;