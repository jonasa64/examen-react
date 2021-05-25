import axios from 'axios'
import {API_URL, HEADERS } from '../../config/httpConfig';
axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
export const create = async body => {
    try {
        return await  axios.post(`${API_URL}invitations`,body, { HEADERS})

    }catch (error) {
        console.log(error);
    }
}

export const all = async () => {
    try {
    return await axios.get(`${API_URL}invitations`, {HEADERS})

    }catch (error) {
        return error;
    }
}

export const one = async id => {
    try {
       return await axios.get(`${API_URL}invitations/${id}`, {HEADERS})

    } catch (error) {
           return error
    }

}

export const remove = async id => {
    try {
       return await axios.delete(`${API_URL}invitations/${id}`, {HEADERS})

    } catch (error) {
        return error
    }
}

export const update =  async (body, id) => {
    try {
       return await axios.put(`${API_URL}/invitations/${id}`, JSON.stringify(body), {HEADERS})
    } catch (error) {
        return error;
    }
}

export  const invite = async (body) => {
    try {

        return await axios.post(`${API_URL}invite/`, JSON.stringify(body), {HEADERS})
    } catch (error) {
        return error;
    }

}

export const updateStatus = async (body, id) => {
    try {
        return await  axios.put(`${API_URL}invite/${id}`, JSON.stringify(body), {HEADERS})
    } catch (error){
        return error;
    }
}