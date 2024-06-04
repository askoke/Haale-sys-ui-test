import votes from "../data/votes.json"
import "./summary.css";

function Summary() {
    return (
        <div className="Summary">
            <p className="Summary-text-title">Tulemus ~ </p>
            <div className="Summary-text">
                <p>poolt {votes.filter((item) => item.vote === 'For').length} haalt</p>
                <p>vastu {votes.filter((item) => item.vote === 'Against').length} haalt</p>
            </div>
        </div>
    );
}

export default Summary;