import React from 'react'
import {Link} from 'react-router-dom'

const home = () => {
    return (
<React.Fragment>
    <div className="card">
        <div className="card-body">
            <h1 className="card-title">Leftovers? find inspiration here!</h1>
            <h3 className="card-sub-title">Invite pepole and reduce food waste</h3>
            <Link className="btn btn-primary me-3" to="">Search Recipes</Link> <Link className="btn btn-primary me-3" to="/invtations">Dinner invites</Link>
        </div>
    </div>

    <div>

        <div className="card">
            <h1>Feaurtes</h1>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">Invite pelope to dinner</li>
                    <li className="list-group-item">Recipe inspiration</li>
                    <li className="list-group-item">Tips on how to reduce food waste</li>
                </ul>
            </div>
        </div>
    </div>
</React.Fragment>
    )
}

export default home