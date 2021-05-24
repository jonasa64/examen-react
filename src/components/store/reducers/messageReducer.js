const initState = {
    message: null,
    type: null
}

const messageReducer = (state = initState, action) => {
    switch (action.type){
        case "SET_MESSAGE":
            return {
                ...state,
               message: action.payload.message,
                type: action.payload.type
            }
        case "REMOVE_MESSAGE":
            return {
                ...state,
                message: null,
                type: null
            }
            break;
        default:
            return state;
    }
}

export default messageReducer;