const initState = {
    token: null,
    user: null,
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
        default:
            return state;
    }
}

export default authReducer;
