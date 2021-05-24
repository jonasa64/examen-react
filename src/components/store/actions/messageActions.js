export const setMessage = (message, type) => {
    return (dispatch, getState) => {
        dispatch({type: 'SET_MESSAGE', payload: {message, type} });
    }
}

export const removeMessage = () => {
    return (dispatch, getState) => {
        dispatch({type: 'REMOVE_MESSAGE'});
    }
}