import {NavLink} from 'react-router-dom'
import React from 'react'
const LoggedOutLinks = () => {
return (
    <React.Fragment>
    <li className="nav-item" ><NavLink className="nav-link" activeClassName="link-active" to='/Register'>Register</NavLink></li>
    <li className="nav-item" ><NavLink className="nav-link" activeClassName="link-active" to='/login'>Login</NavLink></li>
    </React.Fragment>
)
}

export default LoggedOutLinks;