
import './App.css';
//import DemoProps from './comps/DemoProps';
//import DemoPropsCC from './comps/DemoPropsCC';
import DemoStateCC from './comps/DemoStateCC';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h2>User Information</h2>
          <DemoStateCC />

        {/*<h1> Demo Props and State</h1>
        <p>Calling the Properties from Child</p>
        <table border="3px">
          <th>
            <td>Name</td>
            <td>Age</td>
            <td>City</td>
          </th>
          <tr>
            <td><DemoProps name="Ram Kumar"></DemoProps></td>
            <td><DemoProps age="28"></DemoProps></td>
            <td><DemoProps city="Pune"></DemoProps></td>
          </tr>
        </table>
        <p>----------------------------</p>
        <ol>
          <li><DemoPropsCC country="India"></DemoPropsCC></li>
          <li><DemoPropsCC country="Shri Lanka"></DemoPropsCC></li>
          <li><DemoPropsCC country="Bhutan"></DemoPropsCC></li>
        </ol> 

        */}
      </header>
    </div>
  );
}

export default App;
