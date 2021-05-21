import DisplayInvite from './DisplayInvite'
import {updateInviteStatus} from '../store/actions/inviteActions'
import {connect} from 'react-redux';
import React from 'react'
const InvitedTo = ({invitedTo, updateInviteStatus}) => {

    return (
        <React.Fragment>
        {invitedTo.status === 'pending' ? (

            <React.Fragment><button onClick={() => updateInviteStatus('accepted', invitedTo.id) } className="btn btn-primary">Accept</button>
                    <button onClick={() => updateInviteStatus('rejected', invitedTo.id) } className="btn btn-danger">Reject</button> </React.Fragment>): <button onClick={() => updateInviteStatus('rejected', invitedTo.id) } className="btn btn-danger">Reject</button> }
            </React.Fragment>
                    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateInviteStatus: (invite, id) => dispatch(updateInviteStatus(invite,id))
    }
}


export default connect(null, mapDispatchToProps)(InvitedTo);