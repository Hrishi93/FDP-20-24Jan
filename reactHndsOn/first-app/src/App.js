import './App.css';
import DemoFC from './components/DemoFC';
import DemoCC from './components/DemoCC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome in FDP</h1>
        <Demo />
        <p>-------------------------</p>
        <DemoFC />
        <p>------------------------</p>
        <DemoCC />
      </header>
    </div>
  );
}


function Demo(){
  return (
    <div>
      <h2>Welcome in Demo Component</h2>
      <p>As a Functional Component</p>
    </div>
  )
}

export default App;
