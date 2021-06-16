const Tip = ({tip}) => {
    return (
        <li className="list-group-item">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{tip.tip}</div>
                <p>{tip.info}</p>
            </div>

        </li>
    )
}

export default Tip;