import {Component} from 'react';
import {connect} from 'react-redux';
import {friendships, acceptFriendship, rejectFriendship} from "../store/actions/friendshipActions";
import {Redirect} from 'react-router-dom';

class Friends extends Component{
    constructor(props) {
        super(props);
        this.state = {friendships: []}
    }

    componentDidMount(){
        this.props.friendships()
        this.setState({friendships: this.props.friends.data })
    }

    friendshipStatus = (status) => {
        return this.state.friendships.filter((friend) => friend.status === status);
    }





    render(){
        if(!this.props.user){
            return <Redirect to="/login"/>
        }
        return (
            <div>
                <h3>Your friends</h3>
                {this.state.friendships && this.friendshipStatus('accepted').map((friend) => {
                    return (
                        <ul className="list-group">
                            <li className="list-group-item">{friend.sender.name} <button onClick={  this.props.rejectFriendship.bind(this, friend.sender.id)} className="btn btn-danger">Remove</button></li>
                        </ul>
                    )
                })}
                <h3>Friend Requests</h3>
                {this.state.friendships && this.friendshipStatus('pending').map((friend) => {
                    return (
                        <div key={friend.id}>
                           <ul className="list-group">
                               <li className="list-group-item">{friend.sender.name} <button onClick={this.props.acceptFriendship.bind(this, friend.sender.id)} className="btn btn-primary me-3">Accept</button><button onClick={ this.props.rejectFriendship.bind(this,friend.sender.id)} className="btn btn-danger">Reject</button></li>
                           </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friend.friendships,
        user: state.auth.user
    }

}

const mapDispatchToProps = dispatch => {
    return {
        friendships: () => dispatch(friendships()),
        acceptFriendship: (sender) => dispatch(acceptFriendship(sender)),
        rejectFriendship: (sender) => dispatch(rejectFriendship(sender))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);