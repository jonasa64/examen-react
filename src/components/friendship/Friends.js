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
        this.setState({friendships: this.props.friends })
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
                <div className="card mt-5">
                    <div className="card-body">
                        <h3 className="text-center">Your friends</h3>
                        <div className="card">
                            <div className="card-body">
                                {this.state.friendships && this.friendshipStatus('accepted').map((friend) => {
                                    return (
                                        <ul className="list-group">
                                            <li className="list-group-item mb-3 list-item-color">{friend.sender.name} <button onClick={  this.props.rejectFriendship.bind(this, friend.sender.id)} className="btn btn-danger ms-3">Remove</button></li>
                                        </ul>
                                    )
                                })}
                            </div>

                        </div>
                    </div>

                </div>
                <div className="card mt-5">
                    <div className="card-body">
                        <h3 className="text-center">Friend Requests</h3>
                        <div className="card">
                            <div className="card-body">
                                {this.state.friendships && this.friendshipStatus('pending').map((friend) => {
                                    return (
                                        <div key={friend.id}>
                                            <ul className="list-group">
                                                <li className="list-group-item list-item-color">{friend.sender.name} <button onClick={this.props.acceptFriendship.bind(this, friend.sender.id)} className="btn btn-primary me-3 ms-3">Accept</button><button onClick={ this.props.rejectFriendship.bind(this,friend.sender.id)} className="btn btn-danger">Reject</button></li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
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