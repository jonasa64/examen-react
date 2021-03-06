import axios from 'axios';
import {signUp, signIn, signOut} from '../../facade/authFacde'
import {setMessage} from '../actions/messageActions';
axios.defaults.withCredentials = true;
export const login = credentials => {
    return (dispatch, getState) => {

            const body = {
                email: credentials.email,
                password: credentials.password
            }
             signIn(body).then(data =>  {
                if(data.message === "Request failed with status code 422"){
                    dispatch({type: "SET_MESSAGE", payload: {message: 'Pleas fill out email and password', type :'danger'}})
                }

                 if(data.message === "Request failed with status code 401"){
                     dispatch({type: "SET_MESSAGE", payload: {message: 'Wrong email or password', type :'danger'}})
                 }
                 dispatch({type: "SET_MESSAGE", payload: {message: 'you are now looged in', type :'success'}})
                 dispatch({type:"LOGIN", payload: data})
             }).catch(err => {
                 console.log(err);
             })


    }
}

export const register = credentials => {
    return (dispatch, getState) => {

            const body = {
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                password_confirmation: credentials.passwordConfirmation
            }
           signUp(body).then(data => dispatch({type: "REGISTER", payload: data}))

    }
}


export const logout = () => {
    return (dispatch, getState) => {


              signOut(getState().auth.token).then(data => {
                  dispatch({type: "SET_MESSAGE", payload: {message: 'you are now looged out', type :'success'}})
                  dispatch({type: "LOGOUT"})
              }).catch(err => console.log(err));

    }
}