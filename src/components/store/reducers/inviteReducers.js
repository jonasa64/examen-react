const initSate = {
    invitations: [],
    inviteError: null,
    invite: null,
}


const inviteReducer = (state = initSate, action) => {
    switch (action.type){
        case "CREATE_NEW_INVITE":
            console.log(action.payload)
            return {
                ...state,
              invitations: [...state.invitations, action.payload]
            }
            break;
        case "UPDATE_INVITE":
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
            break;
        default :
            return state;
    }
}

export default inviteReducer;