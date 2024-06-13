import './App.css';
import Voters from './components/voters.jsx';
import Summary from './components/summary.jsx';

import { useState, useEffect } from 'react';

function App() {
  const [votes, setVotes] = useState([]);
  const [voters, setVoters] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3005/votes')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.votes[0]);
      setVoters(data.votes[0]);
    });
  }, [votes]);

  return (
    <div className="App">
      <div className='App-container'>
        <header className="App-header">
          <Voters 
            setVotes={setVotes}
            votes={votes}
            voters={voters}  
          />
          <Summary 
            votes={votes}
          />
        </header> 
      </div> 
    </div>
  );
}

export default App;
