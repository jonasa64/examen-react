import axios from 'axios'
import {API_URL, HEADERS, BASE_URL } from '../../config/httpConfig';
axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
export const create = async (body, token) => {
    try {

    const request = await  fetch(`${API_URL}invitations`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify(body)
    })

        return await request.json();


    }catch (error) {
        console.log(error);
    }
}

export const all = async (token) => {
    try {

      const request =  await  fetch(`${API_URL}invitations`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        const  data = await  request.json();
        return data;



    }catch (error) {
        return error;
    }
}

export const one = async (id, token) => {
    try {

        const request =  await  fetch(`${API_URL}invitations/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })

        return  await  request.json();


    } catch (error) {
           return error
    }

}

export const remove = async (id, token) => {
    try {


            return await axios.delete(`${API_URL}invitations/${id}`, {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`

            })

    } catch (error) {
        return error
    }
}

export const update =  async (body, id, token) => {
    try {

       const request =  await fetch(`${API_URL}invitations/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            method: "PUT",
            body: JSON.stringify(body)
        })

        return await request.json();


    } catch (error) {
        return error;
    }
}

export  const invite = async (body, token) => {
    try {

            return await axios.post(`${API_URL}invite/`, body, {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            })

    } catch (error) {
        return error;
    }

}

export const updateStatus = async (bodyData, id, token) => {
    try {
        const requets = await  fetch(`${API_URL}invite/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify(bodyData),
            method: "PUT",

        })

        return await  requets.json();

    } catch (error){
        return error;
    }
}