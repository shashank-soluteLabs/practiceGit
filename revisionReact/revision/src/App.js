import logo from './logo.svg';
import './App.css';
import { Clock } from './components/Clock';
import { Toggle } from './components/Toggle';
import { LoginControl } from './components/LoginControl';
import { Calculator } from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Clock/>
      <hr/>
      <Toggle/>
      <hr/>
      <LoginControl/>
      <hr/>
      <Calculator/>
    </div>
  );
}

export default App;
