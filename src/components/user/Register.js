import {Component} from 'react';
import {connect} from "react-redux";
import {register} from '../store/actions/authActions';
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', password: '', passwordConfirmation: ''}
    }


    onChangeEmailHandler = e => {
        this.setState({email: e.target.value})
    }

    onChangePasswordHandler = e => {
        this.setState({password: e.target.value})
    }

    onChangePasswordConfirmationHandler = e => {
        this.setState({passwordConfirmation: e.target.value})
    }

    onChangeNameHandler = e => {
        this.setState({name: e.target.value})
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.props.register(this.state);
    }

    render() {
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <form onSubmit={this.onSubmitHandler.bind(this)}>
                        <div className="mb3">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input className='form-control' type="text" id="name" value={this.state.name}
                                   onChange={this.onChangeNameHandler.bind(this)}/>
                        </div>

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
                        <div className="mb3">
                            <label className="form-label" htmlFor="password_confirmation">Password confirmation</label>
                            <input className='form-control' type="password" id="password_confirmation" value={this.state.passwordConfirmation}
                                   onChange={this.onChangePasswordConfirmationHandler.bind(this)}/>
                        </div>
                        <button className="btn btn-primary mt-3" type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register : (data) => dispatch(register(data)),
    }
}


export default connect(null,mapDispatchToProps)(Register)