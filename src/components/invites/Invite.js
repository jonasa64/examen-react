import {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {invitation, deleteInvite, invitePersons} from '../store/actions/inviteActions';
import {friendships} from "../store/actions/friendshipActions";
import {Redirect} from 'react-router-dom';
import InvitedUsers from './InvitedUser';
class Invite extends  Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }

    componentDidMount(){
        this.props.invitation(this.props.match.params.id)
        this.props.friendships()
    }

    onClickHandler = () => {
        this.props.deleteInvite(this.props.invite.id);
        this.props.history.goBack();
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.users);
        this.props.invitePersons(this.state.users, this.props.invite.id)

    }
    friendshipStatus = () => {
        return this.props.friends.filter((friend) => friend.status === "accepted");
    }

    onChangeValueHandler = (e) => {
        let user = Array.from(e.target.selectedOptions, option => option.value);
        this.setState({users: user});
    }

    isOwner = () => {
        return this.props.user.id === this.props.invite.user_id;
    }

    render(){
        if(!this.props.user){
            return <Redirect to="/login"/>
        }

        return(
            (this.props.invite &&
            <div className="d-flex justify-content-center mt-5">
                <div className="card"  style={{width: "28rem"}}>
                <div className="card-body">
                    {this.props.invite.image && <img className="card-img-top" src={this.props.invite.image} alt={this.props.invite.title}/>}
                    <h5 className="card-title">{this.props.invite.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.invite.location}</h6>
                    <p className="">{this.props.invite.description ? this.props.invite.description : 'No decription yet' }</p>

                    {this.props.invite.invited_persons && <InvitedUsers invited_person={this.props.invite.invited_persons}/>}



                    {
                        this.isOwner() ? (<div>
                                <Link  to={`/invite/${this.props.invite.id}/edit`} className="btn btn-primary me-3">edit</Link>
                                <button onClick={this.onClickHandler.bind(this)}  className="btn btn-danger">Delete</button>
                            <form className="mt-3" onSubmit={this.onSubmitHandler.bind(this)}>

                                <select className="form-select"  multiple={true} onChange={this.onChangeValueHandler.bind(this)} id="friend" >{this.props.friends && this.friendshipStatus().map((friend) => {
                                    return (
                                        <option value={friend.sender.id}>{friend.sender.name}</option>
                                    )
                                })}</select>
                                <button className="btn btn-primary mt-3" type="submit">Invit persons</button>
                            </form>
                            </div>


                        ): null
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
        user: state.auth.user,
        friends: state.friend.friendships
    }
}

const mapDispatchToProps = dispatch => {
    return {
        invitation: (id) => dispatch(invitation(id)),
        deleteInvite: (id) => dispatch(deleteInvite(id)),
        friendships: () => dispatch(friendships()),
        invitePersons: (users, id) => dispatch(invitePersons(users, id))
    }
}


export default connect(mapStatToProps, mapDispatchToProps)(Invite);