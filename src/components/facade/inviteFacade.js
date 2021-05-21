import axios from 'axios'


export const create = async (body, token) => {
    try {
        return await  axios.post('http://localhost:8000/api/invitations',body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

    }catch (error) {
        console.log(error);
    }
}

export const all = async token => {
    try {
    return await axios.get('http://localhost:8000/api/invitations', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
    }catch (error) {
        console.log(error);
    }
}

export const one = async (id,token) => {
    try {
       return await axios.get(`http://localhost:8000/api/invitations/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

    } catch (error) {
        console.log(error)
    }

}

export const remove = async (id, token) => {
    try {
       return await axios.delete(`http://localhost:8000/api/invitations/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

    } catch (error) {
        console.log(error);
    }
}

export const update =  async (body, token, id) => {
    try {
       return await axios.put(`http://localhost:8000/api/invitations/${id}`, body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
    } catch (error) {
        console.log(error);
    }
}

export  const invite = async (body, token) => {
    return await axios.post(`http://localhost:8000/api/invite/`, JSON.stringify(body), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
}

export const updateStatus = async (body, token, id) => {
    try {
        return await  axios.put(`http://localhost:8000/api/invite/${id}`, JSON.stringify(body), {
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (error){
        console.log(error)
    }
}