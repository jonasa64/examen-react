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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <NavLink to="/" className="navbar-brand">FoodFace</NavLink>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {user ? <LoggedInLinks/> : <LoggedOutLinks/>}
                        <li className="nav-item" ><NavLink className="nav-link" activeClassName="link-active" to='/tips'>Tips</NavLink></li>
                    </ul>
                </div>
            </nav>
            <div>
            {message && <Flash/>}
                </div>
        </React.Fragment>
    )
}

const mapStatToProps = state => {
    return {
        user: state.auth.user,
        message: state.message.message,
    }
}

export default  connect(mapStatToProps)(NabBar);