import './App.css';
import Summary from './components/summary.jsx';
import Voters from './components/voters.jsx';

function App() {
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
