import axios from "axios";

export const friendshipRequest = (recipient) => {
    return (dispatch, getState) => {

                axios.post(`http://localhost:8000/api/friendship/${recipient}`,JSON.stringify(''), {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getState().auth.token}`
                    },
                }).then(res => dispatch({type:"SEND_FRIEND_REQUEST"})).catch(err => console.log(err))

    }
}

export const friendships = () => {
    return (dispatch, getState) => {

            axios.get('http://localhost:8000/api/accept/friendship/', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getState().auth.token}`
                },
            }).then(res => {
                dispatch({type:"FECHT_FRIENDS", payload: res.data})
            }).catch(err => console.log(err))

    }
}

export const acceptFriendship = (sender) => {
    return (dispatch, getState) => {

            axios.post(`http://localhost:8000/api/accept/friendship/${sender}`, JSON.stringify(''), {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getState().auth.token}`
                },
            }).then(res => {
                console.log(res)
                dispatch({type:"ACCEPT_FRIEND_REQUST", payload: res.data})
            }).catch(err => console.log(err))
    }
}

export const rejectFriendship = (sender) => {
    return (dispatch, getState) => {
        axios.delete(`http://localhost:8000/api/accept/friendship/${sender}`, {
                headers: {
                    'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getState().auth.token}`
                },
            }).then(res => {
                console.log(res)
                dispatch({type:"REJECT_FRIEND_REQUST"})
            }).catch(err => console.log(err))

    }
}

