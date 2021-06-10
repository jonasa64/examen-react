import axios from 'axios'
import {setMessage} from '../store/actions/messageActions';
import {BASE_URL,API_URL, HEADERS } from '../../config/httpConfig';
//axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
axios.defaults.withCredentials = true;

export const signIn = async body => {
    try {
        const crsf =  await axios.get(`${BASE_URL}sanctum/csrf-cookie`,{HEADERS})

        if(crsf){
            const res = await axios.post(`${API_URL}login`, body, {
                HEADERS
            })

            localStorage.setItem('token',  res.data.token);
            return res.data;
        }
    } catch (error){
        return error;
    }
}

export const signUp = async body => {

    try {
        const crsf =  await axios.get(`${BASE_URL}sanctum/csrf-cookie`,{HEADERS})
        if(crsf){
            const res =  await axios.post(`${API_URL}register`, body, {
                HEADERS
            })
            return res.data;
        }
    }catch (error){
        return error.message;
    }
}

export  const signOut = async (token)  => {
    try {
        const crsf =  await axios.get(`${BASE_URL}sanctum/csrf-cookie`,{HEADERS})
        if(crsf){
            const res = await axios.post(`${API_URL}logout`, JSON.stringify(''), {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            })
            localStorage.removeItem('token')
            return res.data;
        }

    } catch (error) {
        return error.message;
    }

}