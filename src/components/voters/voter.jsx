import "./voter.css";
import { data } from "../../data/votes";

function Voter() {
    const ListItems = data.map(voter => 
        <li key={voter.id}>
            <p className="Voter-name">{voter.firstname + ' ' + voter.lastname + ' '}</p>
            <b className="Voter-vote">
                <form>
                    <select>
                        <option value="Against">Vastu</option>
                        <option value="For">Poolt</option>
                    </select>
                </form>
            </b>
        </li>
    ); 

    return (
        <ul>{ListItems}</ul>
    );
}

export default Voter;