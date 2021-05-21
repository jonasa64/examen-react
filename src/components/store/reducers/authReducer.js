import {invitations} from '../actions/inviteActions'
const initState = {
    token: null,
    user: null,
    error: null
}

const authReducer = (state = initState, action) => {
    switch (action.type){
        case "LOGIN":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        case "REGISTER":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            break;
        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: null
            }
        case "LOGIN_ERROR":
           return {
               ...state,
               error: "Login failed worng email or password"
           }
        case "REGISTER_ERROR":
            break
        default:
            return state;
    }
}

export default authReducer;
