import './App.css';
import Voters from './components/voters/voters.jsx';
import Summary from './components/summary.jsx';

import { useEffect } from 'react';

function App() {
  useEffect(() => {}, [])
  return (
    <div className="App">
      <div className='App-container'>
        <header className="App-header">
          <Voters />
          <Summary />
        </header> 
      </div> 
    </div>
  );
}

export default App;
