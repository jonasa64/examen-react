import axios from 'axios'
import {API_URL, HEADERS, BASE_URL } from '../../config/httpConfig';
axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
export const create = async (body, token) => {
    try {
        const crsf =  await axios.get(`${BASE_URL}sanctum/csrf-cookie`,{HEADERS})
        if(crsf){
            return await  axios.post(`${API_URL}invitations`,body, {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token})
        }


    }catch (error) {
        console.log(error);
    }
}

export const all = async (token) => {
    try {

            return await axios.get(`${API_URL}invitations`, {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            })


    }catch (error) {
        return error;
    }
}

export const one = async (id, token) => {
    try {
        const crsf =  await axios.get(`${BASE_URL}sanctum/csrf-cookie`,{HEADERS})
        if(crsf){
            return await axios.get(`${API_URL}invitations/${id}`, {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }


    } catch (error) {
           return error
    }

}

export const remove = async (id, token) => {
    try {
        const crsf =  await axios.get(`${BASE_URL}sanctum/csrf-cookie`,{HEADERS})
        if(crsf) {


            return await axios.delete(`${API_URL}invitations/${id}`, {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }

    } catch (error) {
        return error
    }
}

export const update =  async (body, id, token) => {
    try {
        const crsf =  await axios.get(`${BASE_URL}sanctum/csrf-cookie`,{HEADERS})
        if(crsf){
            return await axios.put(`${API_URL}/invitations/${id}`, body, {'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token})
        }

    } catch (error) {
        return error;
    }
}

export  const invite = async (body, token) => {
    try {
        const crsf =  await axios.get(`${BASE_URL}sanctum/csrf-cookie`,{HEADERS})
        if(crsf){
            return await axios.post(`${API_URL}invite/`, body, {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }

    } catch (error) {
        return error;
    }

}

export const updateStatus = async (body, id, token) => {
    try {
        const crsf =  await axios.get(`${BASE_URL}sanctum/csrf-cookie`,{HEADERS})
        if(crsf){
            const res = await  axios.put(`${API_URL}invite/${id}`,body, {'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token})
            return res;
        }

    } catch (error){
        return error;
    }
}