import logo from './logo.svg';
import './App.css';
import { Clock } from './components/Clock';
import { Toggle } from './components/Toggle';
import { LoginControl } from './components/LoginControl';
import { Calculator } from './components/Calculator';
import { HuseRef } from './components/HuseRef';

function App() {
  return (
    <div className="App">
      {/* <Clock/>
      <hr/>
      <Toggle/>
      <hr/>
      <LoginControl/>
      <hr/>
      <Calculator/> */}
      <HuseRef/>
    </div>
  );
}

export default App;
