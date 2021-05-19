import React from 'react'
import {NavLink} from 'react-router-dom'
import {logout} from '../store/actions/authActions';
import {connect} from 'react-redux';
const LoggedInLinks = ({logout}) => {
    return (
        <React.Fragment>
            <li className="nav-item"><NavLink className="nav-link" to='/invtaions'>invtaions</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/NewInvtaion'>Create new invite</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/friendships'>Friends</NavLink></li>
            <li className="nav-item"><a  className="nav-link" onClick={logout}>Logout</a></li>
        </React.Fragment>
)
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }

}

export default connect(null, mapDispatchToProps)(LoggedInLinks);