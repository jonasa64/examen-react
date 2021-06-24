import axios from "axios";
import {API_URL} from '../../../config/httpConfig';
export const friendshipRequest = (recipient) => {
    return (dispatch, getState) => {

                axios.post(`${API_URL}friendship/${recipient}`,JSON.stringify(''), {
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

            axios.get(`${API_URL}accept/friendship/`, {
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

            axios.post(`${API_URL}accept/friendship/${sender}`, JSON.stringify(''), {
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
        axios.delete(`${API_URL}accept/friendship/${sender}`, {
                headers: {
                    'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getState().auth.token}`
                },
            }).then(res => {
                console.log(res)
                dispatch({type:"REJECT_FRIEND_REQUST", payload: res.data})
            }).catch(err => console.log(err))

    }
}

