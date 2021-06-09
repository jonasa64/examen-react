import {Component} from 'react';
import {connect} from 'react-redux';
import {Link,  Redirect} from 'react-router-dom';
import {invitations} from '../store/actions/inviteActions';
import React from 'react'
import DisplayInvite from './DisplayInvite'
class Invites extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.invitations();
    }

invitedToStatus = status => {
        return this.props.invitedTo.filter((invite) => invite.status === status);
}

    render(){
        if(!this.props.user){
            return <Redirect to="/login"/>
        }

        return (
            <React.Fragment>
                <h3 className="text-center mb-5 mt-5">invitations created by you</h3>
                <div className="row justify-content-evenly">

                        {this.props.invites && this.props.invites.map((invite) => <DisplayInvite key={invite.id} invite={invite}/> )}


                </div>
                <h3 className="text-center mb-5 mt-5">Pending invitations</h3>
                <div className="row justify-content-evenly mt-3">
                {this.props.invitedTo && this.invitedToStatus('pending').map((invite) => <DisplayInvite key={invite.id} invite={invite}/>)}
                </div>
                <h3 className="text-center mb-5 mt-5">Accepted invitations</h3>
                <div className="row justify-content-evenly mt-3">
                    {this.props.invitedTo && this.invitedToStatus('accepted').map((invite) => <DisplayInvite key={invite.id} invite={invite}/>)}
                </div>
            </React.Fragment>


        )
    }
}
const mapStateToProps = state => {
    return {
        invites: state.invite.invitations,
        user: state.auth.user,
        invitedTo: state.invite.invitedTo
    }
}

const mapDispathcToProps = dispatch => {
    return {
        invitations: () => dispatch(invitations()),
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(Invites);