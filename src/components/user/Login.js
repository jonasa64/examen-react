import {Component} from 'react';
import {connect} from "react-redux";
import {login} from '../store/actions/authActions';
import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '',  fireRedirect : false}
    }


    onChangeEmailHandler = e => {
        this.setState({email: e.target.value})
    }

    onChangePasswordHandler = e => {
        this.setState({password: e.target.value})
    }

    onSubmitHandler =  async e => {
        e.preventDefault();
        this.props.login(this.state);

    }

    render() {
        if(this.props.user){
            return <Redirect to="/invtaions"/>
        }
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <form onSubmit={this.onSubmitHandler.bind(this)}>
                        <div className="mb3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className='form-control' type="email" id="email" value={this.state.email}
                                   onChange={this.onChangeEmailHandler.bind(this)}/>
                        </div>
                        <div className="mb3">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className='form-control' type="password" id="password" value={this.state.password}
                                   onChange={this.onChangePasswordHandler.bind(this)}/>
                        </div>
                        <button className="btn btn-primary mt-3" type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStatToProps = state => {
    console.log(state);
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login : (data) => dispatch(login(data)),
    }
}

export default (connect(mapStatToProps, mapDispatchToProps)(Login))