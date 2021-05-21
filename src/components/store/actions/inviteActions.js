import axios from 'axios';
import {storage} from '../../../config/config';
import {create, all, one, remove, invite, update, updateStatus} from '../../facade/inviteFacade';
axios.defaults.withCredentials = true;

export const createNewInvite = invite => {
    return (dispatch, getState) => {

            let body = {
                title: invite.title,
                date: invite.date,
                location: invite.location,
                description: invite.description,
                user_id: getState().auth.user.id
            }

            if(invite.image !== '') {
                body['image'] = invite.image
            }
            create(body, getState().auth.token).then(res => dispatch({type:"CREATE_NEW_INVITE"})).catch(err => console.log(err))
      
    }
}

export const invitations = () => {
    return (dispatch, getState) => {
        
       all(getState().auth.token).then(res => dispatch({type:"FETCH_INVITES", payload: res.data})).catch(err => console.log(err))
    }
}


export const invitation = (id) => {
    return (dispatch, getState) => {
    one(id,getState().auth.token).then(res => {
        console.log(res);
        dispatch({type:"FETCH_INVITE", payload: res.data})
    }).catch(err => console.log(err))
    }
}

export const deleteInvite = id => {
    return (dispatch, getState) => {

remove(id,getState().auth.token).then(res => {
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

                  update(body, getState().auth.token, id).then(res => {
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
 invite(body, getState().auth.token).then(res => {
            dispatch({type: "INVITE_PERSONS"})
        }).catch(err => console.log(err))

    }
}

export const updateInviteStatus = (invite, id) => {
    return (dispatch, getState) => {
        const body = {
            status: invite
        }

        updateStatus(body, getState().auth.token, id).then(res => dispatch({type: "INVITE_STATUS_UPDATED", payload: res})).catch(err => console.log(err));

    }
}