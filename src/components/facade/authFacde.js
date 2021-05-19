import axios from 'axios'
export const signIn = async body => {
    try {
        const res = await axios.post('http://localhost:8000/api/login', body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        console.log(res);
        return res.data;
    } catch (error){
        console.log(error)
    }
}

export const signUp = async body => {

    try {
        const request =  await axios.post('http://localhost:8000/api/register', body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        return request.data;
    }catch (error){
        console.log(error)
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
        return res.data;
    } catch (error) {
        console.log(error);
    }

}