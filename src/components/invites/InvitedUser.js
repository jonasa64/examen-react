
const InvitedUser = ({invited_person}) => {
    const filterStatus = status => {
        return invited_person.filter((person) => person.status === status).length
    }

    return (
        <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">Acppected invites {filterStatus( 'accepted')}</li>
            <li className="list-group-item">pending invites {filterStatus('pending')}</li>
            <li className="list-group-item">rejected invites {filterStatus('rejected')}</li>
        </ul>
    )
}

export default InvitedUser;