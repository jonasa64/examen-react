import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React from 'react'
import Flash from '../flash/Flash'
const NabBar  = ({user, message}) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/" className="navbar-brand">FoodFace</NavLink>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {user ? <LoggedInLinks/> : <LoggedOutLinks/>}
                </ul>
            </nav>
            {message && <Flash/>}
        </React.Fragment>
    )
}

const mapStatToProps = state => {
    console.log(state);
    return {
        user: state.auth.user,
        message: state.message.message,
    }
}

export default  connect(mapStatToProps)(NabBar);