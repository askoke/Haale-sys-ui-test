import "./summary.css";

function Summary(props) {
    return (
        <div className="Summary">
            <p className="Summary-text-title">Tulemus ~ </p>
            <div className="Summary-text">
                <p>poolt {props.votes.filter((item) => item === 'For').length} haalt</p>
                <p>vastu {props.votes.filter((item) => item === 'Against').length} haalt</p>
            </div>
        </div>
    );
}

export default Summary;