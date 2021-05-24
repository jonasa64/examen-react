import axios from 'axios';
import {signUp, signIn, signOut} from '../../facade/authFacde'
import {setMessage} from '../actions/messageActions';
axios.defaults.withCredentials = true;
export const login = credentials => {
    return (dispatch, getState) => {
        axios.get('http://localhost:8000/sanctum/csrf-cookie',{headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }}).then(response => {
            const body = {
                email: credentials.email,
                password: credentials.password
            }
             signIn(body).then(data =>  dispatch({type:"LOGIN", payload: data})).catch(err => {
             })

        }).catch(err => console.log(err))


    }
}

export const register = credentials => {
    return (dispatch, getState) => {
        axios.get('http://localhost:8000/sanctum/csrf-cookie', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            const body = {
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                password_confirmation: credentials.passwordConfirmation
            }
           signUp(body).then(data => dispatch({type: "REGISTER", payload: data}))

        }).catch(err => console.log(err)).catch(err => console.log(err))
    }
}


export const logout = () => {
    return (dispatch, getState) => {
        console.log(getState().auth.token);
       axios.get('http://localhost:8000/sanctum/csrf-cookie', {
         headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {

              signOut(getState().auth.token).then(data => {
                  dispatch({type: "LOGOUT"})
              }).catch(err => console.log(err));

        }).catch(err => console.log(err))
    }
}