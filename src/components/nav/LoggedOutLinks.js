import {NavLink} from 'react-router-dom'
import React from 'react'
const LoggedOutLinks = () => {
return (
    <React.Fragment>
    <li className="nav-item"><NavLink className="nav-link" to='/Register'>Register</NavLink></li>
    <li className="nav-item"><NavLink className="nav-link" to='/login'>Login</NavLink></li>
    </React.Fragment>
)
}

export default LoggedOutLinks;