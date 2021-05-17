import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import {connect} from 'react-redux'
const NabBar  = ({user}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {user ? <LoggedInLinks/> : <LoggedOutLinks/>}
            </ul>
        </nav>
    )
}

const mapStatToProps = state => {
    console.log(state);
    return {
        user: state.auth.user
    }
}

export default  connect(mapStatToProps)(NabBar);