import {Link} from 'react-router-dom';
import InvitedTo from './InvitedTo';
const DisplayInvite = ({invite}) => {
    return (
        <div className="card mb-3" style={{width: "18rem"}}>
            <div className="card-body">
                {invite.image && <img className="card-img-top" src={invite.image} alt={invite.title}/>}
                <h5 className="card-title">{invite.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted"><strong>Location</strong> {invite.location}</h6>
                <Link className="btn btn-primary"  to={`/invite/${invite.id}`}>View</Link>
                {invite.status && <InvitedTo invitedTo={invite}/>}
            </div>
        </div>
    )
}

export default DisplayInvite;