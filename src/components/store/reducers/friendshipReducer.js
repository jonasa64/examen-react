const initSate = {
    friendships: [],
    sendFriendshipRequests : [],
    error: null
}


const friendshipReducer = (state = initSate, action) => {
    switch (action.type){
        case "SEND_FRIEND_REQUEST" :
            break;
        case "ACCEPT_FRIEND_REQUST":
            console.log(action.payload);
            return {
                ...state,
                friendships: [...action.payload.data]
            }
        case "REJECT_FRIEND_REQUST":
            return {
                ...state,
                friendships: [...action.payload.data]
            }
        case "FECHT_FRIENDS":
            return {
                ...state,
                friendships: [...action.payload.data],
                sendFriendshipRequests: [...action.payload.sendRequests]
            }
        default:
            return state;
    }
}

export default friendshipReducer;