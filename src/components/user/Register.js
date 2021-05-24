import {Component} from 'react';
import {connect} from "react-redux";
import {register} from '../store/actions/authActions';
import {Redirect} from 'react-router-dom';
import {setMessage} from '../store/actions/messageActions';

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
        if(this.validateRequiredFields()){
            if (this.validatePasswordConfirmation()){
                this.props.register(this.state);
            } else {
                this.props.setMessage('Password and confirmation password does not match', 'danger');
            }

        } else {
            this.props.setMessage('Pleas fill in all requried fileds', 'danger');
        }
    }

    validatePasswordConfirmation = () => {
        if(this.state.password === this.state.passwordConfirmation){
            return true;
        }
        return false;
    }

    validateRequiredFields = () => {
        if(this.state.name === '' || this.state.email === '' || this.state.password === '' || this.state.passwordConfirmation === '' ){
            return false;
        }
        return true;
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


const mapStatToProps = state => {
    console.log(state);
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register : (data) => dispatch(register(data)),
        setMessage: (message, type) => dispatch(setMessage(message, type))
    }
}


export default connect(mapStatToProps,mapDispatchToProps)(Register)