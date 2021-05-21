const initSate = {
    invitations: [],
    invitedTo: [],
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
                invite: {...action.payload}
            }
            break;
        case "FETCH_INVITES":
            return {
                ...state,
                invitations: [...action.payload.data],
                invitedTo: [...action.payload.invitedTo]
            }
        case "FETCH_INVITE":
            return {
                ...state,
                invite: {...action.payload.data}
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

        case "INVITE_STATUS_UPDATED":
            return {
                ...state,
                invitedTo: [...action.payload.invitedTo]
            }
        default :
            return state;
    }
}

export default inviteReducer;