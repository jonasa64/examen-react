import axios from 'axios';
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
           axios.post('http://localhost:8000/api/login', body, {
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
            }).then(res => dispatch({type:"LOGIN", payload: res.data})).catch(err => console.log(err))
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
            axios.post('http://localhost:8000/api/register', body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then(res => dispatch({type: "REGISTER", payload: res.data})).catch(err => console.log(err))
        }).catch(err => console.log(err))
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
            axios.post('http://localhost:8000/api/logout', JSON.stringify(''), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getState().auth.token}`
                },
            }).then(res => {
                console.log(res)
                dispatch({type: "LOGOUT"})
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }
}