const initSate = {
    friendships: [],
    error: null
}


const friendshipReducer = (state = initSate, action) => {
    switch (action.type){
        case "SEND_FRIEND_REQUEST" :
            break;
        case "ACCEPT_FRIEND_REQUST":
            return {
                ...state
            }
        case "REJECT_FRIEND_REQUST":
            return {
                ...state
            }
        case "FECHT_FRIENDS":
            return {
                ...state,
                friendships: action.payload
            }
        default:
            return state;
    }
}

export default friendshipReducer;