const initSate = {
    invitations: [],
    inviteError: null,
    invite: null,
}


const inviteReducer = (state = initSate, action) => {
    switch (action.type){
        case "CREATE_NEW_INVITE":
            return {
                ...state
            }
            break;
        case "UPDATE_INVITE":
            return {
                ...state,
                invite: action.payload
            }
            break;
        case "FETCH_INVITES":
            return {
                ...state,
                invitations: action.payload
            }
        case "FETCH_INVITE":
            return {
                ...state,
                invite: action.payload
            }
        case "DELETE_INVITE":
            return {
                ...state,
                invite: null
            }

        case "INVITE_PERSONS":
            return {
                ...state
            }
        default :
            return state;
    }
}

export default inviteReducer;