import {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {invitation} from '../store/actions/inviteActions';
class Invite extends  Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.invitation(this.props.match.params.id)
        console.log(this.props.invite)
    }


    render(){
        return(
            (this.props.invite &&
            <div className="container d-flex justify-content-center mt-5">
                <div className="card"  style={{width: "28rem"}}>
                <div className="card-body">
                    {this.props.invite.data.image && <img className="card-img-top" src={this.props.invite.data.image} alt={this.props.invite.data.title}/>}
                    <h5 className="card-title">{this.props.invite.data.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.invite.data.location}</h6>
                    <p className="">{this.props.invite.data.description ? this.props.invite.data.description : 'No decription yet' }</p>
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item">Acppected invites {this.props.invite.data.invited_person.filter((person) => person.status == 'accepted').length}</li>
                        <li className="list-group-item">pending invites {this.props.invite.data.invited_person.filter((person) => person.status == 'pending').length}</li>
                        <li className="list-group-item">rejected invites {this.props.invite.data.invited_person.filter((person) => person.status == 'rejected').length}</li>
                    </ul>

                    {
                        this.props.user.id === this.props.invite.data.user_id ? <Link className="btn btn-primary me-3">edit</Link> : null
                    }

                    {
                        this.props.user.id === this.props.invite.data.user_id ? <Link className="btn btn-danger">Delete</Link> : null
                    }
                </div>
            </div>
            </div>)
        )
    }
}

const mapStatToProps = state => {
    return {
        invite: state.invite.invite,
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        invitation: (id) => dispatch(invitation(id))
    }
}


export default connect(mapStatToProps, mapDispatchToProps)(Invite);