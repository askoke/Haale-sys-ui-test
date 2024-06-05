import "./voters.css";
import { data } from "../data/votes";

function Voters() {
    function submitHandler(e) {
        console.log(e.target)
    }
    
    return (
        <div className="Voters">
            <form onSubmit={(e) => {submitHandler(e)}}>
                {/* <ul>
                    {data.map(vote => (
                    <li key={vote.id}>
                        <label className="Voter-name">{vote.name + ' '}</label>
                        <select name="vote" className="Voter-vote">
                            <option value="Against">Vastu</option>
                            <option value="For">Poolt</option>
                        </select>
                    </li>
                    ))}
                </ul> */}
                <select name="vote" className="Voter-vote">
                    <option value="Against">Vastu</option>
                    <option value="For">Poolt</option>
                </select>
                <div className="Buttons">
                    <input className="Submit" type="submit" value="Submit"/>
                    <input className="Clear" type="reset" value="Clear"/>  
                </div>
            </form>
            <br /><br /><br />
            <hr />
            <br />
        </div>
    );
}

export default Voters;