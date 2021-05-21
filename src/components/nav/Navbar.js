import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const NabBar  = ({user, error}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand">FoodFace</NavLink>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {user ? <LoggedInLinks/> : <LoggedOutLinks/>}
            </ul>
        </nav>
    )
}

const mapStatToProps = state => {
    console.log(state);
    return {
        user: state.auth.user,
        error: state.auth.error
    }
}

export default  connect(mapStatToProps)(NabBar);