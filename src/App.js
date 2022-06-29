import logo from './logo.svg';
import Todolist from './page';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <ul>

            <img src={logo} className="App-logo" alt="logo" />

          </ul>
          <ul>
            <div className='p-h'>
              <li><p>Welcom</p></li>
              <li><p>wle deux</p></li>
            </div>
          </ul>

        </ul>
      </header>
    <Todolist />
    </div>
  );
}



export default App;
