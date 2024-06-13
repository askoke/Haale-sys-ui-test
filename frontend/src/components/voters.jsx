import axios from 'axios';
import "./voters.css";

function Voters(props) {
    const submitHandler = async (e) => {
        e.preventDefault()
        const values = e.target.vote;
        const allVotes = [];
        for(let i = 0; i < values.length; i++) {
            allVotes.push(values[i].value);
        }
        console.log(allVotes);
        props.setVotes(allVotes);
        function sendVotes() {
            try {
                axios.post('http://localhost:3005/votes', JSON.stringify(allVotes), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((res) => {
                    console.log(res); // Assuming the response contains the data you need
                })
            } catch (error) {
                console.error('Error sending votes:', error);
            }
        }
        return sendVotes();
    }

    return (
        <div className="Voters">
            <form onSubmit={submitHandler}>
                <ul>
                    {props.voters.map(voter => (
                        <li key={voter.User_id}>
                            <label className="Voter-name">{voter.Nimi}</label>
                            <select name="vote" className="Voter-vote">
                                <option value="Against">Vastu</option>
                                <option value="For">Poolt</option>
                            </select>
                        </li>
                    ))}
                </ul>
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