import {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter, Redirect} from 'react-router-dom'
import {invitations} from '../store/actions/inviteActions'
import 'bootstrap/dist/css/bootstrap.min.css';
class Invites extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.invitations();
    }



    render(){
        if(!this.props.user){
            return <Redirect to="/login"/>
        }

        return (
            <div className="container mt-5">
                <div className="row justify-content-evenly">

                        {this.props.invites && this.props.invites.map((invite) => {
                            return (
                                <div className="card mb-3" style={{width: "18rem"}}>
                                    <div className="card-body" key={invite.id}>
                                        {invite.image && <img className="card-img-top" src={invite.image} alt={invite.title}/>}
                                        <h5 className="card-title">{invite.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted"><strong>Location</strong> {invite.location}</h6>
                                        <Link className="btn btn-primary"  to={`/invite/${invite.id}`}>View</Link>
                                    </div>
                                </div>
                            )
                        })}

                </div>


            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        invites: state.invite.invitations.data,
        user: state.auth.user
    }
}

const mapDispathcToProps = dispatch => {
    return {
        invitations: () => dispatch(invitations()),
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(Invites);