import React from 'react'
import {Link} from 'react-router-dom'

const home = () => {
    return (
<React.Fragment>
    <div className="card spacing-top-hero">
        <div className="card-body">
            <h1 className="card-title mb-5">Leftovers? find inspiration here!</h1>
            <h4 className="card-sub-title">Invite pepole and reduce food waste</h4>
            <Link className="btn btn-primary me-3 mt-5" to="">Search Recipes</Link> <Link className="btn btn-primary me-3 mt-5" to="/invtations">Dinner invites</Link>
        </div>
    </div>

    <div>

        <div className="card spacing-top-feaurtes">
            <h1 className="text-center mt-5">Feaurtes</h1>
            <div className="card-body center mt-5">
                <div className="card feaurtes-content">
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item mb-3 list-item-color">Invite pelope to dinner</li>
                            <li className="list-group-item mb-3 list-item-color">Recipe inspiration</li>
                            <li className="list-group-item list-item-color">Tips on how to reduce food waste</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</React.Fragment>
    )
}

export default home