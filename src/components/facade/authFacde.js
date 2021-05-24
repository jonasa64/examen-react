import axios from 'axios'
import {setMessage} from '../store/actions/messageActions';
export const signIn = async body => {
    try {
        const res = await axios.post('http://localhost:8000/api/login', body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        localStorage.setItem('token',  res.data.token);
        return res.data;
    } catch (error){
        return error.message;
    }
}

export const signUp = async body => {

    try {
        const res =  await axios.post('http://localhost:8000/api/register', body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        return res.data;
    }catch (error){
        return error.message;
    }
}

export  const signOut = async (token)  => {
    try {
        const res = await axios.post('http://localhost:8000/api/logout', JSON.stringify(''), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        localStorage.removeItem('token')
        return res.data;
    } catch (error) {
        return error.message;
    }

}