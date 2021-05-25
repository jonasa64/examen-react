import axios from 'axios';
import {storage} from '../../../config/config';
import {create, all, one, remove, invite, update, updateStatus} from '../../facade/inviteFacade';
axios.defaults.withCredentials = true;

export const createNewInvite = invite => {
    return (dispatch, getState) => {
        const formatDate = `${invite.date.getFullYear()}-${invite.date.getMonth() + 1 >= 10 ? invite.date.getMonth() + 1 : "0" + (invite.date.getMonth() + 1)}-${invite.date.getDate() >= 10 ? invite.date.getDate() : "0" + invite.date.getDate() }`;
            let body = {
                title: invite.title,
                date: formatDate ,
                location: invite.location,
                description: invite.description,
                user_id: getState().auth.user.id
            }
            if(invite.image !== '') {
                body['image'] = invite.image
            }
           create(body).then(res => {
               dispatch({type: "SET_MESSAGE", payload: {message: 'Invite created', type :'success'}})
               dispatch({type:"CREATE_NEW_INVITE"})
           }).catch(err => console.log(err))
      
    }
}

export const invitations = () => {
    return (dispatch, getState) => {
        
       all().then(res => dispatch({type:"FETCH_INVITES", payload: res.data})).catch(err => console.log(err))
    }
}


export const invitation = (id) => {
    return (dispatch, getState) => {
    one(id,getState().auth.token).then(res => {
        dispatch({type:"FETCH_INVITE", payload: res.data})
    }).catch(err => console.log(err))
    }
}

export const deleteInvite = id => {
    return (dispatch, getState) => {

remove(id).then(res => {
            dispatch({type: "SET_MESSAGE", payload: {message: 'Invite is Deleted', type :'success'}})
            dispatch({type: "DELETE_INVITE"})
        }).catch(err => console.log(err))

    }
}

  export  const updateInvite = (invite,id) => {
      return (dispatch, getState) => {

              let body = {
                  title: invite.title,
                  date: invite.date,
                  location: invite.location,
                  description: invite.description,
                  user_id: getState().auth.user.id
              }

              if(invite.image !== ''){
                  body['image'] = invite.image
              }

                  update(body, id).then(res => {
                      dispatch({type: "SET_MESSAGE", payload: {message: 'Invite is updated', type :'success'}})
                      dispatch({type: "UPDATE_INVITE", payload: res.data})
                  }).catch(err => console.log(err))
      }
  }

export const invitePersons = (users, id) => {
    return (dispatch, getState) => {
        const body = {
            data: users,
            id
        }
 invite(body).then(res => {
            dispatch({type: "SET_MESSAGE", payload: {message: 'Persons added to invite', type :'success'}})
            dispatch({type: "INVITE_PERSONS"})
        }).catch(err => console.log(err))

    }
}

export const updateInviteStatus = (invite, id) => {
    return (dispatch, getState) => {
        const body = {
            status: invite
        }
        updateStatus(body, getState().auth.token, id).then(res => dispatch({type: "INVITE_STATUS_UPDATED", payload: res.data})).catch(err => console.log(err));

    }
}