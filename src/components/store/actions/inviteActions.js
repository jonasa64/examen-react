import axios from 'axios';
import {storage} from '../../../config/config';
axios.defaults.withCredentials = true;

export const createNewInvite = invite => {
    return (dispatch, getState) => {
        axios.get('http://localhost:8000/sanctum/csrf-cookie',{headers: {
                'Accept': 'application/json',
            }}).then(response => {
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
                console.log(body);
                axios.post('http://localhost:8000/api/invitations',body, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getState().auth.token}`
                    },
                }).then(res => dispatch({type:"CREATE_NEW_INVITE"})).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }
}

export const invitations = () => {
    return (dispatch, getState) => {
        axios.get('http://localhost:8000/api/invitations', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getState().auth.token}`
            },
        }).then(res => dispatch({type:"FETCH_INVITES", payload: res.data})).catch(err => console.log(err))
    }
}


export const invitation = (id) => {
    return (dispatch, getState) => {
        axios.get(`http://localhost:8000/api/invitations/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getState().auth.token}`
            },
        }).then(res => dispatch({type:"FETCH_INVITE", payload: res.data})).catch(err => console.log(err))
    }
}

export const deleteInvite = id => {
    return (dispatch, getState) => {

        axios.delete(`http://localhost:8000/api/invitations/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getState().auth.token}`
            },
        }).then(res => {
            dispatch({type: "DELETE_INVITE"})
        }).catch(err => console.log(err))

    }
}

  export  const updateInvite = (invite,id) => {
      return (dispatch, getState) => {
          axios.get('http://localhost:8000/sanctum/csrf-cookie', {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              }
          }).then(response => {
              const body = {
                  title: invite.title,
                  date: invite.date,
                  location: invite.location,
                  description: invite.description,
                  image: '',
                  user_id: getState().auth.user.id
              }
         /*       const storageRef = storage.ref(invite.image.name);
              storageRef.put(invite.image).on('state_changed', (snap) => {

              }, (err) => {
                  console.log(err)
              }, async () => {
                  const url = await storageRef.getDownloadURL()
                  body['image'] = url */
                  axios.put(`http://localhost:8000/api/invitations/${id}`, body, {
                      headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${getState().auth.token}`
                      },
                  }).then(res => dispatch({type: "UPDATE_INVITE", payload: res.data})).catch(err => console.log(err))
          }).catch(err => console.log(err))
             // })


      }
  }

export const invitePersons = (users, id) => {
    return (dispatch, getState) => {
        const body = {
            data: users,
            id
        }
        axios.post(`http://localhost:8000/api/invite/`, JSON.stringify(body), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getState().auth.token}`
            },
        }).then(res => {
            dispatch({type: "INVITE_PERSONS"})
        }).catch(err => console.log(err))

    }
}